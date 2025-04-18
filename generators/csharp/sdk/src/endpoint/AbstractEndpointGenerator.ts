import { assertNever } from "@fern-api/core-utils";
import { csharp } from "@fern-api/csharp-codegen";
import { ExampleGenerator } from "@fern-api/fern-csharp-model";

import { ExampleEndpointCall, ExampleRequestBody, HttpEndpoint, PathParameter, ServiceId } from "@fern-fern/ir-sdk/api";

import { SdkGeneratorContext } from "../SdkGeneratorContext";
import { WrappedRequestGenerator } from "../wrapped-request/WrappedRequestGenerator";
import { EndpointSignatureInfo } from "./EndpointSignatureInfo";
import { getEndpointRequest } from "./utils/getEndpointRequest";
import { getEndpointReturnType } from "./utils/getEndpointReturnType";

type PagingEndpoint = HttpEndpoint & { pagination: NonNullable<HttpEndpoint["pagination"]> };

export abstract class AbstractEndpointGenerator {
    private exampleGenerator: ExampleGenerator;
    protected readonly context: SdkGeneratorContext;

    public constructor({ context }: { context: SdkGeneratorContext }) {
        this.context = context;
        this.exampleGenerator = new ExampleGenerator(context);
    }

    public getEndpointSignatureInfo({
        serviceId,
        endpoint
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
    }): EndpointSignatureInfo {
        return this.hasPagination(endpoint)
            ? this.getPagerEndpointSignatureInfo({ serviceId, endpoint })
            : this.getUnpagedEndpointSignatureInfo({ serviceId, endpoint });
    }

    protected getUnpagedEndpointSignatureInfo({
        serviceId,
        endpoint
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
    }): EndpointSignatureInfo {
        return this.getEndpointSignatureInfoFor({
            serviceId,
            endpoint,
            endpointType: "unpaged"
        });
    }

    protected getPagerEndpointSignatureInfo({
        serviceId,
        endpoint
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
    }): EndpointSignatureInfo {
        return this.getEndpointSignatureInfoFor({
            serviceId,
            endpoint,
            endpointType: "paged"
        });
    }

    protected getEndpointSignatureInfoFor({
        serviceId,
        endpoint,
        endpointType
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
        endpointType: "unpaged" | "paged";
    }): EndpointSignatureInfo {
        const request = getEndpointRequest({ context: this.context, endpoint, serviceId });
        const requestParameter =
            request != null
                ? csharp.parameter({ type: request.getParameterType(), name: request.getParameterName() })
                : undefined;
        const { pathParameters, pathParameterReferences } = this.getAllPathParameters({
            endpoint,
            requestParameter
        });
        let returnType: csharp.Type | undefined;
        switch (endpointType) {
            case "unpaged":
                returnType = getEndpointReturnType({ context: this.context, endpoint });
                break;
            case "paged":
                returnType = this.getPagerReturnType(endpoint);
                break;
            default:
                assertNever(endpointType);
        }
        return {
            baseParameters: [...pathParameters, requestParameter].filter((p): p is csharp.Parameter => p != null),
            pathParameters,
            pathParameterReferences,
            request,
            requestParameter,
            returnType
        };
    }

    protected getPagerReturnType(endpoint: HttpEndpoint): csharp.Type {
        const itemType = this.getPaginationItemType(endpoint);
        if (endpoint.pagination?.type === "custom") {
            return csharp.Type.reference(
                this.context.getCustomPagerClassReference({
                    itemType
                })
            );
        }
        return csharp.Type.reference(
            this.context.getPagerClassReference({
                itemType
            })
        );
    }

    protected getPaginationItemType(endpoint: HttpEndpoint): csharp.Type {
        this.assertHasPagination(endpoint);
        const listItemType = this.context.csharpTypeMapper.convert({
            reference: (() => {
                switch (endpoint.pagination.type) {
                    case "offset":
                        return endpoint.pagination.results.property.valueType;
                    case "cursor":
                        return endpoint.pagination.results.property.valueType;
                    case "custom":
                        return endpoint.pagination.results.property.valueType;
                    default:
                        assertNever(endpoint.pagination);
                }
            })(),
            unboxOptionals: true
        });

        if (listItemType.internalType.type !== "list") {
            throw new Error(
                `Pagination result type for endpoint ${endpoint.name.originalName} must be a list, but is ${listItemType.internalType.type}.`
            );
        }
        return listItemType.internalType.value;
    }

    protected getAllPathParameters({
        endpoint,
        requestParameter
    }: {
        endpoint: HttpEndpoint;
        requestParameter: csharp.Parameter | undefined;
    }): Pick<EndpointSignatureInfo, "pathParameters" | "pathParameterReferences"> {
        const pathParameters: csharp.Parameter[] = [];
        const pathParameterReferences: Record<string, string> = {};
        const includePathParametersInEndpointSignature = this.includePathParametersInEndpointSignature({ endpoint });
        for (const pathParam of endpoint.allPathParameters) {
            const parameterName = this.getPathParameterName({
                pathParameter: pathParam,
                includePathParametersInEndpointSignature,
                requestParameter
            });
            if (includePathParametersInEndpointSignature) {
                pathParameters.push(
                    csharp.parameter({
                        docs: pathParam.docs,
                        name: parameterName,
                        type: this.context.csharpTypeMapper.convert({ reference: pathParam.valueType })
                    })
                );
            }
            pathParameterReferences[pathParam.name.originalName] = parameterName;
        }
        return {
            pathParameters,
            pathParameterReferences
        };
    }

    protected hasPagination(endpoint: HttpEndpoint): endpoint is PagingEndpoint {
        if (!this.context.config.generatePaginatedClients) {
            return false;
        }
        return endpoint.pagination !== undefined;
    }

    protected assertHasPagination(endpoint: HttpEndpoint): asserts endpoint is PagingEndpoint {
        if (this.hasPagination(endpoint)) {
            return;
        }
        throw new Error(`Endpoint ${endpoint.name.originalName} is not a paginated endpoint`);
    }

    protected generateEndpointSnippet({
        example,
        endpoint,
        clientVariableName,
        parseDatetimes,
        serviceId,
        additionalEndParameters
    }: {
        example: ExampleEndpointCall;
        endpoint: HttpEndpoint;
        clientVariableName: string;
        serviceId: ServiceId;
        parseDatetimes: boolean;
        additionalEndParameters?: csharp.CodeBlock[];
        getResult?: boolean;
    }): csharp.MethodInvocation | undefined {
        const service = this.context.ir.services[serviceId];
        if (service == null) {
            throw new Error(`Unexpected no service with id ${serviceId}`);
        }
        const serviceFilePath = service.name.fernFilepath;
        const requestBodyType = endpoint.requestBody?.type;
        // TODO: implement these
        if (requestBodyType === "fileUpload" || requestBodyType === "bytes") {
            return undefined;
        }
        const args = this.getNonEndpointArguments({ endpoint, example, parseDatetimes });
        const endpointRequestSnippet = this.getEndpointRequestSnippet(example, endpoint, serviceId, parseDatetimes);
        if (endpointRequestSnippet != null) {
            args.push(endpointRequestSnippet);
        }
        const on = csharp.codeblock((writer) => {
            writer.write(`${clientVariableName}`);
            for (const path of serviceFilePath.allParts) {
                writer.write(`.${path.pascalCase.safeName}`);
            }
        });
        for (const endParameter of additionalEndParameters ?? []) {
            args.push(endParameter);
        }
        getEndpointReturnType({ context: this.context, endpoint });
        return csharp.invokeMethod({
            method: this.context.getEndpointMethodName(endpoint),
            arguments_: args,
            on,
            async: true,
            configureAwait: true,
            generics: []
        });
    }

    protected getEndpointRequestSnippet(
        exampleEndpointCall: ExampleEndpointCall,
        endpoint: HttpEndpoint,
        serviceId: ServiceId,
        parseDatetimes: boolean
    ): csharp.CodeBlock | undefined {
        switch (endpoint.sdkRequest?.shape.type) {
            case "wrapper":
                return new WrappedRequestGenerator({
                    wrapper: endpoint.sdkRequest.shape,
                    context: this.context,
                    serviceId,
                    endpoint
                }).doGenerateSnippet({ example: exampleEndpointCall, parseDatetimes });
            case "justRequestBody": {
                if (exampleEndpointCall.request == null) {
                    throw new Error("Unexpected no example request for just request body");
                }
                return this.getJustRequestBodySnippet(exampleEndpointCall.request, parseDatetimes);
            }
        }
        return undefined;
    }

    protected wrapWithExceptionHandler({
        body,
        returnType
    }: {
        body: csharp.CodeBlock;
        returnType: csharp.Type | undefined;
    }): csharp.CodeBlock {
        if (!this.context.includeExceptionHandler()) {
            return body;
        }
        return csharp.codeblock((writer) => {
            if (this.context.includeExceptionHandler()) {
                if (returnType != null) {
                    writer.write("return ");
                }
                writer.writeLine("await _client.Options.ExceptionHandler.TryCatchAsync(async () => {");
                writer.indent();
            }
            body.write(writer);
            if (this.context.includeExceptionHandler()) {
                writer.dedent();
                writer.writeLine("}).ConfigureAwait(false);");
            }
        });
    }

    protected getNonEndpointArguments({
        endpoint,
        example,
        parseDatetimes
    }: {
        endpoint: HttpEndpoint;
        example: ExampleEndpointCall;
        parseDatetimes: boolean;
    }): csharp.CodeBlock[] {
        if (!this.includePathParametersInEndpointSignature({ endpoint })) {
            return [];
        }
        const pathParameters = [
            ...example.rootPathParameters,
            ...example.servicePathParameters,
            ...example.endpointPathParameters
        ];
        return pathParameters.map((pathParameter) =>
            this.exampleGenerator.getSnippetForTypeReference({
                exampleTypeReference: pathParameter.value,
                parseDatetimes
            })
        );
    }

    private getJustRequestBodySnippet(
        exampleRequestBody: ExampleRequestBody,
        parseDatetimes: boolean
    ): csharp.CodeBlock {
        if (exampleRequestBody.type === "inlinedRequestBody") {
            throw new Error("Unexpected inlinedRequestBody"); // should be a wrapped request and already handled
        }
        return this.exampleGenerator.getSnippetForTypeReference({
            exampleTypeReference: exampleRequestBody,
            parseDatetimes
        });
    }

    private includePathParametersInEndpointSignature({ endpoint }: { endpoint: HttpEndpoint }): boolean {
        if (endpoint.sdkRequest?.shape.type !== "wrapper") {
            return true;
        }
        return !this.context.includePathParametersInWrappedRequest({
            endpoint,
            wrapper: endpoint.sdkRequest.shape
        });
    }

    private getPathParameterName({
        pathParameter,
        includePathParametersInEndpointSignature,
        requestParameter
    }: {
        pathParameter: PathParameter;
        includePathParametersInEndpointSignature: boolean;
        requestParameter?: csharp.Parameter;
    }): string {
        if (!includePathParametersInEndpointSignature && requestParameter != null) {
            return `${requestParameter?.name}.${pathParameter.name.pascalCase.safeName}`;
        }
        return pathParameter.name.camelCase.safeName;
    }
}

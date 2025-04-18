/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { RequestOrResponseExampleGenerationSchema } from "./RequestOrResponseExampleGenerationSchema";

export const OpenApiExampleGenerationSchema: core.serialization.ObjectSchema<
    serializers.OpenApiExampleGenerationSchema.Raw,
    FernDefinition.OpenApiExampleGenerationSchema
> = core.serialization.object({
    request: RequestOrResponseExampleGenerationSchema.optional(),
    response: RequestOrResponseExampleGenerationSchema.optional(),
});

export declare namespace OpenApiExampleGenerationSchema {
    export interface Raw {
        request?: RequestOrResponseExampleGenerationSchema.Raw | null;
        response?: RequestOrResponseExampleGenerationSchema.Raw | null;
    }
}

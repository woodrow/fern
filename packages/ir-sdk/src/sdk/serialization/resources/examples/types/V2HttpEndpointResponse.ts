/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { V2HttpEndpointResponseBody } from "./V2HttpEndpointResponseBody";
import { WithDocs } from "../../commons/types/WithDocs";

export const V2HttpEndpointResponse: core.serialization.ObjectSchema<
    serializers.V2HttpEndpointResponse.Raw,
    FernIr.V2HttpEndpointResponse
> = core.serialization
    .objectWithoutOptionalProperties({
        statusCode: core.serialization.number().optional(),
        body: V2HttpEndpointResponseBody.optional(),
    })
    .extend(WithDocs);

export declare namespace V2HttpEndpointResponse {
    export interface Raw extends WithDocs.Raw {
        statusCode?: number | null;
        body?: V2HttpEndpointResponseBody.Raw | null;
    }
}

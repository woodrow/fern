/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const LongSchema: core.serialization.ObjectSchema<serializers.LongSchema.Raw, FernOpenapiIr.LongSchema> =
    core.serialization.objectWithoutOptionalProperties({
        default: core.serialization.number().optional(),
    });

export declare namespace LongSchema {
    export interface Raw {
        default?: number | null;
    }
}

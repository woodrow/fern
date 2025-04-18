/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const FileInfo: core.serialization.ObjectSchema<serializers.FileInfo.Raw, SeedTrace.FileInfo> =
    core.serialization.object({
        filename: core.serialization.string(),
        contents: core.serialization.string(),
    });

export declare namespace FileInfo {
    export interface Raw {
        filename: string;
        contents: string;
    }
}

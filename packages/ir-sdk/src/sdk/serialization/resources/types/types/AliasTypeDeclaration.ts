/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ResolvedTypeReference } from "./ResolvedTypeReference";

export const AliasTypeDeclaration: core.serialization.ObjectSchema<
    serializers.AliasTypeDeclaration.Raw,
    FernIr.AliasTypeDeclaration
> = core.serialization.objectWithoutOptionalProperties({
    aliasOf: core.serialization.lazy(() => serializers.TypeReference),
    resolvedType: ResolvedTypeReference,
});

export declare namespace AliasTypeDeclaration {
    export interface Raw {
        aliasOf: serializers.TypeReference.Raw;
        resolvedType: ResolvedTypeReference.Raw;
    }
}

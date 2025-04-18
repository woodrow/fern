/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernConjure from "../../../../api/index";
import * as core from "../../../../core";
import { ConjureAuthDefinition } from "./ConjureAuthDefinition";
import { ConjureArgument } from "./ConjureArgument";
import { ConjureTypeReference } from "../../types/types/ConjureTypeReference";
import { WithDocs } from "../../commons/types/WithDocs";

export const ConjureEndpointDefinition: core.serialization.ObjectSchema<
    serializers.ConjureEndpointDefinition.Raw,
    FernConjure.ConjureEndpointDefinition
> = core.serialization
    .objectWithoutOptionalProperties({
        http: core.serialization.string(),
        auth: ConjureAuthDefinition.optional(),
        args: core.serialization.record(core.serialization.string(), ConjureArgument).optional(),
        returns: ConjureTypeReference.optional(),
    })
    .extend(WithDocs);

export declare namespace ConjureEndpointDefinition {
    export interface Raw extends WithDocs.Raw {
        http: string;
        auth?: ConjureAuthDefinition.Raw | null;
        args?: Record<string, ConjureArgument.Raw> | null;
        returns?: ConjureTypeReference.Raw | null;
    }
}

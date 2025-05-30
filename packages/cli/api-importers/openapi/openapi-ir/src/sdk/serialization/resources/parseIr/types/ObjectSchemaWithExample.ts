/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { ReferencedSchema } from "../../finalIr/types/ReferencedSchema";
import { AllOfPropertyConflict } from "../../finalIr/types/AllOfPropertyConflict";
import { NamedFullExample } from "./NamedFullExample";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithSource } from "../../commons/types/WithSource";
import { WithTitle } from "../../commons/types/WithTitle";
import { WithInline } from "../../commons/types/WithInline";

export const ObjectSchemaWithExample: core.serialization.ObjectSchema<
    serializers.ObjectSchemaWithExample.Raw,
    FernOpenapiIr.ObjectSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        allOf: core.serialization.list(ReferencedSchema),
        properties: core.serialization.list(core.serialization.lazyObject(() => serializers.ObjectPropertyWithExample)),
        allOfPropertyConflicts: core.serialization.list(AllOfPropertyConflict),
        fullExamples: core.serialization.list(NamedFullExample).optional(),
        additionalProperties: core.serialization.boolean(),
    })
    .extend(WithDescription)
    .extend(WithName)
    .extend(WithSdkGroupName)
    .extend(WithAvailability)
    .extend(WithSource)
    .extend(WithTitle)
    .extend(WithInline);

export declare namespace ObjectSchemaWithExample {
    export interface Raw
        extends WithDescription.Raw,
            WithName.Raw,
            WithSdkGroupName.Raw,
            WithAvailability.Raw,
            WithSource.Raw,
            WithTitle.Raw,
            WithInline.Raw {
        allOf: ReferencedSchema.Raw[];
        properties: serializers.ObjectPropertyWithExample.Raw[];
        allOfPropertyConflicts: AllOfPropertyConflict.Raw[];
        fullExamples?: NamedFullExample.Raw[] | null;
        additionalProperties: boolean;
    }
}

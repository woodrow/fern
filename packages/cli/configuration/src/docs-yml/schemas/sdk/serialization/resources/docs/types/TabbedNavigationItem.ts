/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { TabId } from "./TabId";

export const TabbedNavigationItem: core.serialization.ObjectSchema<
    serializers.TabbedNavigationItem.Raw,
    FernDocsConfig.TabbedNavigationItem
> = core.serialization.object({
    tab: TabId,
    layout: core.serialization.list(core.serialization.lazy(() => serializers.NavigationItem)).optional(),
});

export declare namespace TabbedNavigationItem {
    export interface Raw {
        tab: TabId.Raw;
        layout?: serializers.NavigationItem.Raw[] | null;
    }
}

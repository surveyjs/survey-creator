export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../components/creator";
export * from "../components/button";

export * from "../components/tabs/designer";
export * from "../components/tabs/test";
export * from "../components/tabs/json-editor";
export * from "../components/tabs/embed";

export * from "../components/page";
export * from "../components/question";
export * from "../components/property-panel/property-panel";
export * from "../components/tabbed-menu/tabbed-menu";
export * from "../components/tabbed-menu/tabbed-menu-item";
export * from "../components/toolbox/toolbox";
export * from "../components/toolbox/toolbox-item";
export * from "../components/page-navigator/page-navigator";
export * from "../components/page-navigator/page-navigator-item";

export * from "../components/property-editors/text-editor/text-editor";
// export * from "../components/property-editors/dropdown-editor/dropdown-editor";
export * from "../components/property-editors/button-group/button-group";
export * from "../components/property-editors/button-group/button-group-item";

export * from "../components/survey-renderers/dropdown";

export * from "../creator";

import "../utils/design.scss";
import "../utils/layout.scss";

export * from "@survey/creator/tabs/embed";
export * from "@survey/creator/tabs/json-editor";

export * from "../property-grid";
export * from "../property-grid/matrices";
export * from "../property-grid/condition";
export * from "../property-grid/restfull";

export * from "../svgbundle";
export * from "../property-grid/values";

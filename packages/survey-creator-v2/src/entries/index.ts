export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../components/creator";
export * from "../components/button";
export * from "../components/svg-icon";

export * from "../components/tabs/designer";
export * from "../components/tabs/test";
export * from "../components/tabs/json-editor";
export * from "../components/tabs/embed";

export * from "../components/page";
export * from "../components/question";
export * from "../components/property-panel/property-panel";
export * from "../components/action-bar/action-bar";
export * from "../components/action-bar/action-bar-item";
export * from "../components/action-bar/action-bar-separator";
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
export * from "../components/list";

export * from "../creator";

import "../utils/design.scss";
import "../utils/layout.scss";

export * from "@survey/creator/tabs/embed";
export * from "@survey/creator/tabs/json-editor";
export * from "@survey/creator/tabs/test";

export * from "../propertyGrid/propertygrid";
export * from "../propertyGrid/propertygrid_matrices";

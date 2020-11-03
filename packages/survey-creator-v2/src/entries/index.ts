export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../components/creator";
export * from "../components/button";
export * from "../components/svg-icon";

export * from "../components/tabs/tab-designer";
export * from "../components/tabs/tab-test";
export * from "../components/tabs/tab-json-editor";

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

export * from "../components/property-editors/text-editor/text-editor";
export * from "../components/property-editors/dropdown-editor/dropdown-editor";
export * from "../components/property-editors/button-group/button-group";
export * from "../components/property-editors/button-group/button-group-item";

export * from "../creator";

import "../utils/design.scss";
import "../utils/layout.scss";

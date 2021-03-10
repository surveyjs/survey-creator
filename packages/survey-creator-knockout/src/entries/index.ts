export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../components/button";
export * from "../components/creator";
export * from "../components/tabs/designer";
export * from "../components/tabs/_dummy_embed";
export * from "../components/tabs/embed";
export * from "../components/tabs/embed-new";
export * from "../components/tabs/json-editor-ace";
export * from "../components/tabs/json-editor-textarea";
export * from "../components/page";
export * from "../components/page-navigator/page-navigator";
export * from "../components/page-navigator/page-navigator-item";
export * from "../components/property-editors/button-group/button-group";
export * from "../components/property-editors/button-group/button-group-item";
export * from "../components/property-panel/property-panel";
export * from "../components/question";
export * from "../components/results";
export * from "../components/simulator";
export * from "../components/survey-renderers/dropdown";
export * from "../components/tabs/test";
export * from "../components/tabbed-menu/tabbed-menu";
export * from "../components/tabbed-menu/tabbed-menu-item";
export * from "../components/toolbox/toolbox";
export * from "../components/toolbox/toolbox-item";
export * from "../utils/survey-widget";

export * from "../creator";

import "@survey/creator/survey-creator-core.css";

// export * from "@survey/creator/tabs/embed";

// export * from "@survey/creator/property-grid";
// export * from "@survey/creator/property-grid/condition";
// export * from "@survey/creator/property-grid/matrices";
// //export * from "../property-grid/modal-action";
// export * from "@survey/creator/property-grid/restfull";
// export * from "@survey/creator/property-grid/values";

export * from "../svgbundle";

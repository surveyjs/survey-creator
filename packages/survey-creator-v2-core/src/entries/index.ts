export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../tabs/embed";

export * from "../property-grid";
export * from "../property-grid/condition";
export * from "../property-grid/matrices";
//export * from "../property-grid/modal-action";
export * from "../property-grid/restfull";
export * from "../property-grid/values";
export * from "../toolbox";
export * from "../editorLocalization";
export * from "../utils/utils";
export * from "../questionconverter";
export * from "../tabs/embed";
export * from "../tabs/logic";
export * from "../tabs/test";
export * from "../tabs/translation";
export * from "../propertyEditors/propertyEditorFactory";
export * from "../objectProperty";
export * from "../textWorker";

import "../components/tabbed-menu/tabbed-menu.scss";
import "../components/tabbed-menu/tabbed-menu-item.scss";
import "../utils/design.scss";
import "../utils/layout.scss";

export * from "../svgbundle";
export * from "../creator-base";

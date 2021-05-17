import {
  Base,
  SurveyModel,
  property,
  propertyArray,
  IActionBarItem
} from "survey-core";
import { CreatorBase } from "./creator-base";

export class CreatorActionBarModel<T extends SurveyModel> extends Base {
  @propertyArray() toolbarItems: Array<IActionBarItem>;
  constructor(private creator: CreatorBase<T>) {
    super();
    this.createItems();
  }
  protected createItems() {
    const items: Array<IActionBarItem> = [
      {
        id: "icon-undo",
        iconName: "icon-undo",
        title: "Undo",
        showTitle: false,
        visible: () => this.creator.viewType === "designer",
        active: () => {
          return (
            this.creator.undoRedoManager &&
            this.creator.undoRedoManager.canUndo()
          );
        },
        action: () => this.creator.undo()
      },
      {
        id: "icon-redo",
        iconName: "icon-redo",
        title: "Redo",
        showTitle: false,
        visible: () => this.creator.viewType === "designer",
        active: () => {
          return (
            this.creator.undoRedoManager &&
            this.creator.undoRedoManager.canRedo()
          );
        },
        action: () => this.creator.redo()
      },
      {
        id: "icon-settings",
        iconName: "icon-settings",
        needSeparator: true,
        action: () => this.creator.selectElement(this.creator.survey),
        active: () => this.creator.isElementSelected(<any>this.creator.survey),
        visible: () => this.creator.viewType === "designer",
        title: "Settings",
        showTitle: false
      },
      /*
      {
        id: "icon-search",
        iconName: "icon-search",
        action: () => {
          this.showSearch = !this.showSearch;
        },
        visible: false,
        active: () => this.showSearch,
        title: "Search",
        showTitle: false
      },
      */
      {
        id: "icon-preview",
        iconName: "icon-preview",
        needSeparator: true,
        css: () =>
          this.creator.viewType === "test"
            ? "sv-action-bar-item--secondary"
            : "",
        action: () => {
          this.creator.makeNewViewActive("test");
        },
        active: false,
        title: "Preview"
      }
    ];
    this.toolbarItems = items;
  }
}

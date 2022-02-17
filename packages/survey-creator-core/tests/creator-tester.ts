import { SurveyModel, IAction, Base } from "survey-core";
import { CreatorBase, ICreatorOptions, isStringEditable } from "../src/creator-base";
import { settings as creatorSetting } from "../src/settings";

class DesignTimeSurveyModel extends SurveyModel {
  constructor(public creator: CreatorTester, jsonObj?: any) {
    super(jsonObj);
  }
  public getRendererForString(element: Base, name: string): string {
    if (!this.creator.readOnly && isStringEditable(element, name)) {
      return "editableStringRendererName";
    }
    return undefined;
  }
}

export class CreatorTester extends CreatorBase {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions, setOldDefaultNewSurveyJSON = true) {
    if (setOldDefaultNewSurveyJSON) {
      creatorSetting.defaultNewSurveyJSON = { pages: [{ name: "page1" }] };
    }
    super(options, options2);
  }
  protected createSurveyCore(json: any = {}, reason: string): SurveyModel {
    if (reason === "designer" || reason === "modal-question-editor")
      return new DesignTimeSurveyModel(this, json);
    return new SurveyModel(json);
  }
  public get selectedElementName(): string {
    if (!this.selectedElement) return "";
    const name = this.selectedElement["name"];
    if (!!name) return name;
    return this.selectedElement.getType();
  }
  public getActionBarItem(id: string): IAction {
    return this.getActionBarItemByActions(this.toolbarItems, id);
  }
  public getActionBarItemByActions(
    actions: Array<IAction>,
    id: string
  ): IAction {
    for (var i = 0; i < actions.length; i++) {
      if (actions[i].id == id) return actions[i];
    }
    return null;
  }
  public doSaveFunc() {
    this.doSave();
  }
}

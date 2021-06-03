import { SurveyModel, IActionBarItem } from "survey-core";
import { CreatorBase, ICreatorOptions } from "../src/creator-base";

export class CreatorTester extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
  }
  protected createSurveyCore(json: any = {}): SurveyModel {
    return new SurveyModel(json);
  }
  public get selectedElementName(): string {
    if (!this.selectedElement) return "";
    var name = this.selectedElement["name"];
    if (!!name) return name;
    return this.selectedElement.getType();
  }
  public getActionBarItem(id: string): IActionBarItem {
    return this.getActionBarItemByActions(this.toolbarItems, id);
  }
  public getActionBarItemByActions(
    actions: Array<IActionBarItem>,
    id: string
  ): IActionBarItem {
    for (var i = 0; i < actions.length; i++) {
      if (actions[i].id == id) return actions[i];
    }
    return null;
  }
  public doSaveFunc() {
    this.doSave();
  }
}
test("dummy test", () => {
  expect(true).toEqual(true);
});

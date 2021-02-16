import { IJsonEditorModel, SurveyTextWorker } from "@survey/creator";
import { ICreatorPlugin, SurveyCreator } from "../../creator";

export abstract class TabJsonEditorBasePlugin<TModel extends IJsonEditorModel>
  implements ICreatorPlugin {
  public model: TModel;
  constructor(private creator: SurveyCreator) {}
  public activate(): void {
    this.model.text = this.creator.text;
    this.model.onEditorActivated();
    this.model.isJSONChanged = false;
  }
  public deactivate(): boolean {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
    if (!textWorker.isJsonCorrect) {
      return false;
    }
    if (!this.model.readOnly && this.model.isJSONChanged) {
      this.creator._dummySetText(this.model.text);
    }
    return true;
  }
}

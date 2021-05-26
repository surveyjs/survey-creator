import {
  Base,
  SurveyModel,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import "./row.scss";

export class RowViewModel extends Base {
  constructor(
    public creator: CreatorBase<SurveyModel>,
    public row: QuestionRowModel,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super();
  }

  public get cssClasses() {
    let result = "svc-row";
    let ghostClass = " svc-row--ghost";

    if (
      this.row.elements.length === 1 &&
      this.row.elements[0].name === "svc-drag-drop-ghost-survey-element-name"
    ) {
      result += ghostClass;
    } else {
      result = result.replace(ghostClass, "");
    }

    return result;
  }
}

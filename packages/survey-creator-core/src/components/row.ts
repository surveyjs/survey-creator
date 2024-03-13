import {
  Base,
  SurveyModel,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel,
  DragTypeOverMeEnum
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
require("./row.scss");

export class RowViewModel extends Base {
  constructor(
    public creator: SurveyCreatorModel,
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
      this.row.elements[0].name === "sv-drag-drop-ghost-survey-element-name"
    ) {
      result += ghostClass;
    }

    if(this.row.dragTypeOverMe === DragTypeOverMeEnum.Top) {
      result += " svc-row--drag-over-top";
    }
    if(this.row.dragTypeOverMe === DragTypeOverMeEnum.Bottom) {
      result += " svc-row--drag-over-bottom";
    }

    return result;
  }
}

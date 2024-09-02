import {
  Base,
  SurveyModel,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel,
  DragTypeOverMeEnum,
  property
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
    this.dragTypeOverMe = this.row.dragTypeOverMe;
    this.row.onPropertyChanged.add((s, o) => {
      if (o.name == "dragTypeOverMe") this.dragTypeOverMe = o.newValue;
    });
  }
  @property() dragTypeOverMe: DragTypeOverMeEnum;
  public get cssClasses() {
    let result = "svc-row";
    let ghostClass = " svc-row--ghost";

    if (
      this.row.elements.length === 1 &&
      this.row.elements[0].name === "sv-drag-drop-ghost-survey-element-name"
    ) {
      result += ghostClass;
    }

    if (this.dragTypeOverMe === DragTypeOverMeEnum.Top) {
      result += " svc-row--drag-over-top";
    }
    if (this.dragTypeOverMe === DragTypeOverMeEnum.Bottom) {
      result += " svc-row--drag-over-bottom";
    }

    return result;
  }
}

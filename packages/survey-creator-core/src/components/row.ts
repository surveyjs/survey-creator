import {
  Base,
  SurveyModel,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel,
  DragTypeOverMeEnum,
  property,
  CssClassBuilder
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
    return new CssClassBuilder()
      .append("svc-row")
      .append("svc-row--ghost", this.row.elements.length === 1 && this.row.elements[0].name === "sv-drag-drop-ghost-survey-element-name")
      .append("svc-row--drag-over-top", this.dragTypeOverMe === DragTypeOverMeEnum.Top)
      .append("svc-row--drag-over-bottom", this.dragTypeOverMe === DragTypeOverMeEnum.Bottom)
      .toString();
  }
}

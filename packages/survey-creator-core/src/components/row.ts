import {
  Base,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel,
  property,
  CssClassBuilder
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import "./row.scss";
import { DropTo } from "../dragdrop-survey-elements";
import { SurveyElementAdornerBase } from "./action-container-view-model";

export class RowViewModel extends Base {
  @property({ defaultValue: null }) dragTypeOverMe: DropTo;

  constructor(
    public creator: SurveyCreatorModel,
    public row: QuestionRowModel,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super();
    if (this.row) {
      this.row.setPropertyValue(SurveyElementAdornerBase.AdornerValueName, this);
    }
  }
  public subscribeElementChanges() {
    this.row.setPropertyValue(SurveyElementAdornerBase.AdornerValueName, this);
  }
  public unsubscribeElementChanges() {
    this.row.setPropertyValue(SurveyElementAdornerBase.AdornerValueName, null);
  }
  public get cssClasses() {
    return new CssClassBuilder()
      .append("svc-row")
      .append("svc-row--ghost", this.row.elements.length === 1 && this.row.elements[0].name === "sv-drag-drop-ghost-survey-element-name")
      .append("svc-row--drag-over-top", this.dragTypeOverMe === DropTo.Top)
      .append("svc-row--drag-over-bottom", this.dragTypeOverMe === DropTo.Bottom)
      .toString();
  }
  public dispose() {
    super.dispose();
    this.unsubscribeElementChanges();
  }
}

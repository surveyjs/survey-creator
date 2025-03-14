import {
  Base,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel,
  property,
  CssClassBuilder
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import "./row.scss";
import { DropIndicatorPosition } from "../drag-drop-enums";
import { SurveyElementAdornerBase } from "./survey-element-adorner-base";

export class RowViewModel extends Base {
  @property({ defaultValue: null }) dropIndicatorPosition: DropIndicatorPosition;

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
      .append("svc-row--drag-over-top", this.dropIndicatorPosition === DropIndicatorPosition.Top)
      .append("svc-row--drag-over-bottom", this.dropIndicatorPosition === DropIndicatorPosition.Bottom)
      .toString();
  }
  public dispose() {
    super.dispose();
    this.unsubscribeElementChanges();
  }
}

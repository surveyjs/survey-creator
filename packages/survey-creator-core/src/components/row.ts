import {
  Base,
  SurveyTemplateRendererTemplateData,
  QuestionRowModel,
  property,
  toCssClasses
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
    return toCssClasses(
      "svc-row",
      this.row.elements.length === 1 && this.row.elements[0].name === "sv-drag-drop-ghost-survey-element-name" && "svc-row--ghost",
      this.dropIndicatorPosition === DropIndicatorPosition.Top && "svc-row--drag-over-top",
      this.dropIndicatorPosition === DropIndicatorPosition.Bottom && "svc-row--drag-over-bottom"
    );
  }
  public dispose() {
    super.dispose();
    this.unsubscribeElementChanges();
  }
}

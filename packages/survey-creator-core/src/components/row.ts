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
  }
  public subscribeElementChanges() {
    this.row.onPropertyChanged.add(this.rowDragTypeOverMeChanged);
  }
  public unsubscribeElementChanges() {
    this.row.onPropertyChanged.remove(this.rowDragTypeOverMeChanged);
  }
  @property() dragTypeOverMe: DragTypeOverMeEnum;
  private rowDragTypeOverMeChanged: (sender: Base, options: any) => any = (s, o) => {
    if (o.name == "dragTypeOverMe") this.dragTypeOverMe = o.newValue;
  };
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
  public dispose() {
    super.dispose();
    this.unsubscribeElementChanges();
    this.rowDragTypeOverMeChanged = undefined;
  }
}

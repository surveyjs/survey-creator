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
}

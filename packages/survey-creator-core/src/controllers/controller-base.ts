import { Base, SurveyModel } from "survey-core";

export interface ICreatorSelectionOwner {
  survey: SurveyModel;
  selectElement(el: Base);
  selectedElement: Base;
  getObjectDisplayName(el: Base): string;
}

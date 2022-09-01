import { Base, SurveyModel } from "survey-core";

export interface ICreatorSelectionOwner {
  survey: SurveyModel;
  selectElement(el: Base, propertyName?: string);
  selectedElement: Base;
  getObjectDisplayName(el: Base, area: string): string;
}

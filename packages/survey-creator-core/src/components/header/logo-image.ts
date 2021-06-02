import { Base, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import "./logo-image.scss";

export class LogoImageViewModel extends Base {
  @property() isLogoImageChoosen: boolean;
  constructor(private creator: CreatorBase<SurveyModel>, public root: HTMLDivElement) {
    super();
    this.creator.survey.logoPosition = "right";
    this.updateIsLogoImageChoosen();
  }
  private updateIsLogoImageChoosen(): void {
    this.isLogoImageChoosen = !!this.creator.survey.logo;
  }
  public chooseFile(model: LogoImageViewModel) {
    const fileInput: HTMLInputElement =
      <HTMLInputElement>model.root.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.creator.uploadFiles(files, (_, link) => {
        model.creator.survey.logo = link;
        model.updateIsLogoImageChoosen();
      });
    });
  }
  public remove(model: LogoImageViewModel) {
    model.creator.survey.logo = "";
    model.updateIsLogoImageChoosen();
  }
}
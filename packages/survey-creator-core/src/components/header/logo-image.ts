import { Base, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import "./logo-image.scss";

export class LogoImageViewModel extends Base {
  @property() isLogoImageChoosen: boolean;
  constructor(private creator: CreatorBase<SurveyModel>, private root: HTMLDivElement) {
    super();
    this.updateIsLogoImageChoosen();
  }
  private updateIsLogoImageChoosen(): void {
    this.isLogoImageChoosen = !!this.creator.survey.logo;
  }
  public chooseFile() {
    const fileInput: HTMLInputElement =
      <HTMLInputElement>this.root.getElementsByClassName("svc-choose-file-input")[0];
    this.creator.chooseFiles(fileInput, (files: File[]) => {
      this.creator.uploadFiles(files, (_, link) => {
        this.creator.survey.logo = link;
        this.updateIsLogoImageChoosen();
      });
    });
  }
  public remove() {
    this.creator.survey.logo = "";
    this.updateIsLogoImageChoosen();
  }
}
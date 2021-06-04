import { Base, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import "./logo-image.scss";

export class LogoImageViewModel extends Base {
  @property() isLogoImageChoosen: boolean;
  constructor(private creator: CreatorBase<SurveyModel>, public root: HTMLDivElement) {
    super();
    creator.onPropertyValueChanging.add((_, options) => {
      if (options.propertyName === "logo") {
        this.updateIsLogoImageChoosen(options.newValue);
      }
    });
    this.updateIsLogoImageChoosen();
  }
  private updateIsLogoImageChoosen(value?: string): void {
    if (typeof value === "undefined") {
      value = this.creator.survey.logo;
    }
    this.isLogoImageChoosen = !!value;
  }
  private uploadFile(model: LogoImageViewModel, fileInput: HTMLInputElement, files: File[]) {
    model.creator.uploadFiles(files, (_, link) => {
      model.creator.survey.logo = link;
      model.updateIsLogoImageChoosen();
      fileInput.value = "";
    });
  }
  public chooseFile(model: LogoImageViewModel) {
    const fileInput: HTMLInputElement =
      <HTMLInputElement>model.root.getElementsByClassName("svc-choose-file-input")[0];
    if (fileInput.files.length === 0) {
      model.creator.chooseFiles(fileInput, (files: File[]) => {
        model.uploadFile(model, fileInput, files);
      });
    }
    else model.uploadFile(model, fileInput, [fileInput.files[0]]);
  }
  public remove(model: LogoImageViewModel) {
    model.creator.survey.logo = "";
    model.updateIsLogoImageChoosen();
  }
}
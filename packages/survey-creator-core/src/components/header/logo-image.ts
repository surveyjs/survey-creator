import { Base, CssClassBuilder, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import "./logo-image.scss";

export class LogoImageViewModel extends Base {
  constructor(private creator: CreatorBase, public root: HTMLDivElement) {
    super();
  }
  public get allowEdit() {
    return !this.creator.readOnly;
  }
  public get containerCss() {
    return new CssClassBuilder()
      .append("svc-logo-image-container")
      .append("svc-logo-image-container--editable", this.allowEdit).toString();
  }
  public get survey(): SurveyModel {
    return this.creator.survey;
  }
  private uploadFile(model: LogoImageViewModel, fileInput: HTMLInputElement, files: File[]) {
    model.creator.uploadFiles(files, (_, link) => {
      model.creator.survey.logo = link;
      fileInput.value = "";
    });
  }
  public chooseFile(model: LogoImageViewModel) {
    if(this.allowEdit) {
      const fileInput: HTMLInputElement =
      <HTMLInputElement>model.root.getElementsByClassName("svc-choose-file-input")[0];
      if (fileInput.files.length === 0) {
        model.creator.chooseFiles(fileInput, (files: File[]) => {
          model.uploadFile(model, fileInput, files);
        });
      }
      else model.uploadFile(model, fileInput, [fileInput.files[0]]);
    }
  }
  public remove(model: LogoImageViewModel) {
    model.creator.survey.logo = "";
  }
  get chooseLogoPlaceholder() {
    return this.creator.getLocString("ed.chooseLogoPlaceholder");
  }
}
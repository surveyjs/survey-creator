import { Base, CssClassBuilder, property, Serializer, SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { getAcceptedTypesByContentMode } from "../../utils/utils";
import "./logo-image.scss";

export class LogoImageViewModel extends Base {
  constructor(private creator: SurveyCreatorModel, public root: HTMLDivElement) {
    super();
  }
  public get allowEdit() {
    const survey = this.creator.survey;
    const property = Serializer.findProperty(survey.getType(), "logo");
    return !this.creator.readOnly && (!property.overridingProperty || !survey[property.overridingProperty]);
  }
  public get containerCss() {
    return new CssClassBuilder()
      .append("svc-logo-image-container")
      .append("svc-logo-image-container--editable", this.allowEdit).toString();
  }
  @property({ defaultValue: false }) isUploading;
  public get survey(): SurveyModel {
    return this.creator.survey;
  }
  private uploadFile(model: LogoImageViewModel, fileInput: HTMLInputElement, files: File[]) {
    model.isUploading = true;
    model.creator.uploadFiles(files, undefined, (_, link) => {
      model.creator.survey.logo = link;
      fileInput.value = "";
      model.isUploading = false;
    }, { element: model.creator.survey, elementType: "survey", propertyName: "logo" });
  }
  public chooseFile(model: LogoImageViewModel) {
    if (this.allowEdit) {
      const fileInput: HTMLInputElement =
        <HTMLInputElement>model.root.getElementsByClassName("svc-choose-file-input")[0];
      if (fileInput.files.length === 0) {
        model.creator.chooseFiles(fileInput, (files: File[]) => {
          model.uploadFile(model, fileInput, files);
        }, { element: this.survey, elementType: this.survey.getType(), propertyName: "logo" });
      } else model.uploadFile(model, fileInput, [fileInput.files[0]]);
    }
  }
  public remove(model: LogoImageViewModel) {
    model.creator.survey.logo = "";
  }
  get chooseLogoPlaceholder() {
    return this.creator.getLocString("ed.chooseLogoPlaceholder");
  }
  public get acceptedTypes(): string {
    return getAcceptedTypesByContentMode("image");
  }
}
import { Action, ActionContainer, Base, CssClassBuilder, property, Serializer, SurveyModel } from "survey-core";
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
  protected createActionsContainer(): ActionContainer {
    const container = new ActionContainer();
    container.containerCss = "svc-logo-image-controls";
    container.setActionsAppearance({ style: "neutral", mode: "quaternary-surface", size: "medium" });
    container.setItems(this.createActions());
    return container;
  }
  protected createActions(): Array<Action> {
    return [
      new Action({
        id: "add",
        iconName: "icon-choosefile",
        showTitle: false,
        appearance: { style: "brand" },
        action: () => {
          this.chooseFile(this);
        }
      }),
      new Action({
        id: "remove",
        iconName: "icon-clear",
        showTitle: false,
        appearance: { style: "alert" },
        action: () => {
          this.remove(this);
        }
      }),
    ];
  }
  private actionsContainerValue?: ActionContainer;
  public get actionsContainer() {
    if (!this.actionsContainerValue) {
      this.actionsContainerValue = this.createActionsContainer();
    }
    return this.actionsContainerValue;
  }
}

import { QuestionImageModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel, property, QuestionFileModel, Base, Serializer, CssClassBuilder } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
import { getAcceptedTypesByContentMode } from "../utils/utils";
import { getLocString } from "../editorLocalization";

require("./question-image.scss");

export class QuestionImageAdornerViewModel extends QuestionAdornerViewModel {
  public filePresentationModel: QuestionFileModel;

  private initFilePresentationModel(): void {
    this.filePresentationModel = Serializer.createClass("file", { name: this.question.name });
    const surveyModel = new SurveyModel();
    this.filePresentationModel.setSurveyImpl(surveyModel);
    this.filePresentationModel.forceIsInputReadOnly = !this.creator.isCanModifyProperty(this.question, "imageLink");
    this.filePresentationModel.filePlaceholder = this.placeholderText;
    this.filePresentationModel.chooseButtonCaption = this.chooseImageText;
    this.filePresentationModel.acceptedTypes = "image/*";
    this.filePresentationModel.storeDataAsText = false;
    this.filePresentationModel.cssClasses.chooseFileIconId = "icon-choosefile";
    surveyModel.onOpenFileChooser.add((s, o: any) => {
      this.creator.chooseFiles(o.input, o.callback, o.context);
    });
    surveyModel.onUploadFiles.add((s, o) => {
      const fileToUpload = o.files[0];
      if (!!fileToUpload) {
        this.creator.uploadFiles(o.files, this.question, (status, link) => {
          this.question.imageLink = link;
          o.callback(status, [{ content: link, file: o.files[0] }]);
        }, { element: this.question, elementType: this.question.getType(), propertyName: "imageLink" });
      }
    });
  }

  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
    public questionRoot: HTMLElement
  ) {
    super(creator, surveyElement, templateData);
    this.isEmptyImageLink = !this.question.imageLink;
    this.surveyElement.registerFunctionOnPropertyValueChanged("imageLink", () => { this.imageLinkValueChangedHandler(); }, "imageLinkValueChanged");
    this.initFilePresentationModel();
  }

  @property({ defaultValue: false }) isUploading;
  @property({ defaultValue: false }) isEmptyImageLink;

  chooseFile(model: QuestionImageAdornerViewModel) {
    const fileInput = <HTMLInputElement>model.questionRoot.getElementsByClassName("svc-choose-file-input")[0];
    const context = { element: model.question, elementType: model.question.getType(), propertyName: "imageLink" };
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.isUploading = true;
      model.creator.uploadFiles(files, model.surveyElement as QuestionImageModel, (_, link) => {
        (<QuestionImageModel>model.surveyElement).imageLink = link;
        model.isUploading = false;
      }, context);
    }, context);
  }
  public get acceptedTypes(): string {
    return getAcceptedTypesByContentMode((this.surveyElement as QuestionImageModel).contentMode);
  }
  imageLinkValueChangedHandler() {
    this.isEmptyImageLink = !this.question.imageLink;
    this.filePresentationModel.value = null;
    this.filePresentationModel.visible = !this.question.imageLink;
  }

  public get isEmptyElement(): boolean {
    return this.isEmptyImageLink;
  }

  public get question(): QuestionImageModel {
    return this.surveyElement as QuestionImageModel;
  }

  public get placeholderText(): string {
    if (this.creator.isMobileView)
      return getLocString("ed.imagePlaceHolderMobile");
    return getLocString("ed.imagePlaceHolder");
  }

  public get chooseImageText(): string {
    return getLocString("ed.imageChooseImage");
  }
  public css() {
    return new CssClassBuilder()
      .append(super.css())
      .append("svc-question__content--loading", this.isUploading).toString();
  }
  public dispose(): void {
    super.dispose();
    this.questionRoot = undefined;
  }
}
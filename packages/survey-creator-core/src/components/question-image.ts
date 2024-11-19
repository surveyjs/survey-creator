
import { QuestionImageModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel, property, QuestionFileModel, Base, Serializer, CssClassBuilder, classesToSelector } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
import { getAcceptedTypesByContentMode } from "../utils/utils";
import { getLocString } from "../editorLocalization";

require("./question-image.scss");

export class QuestionImageAdornerViewModel extends QuestionAdornerViewModel {
  private editorSurveyModel: SurveyModel;
  public filePresentationModel: QuestionFileModel;

  private initFilePresentationModel(): void {
    this.filePresentationModel = Serializer.createClass("file", { name: this.question.name });
    this.editorSurveyModel = new SurveyModel();
    this.filePresentationModel.setSurveyImpl(this.editorSurveyModel);
    this.filePresentationModel.forceIsInputReadOnly = !this.creator.isCanModifyProperty(this.question, "imageLink");
    this.filePresentationModel.filePlaceholder = this.placeholderText;
    this.filePresentationModel.chooseButtonCaption = this.chooseImageText;
    this.filePresentationModel.acceptedTypes = "image/*";
    this.filePresentationModel.storeDataAsText = false;
    this.filePresentationModel.cssClasses.chooseFileIconId = "icon-choosefile";
    this.editorSurveyModel.onOpenFileChooser.add((s, o: any) => {
      this.creator.chooseFiles(o.input, o.callback, o.context);
    });
    this.editorSurveyModel.onUploadFiles.add((s, o) => {
      const fileToUpload = o.files[0];
      if (!!fileToUpload) {
        this.isUploading = true;
        this.creator.uploadFiles(o.files, this.question, (status, link) => {
          this.question.imageLink = link;
          o.callback(status, [{ content: link, file: o.files[0] }]);
          this.isUploading = false;
        }, { element: this.question, elementType: this.question.getType(), propertyName: "imageLink" });
      }
    });
  }

  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
  ) {
    super(creator, surveyElement, templateData);
    this.isEmptyImageLink = !this.question.imageLink;
    this.surveyElement.registerFunctionOnPropertyValueChanged("imageLink", this.imageLinkValueChangedHandler, "imageLinkValueChanged");
    (this.surveyElement as QuestionImageModel).locImageLink.onStringChanged.add(this.imageLinkValueChangedHandler);
    this.initFilePresentationModel();
  }

  @property({ defaultValue: false }) isUploading;
  @property({ defaultValue: false }) isEmptyImageLink;

  chooseFile(model: QuestionImageAdornerViewModel) {
    const fileInput = <HTMLInputElement>model.rootElement.getElementsByClassName("svc-choose-file-input")[0];
    this.editorSurveyModel.chooseFiles(fileInput, (files: File[]) => {
      model.filePresentationModel.loadFiles(files);
    });
  }
  public get acceptedTypes(): string {
    return getAcceptedTypesByContentMode((this.surveyElement as QuestionImageModel).contentMode);
  }
  imageLinkValueChangedHandler = () => {
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

  protected getAnimatedElement() {
    if (this.isEmptyImageLink) {
      const cssClasses = this.filePresentationModel.cssClasses;
      if (cssClasses.root) {
        return this.surveyElement.getWrapperElement().querySelector(`:scope ${classesToSelector(cssClasses.root)}`) as HTMLElement;
      }
    }
    return super.getAnimatedElement();

  }
  public css() {
    return new CssClassBuilder()
      .append(super.css())
      .append("svc-question__content--loading", this.isUploading).toString();
  }
  public dispose(): void {
    if (this.surveyElement) {
      this.surveyElement.unRegisterFunctionOnPropertyValueChanged("imageLink", "imageLinkValueChanged");
      (this.surveyElement as QuestionImageModel).locImageLink.onStringChanged.remove(this.imageLinkValueChangedHandler);
    }
    super.dispose();
  }
}

import { settings as libSettings, LocalizableString } from "survey-core";
import { ComponentContainerModel, SurveyCreatorModel } from "survey-creator-core";

export interface IConfirmDialogOptions {
  title: string;
  message: string;
  iconName: string;
  category?: "warning" | "danger";
  showCloseButton: boolean;
  applyText: string;
  cancelText: string;
  onApply: () => boolean; onCancel: () => void;
}

export function showConfirmDialog(creator: SurveyCreatorModel, options: IConfirmDialogOptions) {
  const locStrTitle = new LocalizableString(undefined as any, false);
  locStrTitle.defaultValue = options.title;
  const locStrMessage = new LocalizableString(undefined as any, false);
  locStrMessage.defaultValue = options.message;

  const titleContainer = new ComponentContainerModel();
  titleContainer.elements = [
    { componentName: "sv-string-viewer", componentData: {
      locStr: locStrTitle,
      locString: locStrTitle,
      model: locStrTitle,
      textClass: "svc-creator-confirm-dialog__title" }
    },
    { componentName: "sv-string-viewer", componentData: {
      locStr: locStrMessage,
      locString: locStrMessage,
      model: locStrMessage,
      textClass: "svc-creator-confirm-dialog__message" } }
  ];
  titleContainer.cssClass = "svc-creator-confirm-dialog__title-container";

  const className = "svc-creator-confirm-dialog__icon" + (options.category === "danger" ? " svc-creator-confirm-dialog__icon--danger" : "");
  const contentModelElements = [
    { componentName: "sv-svg-icon", componentData: {
      iconName: options.iconName,
      size: "auto",
      className: className, // TODO: rework in library
      class: className, // TODO: rework in library
      partCss: className, // TODO: rework in library
    } },
    { componentName: "svc-component-container", componentData: { model: titleContainer } },
  ];
  const contentModel = new ComponentContainerModel();
  contentModel.elements = contentModelElements;
  contentModel.cssClass = "svc-creator-confirm-dialog__content-container";
  const dialogModel = libSettings.showDialog({
    componentName: "svc-component-container",
    data: { model: contentModel },
    onApply: () => { return options.onApply(); },
    onCancel: () => { return options.onCancel(); },
    cssClass: "sps-popup svc-creator-popup svc-creator-confirm-dialog",
    displayMode: "popup",
    showCloseButton: options.showCloseButton,
  }, creator.rootElement);
  const defaultActionBarCss = dialogModel.footerToolbar.cssClasses;
  defaultActionBarCss.item = "sps-btn";
  dialogModel.footerToolbar.cssClasses = defaultActionBarCss;
  const applyAction = dialogModel.footerToolbar.getActionById("apply");
  const cancelAction = dialogModel.footerToolbar.getActionById("cancel");
  applyAction.title = options.applyText;
  applyAction.innerCss = options.category === "danger" ? "sps-btn--secondary-alert" : "sps-btn--primary-neutral";
  cancelAction.title = options.cancelText;
  cancelAction.innerCss = "sps-btn--secondary-neutral";

  return dialogModel;
}

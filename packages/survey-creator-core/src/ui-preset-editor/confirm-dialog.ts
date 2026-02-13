import { settings as libSettings, LocalizableString } from "survey-core";
import { ComponentContainerModel, SurveyCreatorModel } from "survey-creator-core";

export interface IConfirmDialogOptions {
  title: string;
  message: string;
  iconName: string;
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

  const contentModelElements = [
    { componentName: "sv-svg-icon", componentData: { iconName: options.iconName, size: "auto", className: "svc-creator-confirm-dialog__icon" } },
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
  dialogModel.footerToolbar.getActionById("apply").title = options.applyText;
  dialogModel.footerToolbar.getActionById("apply").innerCss = "sps-btn--primary-neutral";
  dialogModel.footerToolbar.getActionById("cancel").title = options.cancelText;
  dialogModel.footerToolbar.getActionById("cancel").innerCss = "sps-btn--secondary-neutral";
  return dialogModel;
}

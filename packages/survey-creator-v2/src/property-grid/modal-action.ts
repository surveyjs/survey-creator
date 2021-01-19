import * as ko from "knockout";
import { IActionBarItem } from "survey-knockout";

const template = require("./modal-action.html");

export class ActionBarItemPropertyEditorModal {
  public koIsVisible: any = ko.observable(false);
  public koData = ko.observable();

  constructor(private _item: IActionBarItem) {}

  public show() {
    if (!!this._item.data.onCreated) {
      this._item.data.onCreated();
    }
    this.koData(this.contentComponentData);
    this.koIsVisible(true);
  }

  public get icon() {
    return this._item.icon;
  }

  public get contentComponentName() {
    return this._item.data.contentComponentName;
  }

  public get contentComponentData() {
    return this._item.data.contentComponentData;
  }

  public get contentTemplateName() {
    return this._item.data.contentTemplateName;
  }

  public get onShow() {
    return this._item.data.onShow || function () {};
  }

  public get onApply() {
    return this._item.data.onApply || function () {};
  }

  public get onCancel() {
    return this._item.data.onCancel || function () {};
  }
}

ko.components.register("sv-action-bar-property-editor-modal", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new ActionBarItemPropertyEditorModal(params.item);
    },
  },
  template: template,
});

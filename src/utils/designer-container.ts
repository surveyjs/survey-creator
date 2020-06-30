import * as ko from "knockout";

import "./designer-container.scss";
import { editorLocalization } from "../editorLocalization";
var template = require("html-loader?interpolate!val-loader!./designer-container.html");

export class DesignerContainerViewModel {
  private _changedSubscription: ko.Subscription;
  private _prevWidth: any;
  private _prevSurfaceWidth: any;
  private _element: HTMLDivElement;
  constructor(params, componentInfo) {
    this._element = componentInfo.element;
    this.tabs = params.tabs;
    this.context = params.context;
    var changed = params.changed || ko.observable();
    componentInfo.element.className += " " + params.className;
    if (ko.isWritableObservable(params.visible)) {
      this.visible = params.visible;
    }
    if (ko.isWritableObservable(params.activeTab)) {
      this.activeTab = params.activeTab;
    }
    if (!this.activeTab() && this.tabs.length > 0) {
      this.activeTab(this.tabs[0]);
    }
    this.size = ko.computed(() => {
      var isVisible = this.visible();
      this.isOpen(isVisible);
      return isVisible ? "" : 0;
    });
    ko.computed(() => {
      if (!this.visible() || componentInfo.element.offsetWidth == 0) {
        componentInfo.element.style.width = this.size();
      }
    });
    this._changedSubscription = changed.subscribe(() => {
      this.isOpen(componentInfo.element.offsetWidth > 25);
      this.visible(this.isOpen());
    });
  }
  toggle = () => {
    var surfaceEl: HTMLDivElement = <any>(
      document.getElementsByClassName("svd_editors")[0]
    );
    if (this.visible()) {
      this._prevWidth = this._element.style.width;
      this._prevSurfaceWidth = surfaceEl.style.width;
      surfaceEl.style.width = surfaceEl.style.maxWidth = surfaceEl.style.flexBasis =
        "";
    } else {
      this._element.style.width = this._element.style.maxWidth = this._element.style.flexBasis = this._prevWidth;
      surfaceEl.style.width = surfaceEl.style.maxWidth = surfaceEl.style.flexBasis = this._prevSurfaceWidth;
    }
    this.visible(!this.visible());
  };
  activeTab = ko.observable<string>();
  tabs: any;
  context: any;
  className = "svd-designer-container";
  visible = ko.observable(true);
  isOpen = ko.observable(true);
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }
  size: any;
  dispose() {
    this._changedSubscription.dispose();
  }
}

ko.components.register("svd-designer-container", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new DesignerContainerViewModel(params, componentInfo);
    }
  },
  template: template
});

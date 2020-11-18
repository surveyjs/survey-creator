import * as ko from "knockout";
import "./modal.scss";

const template = require("./modal.html");

export class ModalViewModel {
  private container: HTMLElement;
  public top = ko.observable();
  public left = ko.observable();
  private showSubscription: ko.Computed<void>;
  constructor(
    public name: string,
    public data: any,
    public isVisible: ko.Observable<boolean>,
    public verticalPosition: "top" | "bottom" | "middle",
    public horizontalPosition: "left" | "right" | "center",
    public showPointer: boolean,
    rect: any
  ) {
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
    this.container.innerHTML = template;
    ko.applyBindings(this, this.container);

    this.showSubscription = ko.computed(() => {
      var width = (<HTMLElement>this.container.children[0].children[0])
        .offsetWidth;
      if (this.isVisible()) {
        if (horizontalPosition == "center") {
          this.left((rect.left + rect.right - width) / 2);
        } else if (horizontalPosition == "left") {
          this.left(rect.left - width);
        } else {
          this.left(rect.right);
        }

        var height = (<HTMLElement>this.container.children[0].children[0])
          .offsetHeight;
        if (verticalPosition == "bottom") {
          this.top(rect.bottom);
        } else if (verticalPosition == "middle") {
          this.top((rect.bottom + rect.top) / 2 - height / 2);
        } else {
          this.top(rect.top - height);
        }
      }
    });
  }

  public get styleClass(): string {
    var css = "";
    if (this.showPointer) {
      css += " svc-modal--show-pointer";
    }
    css += ` svc-modal--${this.horizontalPosition}`;
    css += ` svc-modal--${this.verticalPosition}`;
    return css;
  }

  public dispose() {
    this.showSubscription.dispose();
    ko.cleanNode(this.container);
    this.container.remove();
  }
}

ko.components.register("svc-modal", {
  viewModel: {
    createViewModel: (params: any, componentInfo) => {
      var rect = componentInfo.element.parentElement.getBoundingClientRect();
      const viewModel = new ModalViewModel(
        params.name,
        params.data,
        params.isVisible,
        params.verticalPosition,
        params.horizontalPosition,
        params.showPointer,
        rect
      );
      return viewModel;
    },
  },
  template: "<div></div>",
});

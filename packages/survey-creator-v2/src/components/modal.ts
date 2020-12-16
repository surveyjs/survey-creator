import * as ko from "knockout";
import "./modal.scss";

const template = require("./modal.html");

export class ModalViewModel {
  public top = ko.observable();
  public left = ko.observable();
  public modalDirection = ko.observable<string>();
  public pointerTarget = ko.observable<object>({});

  private container: HTMLElement;
  private showSubscription: ko.Computed<void>;

  constructor(
    public name: string,
    public data: any,
    public isVisible: ko.Observable<boolean>,
    public verticalPosition: "top" | "bottom" | "middle",
    public horizontalPosition: "left" | "right" | "center",
    public showPointer: boolean,
    public cssClass: string = "",
    targetElement: HTMLElement
  ) {
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
    this.container.innerHTML = template;
    ko.applyBindings(this, this.container);

    this.showSubscription = ko.computed(() => {
      const rect = targetElement.getBoundingClientRect();
      const height = (<HTMLElement>this.container.children[0].children[0])
        .offsetHeight;
      const width = (<HTMLElement>this.container.children[0].children[0])
        .offsetWidth;
      var pos = ModalUtils.calculatePosition(
        rect,
        height,
        width,
        verticalPosition,
        horizontalPosition,
        this.showPointer
      );
      this.left(pos.left);
      this.top(pos.top);

      this.modalDirection(
        ModalUtils.calculateModalDirection(verticalPosition, horizontalPosition)
      );

      if (this.isVisible()) {
        if (this.showPointer) {
          this.pointerTarget(
            ModalUtils.calculatePointerTarget(
              rect,
              pos.top,
              pos.left,
              verticalPosition,
              horizontalPosition
            )
          );
        }
      }
    });
  }

  public get styleClass(): string {
    var css = this.cssClass;
    if (this.showPointer) {
      css += " svc-modal--show-pointer";
      css += ` svc-modal--${this.modalDirection()}`;
    }

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
      const viewModel = new ModalViewModel(
        params.name,
        params.data,
        params.isVisible,
        params.verticalPosition,
        params.horizontalPosition,
        params.showPointer,
        params.cssClass,
        componentInfo.element.parentElement
      );
      return viewModel;
    },
  },
  template: "<div></div>",
});

export class ModalUtils {
  public static calculatePosition(
    targetRect: ClientRect,
    height: number,
    width: number,
    verticalPosition: string,
    horizontalPosition: string,
    showPointer: boolean
  ) {
    if (horizontalPosition == "center")
      var left = (targetRect.left + targetRect.right - width) / 2;
    else if (horizontalPosition == "left") left = targetRect.left - width;
    else left = targetRect.right;

    if (verticalPosition == "middle")
      var top = (targetRect.top + targetRect.bottom - height) / 2;
    else if (verticalPosition == "top") top = targetRect.top - height;
    else top = targetRect.bottom;

    if (showPointer) {
      if (horizontalPosition != "center" && verticalPosition != "middle") {
        if (verticalPosition == "top") {
          top = top + targetRect.height;
        } else {
          top = top - targetRect.height;
        }
      }
    }

    return { left: left, top: top };
  }

  public static calculateModalDirection(
    verticalPosition: string,
    horizontalPosition: string
  ) {
    var modalDirection: string;
    if (horizontalPosition == "center" && verticalPosition != "middle") {
      modalDirection = verticalPosition;
    } else if (horizontalPosition != "center") {
      modalDirection = horizontalPosition;
    }
    return modalDirection;
  }

  //called when showPointer  is true
  public static calculatePointerTarget(
    targetRect: ClientRect,
    top: number,
    left: number,
    verticalPosition: string,
    horizontalPosition: string
  ) {
    var targetPos: any = {};
    if (horizontalPosition != "center") {
      targetPos.top = targetRect.top + targetRect.height / 2;
      targetPos.left = targetRect[horizontalPosition];
    } else if (verticalPosition != "middle") {
      targetPos.top = targetRect[verticalPosition];
      targetPos.left = targetRect.left + targetRect.width / 2;
    }
    targetPos.left = targetPos.left - left;
    targetPos.top = targetPos.top - top;
    return targetPos;
  }
}

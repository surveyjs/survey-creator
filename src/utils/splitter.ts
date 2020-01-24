import * as ko from "knockout";

import "./splitter.scss";

export class SplitterComponentViewModel {
  private updateSplitter;

  private updateWidth(el: any, value: any) {
    el.style.width = value;
    el.style.maxWidth = value;
    el.style.flexBasis = value;
  }

  constructor(
    params: {
      minLeft: number;
      minRight: number;
      onChange?: any;
    },
    componentInfo
  ) {
    var splitterElement = componentInfo.element;
    var container = componentInfo.element.parentElement;
    var onChange = params.onChange || ko.observable(0);
    var siblings = [];
    var minLeft = params.minLeft || 10;
    var minRight = params.minRight || 10;
    for (var i = 0; i < container.children.length; i++) {
      siblings.push(container.children[i]);
    }
    var splitterElementIndex = siblings.indexOf(splitterElement);
    var leftElement = siblings[splitterElementIndex - 1];
    var rightElement = siblings[splitterElementIndex + 1];

    var startX = 0;
    var isInChangeWidth = false;
    var update = (delta: any) => {
      if (isInChangeWidth) return;
      isInChangeWidth = true;
      try {
        var totalWidth = leftElement.offsetWidth + rightElement.offsetWidth;
        var newLeft = leftElement.offsetWidth + delta;
        var newRight = totalWidth - newLeft;
        if (newLeft > minLeft && newRight > minRight) {
          startX += delta;
          var leftWidth =
            Math.ceil(((newLeft + 1) / container.clientWidth) * 10000) / 100 +
            "%";
          var rightWidth =
            Math.ceil(((newRight + 1) / container.clientWidth) * 10000) / 100 +
            "%";
          this.updateWidth(leftElement, leftWidth);
          this.updateWidth(rightElement, rightWidth);
          onChange(onChange() + 1);
        }
      } finally {
        isInChangeWidth = false;
      }
    };

    var onmousemove = event => {
      update(event.screenX - startX);
    };

    var onmouseup = event => {
      startX = 0;
      splitterElement.className = splitterElement.className.replace(
        /\ssvd-active-splitter/g,
        ""
      );
      document.removeEventListener("mousemove", onmousemove);
      document.removeEventListener("mouseleave", onmouseup);
      document.removeEventListener("mouseup", onmouseup);
    };

    splitterElement.onmousedown = event => {
      startX = event.screenX;
      splitterElement.className += " svd-active-splitter";
      document.addEventListener("mousemove", onmousemove);
      document.addEventListener("mouseleave", onmouseup);
      document.addEventListener("mouseup", onmouseup);
    };

    setTimeout(() => update(0), 10);
  }
  dispose() {
    if (!!this.updateSplitter) {
      clearInterval(this.updateSplitter);
      this.updateSplitter = undefined;
    }
  }
}

ko.components.register("svd-splitter", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new SplitterComponentViewModel(params, componentInfo);
    }
  },
  template:
    '<div class="svd-splitter"><div class="icon icon-split"><svg class="svd-svg-icon"><use xlink:href="#icon-split_16x16"></use></svg></div></div>'
});

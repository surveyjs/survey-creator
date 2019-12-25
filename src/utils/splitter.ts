import * as ko from "knockout";

import "./splitter.scss";

export class SplitterComponentViewModel {
  constructor(params: { minLeft: number; minRight: number }, componentInfo) {
    var splitterElement = componentInfo.element;
    var container = componentInfo.element.parentElement;
    var siblings = [];
    var minLeft = params.minLeft || 10;
    var minRight = params.minRight || 10;
    for (var i = 0; i < container.children.length; i++) {
      siblings.push(container.children[i]);
    }
    var splitterElementIndex = siblings.indexOf(splitterElement);
    var leftElement = siblings[splitterElementIndex - 1];
    var rightElement = siblings[splitterElementIndex + 1];

    var onresize = () => {
      splitterElement.style.left =
        siblings
          .slice(0, splitterElementIndex)
          .reduce((w, s) => w + s.offsetWidth, 0) -
        splitterElement.offsetWidth +
        "px";
    };
    window.addEventListener("resize", onresize);
    onresize();

    var onmousemove = event => {
      var newLeft = leftElement.offsetWidth + event.movementX;
      var newRight = rightElement.offsetWidth - event.movementX;
      if (newLeft > minLeft && newRight > minRight) {
        splitterElement.style.left =
          splitterElement.offsetLeft + event.movementX + "px";
        var leftWidth = (newLeft / container.offsetWidth) * 100 + "%";
        var rightWidth = (newRight / container.offsetWidth) * 100 + "%";
        leftElement.style.width = leftWidth;
        leftElement.style.maxWidth = leftWidth;
        leftElement.style.flexBasis = leftWidth;
        rightElement.style.width = rightWidth;
        rightElement.style.maxWidth = rightWidth;
        rightElement.style.flexBasis = rightWidth;
      }
      onresize();
    };
    var onmouseup = () => {
      splitterElement.className = splitterElement.className.replace(
        /\ssvd-active-splitter/g,
        ""
      );
      document.removeEventListener("mousemove", onmousemove);
      document.removeEventListener("mouseleave", onmouseup);
      document.removeEventListener("mouseup", onmouseup);
      window.dispatchEvent(new Event('resize'));
    };

    splitterElement.onmousedown = () => {
      splitterElement.className += " svd-active-splitter";
      document.addEventListener("mousemove", onmousemove);
      document.addEventListener("mouseleave", onmouseup);
      document.addEventListener("mouseup", onmouseup);
    };
  }
}

ko.components.register("svd-splitter", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new SplitterComponentViewModel(params, componentInfo);
    }
  },
  template: '<div class="svd-splitter"></div>'
});

import * as ko from "knockout";
import { SurveyHelper, editorLocalization } from "../entries";
import "./pages-editor.scss";
import { PagesEditor } from "../pages-editor";
import { StylesManager } from "../stylesmanager";

var template = require("html-loader?interpolate!val-loader!./pages-editor.html");

export class PagesEditorViewModel {
  private pageSelectionChanged = undefined;
  private updateScroller = undefined;
  private isNeedAutoScroll = true;

  constructor(public model: PagesEditor, private element: any) {
    if (!!this.element && typeof this.element.querySelector === "function") {
      this.updateScroller = setInterval(() => {
        var pagesElement: HTMLDivElement = this.element.querySelector(
          ".svd-pages"
        );
        if (!!pagesElement) {
          this.hasScroller(pagesElement.scrollWidth > pagesElement.offsetWidth);
        }
      }, 100);

      this.pageSelectionChanged = ko.computed(() => {
        if (model.selectedPage() && this.isNeedAutoScroll) {
          this.scrollToSelectedPage();
        } else {
          this.isNeedAutoScroll = true;
        }
      });
    }
  }

  moveLeft(model, event) {
    var pagesElement = this.element.querySelector(".svd-pages");
    pagesElement.scrollLeft -= 50;
    this.updateMenuPosition();
  }
  moveRight(model, event) {
    var pagesElement = this.element.querySelector(".svd-pages");
    pagesElement.scrollLeft += 50;
    this.updateMenuPosition();
  }
  scrollToSelectedPage = () => {
    var pagesElement: any = this.element.querySelector(".svd-pages");
    if (!pagesElement) return;
    var index = this.model.pages.indexOf(this.model.selectedPage());
    var pageElement = pagesElement.children[index];
    if (!pageElement) return;
    pagesElement.scrollLeft =
      pageElement.offsetLeft -
      pagesElement.offsetLeft -
      pagesElement.offsetWidth / 2;
    this.updateMenuPosition();
  };

  onWheel(model, event) {
    var pagesElement = model.element.querySelector(".svd-pages");
    event = event || window.event;
    if (!!event.originalEvent) {
      event = event.originalEvent;
    }
    var delta = event.deltaY || event.detail || event.wheelDelta;
    pagesElement.scrollLeft -= delta;
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    this.updateMenuPosition();
  }

  updateMenuPosition() {
    var pagesElement = this.element.querySelector(".svd-pages");
    var menuElements = pagesElement.getElementsByClassName("svd-page-actions");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].style.left =
        menuElements[i].parentElement.offsetLeft -
        pagesElement.scrollLeft +
        "px";
    }
  }

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  getPageClass = (page) => {
    var result =
      page === this.model.selectedPage()
        ? "svd_selected_page svd-light-bg-color"
        : "";

    if (this.model.pages.indexOf(page) !== this.model.pages.length - 1) {
      result += " svd-border-right-none";
    }

    return result;
  };

  getPageMenuIconClass = (page) => {
    var baseIconName =
      StylesManager.currentTheme() === "modern" ? "dots" : "gear";
    return page === this.model.selectedPage() && this.model.isActive()
      ? "icon-" + baseIconName + "active"
      : "icon-" + baseIconName;
  };

  onPageClick = (pageModel, event) => {
    this.isNeedAutoScroll = false;
    this.model.selectedPage(pageModel);
    event.stopPropagation();
    this.updateMenuPosition();
  };

  public movingPage = null;
  private movedFrom: number = -1;
  get sortableOptions() {
    return {
      handle: ".svd-page-name",
      animation: 150,
      onStart: () => {
        this.movingPage = null;
        this.movedFrom = -1;
        this.model.creator.undoRedoManager.startTransaction(
          "pages drag drop transaction"
        );
        this.model.blockPagesRebuilt(true);
      },
      onEnd: (evt) => {
        this.isNeedAutoScroll = false;
        this.model.blockPagesRebuilt(false);
        this.model.creator.undoRedoManager.stopTransaction();
        if (!!this.movingPage) {
          this.model.movePage(this.movingPage, this.movedFrom);
        }
      },
      onUpdate: (evt, itemV) => {
        this.movingPage = itemV;
        if (this.movedFrom < 0) {
          this.movedFrom = this.model.pages.indexOf(this.movingPage);
        }
        if (
          SurveyHelper.moveItemInArray(this.model.pages, itemV, evt.newIndex)
        ) {
          // Remove sortables "unbound" element
          evt.item.parentNode.removeChild(evt.item);
        }
        return true;
      },
    };
  }

  public hasScroller = ko.observable(false);

  public dispose() {
    this.pageSelectionChanged.dispose();
    if (!!this.updateScroller) {
      clearInterval(this.updateScroller);
      this.updateScroller = undefined;
    }
  }
}

ko.components.register("svd-pages-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: PagesEditor =
        params.editor.pagesEditorModel || params.item.data;

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });

      return new PagesEditorViewModel(model, componentInfo.element);
    },
  },
  template: template,
});

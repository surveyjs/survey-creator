import * as ko from "knockout";

import * as Survey from "survey-knockout";

import { SurveyHelper, ObjType } from "../surveyHelper";
import { SurveyCreator } from "../editor";
import { editorLocalization } from "../editorLocalization";

import "./pages-editor.scss";
var template = require("html-loader?interpolate!val-loader!./pages-editor.html");

export class PagesEditor {
  private isNeedAutoScroll = true;
  private isDraggingPage = ko.observable(false);
  private prevPagesForSelector: any[] = [];
  private _selectedPage = ko.observable<Survey.PageModel>();
  private updateScroller = undefined;
  pagesSelection: ko.Computed<any>;
  private selectionSubscription: ko.Subscription;
  public koSurvey: ko.Observable<Survey.Survey>;

  constructor(private creator: SurveyCreator, private element: any) {
    this.hasDropdownSelector(creator.showDropdownPageSelector);
    this.koSurvey = ko.observable<Survey.Survey>(creator.survey);
    creator.onDesignerSurveyCreated.add((sender, options) => {
      this.koSurvey(options.survey);
    });
    this.pagesSelection = ko.computed<Survey.PageModel[]>(() => {
      if (!this.isDraggingPage()) {
        this.prevPagesForSelector = this.koSurvey().pages;
        if (!this.readOnly) {
          this.prevPagesForSelector = this.prevPagesForSelector.concat([
            <any>{ name: this.getLocString("ed.addNewPage") }
          ]);
        }
      }
      return this.prevPagesForSelector;
    });
    this._selectedPage(this.pages[0]);
    this.selectionSubscription = this.creator.koSelectedObject.subscribe(
      newVal => {
        if (!this.isActive()) {
          if (
            !!creator.survey.currentPage &&
            creator.survey.currentPage != this._selectedPage()
          ) {
            this._selectedPage(creator.survey.currentPage);
          }
          return;
        }
        this._selectedPage(newVal.value);

        if (this.isNeedAutoScroll) {
          this.scrollToSelectedPage();
        } else {
          this.isNeedAutoScroll = true;
        }
      }
    );
    if (!!this.element && typeof this.element.querySelector === "function") {
      this.updateScroller = setInterval(() => {
        var pagesElement: HTMLDivElement = this.element.querySelector(
          ".svd-pages"
        );
        if (!!pagesElement) {
          this.hasScroller(pagesElement.scrollWidth > pagesElement.offsetWidth);
        }
      }, 100);
    }
  }
  protected get pages() {
    return this.koSurvey().pages;
  }
  getDisplayText = (page: Survey.PageModel) => {
    return this.creator.getObjectDisplayName(page);
  };

  pageSelection = ko.computed<Survey.PageModel>({
    read: () => this._selectedPage(),
    write: newVal => {
      if (!!newVal && typeof newVal.getType === "function") {
        this.selectedPage = newVal;
      } else {
        if (this.pages.length > 0) {
          this.addPage();
        }
      }
    }
  });

  addPage() {
    this.creator.addPage();
  }

  copyPage(page: Survey.PageModel) {
    this.creator.copyPage(page);
  }

  deletePage() {
    this.creator.deletePage();
  }

  showPageSettings(page: Survey.PageModel) {
    this.creator.showQuestionEditor(page);
  }

  onPageClick = (model, event) => {
    this.isNeedAutoScroll = false;
    this.creator.selectPage(model);
    event.stopPropagation();
    this.updateMenuPosition();
  };
  private movingPage = null;
  get sortableOptions() {
    return {
      handle: ".svd-page-name",
      animation: 150,
      onStart: () => {
        this.movingPage = null;
        this.creator.undoRedoManager.startTransaction(
          "pages drag drop transaction"
        );
        this.isDraggingPage(true);
      },
      onEnd: evt => {
        this.isNeedAutoScroll = false;
        this.isDraggingPage(false);
        this.creator.undoRedoManager.stopTransaction();
        if (!!this.movingPage) {
          this.creator.selectPage(this.movingPage);
        }
      },
      onUpdate: (evt, itemV) => {
        this.movingPage = itemV;
        if (SurveyHelper.moveItemInArray(this.pages, itemV, evt.newIndex)) {
          // Remove sortables "unbound" element
          evt.item.parentNode.removeChild(evt.item);
        }
        return true;
      }
    };
  }
  get selectedPage() {
    return this._selectedPage();
  }
  set selectedPage(newPage) {
    this.creator.selectPage(newPage);
  }
  getPageClass = page => {
    var result =
      page === this.selectedPage ? "svd_selected_page svd-light-bg-color" : "";

    if (this.pages.indexOf(page) !== this.pages.length - 1) {
      result += " svd-border-right-none";
    }

    return result;
  };
  getPageMenuIconClass = page => {
    return page === this.selectedPage && this.isActive()
      ? "icon-gearactive"
      : "icon-gear";
  };
  showActions = page => {
    return page === this.selectedPage && this.isActive();
  };
  isLastPage() {
    return this.pages.length === 1;
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
  scrollToSelectedPage() {
    var pagesElement: any = this.element.querySelector(".svd-pages");
    if (!pagesElement) return;
    var index = this.pages.indexOf(this.selectedPage);
    var pageElement = pagesElement.children[index];
    if (!pageElement) return;
    pagesElement.scrollLeft =
      pageElement.offsetLeft -
      pagesElement.offsetLeft -
      pagesElement.offsetWidth / 2;
    this.updateMenuPosition();
  }
  // onKeyDown(el: any, e: KeyboardEvent) {
  //   if (this.pages.length <= 1) return;
  //   var pages = this.pages;
  //   var pageIndex = -1;
  //   for (var i = 0; i < pages.length; i++) {
  //     if (pages[i].page && pages[i].koSelected()) {
  //       pageIndex = i;
  //     }
  //   }
  //   if (pageIndex < 0) return;
  //   if (e.keyCode == 46 && this.onDeletePageCallback)
  //     this.onDeletePageCallback(el.page);
  //   if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
  //     pageIndex += e.keyCode == 37 ? -1 : 1;
  //     if (pageIndex < 0) pageIndex = pages.length - 1;
  //     if (pageIndex >= pages.length) pageIndex = 0;
  //     var page = pages[pageIndex].page;
  //     this.onSelectPageCallback(page);
  //     this.setSelectedPage(page);
  //   }
  // }

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
  getLocString(str: string) {
    return editorLocalization.getString(str);
  }
  isActive() {
    var selectedObject = this.creator.koSelectedObject();
    if (!selectedObject) return;
    return SurveyHelper.getObjectType(selectedObject.value) === ObjType.Page;
  }
  private _readOnly = ko.observable(false);
  /**
   * A boolean property, false by default. Set it to true to deny pages editing.
   */
  public get readOnly() {
    return (
      this.creator.readOnly ||
      !this.creator.allowModifyPages ||
      this._readOnly()
    );
  }
  public set readOnly(newVal) {
    this._readOnly(newVal);
  }
  public hasScroller = ko.observable(false);
  public hasDropdownSelector = ko.observable(true);

  dispose() {
    if (!!this.updateScroller) {
      clearInterval(this.updateScroller);
      this.updateScroller = undefined;
    }
    this.selectionSubscription.dispose();
    this.selectionSubscription = undefined;
    this.pagesSelection.dispose();
  }
}

ko.components.register("pages-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new PagesEditor(params.editor, componentInfo.element);
    }
  },
  template: template
});

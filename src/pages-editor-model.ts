import * as ko from "knockout";

import * as Survey from "survey-knockout";

import { SurveyHelper, ObjType } from "./surveyHelper";
import { SurveyCreator } from "./editor";
import { editorLocalization } from "./editorLocalization";

export class PagesEditorModel {
  public isNeedAutoScroll = true;
  public isDraggingPage = ko.observable(false);
  public prevPagesForSelector: any[] = [];
  public _selectedPage = ko.observable<Survey.PageModel>();
  public updateScroller = undefined;
  pagesSelection: ko.Computed<any>;
  public selectionSubscription: ko.Subscription;
  public koSurvey: ko.Observable<Survey.Survey>;

  constructor(public creator: SurveyCreator) {
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
            <any>{ name: this.getLocString("ed.addNewPage") },
          ]);
        }
      }
      return this.prevPagesForSelector;
    });
    this._selectedPage(this.pages[0]);
    this.selectionSubscription = this.creator.koSelectedObject.subscribe(
      (newVal) => {
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
    this.addPageSelectorIntoToolbar();
  }
  public get pages() {
    return this.koSurvey().pages;
  }
  getDisplayText = (page: Survey.PageModel) => {
    return this.creator.getObjectDisplayName(page);
  };

  public scrollToSelectedPage() {}

  pageSelection = ko.computed<Survey.PageModel>({
    read: () => this._selectedPage(),
    write: (newVal) => {
      if (!!newVal && typeof newVal.getType === "function") {
        this.selectedPage = newVal;
      } else {
        if (this.pages.length > 0) {
          this.addPage();
        }
      }
    },
  });

  addPageSelectorIntoToolbar() {
    const item = {
      id: "svd-toolbar-page-selector",
      component: "svd-page-selector",
      visible: this.creator.showPageSelectorInToolbar,
      enabled: true,
      data: this,
      title: "",
    };
    this.creator.toolbarItems.unshift(item);
  }

  addPage = () => {
    this.creator.addPage();
  };

  copyPage = (page: Survey.PageModel) => {
    this.creator.copyPage(page);
  }

  deletePage = () => {
    this.creator.deletePage();
  }

  showPageSettings(page: Survey.PageModel) {
    this.creator.showQuestionEditor(page);
  }

  public movingPage = null;
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
      onEnd: (evt) => {
        this.isNeedAutoScroll = false;
        this.isDraggingPage(false);
        this.creator.undoRedoManager.stopTransaction();
        if (!!this.movingPage) {
          this.selectPage(this.movingPage);
        }
      },
      onUpdate: (evt, itemV) => {
        this.movingPage = itemV;
        if (SurveyHelper.moveItemInArray(this.pages, itemV, evt.newIndex)) {
          // Remove sortables "unbound" element
          evt.item.parentNode.removeChild(evt.item);
        }
        return true;
      },
    };
  }
  get selectedPage() {
    return this._selectedPage();
  }
  set selectedPage(newPage) {
    this.selectPage(newPage);
  }
  selectPage = (page) => {
    this.creator.selectPage(page);
  }
  getPageClass = (page) => {
    var result =
      page === this.selectedPage ? "svd_selected_page svd-light-bg-color" : "";

    if (this.pages.indexOf(page) !== this.pages.length - 1) {
      result += " svd-border-right-none";
    }

    return result;
  };
  getPageMenuIconClass = (page) => {
    return page === this.selectedPage && this.isActive()
      ? "icon-gearactive"
      : "icon-gear";
  };
  showActions = (page) => {
    return page === this.selectedPage && this.isActive();
  };
  isLastPage() {
    return this.pages.length === 1;
  }
  getLocString(str: string) {
    return editorLocalization.getString(str);
  }
  isActive() {
    var selectedObject = this.creator.koSelectedObject();
    if (!selectedObject) return;
    return SurveyHelper.getObjectType(selectedObject.value) === ObjType.Page;
  }
  public _readOnly = ko.observable(false);
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

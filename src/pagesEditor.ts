import * as ko from "knockout";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { SurveyObjectItem } from "./surveyObjects";
import * as Survey from "survey-knockout";
import { editorLocalization } from "./editorLocalization";
import { SurveyPropertyEditorShowWindow } from "./questionEditors/questionEditor";
import { SurveyForDesigner, SurveyEditor } from "./entries";
import "../vendor/knockout-sortable.js";

export class PagesEditor {
  private isNeedAutoScroll = true;
  constructor(private editor: SurveyEditor, private element: any) {
    this.editor.koSelectedObject.subscribe(() => {
      if (!this.isActive()) return;

      if (this.isNeedAutoScroll) {
        this.scrollToSelectedPage();
      } else {
        this.isNeedAutoScroll = true;
      }
    });
  }

  get pages() {
    return this.editor.pages;
  }

  addPage() {
    this.editor.addPage();
  }

  copyPage(page: Survey.PageModel) {
    this.editor.copyPage(page);
  }

  deletePage() {
    this.editor.deletePage();
  }

  showPageSettings(page: Survey.PageModel) {
    this.editor.showQuestionEditor(page);
  }

  onPageClick = (model, event) => {
    this.isNeedAutoScroll = false;
    this.editor.selectPage(model);
    event.stopPropagation();
  };

  get sortableOptions() {
    return {
      onEnd: evt => {
        this.isNeedAutoScroll = false;
        this.editor.movePage(evt.oldIndex, evt.newIndex);
      },
      handle: ".svd-page-name",
      animation: 150
    };
  }

  get selectedPage() {
    return this.isActive()
      ? <Survey.PageModel>this.editor.koSelectedObject().value
      : this.editor.pages()[0];
  }
  set selectedPage(newPage) {
    this.editor.selectPage(newPage);
  }
  getPageClass = page => {
    return page === this.selectedPage ? "svd_selected_page" : "";
  };
  getPageMenuClass = page => {
    return page !== this.selectedPage || !this.isActive()
      ? "menu-disabled"
      : null;
  };
  getPageMenuIconClass = page => {
    return page === this.selectedPage && this.isActive()
      ? "icon-gear-active"
      : "icon-gear";
  };
  isLastPage() {
    return this.editor.pages().length === 1;
  }
  moveLeft(model, event) {
    var pagesElement = this.element.querySelector(".svd-pages");
    pagesElement.scrollLeft -= 50;
  }
  moveRight(model, event) {
    var pagesElement = this.element.querySelector(".svd-pages");
    pagesElement.scrollLeft += 50;
  }
  scrollToSelectedPage() {
    var pagesElement: any = this.element.querySelector(".svd-pages");
    if (!pagesElement) return;
    var index = this.editor.pages().indexOf(this.selectedPage);
    var pageElement = pagesElement.children[index];
    if (!pageElement) return;
    pagesElement.scrollTo(
      pageElement.offsetLeft - pagesElement.offsetWidth / 2,
      0
    );
  }
  // onKeyDown(el: any, e: KeyboardEvent) {
  //   if (this.koPages().length <= 1) return;
  //   var pages = this.koPages();
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
  }
  getLocString(str: string) {
    return editorLocalization.getString(str);
  }
  isActive() {
    var selectedObject = this.editor.koSelectedObject();
    if (!selectedObject) return;
    return SurveyHelper.getObjectType(selectedObject.value) === ObjType.Page;
  }
}

ko.components.register("pages-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new PagesEditor(params.editor, componentInfo.element);
    }
  },
  template: { element: "svd-page-selector-template" }
});

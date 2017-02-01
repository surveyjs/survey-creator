import * as ko from "knockout";
import {SurveyHelper} from "./surveyHelper";
import * as Survey from "survey-knockout";

export declare type SurveyAddNewPageCallback = () => void;
export declare type SurveySelectPageCallback = (page: Survey.Page) => void;
export declare type SurveyMovePageCallback = (indexFrom: number, indexTo: number) => void;

export class SurveyPagesEditor {
    surveyValue: Survey.Survey;
    koPages: any;
    koIsValid: any;
    selectPageClick: any;
    onAddNewPageCallback: SurveyAddNewPageCallback;
    onSelectPageCallback: SurveySelectPageCallback;
    onDeletePageCallback: SurveySelectPageCallback;
    onMovePageCallback: SurveyMovePageCallback;
    draggingPage: any = null;
    dragStart: any; dragOver: any; dragEnd: any; dragDrop: any; keyDown: any;

    constructor(onAddNewPageCallback: SurveyAddNewPageCallback = null, onSelectPageCallback: SurveySelectPageCallback = null,
                onMovePageCallback: SurveyMovePageCallback = null, onDeletePageCallback: SurveySelectPageCallback = null) {
        this.koPages = ko.observableArray();
        this.koIsValid = ko.observable(false);
        this.onAddNewPageCallback = onAddNewPageCallback;
        this.onSelectPageCallback = onSelectPageCallback;
        this.onMovePageCallback = onMovePageCallback;
        this.onDeletePageCallback = onDeletePageCallback;
        var self = this;
        this.selectPageClick = function(pageItem) {
            if (self.onSelectPageCallback) {
                self.onSelectPageCallback(pageItem.page);
            }
        };
        this.keyDown = function (el: any, e: KeyboardEvent) { self.onKeyDown(el, e); }
        this.dragStart = function (el: any) { self.draggingPage = el; };
        this.dragOver = function (el: any) {  };
        this.dragEnd = function () { self.draggingPage = null; };
        this.dragDrop = function (el: any) { self.moveDraggingPageTo(el); };
    }
    public get survey(): Survey.Survey { return this.surveyValue; }
    public set survey(value: Survey.Survey) {
        this.surveyValue = value;
        this.koIsValid(this.surveyValue != null);
        this.updatePages();
    }
    public setSelectedPage(page: Survey.Page) {
        var pages = this.koPages();
        for (var i = 0; i < pages.length; i++) {
            pages[i].koSelected(pages[i].page == page);
        }
    }
    public addNewPageClick() {
        if (this.onAddNewPageCallback) {
            this.onAddNewPageCallback();
        }
    }
    public removePage(page: Survey.Page) {
        var index = this.getIndexByPage(page);
        if (index > -1) {
            this.koPages.splice(index, 1);
        }
    }
    public changeName(page: Survey.Page) {
        var index = this.getIndexByPage(page);
        if (index > -1) {
            this.koPages()[index].title(SurveyHelper.getObjectName(page));
        }
    }
    protected getIndexByPage(page: Survey.Page): number {
        var pages = this.koPages();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page == page) return i;
        }
        return -1;
    }
    protected onKeyDown(el: any, e: KeyboardEvent) {
        if (this.koPages().length <= 1) return;
        var pages = this.koPages();
        var pageIndex = -1;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page && pages[i].koSelected()) {
                pageIndex = i;
            }
        }
        if (pageIndex < 0) return;
        if (e.keyCode == 46 && this.onDeletePageCallback) this.onDeletePageCallback(el.page);
        if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
            pageIndex += (e.keyCode == 37 ? -1 : 1);
            if (pageIndex < 0) pageIndex = pages.length - 1;
            if (pageIndex >= pages.length) pageIndex = 0;
            var page = pages[pageIndex].page;
            this.onSelectPageCallback(page);
            this.setSelectedPage(page);
        }
    }
    protected updatePages() {
        if (this.surveyValue == null) {
            this.koPages([]);
            return;
        }
        var pages = [];
        for (var i = 0; i < this.surveyValue.pages.length; i++) {
            var page = this.surveyValue.pages[i];
            pages.push({
                title: ko.observable(SurveyHelper.getObjectName(page)), page: page, koSelected: ko.observable(false)
            });
        }
        this.koPages(pages);
    }
    private moveDraggingPageTo(toPage: any) {
        if (toPage == null || toPage == this.draggingPage) {
            this.draggingPage = null;
            return;
        }
        if (this.draggingPage == null) return;
        var index = this.koPages().indexOf(this.draggingPage);
        var indexTo = this.koPages().indexOf(toPage);
        if (this.onMovePageCallback) {
            this.onMovePageCallback(index, indexTo);
        }
    }
}
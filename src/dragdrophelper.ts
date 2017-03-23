import * as Survey from "survey-knockout";

export class DragDropTargetElement {
    constructor(public page: Survey.Page, public target: any, public source: any) {

    }

    public moveTo(destination: any, isBottom: boolean): boolean {
        if(destination === this.target) return true;
        var destInfo = this.findInfo(destination);
        if(destInfo == null) {
            this.clear();
            return false;
        }
        var targetInfo = this.findInfo(this.target);
        this.updateInfo(destInfo, isBottom);
        if(this.isInfoEquals(targetInfo, destInfo)) return true;
        this.clearByInfo(targetInfo);
        destInfo = this.findInfo(destination);
        this.updateInfo(destInfo, isBottom);
        if(this.source) {
            var srcInfo = this.findInfo(this.source);
            if(srcInfo && srcInfo.panel == destInfo.panel) {
                var diff = destInfo.rIndex - srcInfo.rIndex;
                if(diff == 0 || diff == 1) return false;
            } 
        }
        this.addInfo(destInfo);

        return true;
    }
    public doDrop() {
        var destInfo = this.findInfo(this.target);
        if(!destInfo) return;
        destInfo.panel.addElement(this.getNewTargetElement(), destInfo.rIndex); 
        if(this.source) {
            //TODO
            this.page.removeQuestion(this.source); 
        }
    }
    public clear() {
        this.clearByInfo(this.findInfo(this.target));
    }
    private updateInfo(info: any, isBottom: boolean) {
        if(info.rIndex > -1 && isBottom) info.rIndex ++;
    }
    private addInfo(info: any) {
        var row = new Survey.QuestionRow(info.panel);
        row.addQuestion(this.target);
        var rows = info.panel.koRows();
        if(info.rIndex >= 0 && info.rIndex < info.panel.koRows().length) {
            rows.splice(info.rIndex, 0, row);
        } else {
            rows.push(row);
       }
       info.panel.koRows(rows);
    }
    private clearByInfo(info: any) {
        if(info == null) return;
        var rows = info.panel.koRows();
        rows.splice(info.rIndex, 1);
        info.panel.koRows(rows);
    }
    private isInfoEquals(a: any, b: any) : boolean {
        if(a == null || b == null) return false;
        return a.panel === b.panel && a.rIndex === b.rIndex;
    }
    private findInfo(el: any): any {
        if(el == this.page) return { panel: this.page, row: null, rIndex: 0, elIndex: 0 };
        var rows = this.page["koRows"]();
        for(var i = 0; i < rows.length; i ++) {
            var row = rows[i];
            var elements = row["koElements"]();
            for(var j = 0; j < elements.length; j ++) {
                if(elements[j] == el) return { panel: this.page, row: row, rIndex: i, elIndex: j };
            }
        }
        return null;
    }
    private getNewTargetElement(): any {
        var result = Survey.JsonObject.metaData.createClass(this.target.getType());
        var json = new Survey.JsonObject().toJsonObject(this.target);
        new Survey.JsonObject().toObject(json, result);
        return result;
    }
}

export class DragDropHelper {
    static dataStart: string = "surveyjs,";
    static dragData: any = {text: "", json: null };
    static prevEvent = { element: null, x: -1, y: -1 };
    private onModifiedCallback: () => any;
    private scrollableElement: HTMLElement = null;
    private ddTarget: DragDropTargetElement = null;
    static counter: number  = 1;
    private id: number = DragDropHelper.counter ++;
    constructor(public data: Survey.ISurvey, onModifiedCallback: () => any, scrollableElName: string = null) {
        this.onModifiedCallback = onModifiedCallback;
        this.scrollableElement = document.getElementById((scrollableElName ? scrollableElName : "scrollableDiv"));
    }
    public get survey(): Survey.Survey { return <Survey.Survey>this.data; }
    public startDragNewQuestion(event: DragEvent, questionType: string, questionName: string) {
        this.prepareData(event, questionType, questionName);
    }
    public startDragQuestion(event: DragEvent, question: any) {
        this.prepareData(event, null, question.name);
        this.ddTarget.source = question;
    }
    public startDragToolboxItem(event: DragEvent, questionName: string, questionJson: any) {
        this.prepareData(event, null, questionName, questionJson);
    }
    public isSurveyDragging(event: DragEvent): boolean {
        if (!event) return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    }
    public doDragDropOver(event: DragEvent, element: any) {
        event = this.getEvent(event);
        this.checkScrollY(event);
        if (!element || !this.isSurveyDragging(event) || this.isSamePlace(event, element)) return;
        this.ddTarget.moveTo(element, this.isBottom(event, element));
    }
    public end() {
        if(this.ddTarget) {
            this.ddTarget.clear();
        }
        this.isScrollStop = true;
        this.clearData();
    }
    public doDrop(event: DragEvent) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.isSurveyDragging(event)) {
            this.ddTarget.doDrop();
        }
        this.end();
    }
    public doLeavePage(event: DragEvent) {
        this.ddTarget.clear();
    }
    public scrollToElement(el: HTMLElement) {
        if (!this.scrollableElement || !el) return;
        el.scrollIntoView(false);
    }
    private createTargetQuestion(questionType: string, questionName: string, json: any): Survey.QuestionBase {
        if (!questionName) return null;
        var targetQuestion = null;
        if (json) {
            targetQuestion = Survey.JsonObject.metaData.createClass(json["type"]);
            new Survey.JsonObject().toObject(json, targetQuestion);
            targetQuestion.name = questionName;
        }
        if (!targetQuestion && questionType) {
            targetQuestion = Survey.QuestionFactory.Instance.createQuestion(questionType, questionName);
        }
        targetQuestion.setData(this.survey);
        targetQuestion.renderWidth = "100%";
        this.setIsDraggingSource(targetQuestion, true);
        return targetQuestion;
    }
    private setIsDraggingSource(question: any, val: any) {
        if (question && question["koIsDraggingSource"]) question["koIsDraggingSource"](val);
    }
    private isBottom(event: DragEvent, surveyEl: any): boolean {
        event = this.getEvent(event);
        var height = <number>event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty('layerX')) {
            y = event.layerY - <number>event.currentTarget["offsetTop"];
        }
        return y > height / 2;
    }
    private isSamePlace(event: DragEvent, element: any): boolean {
        var prev = DragDropHelper.prevEvent;
        if (prev.element != element || Math.abs(event.clientX - prev.x) > 5 || Math.abs(event.clientY - prev.y) > 5) {
            prev.element = element;
            prev.x = event.clientX;
            prev.y = event.clientY;
            return false;
        }
        return true;
    }
    private isScrollStop: boolean = true;
    private static ScrollDelay: number = 30;
    private static ScrollOffset: number = 100;
    private checkScrollY(e: DragEvent) {
        if (!this.scrollableElement) return;
        var y = this.getScrollableElementPosY(e);
        if (y < 0) return;
        this.isScrollStop = true;
        var height = <number>this.scrollableElement["clientHeight"];
        if (y < DragDropHelper.ScrollOffset && y >= 0) {
            this.isScrollStop = false;
            this.doScrollY(-1);
        }
        if (height - y < DragDropHelper.ScrollOffset && height >= y) {
            this.isScrollStop = false;
            this.doScrollY(1);
        }
    }
    private doScrollY(step: number) {
        var el = this.scrollableElement;
        var scrollY = el.scrollTop + step;
        if (scrollY < 0) {
            this.isScrollStop = true;
            return;
        }
        el.scrollTop = scrollY;
        var self = this;
        if (!this.isScrollStop) {
            setTimeout(function () { self.doScrollY(step) }, DragDropHelper.ScrollDelay);
        }
    }
    private getScrollableElementPosY(e: DragEvent): number {
        if (!this.scrollableElement || !e.currentTarget) return -1;
        return e.offsetY + <number>e.currentTarget["offsetTop"] - this.scrollableElement.offsetTop - this.scrollableElement.scrollTop;
    }
    private getEvent(event: DragEvent): DragEvent {
        return event["originalEvent"] ? event["originalEvent"] : event;
    }
    private getY(element: HTMLElement): number {
        var result = 0;

        while (element) {
            result += (element.offsetTop - element.scrollTop + element.clientTop);
            element = <HTMLElement>element.offsetParent;
        }
        return result;
    }
    private prepareData(event: DragEvent, questionType: string, questionName: string, json: any = null) {
        var str = DragDropHelper.dataStart;
        if (questionType) str += "questiontype:" + questionType + ',';
        str += "questionname:" + questionName;
        if(!json) {
            var question = <Survey.QuestionBase>this.survey.getQuestionByName(questionName);
            if(question) {
                json = new Survey.JsonObject().toJsonObject(question);
                json["type"] = question.getType();
            }
        }
        this.setData(event, str);
        var targetQuestion = this.createTargetQuestion(questionType, questionName, json);
        this.ddTarget = new DragDropTargetElement(<Survey.Page>this.survey.currentPage, targetQuestion, null);
    }
    private setData(event: DragEvent, text: string) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", text);
            event.dataTransfer.effectAllowed = "copy";
        }
        DragDropHelper.dragData = { text: text };
    }
    private getData(event: DragEvent): any {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            var text = event.dataTransfer.getData("Text");
            if (text) {
                DragDropHelper.dragData.text = text;
            }
        }
        return DragDropHelper.dragData;
    }
    private clearData() {
        //this.ddTarget = null;
        DragDropHelper.dragData = {text: "", json: null};
        var prev = DragDropHelper.prevEvent;
        prev.element = null;
        prev.x = -1;
        prev.y = -1;
    }
}
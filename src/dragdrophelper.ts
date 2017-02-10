import * as Survey from "survey-knockout";

export class DragDropHelper {
    static dataStart: string = "surveyjs,";
    static dragData: any = {text: "", json: null };
    static prevEvent = { question: null, x: -1, y: -1 };
    private onModifiedCallback: () => any;
    private scrollableElement: HTMLElement = null;
    private sourceIndex: number = -1;
    constructor(public data: Survey.ISurvey, onModifiedCallback: () => any, scrollableElName: string = null) {
        this.onModifiedCallback = onModifiedCallback;
        this.scrollableElement = document.getElementById((scrollableElName ? scrollableElName : "scrollableDiv"));
    }
    public get survey(): Survey.Survey { return <Survey.Survey>this.data; }
    public startDragNewQuestion(event: DragEvent, questionType: string, questionName: string) {
        this.prepareData(event, questionType, questionName);
    }
    public startDragQuestion(event: DragEvent, questionName: string) {
        this.prepareData(event, null, questionName);
    }
    public startDragCopiedQuestion(event: DragEvent, questionName: string, questionJson: any) {
        this.prepareData(event, null, questionName, questionJson);
    }
    public isSurveyDragging(event: DragEvent): boolean {
        if (!event) return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    }
    public doDragDropOver(event: DragEvent, question: Survey.QuestionBase) {
        event = this.getEvent(event);
        this.checkScrollY(event);
        var targetQuestion = DragDropHelper.dragData.targetQuestion;
        if (!question || question == targetQuestion || !this.isSurveyDragging(event) || this.isSamePlace(event, question)) return;
        var index = this.getQuestionIndex(event, question);
        if (this.sourceIndex > -1) {
            if (this.sourceIndex == index || this.sourceIndex + 1 == index)  index = -1;
        }
        this.survey.currentPage["koDragging"](index);
    }
    public end() {
        this.isScrollStop = true;
        this.setIsDraggingSource(this.survey["koDraggingSource"](), false);
        this.survey["koDraggingSource"](null);
        this.survey.currentPage["koDragging"](-1);
        this.sourceIndex = -1;
        this.clearData();
    }
    public doDrop(event: DragEvent, question: Survey.QuestionBase = null) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.isSurveyDragging(event)) {
            var index = this.survey.currentPage["koDragging"]();
            var targetQuestion = DragDropHelper.dragData.targetQuestion;
            if (targetQuestion && index > -1) {
                var oldIndex = this.survey.currentPage.questions.indexOf(targetQuestion);
                if (oldIndex > -1 && oldIndex < index) {
                    index--;
                }
                this.moveQuestionTo(targetQuestion, index);
            }
        }
        this.end();
    }
    public doLeavePage(event: DragEvent) {
        event = this.getEvent(event);
        if (!this.scrollableElement) return;
        if (event.clientX <= 0 || event.clientY <= 0 ||
            event.clientX >= this.scrollableElement.offsetWidth || event.clientY >= this.scrollableElement.offsetHeight) {
            this.survey.currentPage["koDragging"](-1);
        }
    }
    public scrollToElement(el: HTMLElement) {
        if (!this.scrollableElement || !el) return;
        el.scrollIntoView(false);
    }
    private createTargetQuestion(questionType: string, questionName: string, json: any): Survey.QuestionBase {
        if (!questionName) return null;
        var targetQuestion = <Survey.QuestionBase>this.survey.getQuestionByName(questionName);
        this.sourceIndex = -1;
        if (targetQuestion) {
            this.sourceIndex = this.survey.currentPage.questions.indexOf(targetQuestion);
        }
        if (!targetQuestion) {
            if (json) {
                targetQuestion = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
                new Survey.JsonObject().toObject(json, targetQuestion);
                targetQuestion.name = questionName;
            }
            if (!targetQuestion && questionType) {
                targetQuestion = Survey.QuestionFactory.Instance.createQuestion(questionType, questionName);
            }
            targetQuestion.setData(this.survey);
            targetQuestion.renderWidth = "100%";
        }
        this.setIsDraggingSource(targetQuestion, true);
        return targetQuestion;
    }
    private setIsDraggingSource(question: any, val: any) {
        if (question && question["koIsDraggingSource"]) question["koIsDraggingSource"](val);
    }
    private getQuestionIndex(event: DragEvent, question: Survey.QuestionBase) {
        var page = this.survey.currentPage;
        if (!question) return page.questions.length;
        var index = page.questions.indexOf(question);
        event = this.getEvent(event);
        var height = <number>event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty('layerX')) {
            y = event.layerY - <number>event.currentTarget["offsetTop"];
        }
        if (y > height / 2) index++;
        return index;
    }
    private isSamePlace(event: DragEvent, question: Survey.QuestionBase): boolean {
        var prev = DragDropHelper.prevEvent;
        if (prev.question != question || Math.abs(event.clientX - prev.x) > 5 || Math.abs(event.clientY - prev.y) > 5) {
            prev.question = question;
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

    private moveQuestionTo(targetQuestion: Survey.QuestionBase, index: number) {
        if (targetQuestion == null) return;
        var page = this.survey.getPageByQuestion(targetQuestion);
        if (page == this.survey.currentPage && index == page.questions.indexOf(targetQuestion)) return;
        if (page) {
            page.removeQuestion(targetQuestion);
        }
        this.survey.currentPage.addQuestion(targetQuestion, index);
        if (this.onModifiedCallback) this.onModifiedCallback();
    }
    private getDataInfo(event: DragEvent): any {
        var data = this.getData(event);
        if (!data) return null;
        var text = data.text.substr(DragDropHelper.dataStart.length);
        var array = text.split(',');
        var result = {json: null};
        for (var i = 0; i < array.length; i++) {
            var item = array[i].split(':');
            result[item[0]] = item[1];
        }
        result.json = data.json;
        return result;
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
        this.setData(event, str, json);
        var targetQuestion = this.createTargetQuestion(questionType, questionName, json);
        DragDropHelper.dragData.targetQuestion = targetQuestion;
        this.survey["koDraggingSource"](targetQuestion);
    }
    private setData(event: DragEvent, text: string, json: any = null) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", text);
            event.dataTransfer.effectAllowed = "copy";
        }
        DragDropHelper.dragData = { text: text, json: json };
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
        DragDropHelper.dragData = {text: "", json: null, targetQuestion: null};
        var prev = DragDropHelper.prevEvent;
        prev.question = null;
        prev.x = -1;
        prev.y = -1;
    }
}
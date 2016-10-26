import * as Survey from "survey-knockout-bootstrap";

export class DragDropHelper {
    static dataStart: string = "surveyjs,";
    static dragData: any = {text: "", json: null };
    static prevEvent = { question: null, x: -1, y: -1 };
    private onModifiedCallback: () => any;
    constructor(public data: Survey.ISurvey, onModifiedCallback: () => any) {
        this.onModifiedCallback = onModifiedCallback;
    }
    public get survey(): Survey.Survey { return <Survey.Survey>this.data; }
    public startDragNewQuestion(event: DragEvent, questionType: string, questionName: string) {
        this.setData(event, DragDropHelper.dataStart + "questiontype:" + questionType + ",questionname:" + questionName);
    }
    public startDragQuestion(event: DragEvent, questionName: string) {
        this.setData(event, DragDropHelper.dataStart + "questionname:" + questionName);
    }
    public startDragCopiedQuestion(event: DragEvent, questionName: string, questionJson: any) {
        this.setData(event, DragDropHelper.dataStart + "questionname:" + questionName, questionJson);
    }
    public isSurveyDragging(event: DragEvent): boolean {
        if (!event) return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    }
    public doDragDropOver(event: DragEvent, question: Survey.QuestionBase) {
        event = this.getEvent(event);
        if (!question || !this.isSurveyDragging(event) || this.isSamePlace(event, question)) return;
        var index = this.getQuestionIndex(event, question);
        this.survey.currentPage["koDragging"](index);
    }
    public doDrop(event: DragEvent, question: Survey.QuestionBase = null) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (!this.isSurveyDragging(event)) return;
        this.survey.currentPage["koDragging"](-1);
        var index = this.getQuestionIndex(event, question);
        var dataInfo = this.getDataInfo(event);
        this.clearData();
        if (!dataInfo) return;
        var targetQuestion = null;
        var json = dataInfo["json"];
        if (json) {
            targetQuestion = Survey.QuestionFactory.Instance.createQuestion(json["type"], name);
            new Survey.JsonObject().toObject(json, targetQuestion);
            targetQuestion.name = dataInfo["questionname"];
        }
        if (!targetQuestion) {
            targetQuestion = <Survey.QuestionBase>this.survey.getQuestionByName(dataInfo["questionname"]);
        }
        if (!targetQuestion && dataInfo["questiontype"]) {
            targetQuestion = Survey.QuestionFactory.Instance.createQuestion(dataInfo["questiontype"], dataInfo["questionname"]);
        }
        if (!targetQuestion) return;
        this.moveQuestionTo(targetQuestion, index);
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
        if (y > height / 2) index++
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
    private getEvent(event: DragEvent): DragEvent {
        return event["originalEvent"] ? event["originalEvent"] : event;
    }
    private moveQuestionTo(targetQuestion: Survey.QuestionBase, index: number) {
        if (targetQuestion == null) return;
        var page = this.survey.getPageByQuestion(targetQuestion);
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
        DragDropHelper.dragData = {text: "", json: null};
        var prev = DragDropHelper.prevEvent;
        prev.question = null;
        prev.x = -1;
        prev.y = -1;
    }
}
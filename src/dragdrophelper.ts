import * as Survey from "survey-knockout";

export class DragDropTargetElement {
    constructor(public page: Survey.Page, public target: any, public source: any) {

    }
    public moveTo(destination: any, isBottom: boolean, isEdge: boolean = false): boolean {
        if(destination === this.target) return !this.target.isPanel;
        var destInfo = this.findInfo(destination, isEdge);
        if(!destInfo) {
            this.clear();
            return false;
        }
        var targetInfo = this.findInfo(this.target);
        this.updateInfo(destInfo, isBottom, isEdge);
        if(this.isInfoEquals(targetInfo, destInfo)) return true;
        this.clearByInfo(targetInfo);
        destInfo = this.findInfo(destination, isEdge);
        if(!destInfo) return false;
        this.updateInfo(destInfo, isBottom, isEdge);
        if(!this.canMove(destInfo)) return false;
        this.addInfo(destInfo);
        return true;
    }
    public doDrop() {
        var destInfo = this.findInfo(this.target);
        if(!destInfo) return;
        var index = this.getIndexByInfo(destInfo);
        destInfo.panel.addElement(this.getNewTargetElement(), index); 
        if(this.source) {
            var srcInfo = this.findInfo(this.source);
            var panel = srcInfo ? srcInfo.panel : this.page;
            panel.removeElement(this.source); 
        }
    }
    public clear() {
        this.clearByInfo(this.findInfo(this.target));
    }
    private getIndexByInfo(info: any) {
        if(!info) return 0;
        var rows = info.panel.koRows();
        var index = 0;
        for(var i = 0; i < info.rIndex; i ++) {
            index += rows[i]["koElements"]().length;
        }
        return index + info.elIndex;
    }
    private canMove(destInfo: any) : boolean {
        if(this.target.isPanel && destInfo.element) {
            if(this.target == destInfo.element || this.target.containsElement(destInfo.element)) return false;
            if(this.source && (this.source == destInfo.element || this.source.containsElement(destInfo.element))) return false;
        }
        if(!this.source) return true;
        var srcInfo = this.findInfo(this.source);
        if(srcInfo == null || srcInfo.panel != destInfo.panel) return true;
        var srcIndex = this.getIndexByInfo(srcInfo);
        var destIndex = this.getIndexByInfo(destInfo);
        var diff = destIndex - srcIndex;
        return diff < 0 || diff > 1;
    }
    private isLastElementInRow(info: any) {
        return info.elIndex == info.panel["koRows"]()[info.rIndex]["koElements"]().length - 1;
    }
    private updateInfo(info: any, isBottom: boolean, isEdge: boolean) {
        if(info.rIndex < 0) return; 
        if(this.target.startWithNewLine) {
            if(isBottom) info.rIndex ++;
        } else {
            if(isBottom) {
                info.elIndex ++;
            } else {
                if(info.elIndex == 0 && info.rIndex > 0) {
                    info.rIndex --;
                    info.elIndex = info.panel["koRows"]()[info.rIndex]["koElements"]().length;
                }
            }
        }
    }
    private addInfo(info: any) {
        if(this.target.startWithNewLine || info.elIndex < 1 
            || info.rIndex < 0 || info.rIndex >= info.panel.koRows().length) {
            this.AddInfoAsRow(info);
        } else {
            var row = info.panel.koRows()[info.rIndex];
            var elements = row["koElements"]();
            if(info.elIndex < elements.length) {
                elements.splice(info.elIndex, 0, this.target);
            } else {
                elements.push(this.target);
            }
            row["koElements"](elements);
            row.updateVisible();
        }
    }
    private AddInfoAsRow(info: any) {
        var row = new Survey.QuestionRow(info.panel);
        if(this.target.isPanel) {
            this.target.parent = info.panel;
        }
        row.addElement(this.target);
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
        if(info.rIndex < 0 || info.rIndex >= rows.length) return;
        var row = rows[info.rIndex];
        var elements = row["koElements"](); 
        if(row["koElements"]().length > 1) {
            elements.splice(info.elIndex, 1);
            row["koElements"](elements);
            row.updateVisible();
        } else {
            rows.splice(info.rIndex, 1);
            info.panel.koRows(rows);
        }
    }
    private isInfoEquals(a: any, b: any) : boolean {
        if(a == null || b == null) return false;
        return a.panel === b.panel && a.rIndex === b.rIndex && a.elIndex === b.elIndex;
    }
    private findInfo(el: any, isEdge: boolean = false): any {
        return this.findInfoInPanel(this.page, el, isEdge);
    }
    private findInfoInPanel(panel: Survey.PanelModelBase, el: any, isEdge: boolean): any {
        if(el == panel) {
            var parent = panel;
            if(this.target.isPanel && panel.parent) {
                parent = panel.parent;
            }
            return { panel: parent, row: null, rIndex: 0, elIndex: 0, element: panel };
        }
        var rows = panel["koRows"]();
        for(var i = 0; i < rows.length; i ++) {
            var row = rows[i];
            var elements = row["koElements"]();
            for(var j = 0; j < elements.length; j ++) {
                if(!isEdge && elements[j].isPanel) {
                    var res = this.findInfoInPanel(elements[j], el, isEdge);
                    if(res) {
                        if(res.element == elements[j]) {
                            res.rIndex = i;
                            res.elIndex = j;
                        }
                        return res;
                    }
                } else {
                    if(elements[j] == el) return { panel: panel, row: row, rIndex: i, elIndex: j, element: elements[j] };
                }
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
    public static edgeHeight: number = 20;
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
    public startDragQuestion(event: DragEvent, element: any) {
        var json = new Survey.JsonObject().toJsonObject(element);
        json["type"] = element.getType();
        this.prepareData(event, element.name, json);
        this.ddTarget.source = element;
    }
    public startDragToolboxItem(event: DragEvent, elementName: string, elementJson: any) {
        this.prepareData(event,  elementName, elementJson);
    }
    public isSurveyDragging(event: DragEvent): boolean {
        if (!event) return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    }
    public doDragDropOver(event: DragEvent, element: any, isEdge: boolean = false) {
        event = this.getEvent(event);
        this.checkScrollY(event);
        if (!element || !this.isSurveyDragging(event) || this.isSamePlace(event, element)) return;
        var bottomInfo = this.isBottom(event, element);
        isEdge = isEdge && bottomInfo.isEdge;
        this.ddTarget.moveTo(element, bottomInfo.isBottom, isEdge);
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
    private createTargetElement(elementName: string, json: any): any {
        if (!elementName || !json) return null;
        var targetElement = null;
        targetElement = Survey.JsonObject.metaData.createClass(json["type"]);
        new Survey.JsonObject().toObject(json, targetElement);
        targetElement.name = elementName;
        targetElement.setData(this.survey);
        targetElement.renderWidth = "100%";
        targetElement["koIsDragging"](true);
        return targetElement;
    }
    private isBottom(event: DragEvent, surveyEl: any): any {
        event = this.getEvent(event);
        var height = <number>event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty('layerX')) {
            y = event.layerY - <number>event.currentTarget["offsetTop"];
        }

        return { isBottom: y > height / 2, isEdge: y <= DragDropHelper.edgeHeight || height - y <= DragDropHelper.edgeHeight};
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
    private prepareData(event: DragEvent, elementName: string, json) {
        var str = DragDropHelper.dataStart + "questionname:" + elementName;
        this.setData(event, str);
        var targetElement = this.createTargetElement(elementName, json);
        this.ddTarget = new DragDropTargetElement(<Survey.Page>this.survey.currentPage, targetElement, null);
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
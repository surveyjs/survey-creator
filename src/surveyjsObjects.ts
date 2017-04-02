import * as ko from "knockout";
import {editorLocalization} from "./editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyForDesigner extends Survey.Survey {
    private selectedElementValue: any;
    editQuestionClick: any; copyQuestionClick: any; fastCopyQuestionClick: any; deleteCurrentObjectClick: any;
    public  onSelectedElementChanged: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onEditQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onCopyQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onFastCopyQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onDeleteCurrentObject: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    constructor(jsonObj: any = null, renderedElement: any = null, css: any = null) {
        super(jsonObj, renderedElement, css);
        var self = this;
        this.onAfterRenderPage.add((sender: Survey.Survey, options) => { options.page["onAfterRenderPage"](options.htmlElement); });
        this.onAfterRenderQuestion.add((sender: Survey.Survey, options) => { options.question["onAfterRenderQuestion"](options.htmlElement); });
        this.onAfterRenderPanel.add((sender: Survey.Survey, options) => { options.panel["onAfterRenderPanel"](options.htmlElement); });
        this.editQuestionClick = function () { self.onEditQuestion.fire(self, null); };
        this.copyQuestionClick = function () { self.onCopyQuestion.fire(self, null); };
        this.fastCopyQuestionClick = function () { self.onFastCopyQuestion.fire(self, null); };
        this.deleteCurrentObjectClick = function () { self.onDeleteCurrentObject.fire(self, null); }
    }
    public get selectedElement(): any {return this.selectedElementValue;}
    public set selectedElement(value: any) {
        if (value == this.selectedElementValue) return;
        var oldValue = this.selectedElementValue;
        this.selectedElementValue = value;
        if (oldValue != null) {
            oldValue["onSelectedElementChanged"]();
        }
        if (this.selectedElementValue != null) {
            this.selectedElementValue["onSelectedElementChanged"]();
        }
        this.onSelectedElementChanged.fire(this, { 'oldElement': oldValue, 'newElement': value });
    }
    public getEditorLocString(value: string): string {
        return editorLocalization.getString(value);
    }
}

function panelBaseOnCreating(self: any) {
    self.dragEnterCounter = 0;
    self.emptyElement = null;
    self.koRows.subscribe(function(changes) {
        if(self.emptyElement) {
            self.emptyElement.style.display = self.koRows().length > 0 ? "none" : "";
        }
    });
}

function elementOnCreating(self: any, className: string) {
    self.dragDropHelperValue = null;
    self.dragDropHelper = function () {
        if (self.dragDropHelperValue == null) {
            self.dragDropHelperValue = self.data["dragDropHelper"];
        }
        return self.dragDropHelperValue;
    };
    self.renderedElement = null;
    self.addonsElement = null;
    self.koIsDragging = ko.observable(false);
    self.koIsSelected = ko.observable(false);
    self.koIsDragging.subscribe(function (newValue) { 
        if(self.renderedElement) {
            self.renderedElement.style.opacity = newValue ? 0.4 : 1;
        }
    });
    self.koIsSelected.subscribe(function (newValue) { 
        if(self.renderedElement) {
            var newClass = className;
            if(newValue) newClass += " svd_q_selected ";
            self.renderedElement.className = newClass;
        }
        if(self.addonsElement) {
            self.addonsElement.style.display = newValue ? "": "none";    
        }
    });
}

function addEmptyPanelElement(root: HTMLElement, dragDropHelper: any, self: any): HTMLElement {
    var eDiv: HTMLDivElement = document.createElement("div");
    eDiv.className = "well";
    eDiv.ondragover = function(e) { 
        dragDropHelper.doDragDropOver(e, self);
    };
    var eSpan: HTMLSpanElement = document.createElement("span");
    eSpan.textContent = self.data.getEditorLocString('survey.dropQuestion');
    eDiv.appendChild(eSpan);
    root.appendChild(eDiv);
    return eDiv;
}

const question_design_class: string = "svd_question well well-sm svd_q_design_border";
const panel_design_class: string = "svd_question well well-sm svd_q_design_border";

function createQuestionDesignItem(onClick: any, text: string): HTMLLIElement {
    var res = <HTMLLIElement>document.createElement("li");
    var btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = onClick;
    btn.className = "btn btn-primary btn-xs";
    res.appendChild(btn);
    return res;
}

function createElementAddons(data: any): HTMLElement {
    var main: HTMLDivElement = document.createElement("div");
    main.className = "svd_question_menu btn-group";
    main["role"] = "group";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary  btn-xs";
    btn.onclick = function(e) { data.editQuestionClick();};
    var span = document.createElement("span");
    span.innerText = "Edit"; //TODO
    btn.appendChild(span);
    main.appendChild(btn);
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary  btn-xs dropdown-toggle";
    btn.setAttribute("data-toggle", "dropdown");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    span = document.createElement("span");
    span.className = "glyphicon glyphicon-option-horizontal";
    btn.appendChild(span);
    main.appendChild(btn);
    var ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    ul.appendChild(createQuestionDesignItem(data.copyQuestionClick, data.getEditorLocString('survey.addToToolbox')));
    ul.appendChild(createQuestionDesignItem(data.fastCopyQuestionClick, data.getEditorLocString('survey.copy')));
    ul.appendChild(createQuestionDesignItem(data.deleteCurrentObjectClick, data.getEditorLocString('survey.deleteQuestion')));
    main.appendChild(ul);
    return main;
}

//var lastElementOnClick: HTMLElement = null;

function elementOnAfterRendering(el: any, self: any, className: string, disable: boolean) {
    self.renderedElement = el;
    var newClass = className;
    if(self.koIsSelected()) newClass += " svd_q_selected";
    
    el.className = newClass;
    el.style.opacity = self.koIsDragging() ? 0.4 : 1;
    el.draggable = true;
    el.ondragover = function(e){ 
        if(!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().doDragDropOver(e, self, true); 
        }
    };
    el.ondrop = function(e){ 
        if(!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().doDrop(e); 
        }
    };
    el.ondragstart = function (e) { 
        if(!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().startDragQuestion(e, self); 
        }
    };
    el.ondragend = function (e) { 
        self.dragDropHelper().end(); 
    };
    el.onclick = function(e) { 
        if(!e["markEvent"]) {
            e["markEvent"] = true;
            self.data["selectedElement"] = self; 
        }
    };
    el.onkeydown = function(e) {
        if(e.witch == 46) self.data.deleteCurrentObjectClick(); 
        return true;
    }
    if(disable) {
        var childs = el.childNodes;
        for(var i = 0; i < childs.length; i ++) {
            if(childs[i].style) childs[i].style.pointerEvents = "none";
        }
    }
    self.addonsElement = createElementAddons(self.data);
    self.addonsElement.style.display = self.koIsSelected() ? "": "none";    
    el.appendChild(self.addonsElement);
}

Survey.Page.prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
};

Survey.Page.prototype["onAfterRenderPage"] = function(el) {
    if(!this.data.isDesignMode) return;
    var self = this;
    var dragDropHelper = this.data["dragDropHelper"];
    this.dragEnterCounter = 0;
    el.ondragenter = function (e) { 
        e.preventDefault(); 
        self.dragEnterCounter++; 
    };
    el.ondragleave = function (e) { 
        self.dragEnterCounter--; 
        if (self.dragEnterCounter === 0) 
            dragDropHelper.doLeavePage(e); 
    };
    el.ondragover = function(e){ return false; };
    el.ondrop = function(e){ dragDropHelper.doDrop(e); };
    if(this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, dragDropHelper, self);
    }
}

Survey.Panel.prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
    elementOnCreating(this, panel_design_class);
};

Survey.Panel.prototype["onAfterRenderPanel"] = function(el) {
    if(!this.data.isDesignMode) return;
    var self = this;
    if(this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, self.dragDropHelper(), self);
    }
    elementOnAfterRendering(el, this, panel_design_class, this.koIsDragging());
}

Survey.Panel.prototype["onSelectedElementChanged"] = function() {
    if (this.data == null) return;
    this.koIsSelected(this.data["selectedElementValue"] == this);
};

Survey.QuestionBase.prototype["onCreating"] = function () {
    elementOnCreating(this, question_design_class);
};

Survey.QuestionBase.prototype["onAfterRenderQuestion"] = function(el) {
    if(!this.data.isDesignMode) return;
    elementOnAfterRendering(el, this, question_design_class, true);
};

Survey.QuestionBase.prototype["onSelectedElementChanged"] = function() {
    if (this.data == null) return;
    this.koIsSelected(this.data["selectedElementValue"] == this);
};
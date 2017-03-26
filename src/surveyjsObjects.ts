import * as ko from "knockout";
import {editorLocalization} from "./editorLocalization";
import * as Survey from "survey-knockout";

export class SurveyForDesigner extends Survey.Survey {
    public selectedQuestionValue: any;
    editQuestionClick: any; copyQuestionClick: any; fastCopyQuestionClick: any; deleteCurrentObjectClick: any;
    public  onSelectedQuestionChanged: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onEditQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onCopyQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onFastCopyQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    public onDeleteCurrentObject: Survey.Event<(sender: Survey.Survey, options: any) => any, any> = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
    constructor(jsonObj: any = null, renderedElement: any = null, css: any = null) {
        super(jsonObj, renderedElement, css);
        var self = this;
        this.onAfterRenderPage.add((sender: Survey.Survey, options) => { options.page["onAfterRenderPage"](options.htmlElement); });
        this.onAfterRenderQuestion.add((sender: Survey.Survey, options) => { options.question["onAfterRenderQuestion"](options.htmlElement); });
        this.editQuestionClick = function () { self.onEditQuestion.fire(self, null); };
        this.copyQuestionClick = function () { self.onCopyQuestion.fire(self, null); };
        this.fastCopyQuestionClick = function () { self.onFastCopyQuestion.fire(self, null); };
        this.deleteCurrentObjectClick = function () { self.onDeleteCurrentObject.fire(self, null); }
    }
    public setselectedQuestion(value: Survey.QuestionBase) {
        if (value == this.selectedQuestionValue) return;
        var oldValue = this.selectedQuestionValue;
        this.selectedQuestionValue = value;
        if (oldValue != null) {
            oldValue["onSelectedQuestionChanged"]();
        }
        if (this.selectedQuestionValue != null) {
            this.selectedQuestionValue["onSelectedQuestionChanged"]();
        }
        this.onSelectedQuestionChanged.fire(this, { 'oldSelectedQuestion': oldValue, 'newSelectedQuestion': value });
    }
    public getEditorLocString(value: string): string {
        return editorLocalization.getString(value);
    }
}

Survey.Page.prototype["onCreating"] = function () {
    var self = this;
    this.dragEnterCounter = 0;
    this.emptyElement = null;
    this.koRows.subscribe(function(changes) {
        if(self.emptyElement) {
            self.emptyElement.style.display = self.koRows().length > 0 ? "none" : "";
        }
    });
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
        var eDiv: HTMLDivElement = document.createElement("div");
        eDiv.className = "well";
        eDiv.ondragover = function(e) { 
            dragDropHelper.doDragDropOver(e, self); 
        };
        var eSpan: HTMLSpanElement = document.createElement("span");
        eSpan.textContent = this.data.getEditorLocString('survey.dropQuestion');
        eDiv.appendChild(eSpan);
        el.appendChild(eDiv);
        this.emptyElement = eDiv;
    }
}

const question_design_class: string = "svd_question well well-sm svd_q_design_border";

Survey.QuestionBase.prototype["onCreating"] = function () {
    var self = this;
    this.renderedElement = null;
    this.addonsElement = null;
    this.dragDropHelperValue = null;
    this.koIsDragging = ko.observable(false);
    this.dragDropHelper = function () {
        if (self.dragDropHelperValue == null) {
            self.dragDropHelperValue = self.data["dragDropHelper"];
        }
        return self.dragDropHelperValue;
    };
    this.koIsSelected = ko.observable(false);
    this.koIsDragging.subscribe(function (newValue) { 
        if(self.renderedElement) {
            self.renderedElement.style.opacity = newValue ? 0.4 : 1;
        }
    });
    this.koIsSelected.subscribe(function (newValue) { 
        if(self.renderedElement) {
            var newClass = question_design_class;
            if(newValue) newClass += " svd_q_selected ";
            self.renderedElement.className = newClass;
        }
        if(self.addonsElement) {
            self.addonsElement.style.display = newValue ? "": "none";    
        }
    });
};

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

Survey.QuestionBase.prototype["onAfterRenderQuestion"] = function(el) {
    if(!this.data.isDesignMode) return;
    this.renderedElement = el;
    var self = this;
    var newClass = question_design_class;
    if(this.koIsSelected()) newClass += " svd_q_selected ";
    
    el.className = newClass;
    el.style.opacity = this.koIsDragging() ? 0.4 : 1;
    el.draggable = true;
    el.ondragover = function(e){ self.dragDropHelper().doDragDropOver(e, self); };
    el.ondrop = function(e){ self.dragDropHelper().doDrop(e); };
    el.ondragstart = function (e) { self.dragDropHelper().startDragQuestion(e, self); };
    el.ondragend = function (e) { self.dragDropHelper().end(); };
    el.onclick = function(e) { self.data["setselectedQuestion"](self); };
    el.onkeydown = function(e) {
        if(e.witch == 46) self.data.deleteCurrentObjectClick(); 
        return true;
    }
    var childs = el.childNodes;
    for(var i = 0; i < childs.length; i ++) {
        if(childs[i].style) childs[i].style.pointerEvents = "none";
    }
    this.addonsElement = createElementAddons(self.data);
    this.addonsElement.style.display = this.koIsSelected() ? "": "none";    
    el.appendChild(this.addonsElement);
    
};

Survey.QuestionBase.prototype["onSelectedQuestionChanged"] = function() {
    if (this.data == null) return;
    this.koIsSelected(this.data["selectedQuestionValue"] == this);
};
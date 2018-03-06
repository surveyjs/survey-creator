import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import * as Survey from "survey-knockout";
import createDdmenu from "./utils/ddmenu";

export interface ISurveyObjectMenuItem {
  name: string;
  text: string;
  onClick: (obj: Survey.Base) => any;
}

export class SurveyForDesigner extends Survey.Survey {
  private selectedElementValue: any;
  editQuestionClick: any;
  public onSelectedElementChanged: Survey.Event<
    (sender: Survey.Survey, options: any) => any,
    any
  > = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
  public onEditButtonClick: Survey.Event<
    (sender: Survey.Survey, options: any) => any,
    any
  > = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
  public onGetMenuItems: Survey.Event<
    (sender: Survey.Survey, options: any) => any,
    any
  > = new Survey.Event<(sender: Survey.Survey, options: any) => any, any>();
  public onUpdateElementAllowingOptions: (options: any) => any;
  constructor(
    jsonObj: any = null,
    renderedElement: any = null,
    css: any = null
  ) {
    super(jsonObj, renderedElement, css);
    var self = this;
    this.setDesignMode(true);
    this.onAfterRenderPage.add((sender: Survey.Survey, options) => {
      options.page["onAfterRenderPage"](options.htmlElement);
    });
    this.onAfterRenderQuestion.add((sender: Survey.Survey, options) => {
      options.question["onAfterRenderQuestion"](options.htmlElement);
    });
    this.onAfterRenderPanel.add((sender: Survey.Survey, options) => {
      options.panel["onAfterRenderPanel"](options.htmlElement);
    });
    this.editQuestionClick = function() {
      self.onEditButtonClick.fire(self, null);
    };
    this.onUpdateQuestionCssClasses.add(onUpdateQuestionCssClasses);
  }
  public updateElementAllowingOptions(obj: Survey.Base) {
    if (this.onUpdateElementAllowingOptions && obj["allowingOptions"]) {
      obj["allowingOptions"].obj = obj;
      this.onUpdateElementAllowingOptions(obj["allowingOptions"]);
    }
  }
  public getMenuItems(obj: Survey.Base): Array<ISurveyObjectMenuItem> {
    var items = [];
    var options = { obj: obj, items: items };
    this.onGetMenuItems.fire(this, options);
    return options.items;
  }
  public get selectedElement(): any {
    return this.selectedElementValue;
  }
  public set selectedElement(value: any) {
    if (value && value.selectedElementInDesign)
      value = value.selectedElementInDesign;
    if (value == this.selectedElementValue) return;
    var oldValue = this.selectedElementValue;
    this.selectedElementValue = value;
    if (oldValue != null && oldValue["onSelectedElementChanged"]) {
      oldValue["onSelectedElementChanged"]();
    }
    if (
      this.selectedElementValue != null &&
      this.selectedElementValue["onSelectedElementChanged"]
    ) {
      this.selectedElementValue["onSelectedElementChanged"]();
    }
    this.onSelectedElementChanged.fire(this, {
      oldElement: oldValue,
      newElement: value
    });
  }
  public getEditorLocString(value: string): string {
    return editorLocalization.getString(value);
  }
}

function getSurvey(el: any): any {
  if (!el) return null;
  var res = el["survey"];
  if (res) return res;
  return el["data"];
}

function panelBaseOnCreating(self: any) {
  self.dragEnterCounter = 0;
  self.emptyElement = null;
  self.koRows.subscribe(function(changes) {
    if (self.emptyElement) {
      self.emptyElement.style.display = self.koRows().length > 0 ? "none" : "";
    }
  });
}

function elementOnCreating(self: any, className: string) {
  self.allowingOptions = {
    allowDelete: true,
    allowEdit: true,
    allowCopy: true,
    allowAddToToolbox: true,
    allowDragging: true,
    allowChangeType: true
  };
  self.dragDropHelperValue = null;
  self.dragDropHelper = function() {
    if (self.dragDropHelperValue == null) {
      self.dragDropHelperValue = getSurvey(self)["dragDropHelper"];
    }
    return self.dragDropHelperValue;
  };
  self.renderedElement = null;
  self.addonsElement = null;
  self.koIsDragging = ko.observable(false);
  self.koIsSelected = ko.observable(false);
  self.koIsDragging.subscribe(function(newValue) {
    if (self.renderedElement) {
      self.renderedElement.style.opacity = newValue ? 0.4 : 1;
    }
  });
  self.koIsSelected.subscribe(function(newValue) {
    if (self.renderedElement) {
      var newClass = className;
      if (newValue) newClass += " svd_q_selected ";
      self.renderedElement.className = newClass;
    }
    if (self.addonsElement) {
      self.addonsElement.style.display = newValue ? "" : "none";
    }
  });
}

function addEmptyPanelElement(
  root: HTMLElement,
  dragDropHelper: any,
  self: any
): HTMLElement {
  var eDiv: HTMLDivElement = document.createElement("div");
  eDiv.className = "well card card-block";
  eDiv.ondragover = function(e) {
    dragDropHelper.doDragDropOver(e, self);
  };
  var eSpan: HTMLSpanElement = document.createElement("span");
  eSpan.textContent = getSurvey(self).getEditorLocString("survey.dropQuestion");
  eDiv.appendChild(eSpan);
  root.appendChild(eDiv);
  return eDiv;
}

const question_design_class: string =
  "sv_qstn svd_question well well-sm card card-block svd_q_design_border";
const panel_design_class: string =
  "sv_p_container svd_question well well-sm card card-block svd_q_design_border";

function createQuestionDesignItem(obj: any, item: any): HTMLLIElement {
  var res = <HTMLLIElement>document.createElement("li");
  var btn = document.createElement("button");
  btn.innerText = item.text;
  var onClick = item.onClick;
  btn.onclick = function() {
    onClick(obj, item);
  };
  btn.className = "btn btn-primary btn-sm btn-xs";
  res.appendChild(btn);
  return res;
}

function createElementAddons(
  obj: Survey.Base,
  data: any,
  isPanel: boolean
): HTMLElement {
  var main: HTMLDivElement = document.createElement("div");
  main.className = "svd_question_menu btn-group";
  main["role"] = "group";
  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-primary btn-sm btn-xs";
  btn.onclick = function(e) {
    data.editQuestionClick();
  };
  var span = document.createElement("span");
  span.innerText = data.getEditorLocString("survey.edit");
  btn.appendChild(span);
  if (obj["allowingOptions"] && obj["allowingOptions"].allowEdit) {
    main.appendChild(btn);
  }

  var nodes = [];
  var menuItems = data.getMenuItems(obj);
  if (menuItems.length > 0) {
    for (var i = 0; i < menuItems.length; i++) {
      nodes.push(createQuestionDesignItem(obj, menuItems[i]));
    }
    var ddmenu = createDdmenu(nodes, "element-addons");

    main.appendChild(ddmenu);
  }

  return main;
}

//var lastElementOnClick: HTMLElement = null;

function elementOnAfterRendering(
  el: any,
  self: any,
  className: string,
  isPanel: boolean,
  disable: boolean
) {
  self.renderedElement = el;
  getSurvey(self).updateElementAllowingOptions(self);
  var newClass = className;
  if (self.koIsSelected()) newClass += " svd_q_selected";

  el.className = newClass;
  el.style.opacity = self.koIsDragging() ? 0.4 : 1;
  el.draggable = self.allowingOptions.allowDragging;
  el.ondragover = function(e) {
    if (!self.allowingOptions.allowDragging) return false;
    if (!e["markEvent"]) {
      e["markEvent"] = true;
      self.dragDropHelper().doDragDropOver(e, self, true);
      return false;
    }
  };
  el.ondrop = function(e) {
    if (!e["markEvent"]) {
      e["markEvent"] = true;
      self.dragDropHelper().doDrop(e);
    }
  };
  el.ondragstart = function(e) {
    if (!self.allowingOptions.allowDragging) return false;
    if (!e["markEvent"]) {
      e["markEvent"] = true;
      self.dragDropHelper().startDragQuestion(e, self);
    }
  };
  el.ondragend = function(e) {
    self.dragDropHelper().end();
  };
  el.onclick = function(e) {
    if (!e["markEvent"]) {
      e["markEvent"] = true;
      if (self.parent) {
        getSurvey(self)["selectedElement"] = self;
      }
    }
  };
  // el.onkeydown = function(e) {
  //   if (e.witch == 46) getSurvey(self).deleteCurrentObjectClick();
  //   return true;
  // };
  disable = disable && !(self.getType() == "paneldynamic"); //TODO
  if (disable) {
    var childs = el.childNodes;
    for (var i = 0; i < childs.length; i++) {
      if (childs[i].style) childs[i].style.pointerEvents = "none";
    }
  }
  if (!self.selectedElementInDesign || self.selectedElementInDesign === self) {
    self.addonsElement = createElementAddons(self, getSurvey(self), isPanel);
    self.addonsElement.style.display = self.koIsSelected() ? "" : "none";
    el.appendChild(self.addonsElement);
  }
  addAdorner(el, self);
}

var adornersConfig = {};

export function registerAdorner(name, adorner) {
  adornersConfig[name] = adorner;
}

function onUpdateQuestionCssClasses(survey, options) {
  var classes = options.cssClasses;
  Object.keys(adornersConfig).forEach(element => {
    classes[element] = adornersConfig[element].getMarkerClass(options.question);
  });
}

function addAdorner(node, model) {
  Object.keys(adornersConfig).forEach(element => {
    var elementClass = adornersConfig[element].getMarkerClass(model);
    if (!!elementClass) {
      var elements = node.querySelectorAll("." + elementClass);
      if (elements.length > 0) {
        adornersConfig[element].afterRender(
          elements,
          model,
          getSurvey(model).getEditor()
        );
      }
    }
  });
}

Survey.Page.prototype["onCreating"] = function() {
  panelBaseOnCreating(this);
};

Survey.Page.prototype["onAfterRenderPage"] = function(el) {
  if (!getSurvey(this).isDesignMode) return;
  var self = this;
  var dragDropHelper = getSurvey(this)["dragDropHelper"];
  this.dragEnterCounter = 0;
  el.ondragenter = function(e) {
    e.preventDefault();
    self.dragEnterCounter++;
  };
  el.ondragleave = function(e) {
    self.dragEnterCounter--;
    if (self.dragEnterCounter === 0) dragDropHelper.doLeavePage(e);
  };
  el.ondragover = function(e) {
    return false;
  };
  el.ondrop = function(e) {
    dragDropHelper.doDrop(e);
  };
  // if (this.elements.length == 0) {
  //   this.emptyElement = addEmptyPanelElement(el, dragDropHelper, self);
  // }
};

Survey.Panel.prototype["onCreating"] = function() {
  panelBaseOnCreating(this);
  elementOnCreating(this, panel_design_class);
};

Survey.Panel.prototype["onAfterRenderPanel"] = function(el) {
  if (!getSurvey(this).isDesignMode) return;
  var rows = this.koRows();
  var self = this;
  if (this.elements.length == 0) {
    this.emptyElement = addEmptyPanelElement(el, self.dragDropHelper(), self);
  }
  elementOnAfterRendering(
    el,
    this,
    panel_design_class,
    true,
    this.koIsDragging()
  );
};

Survey.Panel.prototype["onSelectedElementChanged"] = function() {
  if (getSurvey(this) == null) return;
  this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};

Survey.QuestionBase.prototype["onCreating"] = function() {
  elementOnCreating(this, question_design_class);
};

Survey.QuestionBase.prototype["onAfterRenderQuestion"] = function(el) {
  if (!getSurvey(this).isDesignMode) return;
  elementOnAfterRendering(el, this, question_design_class, false, true);
};

Survey.QuestionBase.prototype["onSelectedElementChanged"] = function() {
  if (getSurvey(this) == null) return;
  this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};

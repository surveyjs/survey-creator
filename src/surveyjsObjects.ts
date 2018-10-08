import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import * as Survey from "survey-knockout";
import { findParentNode } from "./utils/utils";
import { StylesManager } from "./stylesmanager";

export interface ISurveyObjectMenuItem {
  name: string;
  text: string;
  onClick: (obj: Survey.Base) => any;
  icon?: string | (() => string);
  hasTitle?: boolean;
  template?: string;
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
  public onElementDoubleClick: Survey.Event<
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
    this.onUpdatePanelCssClasses.add(onUpdateQuestionCssClasses);
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
  public doElementDoubleClick(obj: Survey.Base) {
    this.onElementDoubleClick.fire(this, { element: obj });
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
  self.rowCount = ko.computed(function() {
    var rows = !!self["koRow"] ? self["koRows"]() : self.rows;
    return rows.length;
  }, self);
  self.rowCount.subscribe(function(value) {
    if (self.emptyElement) {
      self.emptyElement.style.display = value > 0 ? "none" : "";
    }
  });
}

function elementOnCreating(surveyElement: any) {
  surveyElement.allowingOptions = {
    allowDelete: true,
    allowEdit: true,
    allowCopy: true,
    allowAddToToolbox: true,
    allowDragging: true,
    allowChangeType: true,
    allowShowHideTitle: true,
    allowChangeRequired: true
  };
  surveyElement.dragDropHelperValue = null;
  surveyElement.dragDropHelper = function() {
    if (surveyElement.dragDropHelperValue == null) {
      surveyElement.dragDropHelperValue = getSurvey(surveyElement)[
        "dragDropHelper"
      ];
    }
    return surveyElement.dragDropHelperValue;
  };
  surveyElement.renderedElement = null;
  surveyElement.koIsDragging = ko.observable(false);
  surveyElement.koIsSelected = ko.observable(false);
  surveyElement.koIsDragging.subscribe(function(newValue) {
    if (surveyElement.renderedElement) {
      surveyElement.renderedElement.style.opacity = newValue ? 0.4 : 1;
    }
  });
  surveyElement.koIsSelected.subscribe(function(newValue) {
    if (surveyElement.renderedElement) {
      if (newValue) {
        surveyElement.renderedElement.classList.add(
          "svd_q_selected",
          "svd-main-border-color"
        );
      } else {
        surveyElement.renderedElement.classList.remove(
          "svd_q_selected",
          "svd-main-border-color"
        );
      }
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

function elementOnAfterRendering(
  domElement: any,
  surveyElement: any,
  isPanel: boolean,
  disable: boolean
) {
  surveyElement.renderedElement = domElement;
  surveyElement.renderedElement.classList.add("svd_question");
  if (StylesManager.currentTheme() === "bootstrap") {
    surveyElement.renderedElement.classList.add("svd-dark-bg-color");
  }
  surveyElement.renderedElement.classList.add("svd_q_design_border");
  getSurvey(surveyElement).updateElementAllowingOptions(surveyElement);
  if (surveyElement.koIsSelected())
    surveyElement.renderedElement.classList.add(
      "svd_q_selected",
      "svd-main-border-color"
    );
  surveyElement.dragDropHelper().attachToElement(domElement, surveyElement);
  domElement.tabindex = "0";
  domElement.onclick = function(e) {
    if (!e["markEvent"]) {
      e["markEvent"] = true;
      if (surveyElement.parent) {
        getSurvey(surveyElement)["selectedElement"] = surveyElement;
      }
    }
  };
  domElement.onkeyup = function(e) {
    var char = e.which || e.keyCode;
    if (char === 0x13 || char === 0x20) {
      domElement.click();
    }
  };
  // el.onkeydown = function(e) {
  //   if (e.witch == 46) getSurvey(surveyElement).deleteCurrentObjectClick();
  //   return true;
  // };
  domElement.ondblclick = function(e) {
    getSurvey(surveyElement).doElementDoubleClick(surveyElement);
  };
  disable = disable && !(surveyElement.getType() == "paneldynamic"); //TODO
  if (disable) {
    var childs = domElement.childNodes;
    for (var i = 0; i < childs.length; i++) {
      if (childs[i].style) childs[i].style.pointerEvents = "none";
    }
  }
  var setTabIndex = element => {
    element.tabIndex = -1;
  };
  ["input", "select", "textarea"].forEach(sel => {
    var elements = domElement.querySelectorAll(sel);
    for (var i = 0; i < elements.length; i++) {
      setTabIndex(elements[i]);
    }
  });

  addAdorner(domElement, surveyElement);
}

var adornersConfig: { [index: string]: any[] } = {};

export function registerAdorner(name, adorner) {
  if (!adornersConfig[name]) {
    adornersConfig[name] = [];
  }
  adornersConfig[name].push(adorner);
}
export function removeAdorners(names: string[] = undefined) {
  if (names !== undefined) {
    (names || []).forEach(name => delete adornersConfig[name]);
  } else {
    adornersConfig = {};
  }
}

function onUpdateQuestionCssClasses(survey, options) {
  var classes = options.panel ? options.cssClasses.panel : options.cssClasses;
  Object.keys(adornersConfig).forEach(element => {
    adornersConfig[element].forEach(adorner => {
      var classesElementName = adorner.getElementName(
        options.question || options.panel
      );
      var adornerMarkerClass = adorner.getMarkerClass(
        options.question || options.panel
      );

      classes[classesElementName] = applyAdornerClass(
        classes[classesElementName],
        adornerMarkerClass
      );
    });
  });
}

export function applyAdornerClass(classes, adornerClass) {
  var result = classes;

  if (!!adornerClass) {
    result = !!result ? result + " " + adornerClass : adornerClass;
  }

  return result;
}

function filterNestedQuestions(rootQuestionNode, elements) {
  var targetElements = [];
  for (var i = 0; i < elements.length; i++) {
    var questionElement = findParentNode("svd_question", elements[i]);
    if (questionElement === rootQuestionNode) {
      targetElements.push(elements[i]);
    }
  }
  return targetElements;
}

function addAdorner(node, model) {
  Object.keys(adornersConfig).forEach(element => {
    adornersConfig[element].forEach(adorner => {
      var elementClass = adorner.getMarkerClass(model);
      if (!!elementClass) {
        var elements = node.querySelectorAll(
          "." + elementClass.replace(/\s/g, ".")
        );
        var temp = [];
        for (var i = 0; i < elements.length; i++) {
          temp.push(elements[i]);
        }
        elements = temp;
        if (node.className.split(" ").indexOf(elementClass) !== -1) {
          elements.unshift(node);
        }
        elements = filterNestedQuestions(node, elements);
        if (
          elements.length === 0 &&
          node.className.indexOf(elementClass) !== -1
        ) {
          elements = [node];
        }
        if (elements.length > 0) {
          adorner.afterRender(elements, model, getSurvey(model).getEditor());
        }
      }
    });
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
};

Survey.Panel.prototype["onCreating"] = function() {
  panelBaseOnCreating(this);
  elementOnCreating(this);
};

Survey.Panel.prototype["onAfterRenderPanel"] = function(el) {
  if (!getSurvey(this).isDesignMode) return;
  var self = this;
  if (this.elements.length == 0) {
    this.emptyElement = addEmptyPanelElement(el, self.dragDropHelper(), self);
  }
  elementOnAfterRendering(el, this, true, this.koIsDragging());
};

Survey.Panel.prototype["onSelectedElementChanged"] = function() {
  if (getSurvey(this) == null) return;
  this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};

var questionPrototype = !!Survey["QuestionBase"]
  ? Survey["QuestionBase"].prototype
  : Survey.Question.prototype;

questionPrototype["onCreating"] = function() {
  elementOnCreating(this);
};

questionPrototype["onAfterRenderQuestion"] = function(el) {
  if (!getSurvey(this).isDesignMode) return;
  elementOnAfterRendering(el, this, false, true);
};

questionPrototype["onSelectedElementChanged"] = function() {
  if (getSurvey(this) == null) return;
  this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};

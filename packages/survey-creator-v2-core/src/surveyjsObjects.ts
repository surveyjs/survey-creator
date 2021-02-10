import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import * as Survey from "survey-knockout";
import { findParentNode } from "./utils/utils";
import { StylesManager } from "./stylesmanager";

export interface ISurveyObjectMenuItem {
  name: string;
  text: string | (() => string);
  title?: string;
  visible?: boolean | (() => boolean);
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
    this.editQuestionClick = function () {
      self.onEditButtonClick.fire(self, null);
    };
    this.onUpdateQuestionCssClasses.add(onUpdateQuestionCssClasses);
    this.onUpdatePanelCssClasses.add(onUpdateQuestionCssClasses);
    this.onUpdatePageCssClasses.add(onUpdateQuestionCssClasses);
    var surveyCss = this.css;
    addAdornerMarkerClasses(surveyCss, this);
    this.css = surveyCss;
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
      newElement: value,
    });
  }
  public doElementDoubleClick(obj: Survey.Base) {
    this.onElementDoubleClick.fire(this, { element: obj });
  }
  public getEditorLocString(value: string): string {
    return editorLocalization.getString(value);
  }
  private get _hasLogo() {
    return !!this.isLogoImageChoosen && this.logoPosition !== "none";
  }
  public get _isLogoBefore() {
    return (
      this._hasLogo &&
      (this.logoPosition === "left" || this.logoPosition === "top")
    );
  }
  public get _isLogoAfter() {
    return (
      this._hasLogo &&
      (this.logoPosition === "right" || this.logoPosition === "bottom")
    );
  }
  public static isTitleLogoEditable = ko.observable(false);
  // public get hasLogo() {
  //   return (
  //     (SurveyForDesigner.isTitleLogoEditable() &&
  //       ((this.isReadOnly() && this._hasLogo) || !this.isReadOnly())) ||
  //     (!SurveyForDesigner.isTitleLogoEditable() && this._hasLogo)
  //   );
  // }
  // public get isLogoBefore() {
  //   return (
  //     (SurveyForDesigner.isTitleLogoEditable() &&
  //       ((this.isReadOnly() && this._isLogoBefore) || !this.isReadOnly())) ||
  //     (!SurveyForDesigner.isTitleLogoEditable() && this._isLogoBefore)
  //   );
  // }
  // public get isLogoAfter() {
  //   return (
  //     (SurveyForDesigner.isTitleLogoEditable() &&
  //       ((this.isReadOnly() && this._isLogoAfter) || !this.isReadOnly())) ||
  //     (!SurveyForDesigner.isTitleLogoEditable() && this._isLogoAfter)
  //   );
  // }
  public get isLogoImageChoosen() {
    return this.locLogo["koRenderedHtml"]();
  }
  public koShowHeader = ko.observable(true);
  public isReadOnly = ko.observable(false);
}

function getSurvey(el: any): any {
  if (!el) return null;
  if (typeof el.getType === "function" && el.getType() === "survey") {
    return el;
  }
  var res = el["survey"];
  if (res) return res;
  return el["data"];
}

function panelBaseOnCreating(self: any) {
  if (self.disableDesignActions === true) return;
  self.dragEnterCounter = 0;
  self.emptyElement = null;
  self.rowCount = ko.computed(function () {
    var rows = !!self["koRow"] ? self["koRows"]() : self.rows;
    return rows.length;
  }, self);
  self.rowCount.subscribe(function (value) {
    if (self.emptyElement) {
      self.emptyElement.style.display = value > 0 ? "none" : "";
    }
  });
}

function elementOnCreating(surveyElement: any) {
  if (surveyElement.disableDesignActions === true) return;
  surveyElement.allowingOptions = {
    allowDelete: true,
    allowEdit: true,
    allowCopy: true,
    allowAddToToolbox: true,
    allowDragging: true,
    allowChangeType: true,
    allowShowHideTitle: true,
    allowChangeRequired: true,
  };
  surveyElement.dragDropHelperValue = null;
  surveyElement.dragDropHelper = function () {
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
  surveyElement.koIsDragging.subscribe(function (newValue) {
    if (surveyElement.renderedElement) {
      surveyElement.renderedElement.style.opacity = newValue ? 0.4 : 1;
    }
  });
  surveyElement.koIsSelected.subscribe(function (newValue) {
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

export function createAfterRenderHandler(
  creator: any,
  survey: SurveyForDesigner
) {
  return function elementOnAfterRendering(
    domElement: any,
    surveyElement: any,
    isPanel: boolean,
    disable: boolean
  ) {
    if (surveyElement.disableDesignActions === true) return;
    surveyElement.renderedElement = domElement;
    surveyElement.renderedElement.classList.add("svd_question");
    if (StylesManager.currentTheme() === "bootstrap") {
      surveyElement.renderedElement.classList.add("svd-dark-bg-color");
    }
    surveyElement.renderedElement.classList.add("svd_q_design_border");

    var isRowLayout =
      !surveyElement.getLayoutType || surveyElement.getLayoutType() == "row";
    var opt = surveyElement.allowingOptions;
    opt.allowCopy = opt.allowCopy && isRowLayout;
    opt.allowAddToToolbox = opt.allowAddToToolbox && isRowLayout;
    opt.allowChangeType = opt.allowChangeType && isRowLayout;
    opt.allowShowHideTitle = opt.allowShowHideTitle && isRowLayout;
    opt.allowChangeRequired = opt.allowChangeRequired && isRowLayout;

    getSurvey(surveyElement).updateElementAllowingOptions(surveyElement);
    if (surveyElement.koIsSelected()) {
      surveyElement.renderedElement.classList.add(
        "svd_q_selected",
        "svd-main-border-color"
      );
    }
    domElement.setAttribute(
      "aria-label",
      surveyElement.title + " " + surveyElement.getType()
    );
    domElement.tabIndex = "0";
    domElement.addEventListener("keyup", function (ev) {
      var char = ev.which || ev.keyCode;
      if (char === 13 || char === 27) {
        domElement.click();
      }
    });
    domElement.onclick = function (e) {
      if (!e["markEvent"]) {
        e["markEvent"] = true;
        if (surveyElement.parent) {
          surveyElement.selectedOnClick = true;
          getSurvey(surveyElement)["selectedElement"] = surveyElement;
          surveyElement.selectedOnClick = false;
        }
      }
    };
    if (!isPanel) {
      var childs = domElement.childNodes;
      for (var i = 0; i < childs.length; i++) {
        if (!!childs[i].style) {
          childs[i].style.pointerEvents = "none";
        }
      }
    }
    if (creator.readOnly) {
      ko.tasks.runEarly();
      addAdorner(domElement, surveyElement);
      return;
    }

    surveyElement.dragDropHelper().attachToElement(domElement, surveyElement);
    domElement.tabindex = "0";
    domElement.onkeyup = function (e) {
      var activeElement = !!document && document.activeElement;
      if (
        !!activeElement &&
        !!activeElement["dataset"] &&
        activeElement["dataset"].svdInfo === "adorner"
      ) {
        return;
      }
      var char = e.which || e.keyCode;
      if (char === 0x13 || char === 0x20) {
        domElement.click();
      }
    };
    // el.onkeydown = function(e) {
    //   if (e.witch == 46) getSurvey(surveyElement).deleteCurrentObjectClick();
    //   return true;
    // };
    domElement.ondblclick = function (e) {
      getSurvey(surveyElement).doElementDoubleClick(surveyElement);
    };
    var setTabIndex = (element) => {
      element.tabIndex = -1;
    };
    ["input", "select", "textarea"].forEach((sel) => {
      var elements = domElement.querySelectorAll(sel);
      for (var i = 0; i < elements.length; i++) {
        setTabIndex(elements[i]);
      }
    });
    ko.tasks.runEarly();
    addAdorner(domElement, surveyElement);
  };
}

export function createAfterRenderPageHandler(
  creator: any,
  survey: SurveyForDesigner
) {
  return function elementOnAfterRendering(domElement: any, page: any) {
    page.renderedElement = domElement;
    domElement.classList.add("svd_page");
    domElement.onclick = function (e) {
      if (!e["markEvent"]) {
        e["markEvent"] = true;
        getSurvey(page)["selectedElement"] = page;
      }
    };

    domElement.ondblclick = function (e) {
      getSurvey(page).doElementDoubleClick(page);
    };

    addAdorner(domElement, page);
  };
}

export function createAfterRenderHeaderHandler(
  creator: any,
  survey: SurveyForDesigner
) {
  return function elementOnAfterRendering(domElement: any, survey: any) {
    domElement.classList.add("svd_survey_header");
    addAdorner(domElement, survey);
  };
}

var adornersConfig: { [index: string]: any[] } = {};

export function registerAdorner(name, adorner) {
  if (!adornersConfig[name]) {
    adornersConfig[name] = [];
  }
  adornersConfig[name].push(adorner);
  if (typeof adorner.onRegister === "function") {
    adorner.onRegister();
  }
}
export function removeAdorners(names: string[] = undefined) {
  if (names === undefined) {
    names = Object.keys(adornersConfig);
  }
  (names || []).forEach((name) => {
    var adorners: any = adornersConfig[name];
    (adorners || []).forEach((adorner) => {
      if (typeof adorner.onUnregister === "function") {
        adorner.onUnregister();
      }
    });
    delete adornersConfig[name];
  });
}

function onUpdateQuestionCssClasses(survey, options) {
  var classes = options.panel ? options.cssClasses.panel : options.cssClasses;
  classes = options.page ? options.cssClasses.page : classes;
  var surveyElement = options.question || options.panel || options.page;
  addAdornerMarkerClasses(classes, surveyElement);
}

export function addAdornerMarkerClasses(classes: any, surveyElement: any) {
  Object.keys(adornersConfig).forEach((element) => {
    adornersConfig[element].forEach((adorner) => {
      var classesElementName = adorner.getElementName(surveyElement);
      var adornerMarkerClass = adorner.getMarkerClass(surveyElement);
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
function filterPageElements(elements) {
  var targetElements = [];
  for (var i = 0; i < elements.length; i++) {
    var questionElement = findParentNode("svd_question", elements[i]);
    if (questionElement === null) {
      targetElements.push(elements[i]);
    }
  }
  return targetElements;
}

function addAdorner(node, model) {
  const allowEdit =
    !!model &&
    ((!!model.allowingOptions && !!model.allowingOptions.allowEdit) ||
      model.allowingOptions === undefined);
  const survey = getSurvey(model);
  const editor = !!survey && survey.getEditor && survey.getEditor();
  const isReadOnly = !allowEdit || (!!editor && editor.readOnly);
  Object.keys(adornersConfig).forEach((element) => {
    adornersConfig[element].forEach((adorner) => {
      var elementClass = adorner.getMarkerClass(model);
      if (!!elementClass) {
        var elements = node.querySelectorAll(
          "." + elementClass.replace(/\s/g, ".")
        );
        var temp = [];
        for (var i = 0; i < elements.length; i++) {
          temp.push(elements[i]);
          if (isReadOnly && !adorner.renderReadOnly && elements[i].classList) {
            elements[i].classList.remove(elementClass);
          }
        }
        if (isReadOnly && !adorner.renderReadOnly) {
          return;
        }
        elements = temp;
        if (node.className.split(" ").indexOf(elementClass) !== -1) {
          elements.unshift(node);
        }
        if (model.getType() !== "page" && model.getType() !== "survey") {
          elements = filterNestedQuestions(node, elements);
        }
        if (model.getType() === "page") {
          elements = filterPageElements(elements);
        }
        if (
          elements.length === 0 &&
          node.className.indexOf(elementClass) !== -1
        ) {
          elements = [node];
        }
        if (elements.length > 0) {
          if (isReadOnly) {
            adorner.renderReadOnly &&
              adorner.renderReadOnly(elements, model, editor);
          } else adorner.afterRender(elements, model, editor);
        }
      }
    });
  });
}

Survey.Page.prototype["onCreating"] = function () {
  panelBaseOnCreating(this);
};

Survey.Page.prototype["onAfterRenderPage"] = function (el) {
  if (!getSurvey(this).isDesignMode) return;
  var self = this;
  var dragDropHelper = getSurvey(this)["dragDropHelper"];
  this.dragEnterCounter = 0;
  el.ondragenter = function (e) {
    e.preventDefault();
    self.dragEnterCounter++;
  };
  el.ondragleave = function (e) {
    self.dragEnterCounter--;
    if (self.dragEnterCounter === 0) dragDropHelper.doLeavePage(e);
  };
  el.ondragover = function (e) {
    return false;
  };
  el.ondrop = function (e) {
    dragDropHelper.doDrop(e);
  };
};

Survey.Panel.prototype["onCreating"] = function () {
  panelBaseOnCreating(this);
  elementOnCreating(this);
};

Survey.Panel.prototype["onSelectedElementChanged"] = function () {
  if (getSurvey(this) == null) return;
  this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};

if (!!Survey["FlowPanel"]) {
  Survey["FlowPanel"].prototype["onCreating"] = function () {
    //TODO
    this.placeHolder = "Enter here text or drop a question";
    elementOnCreating(this);
  };
  Survey["FlowPanel"].prototype["onSelectedElementChanged"] = function () {
    if (getSurvey(this) == null) return;
    this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
  };
}

var questionPrototype = !!Survey["QuestionBase"]
  ? Survey["QuestionBase"].prototype
  : Survey.Question.prototype;

questionPrototype["onCreating"] = function () {
  elementOnCreating(this);
};

questionPrototype["onSelectedElementChanged"] = function () {
  if (getSurvey(this) == null) return;
  this.koIsSelected(getSurvey(this)["selectedElementValue"] == this);
};

Survey.QuestionSelectBaseImplementor.prototype["onCreated"] = function () {
  var q: any = this.question;
  var updateTriggerFunction = function () {
    setTimeout(() => q["koElementType"].notifySubscribers(), 0);
  };
  [
    "choices",
    "hasOther",
    "hasComment",
    "hasNone",
    "hasSelectAll",
    "colCount",
    "titleLocation",
    "choicesFromQuestion"
  ].forEach((propertyName) =>
    this.question.registerFunctionOnPropertyValueChanged(
      propertyName,
      updateTriggerFunction
    )
  );
};


Survey.LocalizableString["editableRenderer"] = Survey.LocalizableString["defaultRenderer"];
import { Serializer, ItemValue, QuestionCheckboxModel, surveyLocalization, SurveyModel, ComputedUpdater, Helpers, ElementFactory } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { getLocString, editorLocalization, SurveyCreatorModel } from "survey-creator-core";

export class CreatorPresetEditableOptions extends CreatorPresetEditableBase {
  private createElements() {

    const allTypes = ElementFactory.Instance.getAllToolboxTypes().map(item => {
      return {
        value: item,
        text: editorLocalization.getString("qt." + item)
      };
    });

    return [
      { type: "panel", name: "designer", state: "expanded", elements: [
        { name: "pageEditMode", type: "dropdown", choices: [
          "standard", "single", "bypage"
        ] },
        { type: "panel", name: "designerHeader", elements: [
          { name: "showSurveyHeader", type: "boolean" },
          { name: "showHeaderInEmptySurvey", type: "boolean" },
        ] },
        { type: "panel", name: "designerTitles", elements: [
          { name: "useElementTitles", type: "boolean" },
        ] },
        { type: "panel", name: "designerZoomDrag", elements: [
          { name: "allowDragPages", type: "boolean" },
          { name: "allowZoom", type: "boolean" },
        ] },
        { name: "expandCollapseButtonVisibility", type: "dropdown", choices: [
          "never", "onhover", "always"
        ] },
        { type: "panel", name: "designerExpandCollapse", elements: [
          { name: "collapseQuestions", type: "boolean" },
          { name: "collapsePanels", type: "boolean" },
          { name: "collapsePages", type: "boolean" },
        ] },
        { name: "maxRows", type: "text", inputType: "number" },
        { name: "maxColumns", type: "text", inputType: "number" },
        { name: "minChoices", type: "text", inputType: "number" },
        { name: "maxChoices", type: "text", inputType: "number" },
        { name: "maxVisibleChoices", type: "text", inputType: "number" },
        { name: "maxRateValues", type: "text", inputType: "number" },
        { name: "forbiddenNestedElementsPanel", type: "tagbox", choices: allTypes },
        { name: "forbiddenNestedElementsPanelDynamic", type: "tagbox", choices: allTypes },
        { name: "maxPanelNestingLevel", type: "text", inputType: "number" }
      ] },
      { type: "panel", name: "preview", state: "expanded", elements: [
        { type: "panel", name: "previewSimulateDevice", elements: [
          { name: "previewAllowSimulateDevices", type: "boolean" },
        ] },
        { name: "previewDevice", type: "dropdown", choices: [
          { value: "desktop", text: "Desktop" },
          { value: "iPhoneSE", text: "iPhone SE" },
          { value: "iPhone15", text: "iPhone 15" },
          { value: "iPhone15Plus", text: "iPhone 15 Plus" },
          { value: "iPad", text: "iPad" },
          { value: "iPadMini", text: "iPad Mini" },
          { value: "androidPhone", text: "Android Phone" },
          { value: "androidTablet", text: "Android Tablet" },
          { value: "microsoftSurface", text: "Microsoft Surface" }
        ] },
        { name: "previewOrientation", type: "dropdown", choices: [
          "landscape", "portrait"
        ] },
        { name: "previewAllowSelectLanguage", type: "dropdown", choices: [
          "auto", true, false, "all"
        ] },
        { type: "panel", name: "previewAllowSelect", elements: [
          { name: "previewAllowSelectPage", type: "boolean" },
          { name: "previewAllowHiddenElements", type: "boolean" },
        ] },
      ] },
      { type: "panel", name: "logic", state: "expanded", elements: [
        { type: "panel", name: "previewSimulateDevice", elements: [
          { name: "logicAllowTextEditExpressions", type: "boolean" },
        ] },
        { name: "logicMaxItemsInCondition", type: "text", inputType: "number" }
      ]
      },
      { type: "panel", name: "translation", state: "expanded", elements: [
        { type: "panel", name: "previewSimulateDevice", elements: [
          { name: "clearTranslationsOnSourceTextChange", type: "boolean" },
        ] },
      ] },

    ];
  }

  private optionsList: string[] = [];
  private addPathToName(optionName: string): string {
    return this.fullPath + "_" + optionName;
  }
  private patchElements(elements: any[]): any[] {
    return elements.map(element => {
      if (element.type === "panel") {
        if (element.state == "expanded") {
          element.title = editorLocalization.getString("tabs." + element.name);
        }
        this.patchElements(element.elements);
      } else {
        this.optionsList.push(element.name);
        element.title = editorLocalization.getString("presets.options.o." + element.name);
      }
      if (element.choices) {
        element.choices = element.choices.map((choice: any) => {
          const val = choice.value !== undefined ? choice.value : choice;
          const text = choice.text || editorLocalization.getString("presets.options.ov." + element.name + "." + val);
          return { value: val, text: text };
        });
      }
      if (element.type === "boolean") {
        element.renderAs = "checkbox";
        element.useTitleAsLabel = true;
      }
      if (element.type === "dropdown") {
        element.searchEnabled = false;
      }
      element.name = this.addPathToName(element.name);
      return element;
    });
  }
  public createMainPageCore(): any {
    this.optionsList = [];
    return {
      title: getLocString("presets.options.title"),
      description: getLocString("presets.options.description"),
      navigationTitle: getLocString("presets.options.navigationTitle"),
      elements: this.patchElements(this.createElements())
    };
  }
  protected getDefaultJsonValueCore(creator: SurveyCreatorModel): any {
    const value = this.optionsList.reduce((acc: any, option) => { acc[option] = creator[option]; return acc; }, {});
    delete value["forbiddenNestedElementsPanel"];
    delete value["forbiddenNestedElementsPanelDynamic"];
    if (creator.forbiddenNestedElements) {
      value["forbiddenNestedElements"] = { panel: [...creator.forbiddenNestedElements.panel], paneldynamic: [...creator.forbiddenNestedElements.paneldynamic] };
    }
    return value;
  }
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    const json: any = {};
    this.optionsList.forEach(option => {
      const question = model.getQuestionByName(this.addPathToName(option));
      if (!!question) {
        json[option] = question.value;
      }
    });
    if (json["forbiddenNestedElementsPanel"]?.length || json["forbiddenNestedElementsPanelDynamic"]?.length) {
      json["forbiddenNestedElements"] = { panel: [...json["forbiddenNestedElementsPanel"]], paneldynamic: [...json["forbiddenNestedElementsPanelDynamic"]] };
    }
    delete json["forbiddenNestedElementsPanel"];
    delete json["forbiddenNestedElementsPanelDynamic"];

    if (Helpers.isTwoValueEquals(json, defaultJson)) return undefined;

    return json;
  }

  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    function getOptionValue(option: string): any {
      return json?.[option] === undefined ? creator[option] : json[option];
    }

    this.optionsList.forEach(option => {
      let val = getOptionValue(option);
      if (option === "forbiddenNestedElementsPanel") {
        val = getOptionValue("forbiddenNestedElements")?.panel;
        if (val) val = [...val];
      }
      if (option === "forbiddenNestedElementsPanelDynamic") {
        val = getOptionValue("forbiddenNestedElements")?.paneldynamic;
        if (val) val = [...val];
      }
      model.getQuestionByName(this.addPathToName(option)).value = val;
    });
  }

  public get questionNames() {
    return this.optionsList.map(option => this.addPathToName(option));
  }

  public onGetQuestionTitleActions(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    const prefix = this.fullPath + "_";
    if (options.question.parent?.name.substring(0, prefix.length) !== prefix) return;
    const optionName = options.question.name.substring(prefix.length);
    const help = editorLocalization.getString("presets.options.ohelp." + optionName);
    if (help == optionName) return;
    const collapseIcon = "icon-hidehint-16x16";
    const expandIcon = "icon-hint-16x16";
    options.actions = [{
      id: "hint",
      css: "sv-action-bar-item--hint",
      //locTooltipName: new ComputedUpdater<string>(() => options.panel.isCollapsed ? "ed.expandTooltip" : "ed.collapseTooltip") as any,
      iconName: new ComputedUpdater<string>(() => options.question.description ? collapseIcon : expandIcon) as any,
      iconSize: "auto",
      action: () => {
        if (options.question.description) {
          options.question.description = "";
        } else {
          options.question.description = help;
        }
      }
    }];
  }

  public onGetPanelTitleActions(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    const prefix = this.fullPath + "_";
    if (options.panel.name.substring(0, prefix.length) !== prefix) return;
    const collapseIcon = "icon-collapsepanel-16x16";
    const expandIcon = "icon-expandpanel-16x16";
    options.actions = [{
      id: "collapse",
      css: "sv-action-bar-item--collapse",
      locTooltipName: new ComputedUpdater<string>(() => options.panel.isCollapsed ? "ed.expandTooltip" : "ed.collapseTooltip") as any,
      iconName: new ComputedUpdater<string>(() => options.panel.isCollapsed ? expandIcon : collapseIcon) as any,
      iconSize: "auto",
      action: () => {
        if (options.panel.isCollapsed) {
          options.panel.expand();
        } else {
          options.panel.collapse();
        }
      }
    }];
  }
}
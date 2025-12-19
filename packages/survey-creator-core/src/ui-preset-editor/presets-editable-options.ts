import { Serializer, ItemValue, QuestionCheckboxModel, surveyLocalization, SurveyModel, ComputedUpdater, Helpers } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { getLocString, editorLocalization, SurveyCreatorModel } from "survey-creator-core";

export class CreatorPresetEditableOptions extends CreatorPresetEditableBase {
  private createElements() {
    return [
      { type: "panel", name: "designer", state: "expanded", elements: [
        { name: "pageEditMode", type: "dropdown", choices: [
          { value: "standard", text: "Standard" },
          { value: "single", text: "Single" },
          { value: "bypage", text: "By Page" }
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
          { name: "collapseOnDrag", type: "boolean" },
          { name: "allowZoom", type: "boolean" },
        ] },
        { name: "expandCollapseButtonVisibility", type: "dropdown", choices: [
          { value: "never", text: "Never" },
          { value: "onhover", text: "On Hover" },
          { value: "always", text: "Always" }
        ] },
        { type: "panel", name: "designerExpandCollapse", elements: [
          { name: "collapseQuestions", type: "boolean" },
          { name: "collapsePanels", type: "boolean" },
          { name: "collapsePages", type: "boolean" },
        ] },
        { name: "maxRows", type: "text", inputType: "number" },
        { name: "maxColumns", type: "text", inputType: "number" },
        { type: "panel", name: "designerChoices", elements: [
          { name: "inplaceEditChoiceValues", type: "boolean" },
        ] },
        { name: "minChoices", type: "text", inputType: "number" },
        { name: "maxChoices", type: "text", inputType: "number" },
        { name: "maxVisibleChoices", type: "text", inputType: "number" },
        { name: "maxRateValues", type: "text", inputType: "number" },
        { name: "forbiddenNestedElements", type: "text" },
        { name: "maxPanelNestingLevel", type: "text", inputType: "number" }
      ] },
      { type: "panel", name: "preview", state: "expanded", elements: [
        { type: "panel", name: "previewSimulateDevice", elements: [
          { name: "previewAllowSimulateDevice", type: "boolean" },
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
          { value: "landscape", text: "Landscape" },
          { value: "portrait", text: "Portrait" }
        ] },
        { type: "panel", name: "previewAllowSelect", elements: [
          { name: "previewAllowSelectLanguage", type: "boolean" },
          { name: "previewAllowSelectPage", type: "boolean" },
        ] },
        { name: "previewAllowHiddenElements", type: "boolean" },
      ] },
      { type: "panel", name: "logic", state: "expanded", elements: [
        { name: "logicAllowTextEditExpressions", type: "boolean" },
        { name: "logicMaxItemsInCondition", type: "text", inputType: "number" }
      ]
      },
      { type: "panel", name: "translation", state: "expanded", elements: [
        { name: "clearTranslationsOnSourceTextChange", type: "boolean" },
      ]
      }

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
        const help = editorLocalization.getString("presets.options.ohelp." + element.name);
        if (help != element.name) {
          element.description = help;
        }
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
    return this.optionsList.reduce((acc: any, option) => { acc[option] = creator[option]; return acc; }, {});
  }
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    const json: any = {};
    this.optionsList.forEach(option => {
      const question = model.getQuestionByName(this.addPathToName(option));
      if (!!question) {
        json[option] = question.value;
      }
    });
    if (Helpers.isTwoValueEquals(json, defaultJson)) return undefined;

    return json;
  }

  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.optionsList.forEach(option => model.getQuestionByName(this.addPathToName(option)).value =
    (json ? json[option] : creator[option]));
  }

  public get questionNames() {
    return this.optionsList.map(option => this.addPathToName(option));
  }

  public onGetQuestionTitleActions(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    const prefix = this.fullPath + "_";
    if (options.question.parent?.name.substring(0, prefix.length) !== prefix) return;
    const help = editorLocalization.getString("presets.options.ohelp." + options.question.name);
    if (help == options.question.name) return;
    const collapseIcon = "icon-hidehint-16x16";
    const expandIcon = "icon-hint-16x16";
    options.actions = [{
      id: "hint",
      css: "sv-action-bar-item--hint",
      //locTooltipName: new ComputedUpdater<string>(() => options.panel.isCollapsed ? "ed.expandTooltip" : "ed.collapseTooltip") as any,
      iconName: new ComputedUpdater<string>(() => options.question.description ? expandIcon : collapseIcon) as any,
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
import { JsonObjectProperty, ItemValue, MatrixDropdownRowModelBase, QuestionDropdownModel,
  QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, SurveyModel, ElementContentVisibilityChangedEvent } from "survey-core";
import { ICreatorPreset, CreatorPresetBase, CreatorPresetEditableBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { defaultPropertyGridDefinition, ISurveyPropertyGridDefinition, ISurveyPropertiesDefinition } from "../question-editor/definition";
import { SurveyQuestionProperties } from "../question-editor/properties";
import { editorLocalization } from "../editorLocalization";
import { PropertyGridModel } from "../../src/property-grid";
import { QuestionEmbeddedSurveyModel } from "../components/embedded-survey";

export class SurveyQuestionPresetProperties extends SurveyQuestionProperties {
  constructor(className: string, propertyGridDefinition: ISurveyPropertyGridDefinition) {
    super(null, null, className, null, null, null, propertyGridDefinition);
  }
  protected initProperties(className: string): Array<JsonObjectProperty> {
    return Serializer.getProperties(className);
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return prop.visible !== false;
  }
}

const presetPropertiesBaseClasses = ["question", "matrixdropdownbase", "selectbase", "panelbase"];

export class SurveyQuestionPresetPropertiesDetail {
  private propertiesHash = {};
  public classes = new Array<string>();
  private properties: SurveyQuestionPresetProperties;
  private propertyGridValue: PropertyGridModel;
  private allPropertiesNames: Array<string>;
  constructor(private className: string, private currentJson: ISurveyPropertyGridDefinition) {
    const cls = {};
    this.properties = new SurveyQuestionPresetProperties(className, currentJson);
    this.allPropertiesNames = this.properties.getAllVisiblePropertiesNames(true);
    this.allPropertiesNames.forEach(name => {
      const prop = Serializer.findProperty(className, name);
      if(prop) {
        const propClassName = this.getPropClassName(prop);
        this.propertiesHash[name] = propClassName;
        cls[propClassName] = true;
      }
    });
    for(let i = 0; i < presetPropertiesBaseClasses.length; i ++) {
      const cl = presetPropertiesBaseClasses[i];
      if(cls[cl]) {
        this.classes.push(cl);
      }
    }
    this.classes.push(className);
    const obj = className === "survey"? new SurveyModel() : Serializer.createClass(className);
    this.propertyGridValue = new PropertyGridModel(obj, undefined, this.currentJson);
  }
  public dispose(): void {
    //TODO
  }
  public get propertyGrid(): PropertyGridModel { return this.propertyGridValue; }
  public getRows(): Array<any> {
    const rows = [];
    this.properties.getTabs().forEach(tab => {
      const row: any = { name: tab.name, items: [] };
      tab.properties.forEach(prop => {
        row.items.push(prop.name);
      });
      rows.push(row);
    });
    return rows;
  }
  public getRankingChoices(matrix: QuestionMatrixDynamicModel, row: MatrixDropdownRowModelBase): Array<ItemValue> {
    const val = matrix.value;
    const usedItems = {};
    if(Array.isArray(val)) {
      const rowIndex = matrix.visibleRows.indexOf(row);
      for(let i = 0; i < val.length; i ++) {
        const items = val[i].items;
        if(i !== rowIndex && Array.isArray(items)) {
          items.forEach(v => usedItems[v] = true);
        }
      }
    }
    const res = [];
    this.allPropertiesNames.forEach(name => {
      if(!usedItems[name]) {
        res.push(new ItemValue(name, editorLocalization.getPropertyNameInEditor(this.className, name)));
      }
    });
    return res;
  }
  public updatePropertyGrid(val: Array<any>): void {
    const definition: ISurveyPropertyGridDefinition = { autoGenerateProperties: false, classes: {} };
    this.updateCurrentJsonCore(definition.classes, val);
    this.propertyGrid.setPropertyGridDefinition(definition);
  }
  public updateCurrentJson(val: Array<any>): void {
    this.updateCurrentJsonCore(this.currentJson.classes, val);
  }
  private updateCurrentJsonCore(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>): void {
    if(!Array.isArray(val) || val.length === 0) return;
    const tabNames = [];
    this.classes.forEach(cl => {
      this.updateCurrentJsonClass(curJsonClasses, val, cl, tabNames);
    });
  }
  private updateCurrentJsonClass(curJsonClasses: ISurveyPropertiesDefinition, val: Array<any>, clName: string, tabNames: Array<string>): void {
    const properties = [];
    const tabs = [];
    const step = 100;
    val.forEach(tab => {
      const clVal = tab.items;
      if(Array.isArray(clVal)) {
        clVal.forEach(propName => {
          if(this.propertiesHash[propName] === clName) {
            const tabName = tab.name !== "general" ? tab.name : undefined;
            if(!!tabName && tabNames.indexOf(tab.name) < 0) {
              tabNames.push(tab.name);
              tabs.push({ name: tab.name, index: tabNames.length * step });
            }
            const item: any = { name: propName };
            if(!!tabName) {
              item.tab = tabName;
            }
            properties.push(item);
          }
        });
      }
    });
    curJsonClasses[clName] = { properties: properties, tabs: tabs };
  }
  private getPropClassName(prop: JsonObjectProperty): string {
    const clName = prop.classInfo.name;
    for(let i = 1; i < presetPropertiesBaseClasses.length; i ++) {
      const cl = presetPropertiesBaseClasses[i];
      if(clName === cl || Serializer.isDescendantOf(clName, cl)) return cl;
    }
    if(clName === this.className) return this.className;
    return "question";
  }
}

export class CreatorPresetEditablePropertyGridDefinition extends CreatorPresetEditableBase {
  private currentJson: ISurveyPropertyGridDefinition;
  private currentProperties: SurveyQuestionPresetPropertiesDetail;
  private currentClassName: string;
  public createMainPageCore(): any {
    const parent = (<CreatorEditablePresetPropertyGrid>this.parent);
    return {
      title: "Property Grid categories",
      elements: [
        {
          type: "boolean",
          name: this.nameShow,
          title: "Do you want to configure Property Grid categories and properties?"
        },
        {
          type: "dropdown",
          name: this.nameSelector,
          visibleIf: this.getBoolVisibleIf(this.nameShow),
          clearIfInvisible: "onHidden",
          title: "Select element to setup a property grid for it",
        },
        {
          type: "panel",
          name: "propPanel",
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
          elements: [
            {
              type: "matrixdynamic",
              name: this.nameMatrix,
              allowRowsDragAndDrop: true,
              showHeader: false,
              titleLocation: "hidden",
              addRowText: "Add New Category",
              columns: [
                { cellType: "text", name: "name", title: "Category name", isUnique: true, isRequired: true, enableIf: "{row.name} <> 'general'" }
              ],
              detailPanelMode: "underRowSingle",
              detailElements: [
                {
                  type: "ranking",
                  name: "items",
                  selectToRankEnabled: true,
                  selectToRankAreasLayout: "horizontal"
                }
              ]
            },
            {
              type: "embeddedsurvey",
              name: this.namePropertyGrid,
              startWithNewLine: false
            }
          ]
        }
      ]
    };
  }
  public getJsonValueCore(model: SurveyModel): any {
    if(model.getValue(this.nameShow) !== true) return undefined;
    this.updateCurrentJson(model);
    return this.currentJson;
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.getSelector(model).choices = this.getSelectorChoices(creator);
    this.getMatrix(model).lockedRowCount = 1;
  }
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if(options.question.name === this.nameMatrix) {
      this.onDetailPanelShowingChanged(model, options.row);
      this.expandEmbeddedSurveyPanel(model);
    }
  }
  private isMatrixValueChanged: boolean;
  private isMatrixValueSetting: boolean;
  protected updateOnValueChangedCore(model: SurveyModel, creator: SurveyCreatorModel, name: string): void {
    if(name === this.nameMatrix && !this.isMatrixValueSetting) {
      this.isMatrixValueChanged = true;
      if(this.currentProperties) {
        this.currentProperties.updatePropertyGrid(model.getValue(name));
        this.updateEmbeddedSurvey(model);
      }
    }
    if(name !== this.nameSelector) return;
    this.isMatrixValueSetting = true;
    this.updateCurrentJson(model);
    if(this.currentProperties) {
      this.currentProperties.dispose();
      this.currentProperties = null;
    }
    const selQuestion = this.getSelector(model);
    this.currentClassName = selQuestion.value;
    if(!this.currentClassName) return;
    const matrix = this.getMatrix(model);
    this.currentProperties = new SurveyQuestionPresetPropertiesDetail(this.currentClassName, this.currentJson);
    matrix.rowCount = 0;
    matrix.value = this.currentProperties.getRows();
    this.updateEmbeddedSurvey(model);
    this.isMatrixValueChanged = false;
    this.isMatrixValueSetting = false;
  }
  private updateEmbeddedSurvey(model: SurveyModel): void {
    const propGridQuestion = this.getPropertyGridQuestion(model);
    const survey = this.currentProperties.propertyGrid.survey;
    propGridQuestion.embeddedSurvey = survey;
    this.expandEmbeddedSurveyPanel(model);
    survey.onElementContentVisibilityChanged.add((sender, options) => {
      this.onElementContentVisibilityChanged(model, options);
    });
  }
  private isContentVisibilityChanging: boolean;
  private expandEmbeddedSurveyPanel(model: SurveyModel): void {
    if(this.isContentVisibilityChanging) return;
    const propGridSurvey = this.currentProperties.propertyGrid.survey;
    if(!propGridSurvey) return;
    const matrix = this.getMatrix(model);
    let name = "";
    matrix.visibleRows.forEach(row => {
      if(row.isDetailPanelShowing) {
        name = row.getValue("name");
      }
    });
    const panel = !!name ? propGridSurvey.getPanelByName(name) : undefined;
    this.isContentVisibilityChanging = true;
    if(panel) {
      panel.expand();
    } else {
      propGridSurvey.getAllPanels(true).forEach(panel => panel.collapse());
    }
    this.isContentVisibilityChanging = false;
  }
  private onElementContentVisibilityChanged(model: SurveyModel, options: ElementContentVisibilityChangedEvent): void {
    if(this.isContentVisibilityChanging) return;
    this.isContentVisibilityChanging = true;
    const matrix = this.getMatrix(model);
    if(matrix) {
      const isExpand = options.element.isExpanded;
      const name = options.element.name;
      matrix.visibleRows.forEach(row => {
        if(isExpand && row.getValue("name") === name) {
          row.showDetailPanel();
        } else {
          row.hideDetailPanel();
        }
      });
    }
    this.isContentVisibilityChanging = false;
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    model.setValue(this.nameShow, !!json);
    if(!json) {
      json = this.copyJson(defaultPropertyGridDefinition);
    }
    this.currentJson = json;
    this.currentJson.autoGenerateProperties = false;
  }
  private get nameShow() { return this.fullPath + "_show"; }
  private getMatrix(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameMatrix); }
  private getSelector(model: SurveyModel): QuestionDropdownModel { return <QuestionDropdownModel>model.getQuestionByName(this.nameSelector); }
  private getPropertyGridQuestion(model: SurveyModel): QuestionEmbeddedSurveyModel { return <QuestionEmbeddedSurveyModel>model.getQuestionByName(this.namePropertyGrid); }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
  private get nameSelector() { return this.fullPath + "_selector"; }
  private get namePropertyGrid() { return this.fullPath + "_propgrid"; }
  private onDetailPanelShowingChanged(model: SurveyModel, row: MatrixDropdownRowModelBase): void {
    if(!row.isDetailPanelShowing || !this.currentProperties) return;
    const classes = this.currentProperties.classes;
    const matrix = this.getMatrix(model);
    const q = row.detailPanel.getQuestionByName("items");
    q.choices = this.currentProperties.getRankingChoices(matrix, row);
  }
  private getSelectorChoices(creator: SurveyCreatorModel): Array<ItemValue> {
    const classes = ["survey", "page", "panel"];
    const toolboxItems = {};
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      toolboxItems[item.id] = true;
    });

    Serializer.getChildrenClasses("question", true).forEach(cl => {
      if(toolboxItems[cl.name]) {
        classes.push(cl.name);
      }
    });
    const res = [];
    classes.forEach(str => res.push(new ItemValue(str, this.getSelectorItemTitle(str))));
    return res;
  }
  private getSelectorItemTitle(name: string): string {
    if(name === "survey") return editorLocalization.getString("ed.surveyTypeName");
    if(name === "page") return editorLocalization.getString("ed.pageTypeName");
    return editorLocalization.getString("qt." + name);
  }
  private updateCurrentJson(model: SurveyModel): void {
    if(!this.isMatrixValueChanged) return;
    this.isMatrixValueChanged = false;
    if(this.currentProperties) {
      this.currentProperties.updateCurrentJson(model.getValue(this.nameMatrix));
    }
  }
}

export class CreatorPresetPropertyGridDefinition extends CreatorPresetBase {
  public getPath(): string { return "definition"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorPresetEditablePropertyGridDefinition(this); }
  protected applyCore(creator: SurveyCreatorModel): void {
    creator.setPropertyGridDefinition(this.json);
  }
}

export class CreatorEditablePresetPropertyGrid extends CreatorPresetEditableBase {
}

export class CreatorPresetPropertyGrid extends CreatorPresetBase {
  public getPath(): string { return "propertyGrid"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorEditablePresetPropertyGrid(this); }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetPropertyGridDefinition()];
  }
}

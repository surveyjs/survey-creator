import { JsonObjectProperty, ItemValue, MatrixDropdownRowModelBase, QuestionDropdownModel,
  QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, SurveyModel } from "survey-core";
import { ICreatorPreset, CreatorPresetBase, CreatorPresetEditableBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { defaultPropertyGridDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyQuestionProperties } from "../question-editor/properties";
import { editorLocalization } from "../editorLocalization";

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
  constructor(private className: string, private currentJson: ISurveyPropertyGridDefinition) {
    const cls = {};
    this.properties = new SurveyQuestionPresetProperties(className, currentJson);
    this.properties.getAllVisiblePropertiesNames(true).forEach(name => {
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
  }
  public getRows(): Array<any> {
    const rows = [];
    this.properties.getTabs().forEach(tab => {
      const row: any = { name: tab.name };
      tab.properties.forEach(prop => {
        const clName = this.propertiesHash[prop.name];
        if(!row[clName]) {
          row[clName] = [];
        }
        row[clName].push(prop.name);
      });
      rows.push(row);
    });
    return rows;
  }
  public getRankingChoices(matrix: QuestionMatrixDynamicModel, row: MatrixDropdownRowModelBase, className: string): Array<ItemValue> {
    const res = [];
    const allProperties = [];
    for(let key in this.propertiesHash) {
      if(this.propertiesHash[key] == className) {
        allProperties.push(key);
      }
    }
    const val = matrix.value;
    const usedItems = {};
    if(Array.isArray(val)) {
      const rowIndex = matrix.visibleRows.indexOf(row);
      for(let i = 0; i < val.length; i ++) {
        const items = val[i][className];
        if(i !== rowIndex && Array.isArray(items)) {
          items.forEach(v => usedItems[v] = true);
        }
      }
    }
    allProperties.forEach(name => {
      if(!usedItems[name]) {
        res.push(new ItemValue(name, editorLocalization.getPropertyNameInEditor(className, name)));
      }
    });
    return res;
  }
  public updateCurrentJson(val: Array<any>): void {
    if(!Array.isArray(val) || val.length === 0) return;
    const tabNames = [];
    this.classes.forEach(cl => {
      this.updateCurrentJsonClass(val, cl, tabNames);
    });
  }
  private updateCurrentJsonClass(val: Array<any>, clName: string, tabNames: Array<string>): void {
    const properties = [];
    const tabs = [];
    const step = 100;
    val.forEach(tab => {
      const clVal = tab[clName];
      if(Array.isArray(clVal)) {
        if(tab.name === "general") {
          clVal.forEach(item => properties.push(item));
          properties.concat(clVal);
        } else {
          if(tabNames.indexOf(tab.name) < 0) {
            tabNames.push(tab.name);
            tabs.push({ name: tab.name, index: tabNames.length * step });
          }
          clVal.forEach(item => {
            properties.push({ name: item, tab: tab.name });
          });
        }
      }
    });
    this.currentJson.classes[clName] = { properties: properties, tabs: tabs };
  }
  private getPropClassName(prop: JsonObjectProperty): string {
    const clName = prop.classInfo.name;
    if(clName === this.className) return this.className;
    for(let i = 1; i < presetPropertiesBaseClasses.length; i ++) {
      const cl = presetPropertiesBaseClasses[i];
      if(clName === cl || Serializer.isDescendantOf(clName, cl)) return cl;
    }
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
      visibleIf: this.getBoolVisibleIf(parent.nameDefinitionShow),
      elements: [
        {
          type: "dropdown",
          name: this.nameSelector,
          title: "Select element to setup a property grid for it",
        },
        {
          type: "matrixdynamic",
          name: this.nameMatrix,
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
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
              minSelectedChoices: 1,
              selectToRankAreasLayout: "horizontal",
              visible: false
            }
          ]
        }
      ]
    };
  }
  public getJsonValueCore(model: SurveyModel): any {
    this.updateCurrentJson(model);
    return this.currentJson;
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.getSelector(model).choices = this.getSelectorChoices(creator);
  }
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if(options.question.name === this.nameMatrix) {
      this.onDetailPanelShowingChanged(model, options.row);
    }
  }
  private isMatrixValueChanged: boolean;
  protected updateOnValueChangedCore(model: SurveyModel, creator: SurveyCreatorModel, name: string): void {
    if(name === this.nameMatrix) {
      this.isMatrixValueChanged = true;
    }
    if(name !== this.nameSelector) return;
    this.updateCurrentJson(model);
    const selQuestion = this.getSelector(model);
    this.currentClassName = selQuestion.value;
    if(!this.currentClassName) return;
    const matrix = this.getMatrix(model);
    this.currentProperties = new SurveyQuestionPresetPropertiesDetail(this.currentClassName, this.currentJson);
    matrix.rowCount = 0;
    this.updateDetailPanel(matrix);
    matrix.value = this.currentProperties.getRows();
    this.isMatrixValueChanged = false;
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    if(!json) {
      json = this.copyJson(defaultPropertyGridDefinition);
    }
    this.currentJson = json;
    this.currentJson.autoGenerateProperties = false;
  }
  private getMatrix(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameMatrix); }
  private getSelector(model: SurveyModel): QuestionDropdownModel { return <QuestionDropdownModel>model.getQuestionByName(this.nameSelector); }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
  private get nameSelector() { return this.fullPath + "_selector"; }
  private updateDetailPanel(matrix: QuestionMatrixDynamicModel): void {
    const panel = matrix.detailPanel;
    for(let i = panel.elements.length - 1; i >= 1; i --) {
      panel.removeElement(panel.elements[i]);
    }
    const itemsQ = panel.getQuestionByName("items");
    const classes = this.currentProperties.classes;
    classes.forEach(clName => {
      const q = panel.addNewQuestion(itemsQ.getType());
      const json = itemsQ.toJSON();
      json.name = clName;
      q.fromJSON(json);
    });
  }
  private onDetailPanelShowingChanged(model: SurveyModel, row: MatrixDropdownRowModelBase): void {
    if(!row.isDetailPanelShowing || !this.currentProperties) return;
    const classes = this.currentProperties.classes;
    const matrix = this.getMatrix(model);
    classes.forEach(clName => {
      const q = row.detailPanel.getQuestionByName(clName);
      const choices = this.currentProperties.getRankingChoices(matrix, row, clName);
      q.choices = choices;
      q.visible = choices.length > 0;
    });
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
    if(!this.currentClassName || !this.currentJson || !this.currentJson.classes) return;
    this.currentProperties.updateCurrentJson(model.getValue(this.nameMatrix));
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
  public createMainPageCore(): any {
    return {
      title: "Setup Property Grid",
      elements: [
        {
          type: "boolean",
          name: this.nameDefinitionShow,
          title: "Do you want to configure Property Grid categories and properties?"
        }
      ]
    };
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    if(json["definition"]) {
      model.setValue(this.nameDefinitionShow, true);
    }
  }
  public get nameDefinitionShow() { return this.path + "_definition_show"; }
}

export class CreatorPresetPropertyGrid extends CreatorPresetBase {
  public getPath(): string { return "propertyGrid"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorEditablePresetPropertyGrid(this); }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetPropertyGridDefinition()];
  }
}

import { JsonObjectProperty, ItemValue, MatrixDropdownRowModelBase, QuestionDropdownModel,
  QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, SurveyModel } from "survey-core";
import { ICreatorPreset, CreatorPresetBase, CreatorPresetEditableBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { defaultPropertyGridDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyQuestionProperties } from "../question-editor/properties";

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

export class CreatorPresetEditablePropertyGridDefinition extends CreatorPresetEditableBase {
  private currentJson: ISurveyPropertyGridDefinition;
  private currentClassProperties: SurveyQuestionPresetProperties;
  private currentClassName: string;
  public createMainPageCore(): any {
    const parent = (<CreatorEditablePresetPropertyGrid>this.parent);
    return {
      visibleIf: this.getBoolVisibleIf(parent.nameDefinitionShow),
      elements: [
        {
          type: "dropdown",
          name: this.nameSelector,
        },
        {
          type: "matrixdynamic",
          name: this.nameMatrix,
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
          allowRowsDragAndDrop: true,
          columns: [
            { cellType: "text", name: "name", isUnique: true, isRequired: true, enableIf: "{row.name} <> 'general'" },
            { cellType: "expression", name: "count", expression: "{row.items.length}" }
          ],
          detailPanelMode: "underRowSingle",
          detailElements: [
            {
              type: "ranking",
              name: "items",
              selectToRankEnabled: true,
              minSelectedChoices: 1,
              selectToRankAreasLayout: "horizontal"
            }
          ]
        }
      ]
    };
  }
  public getJsonValueCore(model: SurveyModel): any {
    return this.currentJson;
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.getSelector(model).choices = this.getSelectorChoices(creator);
  }
  protected updateOnMatrixRowAddedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if(options.question.name === this.nameMatrix) {
      options.row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(options.row);
      };
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
    matrix.value = this.definitionToRows(this.currentClassName);
    this.isMatrixValueChanged = false;
    matrix.visibleRows.forEach(row => {
      row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(row);
      };
    });
  }
  private definitionToRows(className: string): Array<any> {
    const res = [];
    this.currentClassProperties = new SurveyQuestionPresetProperties(className, this.currentJson);
    this.currentClassProperties.getTabs().forEach(tab => {
      const props = [];
      tab.properties.forEach(p => { props.push(p.name); });
      const row = { name: tab.name, items: props };
      res.push(row);
    });
    return res;
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
  private onDetailPanelShowingChanged(row: MatrixDropdownRowModelBase): void {
    if(!row.isDetailPanelShowing) return;
    row.getQuestionByName("items").choices = this.getRankingChoices(row);
  }
  private getRankingChoices(row: MatrixDropdownRowModelBase): Array<ItemValue> {
    const res = [];
    if(!this.currentClassProperties) return res;
    const allProperties = this.currentClassProperties.getAllVisiblePropertiesNames(true);
    const model = <SurveyModel>row.getSurvey();
    const matrix = this.getMatrix(<SurveyModel>model);
    const val = model.getValue(this.nameMatrix);
    const usedItems = {};
    if(Array.isArray(val)) {
      const rowIndex = matrix.visibleRows.indexOf(row);
      for(let i = 0; i < val.length; i ++) {
        if(i !== rowIndex && Array.isArray(val[i].items)) {
          val[i].items.forEach(v => usedItems[v] = true);
        }
      }
    }
    allProperties.forEach(name => {
      if(!usedItems[name]) {
        res.push(new ItemValue(name)); //TODO title
      }
    });
    return res;
  }
  private getSelectorChoices(creator: SurveyCreatorModel): Array<ItemValue> {
    const classes = ["survey", "panelbase", "page", "panel", "question", "selectbase", "matrixdropdownbase"];
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
    classes.forEach(str => res.push(new ItemValue(str)));
    return res;
  }
  private updateCurrentJson(model: SurveyModel): void {
    if(!this.isMatrixValueChanged) return;
    this.isMatrixValueChanged = false;
    if(!this.currentClassName || !this.currentJson || !this.currentJson.classes) return;
    const val = model.getValue(this.nameMatrix);
    if(!Array.isArray(val) || val.length === 0) return;
    const properties = [];
    const tabs = [];
    const step = 100;
    let index = step;
    val.forEach(tab => {
      if(Array.isArray(tab.items)) {
        if(tab.name === "general") {
          tab.items.forEach(item => properties.push(item));
          properties.concat(tab.items);
        } else {
          tabs.push({ name: tab.name, index: index });
          index += step;
          tab.items.forEach(item => {
            properties.push({ name: item, tab: tab.name });
          });
        }
      }
    });
    this.currentJson.classes[this.currentClassName] = { properties: properties, tabs: tabs };
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
      elements: [
        {
          type: "boolean",
          name: this.nameDefinitionShow,
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

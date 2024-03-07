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
            { cellType: "text", name: "name", isUnique: true, isRequired: true },
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
    //this.getMatrix(model).defaultItems = this.getDefaultToolboxItems(model, creator);
    /*
    model.onMatrixRowAdded.add((sender, options) =>{
      if(options.question.name === this.nameMatrix) {
        options.row.onDetailPanelShowingChanged = () => {
          this.onDetailPanelShowingChanged(options.row);
        };
      }
    });
    model.onMatrixRowRemoved.add((sender, options) => {
      options.row.onDetailPanelShowingChanged = undefined;
    });
    */
  }
  protected updateOnValueChangedCore(model: SurveyModel, creator: SurveyCreatorModel, name: string): void {
    const selQuestion = this.getSelector(model);
    if(name !== this.nameSelector || selQuestion.isEmpty()) return;
    this.getMatrix(model).value = this.definitionToRows(selQuestion.value);

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

    /*
    const nameCategories = {};
    const categories = [];
    creator.toolbox.items.forEach(item => {
      const category = item.category;
      if(!!category) {
        if(!nameCategories[category]) {
          const row = { name: category, items: [item.name] };
          nameCategories[category] = row;
          categories.push(row);
        } else {
          nameCategories[category].items.push(item.name);
        }
      }
    });
    model.setValue(this.nameMatrix, categories);
    this.getMatrix(model).visibleRows.forEach(row => {
      row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(row);
      };
    });
    */
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
    /*
    const model = <SurveyModel>row.getSurvey();
    const matrix = this.getMatrix(<SurveyModel>model);
    const defaultItems = matrix.defaultItems;
    if(!Array.isArray(defaultItems)) return res;
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
    defaultItems.forEach(item => {
      if(!usedItems[item.id]) {
        res.push(new ItemValue(item.id, item.title));
      }
    });
    */
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

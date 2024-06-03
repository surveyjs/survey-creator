import { JsonObjectProperty, ItemValue, MatrixDropdownRowModelBase, QuestionDropdownModel,
  QuestionMatrixDynamicModel, Base, Serializer, SurveyModel, ElementContentVisibilityChangedEvent,
  matrixDropdownColumnTypes } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { SurveyCreatorModel } from "../../creator-base";
import { defaultPropertyGridDefinition, ISurveyPropertyGridDefinition, ISurveyPropertiesDefinition } from "../../question-editor/definition";
import { SurveyQuestionProperties } from "../../question-editor/properties";
import { editorLocalization } from "../../editorLocalization";
import { PropertyGridModel } from "../../../src/property-grid";
import { QuestionEmbeddedSurveyModel } from "../../components/embedded-survey";
import { QuestionEmbeddedCreatorModel } from "../../components/embedded-creator";
import { ICreatorOptions } from "../../creator-options";

export class SurveyQuestionPresetProperties extends SurveyQuestionProperties {
  constructor(obj, className: string, propertyGridDefinition: ISurveyPropertyGridDefinition) {
    super(obj, null, className, null, null, null, propertyGridDefinition);
  }
  protected getIsPropertyVisible(prop: JsonObjectProperty): boolean {
    return prop.visible !== false;
  }
}

const presetPropertiesBaseClasses = ["question", "matrixdropdownbase", "selectbase", "panelbase", "matrixdropdowncolumn@default", "matrixdropdowncolumn@selectbase"];

export class SurveyQuestionPresetPropertiesDetail {
  private propertiesHash = {};
  public classes = new Array<string>();
  private properties: SurveyQuestionPresetProperties;
  private propertyGridValue: PropertyGridModel;
  private allPropertiesNames: Array<string>;
  constructor(private className: string, private currentJson: ISurveyPropertyGridDefinition) {
    const cls = {};
    const obj = this.createObj();
    this.properties = new SurveyQuestionPresetProperties(obj, className, currentJson);
    this.allPropertiesNames = this.properties.getAllVisiblePropertiesNames(true);
    const objProps = {};
    Serializer.getPropertiesByObj(obj).forEach(prop => objProps[prop.name] = prop);
    this.allPropertiesNames.forEach(name => {
      const prop = objProps[name];
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
    if(this.classes.indexOf(className) < 0) {
      this.classes.push(className);
    }
    this.propertyGridValue = new PropertyGridModel(obj, undefined, this.currentJson);
  }
  private createObj(): Base {
    if(this.className === "survey") return new SurveyModel();
    const ind = this.className.indexOf("@");
    if(ind < 0) return Serializer.createClass(this.className);
    const clName = this.className.substring(0, ind);
    const postFix = this.className.substring(ind + 1);
    const res = Serializer.createClass(clName);
    if(res.cellType) {
      res.cellType = postFix;
    }
    return res;
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
    const tabStep = 100;

    val.forEach(tab => {
      const clVal = tab.items;
      if(Array.isArray(clVal)) {
        const classesIndeces = [];
        this.classes.forEach(cl => classesIndeces.push(0));
        const propertiesIndeces = {};
        for(let i = 0; i < clVal.length; i ++) {
          const clName = this.propertiesHash[clVal[i]];
          let clIndex = this.classes.indexOf(clName);
          if(clIndex < 0) continue;
          const nextStep = 10000 / Math.pow(10, clIndex);
          let max = 0;
          for(let j = 0; j <= clIndex; j ++) {
            if(classesIndeces[j] > max) max = classesIndeces[j];
          }
          const visIndex = max + nextStep;
          propertiesIndeces[clVal[i]] = visIndex;
          classesIndeces[clIndex] = visIndex;
        }
        clVal.forEach(propName => {
          if(this.propertiesHash[propName] === clName) {
            const tabName = tab.name !== "general" ? tab.name : undefined;
            if(!!tabName && tabNames.indexOf(tab.name) < 0) {
              tabNames.push(tab.name);
              tabs.push({ name: tab.name, index: tabNames.length * tabStep });
            }
            const item: any = { name: propName, index: propertiesIndeces[propName] };
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
      if(clName === cl || Serializer.isDescendantOf(clName, cl)) return this.getClassName(cl);
    }
    if(clName === this.className) return this.className;
    return this.getClassName("question");
  }
  private getClassName(className: string): string {
    const ind = this.className.indexOf("@");
    if(ind < 0) return className;
    const clName = this.className.substring(0, ind);
    if(clName === className || className === "question") {
      className = "default";
    }
    return clName + "@" + className;
  }
}

export class CreatorPresetEditablePropertyGridDefinition extends CreatorPresetEditableBase {
  private currentJson: ISurveyPropertyGridDefinition;
  private currentProperties: SurveyQuestionPresetPropertiesDetail;
  private currentClassName: string;
  private propCreator: SurveyCreatorModel;
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
          startWithNewLine: false
        },
        {
          type: "panel",
          name: "propPanel",
          visibleIf: this.getNotEmptyVisibleIf(this.nameSelector),
          elements: [
            {
              type: "embeddedcreator",
              name: this.namePropertyCreator,
            },
            {
              type: "matrixdynamic",
              name: this.nameMatrix,
              allowRowsDragAndDrop: true,
              showHeader: false,
              titleLocation: "hidden",
              visible: false,
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
                  selectToRankAreasLayout: "horizontal",
                  titleLocation: "hidden",
                  selectToRankEmptyRankedAreaText: "Drag properties to hide them",
                  selectToRankEmptyUnrankedAreaText: "Drag properties here"
                }
              ]
            },
            {
              type: "embeddedsurvey",
              name: this.namePropertyGrid,
              visible: false,
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
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.getSelector(model).choices = this.getSelectorChoices(creatorSetup.creator);
    this.getMatrix(model).lockedRowCount = 1;
    const options: ICreatorOptions = {
      showJSONEditorTab: false,
      showLogicTab: false,
      showPreviewTab: false,
      pageEditMode: "single",
      allowModifyPages: false,
      showSurveyTitle: false,
      maxNestedPanels: 0
    };
    this.propCreator = creatorSetup.createCreator(options);
    this.setupPropertyCreator();
    this.getPropertyCreatorQuestion(model).embeddedCreator = this.propCreator;
  }
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if(options.question.name === this.nameMatrix) {
      this.onDetailPanelShowingChanged(model, options.row);
      this.expandEmbeddedSurveyPanel(model);
    }
  }
  private isMatrixValueChanged: boolean;
  private isMatrixValueSetting: boolean;
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
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

    this.propCreator.JSON = this.currentProperties.propertyGrid.survey.toJSON();

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
  private getPropertyCreatorQuestion(model: SurveyModel): QuestionEmbeddedCreatorModel { return <QuestionEmbeddedCreatorModel>model.getQuestionByName(this.namePropertyCreator); }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
  private get nameSelector() { return this.fullPath + "_selector"; }
  private get namePropertyGrid() { return this.fullPath + "_propgrid"; }
  private get namePropertyCreator() { return this.fullPath + "_propcreator"; }
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
    const columnPrefix = "matrixdropdowncolumn@";
    res.push(new ItemValue(columnPrefix + "default", this.getColumnItemTitle("")));
    for(let key in matrixDropdownColumnTypes) {
      res.push(new ItemValue(columnPrefix + key, this.getColumnItemTitle(key)));
    }
    return res;
  }
  private getSelectorItemTitle(name: string): string {
    if(name === "survey") return editorLocalization.getString("ed.surveyTypeName");
    if(name === "page") return editorLocalization.getString("ed.pageTypeName");
    return editorLocalization.getString("qt." + name);
  }
  private getColumnItemTitle(name: string): string {
    const columnTitle = editorLocalization.getString("ed.columnTypeName");
    const postFix = !name ? "default" : this.getSelectorItemTitle(name);
    return columnTitle + ": " + postFix;
  }
  private updateCurrentJson(model: SurveyModel): void {
    if(!this.isMatrixValueChanged) return;
    this.isMatrixValueChanged = false;
    if(this.currentProperties) {
      this.currentProperties.updateCurrentJson(model.getValue(this.nameMatrix));
    }
  }
  private setupPropertyCreator(): void {
    const creator = this.propCreator;
    creator.showSaveButton = false;
    creator.isAutoSave = false;
  }
}
export class CreatorEditablePresetPropertyGrid extends CreatorPresetEditableBase {
}

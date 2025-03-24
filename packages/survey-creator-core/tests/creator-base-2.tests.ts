import {
  Base,
  PanelModel,
  SurveyModel,
  Serializer,
  ListModel,
  QuestionRadiogroupModel,
  QuestionTextModel,
  QuestionImageModel,
  QuestionRatingModel,
  QuestionDropdownModel,
  ItemValue,
  settings as surveySettings,
  QuestionPanelDynamicModel,
  CustomWidgetCollection,
  QuestionMatrixModel,
  Action,
  QuestionMatrixDynamicModel,
  QuestionCheckboxModel,
  ComponentCollection,
  QuestionCompositeModel,
  QuestionCustomModel,
  PageModel,
  ComputedUpdater,
  PopupDropdownViewModel,
  Question,
  SurveyElement,
} from "survey-core";
import { PageAdorner } from "../src/components/page";
import { QuestionAdornerViewModel } from "../src/components/question";
import { QuestionImageAdornerViewModel } from "../src/components/question-image";
import { QuestionDropdownAdornerViewModel } from "../src/components/question-dropdown";
import { SurveyElementAdornerBase } from "../src/components/survey-element-adorner-base";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { TabTestPlugin } from "../src/components/tabs/test-plugin";
import { TabTranslationPlugin } from "../src/components/tabs/translation-plugin";
import { TabLogicPlugin } from "../src/components/tabs/logic-plugin";
import { TabJsonEditorTextareaPlugin } from "../src/components/tabs/json-editor-textarea";
import { TabJsonEditorAcePlugin } from "../src/components/tabs/json-editor-ace";
import { isTextInput } from "../src/creator-base";
import { ItemValueWrapperViewModel } from "../src/components/item-value";

import {
  getElementWrapperComponentData,
  getElementWrapperComponentName,
  getQuestionContentWrapperComponentName,
  isStringEditable
} from "../src/creator-base";
import { SurveyHelper } from "../src/survey-helper";
import { CreatorTester } from "./creator-tester";
import { EditorLocalization, editorLocalization } from "../src/editorLocalization";
import { ICreatorPlugin, settings } from "../src/creator-settings";
import { PropertyGridEditorCollection } from "../src/property-grid/index";
import { PropertyGridEditorMatrixItemValues } from "../src/property-grid/matrices";
import { ObjectSelector } from "../src/property-grid/object-selector";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { ConfigureTablePropertyEditorEvent } from "../src/creator-events-api";
import { IQuestionToolboxItem } from "../src/toolbox";
import { ThemeTabPlugin } from "../src/components/tabs/theme-plugin";

test("onModified is raised for mask settings", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            "maskType": "numeric",
            "maskSettings": {
              "thousandsSeparator": "."
            }
          }
        ]
      }
    ]
  };
  let propName = "not triggered";
  creator.onModified.add((sender, options) => {
    propName = options.name;
  });
  const maskedQuestion = creator.survey.getQuestionByName("question1") as QuestionTextModel;
  (maskedQuestion.maskSettings as any).thousandsSeparator = "-";
  expect(propName).toBe("thousandsSeparator");
});

test("json editor default indent", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  expect(settings.jsonEditor.indentation).toBe(2);
  expect(creator.text).toBe("{\n  \"pages\": [\n    {\n      \"name\": \"page1\"\n    }\n  ]\n}");
});
test("onSetPropertyEditorOptions -> onConfigureTablePropertyEditor", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "dropdown", name: "q1", choices: [1, 2] }] };
  const question = creator.survey.getQuestionByName("q1");
  const callBackOptions = {
    allowAddRemoveItems: true,
    allowRemoveAllItems: true,
    allowBatchEdit: true
  };
  creator.onSetPropertyEditorOptionsCallback("choices", question, callBackOptions);
  expect(callBackOptions.allowBatchEdit).toBeTruthy();
  let onSetPropertyEditorOptions_allowBatchEdit = false;
  creator.onSetPropertyEditorOptions.add((sender: any, options: ConfigureTablePropertyEditorEvent) => {
    options.editorOptions.allowBatchEdit = onSetPropertyEditorOptions_allowBatchEdit;
  });
  creator.onSetPropertyEditorOptionsCallback("choices", question, callBackOptions);
  expect(callBackOptions.allowBatchEdit).toBeFalsy();
  callBackOptions.allowBatchEdit = true;
  onSetPropertyEditorOptions_allowBatchEdit = true;
  let onConfigureTablePropertyEditor_allowBatchEdit = true;
  creator.onConfigureTablePropertyEditor.add((sender: any, options: ConfigureTablePropertyEditorEvent) => {
    options.allowBatchEdit = onConfigureTablePropertyEditor_allowBatchEdit;
  });
  creator.onSetPropertyEditorOptionsCallback("choices", question, callBackOptions);
  expect(callBackOptions.allowBatchEdit).toBeTruthy();

  onSetPropertyEditorOptions_allowBatchEdit = false;
  creator.onSetPropertyEditorOptionsCallback("choices", question, callBackOptions);
  expect(callBackOptions.allowBatchEdit).toBeFalsy();
});
test("creator.onSurveyInstanceCreated from property Grid", () => {
  const creator = new CreatorTester();
  const selectedTypes = new Array<string>();
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if (options.area === "property-grid") {
      if (options.obj) {
        selectedTypes.push(options.obj.getType());
      }
    }
  });
  creator.JSON = {
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "radiogroup"
      }
    ]
  };
  creator.selectQuestionByName("q1");
  creator.selectQuestionByName("q2");
  expect(selectedTypes).toStrictEqual(["survey", "text", "radiogroup"]);
});

test("check tabResponsivenessMode property", () => {
  const creator = new CreatorTester();
  creator.tabResponsivenessMode = "menu";
  expect(creator.tabbedMenu.actions.every((action) => action.disableShrink)).toBeTruthy();

  creator.tabResponsivenessMode = "icons";
  expect(creator.tabbedMenu.actions.every((action) => !action.disableShrink)).toBeTruthy();
  const firstTab = creator.tabbedMenu.actions[0];
  expect(firstTab.hasTitle).toBeTruthy();
  expect(firstTab.hasIcon).toBeFalsy();
  firstTab.mode = "small";
  expect(firstTab.hasTitle).toBeFalsy();
  expect(firstTab.hasIcon).toBeTruthy();

  creator.tabResponsivenessMode = "menu";
  expect(creator.tabbedMenu.actions.every((action) => action.disableShrink)).toBeTruthy();
});
test("onModified options, on adding page and on copying page", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [{ elements: [{ type: "text", name: "q1" }] }]
  };

  const modifiedOptions = new Array<any>();
  creator.onModified.add(function (survey, options) {
    modifiedOptions.push(options);
  });
  const newPage = new PageModel();
  newPage.name = "page2";
  creator.addPage(newPage);
  creator.copyPage(creator.survey.pages[0]);
  expect(modifiedOptions[0].type).toBe("PAGE_ADDED");
  expect(modifiedOptions[0].newValue.name).toBe("page2");
  expect(modifiedOptions[2].type).toBe("ELEMENT_COPIED");
  expect(modifiedOptions[2].newValue.name).toBe("page3");
});

test("ZoomIn/ZoomOut designer surface", (): any => {
  const creator = new CreatorTester();
  const designerTabModel = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.survey.widthScale).toBe(100);
  expect(creator.themeVariables).toStrictEqual({});

  designerTabModel["scaleSurface"](10);
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.survey.widthScale).toBe(100);

  designerTabModel["scaleSurface"](200);
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.survey.widthScale).toBe(100);

  designerTabModel["maxSurfaceScaling"] = 200;
  designerTabModel["scaleSurface"](150);
  expect(creator.survey.widthScale).toBe(150);
  expect(designerTabModel["surfaceScale"]).toBe(150);

  expect(designerTabModel.surfaceCssVariables["--ctr-surface-base-unit"]).toBe("12px");
  expect(designerTabModel.surfaceCssVariables["--lbr-corner-radius-unit"]).toBe("12px");
  expect(designerTabModel.surfaceCssVariables["--lbr-font-unit"]).toBe("12px");
  expect(designerTabModel.surfaceCssVariables["--lbr-line-height-unit"]).toBe("12px");
  expect(designerTabModel.surfaceCssVariables["--lbr-size-unit"]).toBe("12px");
  expect(designerTabModel.surfaceCssVariables["--lbr-spacing-unit"]).toBe("12px");
  expect(designerTabModel.surfaceCssVariables["--lbr-stroke-unit"]).toBe("1.5px");
});

test("ZoomIn/ZoomOut actions limits", (): any => {
  const creator = new CreatorTester();
  const designerTabModel = creator.getPlugin("designer").model as TabDesignerViewModel;
  const zoomInAction = designerTabModel.surfaceToolbar.getActionById("zoomIn");
  const zoomOutAction = designerTabModel.surfaceToolbar.getActionById("zoomOut");
  const zoom100Action = designerTabModel.surfaceToolbar.getActionById("zoom100");

  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.survey.widthScale).toBe(100);

  zoomInAction.action();
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.survey.widthScale).toBe(100);

  zoomOutAction.action();
  expect(designerTabModel["surfaceScale"]).toBe(90);
  expect(creator.survey.widthScale).toBe(90);

  zoomOutAction.action();
  zoomOutAction.action();
  zoomOutAction.action();
  zoomOutAction.action();
  zoomOutAction.action();
  zoomOutAction.action();
  expect(designerTabModel["surfaceScale"]).toBe(30);
  expect(creator.survey.widthScale).toBe(30);

  zoomOutAction.action();
  expect(designerTabModel["surfaceScale"]).toBe(20);
  expect(creator.survey.widthScale).toBe(20);

  zoomOutAction.action();
  expect(designerTabModel["surfaceScale"]).toBe(20);
  expect(creator.survey.widthScale).toBe(20);

  zoom100Action.action();
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.survey.widthScale).toBe(100);
});

test("propertyGridNavigationMode property", (): any => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "buttons";
  expect(creator.showOneCategoryInPropertyGrid).toBeTruthy();
  creator.propertyGridNavigationMode = "accordion";
  expect(creator.showOneCategoryInPropertyGrid).toBeFalsy();

  creator.showOneCategoryInPropertyGrid = true;
  expect(creator.propertyGridNavigationMode).toBe("buttons");
  creator.showOneCategoryInPropertyGrid = false;
  expect(creator.propertyGridNavigationMode).toBe("accordion");
});

test("Plugin showOneCategoryInPropertyGrid by default", (): any => {
  const creator = new CreatorTester({ showThemeTab: true, showTranslationTab: true });
  const designerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const translationPlugin = <TabTranslationPlugin>(creator.getPlugin("translation"));
  expect(creator.showOneCategoryInPropertyGrid).toBeTruthy();
  expect(designerPlugin.showOneCategoryInPropertyGrid).toBeTruthy();
  expect(themePlugin.showOneCategoryInPropertyGrid).toBeTruthy();
  expect(translationPlugin.showOneCategoryInPropertyGrid).toBeTruthy();

  creator.propertyGridNavigationMode = "accordion";
  expect(creator.showOneCategoryInPropertyGrid).toBeFalsy();
  expect(designerPlugin.showOneCategoryInPropertyGrid).toBeFalsy();
  expect(themePlugin.showOneCategoryInPropertyGrid).toBeFalsy();
  expect(translationPlugin.showOneCategoryInPropertyGrid).toBeFalsy();
});

test("Set propertyGridNavigationMode property by options", (): any => {
  const creator = new CreatorTester({
    propertyGridNavigationMode: "accordion",
    showThemeTab: true,
    showTranslationTab: true
  });
  const designerPlugin = <TabDesignerPlugin>creator.getPlugin("designer");
  const themePlugin: ThemeTabPlugin = <ThemeTabPlugin>creator.getPlugin("theme");
  const translationPlugin = <TabTranslationPlugin>(creator.getPlugin("translation"));
  expect(creator.showOneCategoryInPropertyGrid).toBeFalsy();
  expect(designerPlugin.showOneCategoryInPropertyGrid).toBeFalsy();
  expect(themePlugin.showOneCategoryInPropertyGrid).toBeFalsy();
  expect(translationPlugin.showOneCategoryInPropertyGrid).toBeFalsy();

  creator.propertyGridNavigationMode = "buttons";
  expect(creator.showOneCategoryInPropertyGrid).toBeTruthy();
  expect(designerPlugin.showOneCategoryInPropertyGrid).toBeTruthy();
  expect(themePlugin.showOneCategoryInPropertyGrid).toBeTruthy();
  expect(translationPlugin.showOneCategoryInPropertyGrid).toBeTruthy();
});

test("showSurfaceTools", (): any => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "never";
  creator.allowZoom = false;
  const designerTabModel = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(designerTabModel.showSurfaceTools).toBeFalsy();

  creator.JSON = { pages: [{ name: "page1" }, { name: "page2" }] };
  expect(designerTabModel.showSurfaceTools).toBeTruthy();

  creator.isMobileView = true;
  expect(designerTabModel.showSurfaceTools).toBeFalsy();

  creator.isMobileView = false;
  expect(designerTabModel.showSurfaceTools).toBeTruthy();

  creator.JSON = { pages: [{ name: "page1" }] };
  expect(designerTabModel.showSurfaceTools).toBeFalsy();

  creator.expandCollapseButtonVisibility = "always";
  expect(designerTabModel.showSurfaceTools).toBeTruthy();
});

test("Designer surface css classes", (): any => {
  const savedNewJSON = settings.defaultNewSurveyJSON;
  settings.defaultNewSurveyJSON = {};
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "never";
  const designerTabModel = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(designerTabModel.getRootCss()).toBe("sd-root-modern svc-tab-designer--with-surface-tools svc-tab-designer--with-placeholder svc-tab-designer--standard-mode");

  creator.allowZoom = false;
  expect(designerTabModel.getRootCss()).toBe("sd-root-modern svc-tab-designer--with-placeholder svc-tab-designer--standard-mode");

  creator.JSON = { pages: [{ name: "page1" }] };
  expect(designerTabModel.getRootCss()).toBe("sd-root-modern svc-tab-designer--standard-mode");

  creator.expandCollapseButtonVisibility = "always";
  expect(designerTabModel.getRootCss()).toBe("sd-root-modern svc-tab-designer--with-surface-tools svc-tab-designer--standard-mode");

  creator.expandCollapseButtonVisibility = "never";
  creator.JSON = { pages: [{ name: "page1" }, { name: "page2" }] };
  expect(designerTabModel.getRootCss()).toBe("sd-root-modern svc-tab-designer--with-surface-tools svc-tab-designer--standard-mode");

  settings.defaultNewSurveyJSON = savedNewJSON;
});

test("Update showPlaceholder calls updateSurveyScaleStartDimensions and resets scale start dimensions", (): any => {
  const creator = new CreatorTester();
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  designerPlugin.activate();
  const model = designerPlugin.model;
  (model as any).checkNewPage();
  expect(model.showPlaceholder).toBeTruthy();

  creator.survey.setResponsiveStartWidth(1000);
  creator.survey.setStaticStartWidth(1000);
  expect(creator.survey.responsiveStartWidth).toBe(1000);
  expect(creator.survey.staticStartWidth).toBe(1000);

  creator.survey.addNewPage();
  expect(model.showPlaceholder).toBeFalsy();
  expect(creator.survey.responsiveStartWidth).toBeUndefined();
  expect(creator.survey.staticStartWidth).toBeUndefined();
});

test("allowDragPages respects the pageEditMode", (): any => {
  const creator = new CreatorTester();
  expect(creator.allowDragPages).toBeTruthy();
  expect(creator.pageEditMode).toBe("standard");

  creator.allowDragPages = false;
  expect(creator.allowDragPages).toBeFalsy();
  expect(creator.pageEditMode).toBe("standard");

  creator.allowDragPages = true;
  expect(creator.allowDragPages).toBeTruthy();
  expect(creator.pageEditMode).toBe("standard");

  creator.pageEditMode = "bypage";
  expect(creator.allowDragPages).toBeFalsy();
  expect(creator.pageEditMode).toBe("bypage");
});

test("onElementAllowOperations for pages and allowDragging in page adorner", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text" }] };
  const reason: Array<boolean> = [];
  let disableDrag = false;
  creator.onElementAllowOperations.add(function (sender, options) {
    if (options.element.getType() == "page") {
      reason.push(options.allowDrag);
      if (disableDrag) {
        options.allowDrag = false;
        options.allowDragging = false;
      }
    }
  });

  const pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  expect(creator.allowDragPages).toBeTruthy();
  expect(pageAdorner.allowDragging).toBeTruthy();
  expect(reason).toHaveLength(1);
  expect(reason[0]).toBeTruthy();

  creator.allowDragPages = false;
  pageAdorner["updateActionsProperties"]();

  expect(creator.allowDragPages).toBeFalsy();
  expect(pageAdorner.allowDragging).toBeFalsy();
  expect(reason).toHaveLength(2);
  expect(reason[1]).toBeFalsy();

  creator.allowDragPages = true;
  disableDrag = true;
  pageAdorner["updateActionsProperties"]();

  expect(creator.allowDragPages).toBeTruthy();
  expect(pageAdorner.allowDragging).toBeFalsy();
  expect(reason).toHaveLength(3);
  expect(reason[2]).toBeTruthy();
});

test("Show/hide creator settings", (): any => {
  const creator = new CreatorTester();
  expect(creator.sidebar.activePage).toBe("propertyGridPlaceholder");

  creator.openCreatorThemeSettings();
  expect(creator.sidebar.activePage).toBe("creatorTheme");

  creator.closeCreatorThemeSettings();
  expect(creator.sidebar.activePage).toBe("propertyGridPlaceholder");
});

test("activatePropertyGridCategory function", (): any => {
  const creator = new CreatorTester();
  let propertyGrid = creator["designerPropertyGrid"];
  expect(propertyGrid.survey.currentPage.name).toBe("general");

  creator.activatePropertyGridCategory("pages");
  expect(propertyGrid.survey.currentPage.name).toBe("pages");
});

test("creator set theme should update headerView survey property", (): any => {
  const creator = new CreatorTester();
  expect(creator.survey.headerView).toBe("advanced");
  creator.theme = {};
  expect(creator.survey.headerView).toBe("advanced");
  creator.theme = { headerView: "basic" };
  expect(creator.survey.headerView).toBe("basic");
});
test("creator set theme should update headerView survey property", (): any => {
  const creator = new CreatorTester({
    clearTranslationsOnSourceTextChange: true
  });
  creator.JSON = {
    elements: [
      {
        type: "text", name: "q1", title: { default: "my question", de: "de: my question" }
      },
      {
        type: "checkbox", name: "my question", title: { de: "de: my question" },
        choices: [
          { value: 1, text: { default: "item1", de: "de-item" } },
          { value: "item2", text: { de: "de-item2" } }
        ]
      },
      {
        type: "matrixdynamic", name: "q3", columns: [
          { name: "col1", title: { default: "col1", de: "de-col1" } },
          { name: "col2", title: { de: "de-col2" } }
        ]
      }
    ]
  };
  expect(creator.clearTranslationsOnSourceTextChange).toBeTruthy();
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = creator.survey.getQuestionByName("my question");
  const columns = creator.survey.getQuestionByName("q3").columns;
  const choices = q2.choices;
  expect(q1.locTitle.getLocaleText("de")).toBe("de: my question");
  expect(q2.locTitle.getLocaleText("de")).toBe("de: my question");
  expect(choices[0].locText.getLocaleText("de")).toBe("de-item");
  expect(choices[1].locText.getLocaleText("de")).toBe("de-item2");
  expect(columns[0].locTitle.getLocaleText("de")).toBe("de-col1");
  expect(columns[1].locTitle.getLocaleText("de")).toBe("de-col2");
  q1.name = "q1_new";
  q2.name = "my question_new";
  expect(q1.locTitle.getLocaleText("de")).toBe("de: my question");
  expect(q2.locTitle.getLocaleText("de")).toBeFalsy();

  columns[0].name = "col1_new";
  columns[1].name = "col2_new";
  expect(columns[0].locTitle.getLocaleText("de")).toBe("de-col1");
  expect(columns[1].locTitle.getLocaleText("de")).toBeFalsy();

  choices[0].value = "item1_new";
  choices[1].value = "item2_new";
  expect(choices[0].locText.getLocaleText("de")).toBe("de-item");
  expect(choices[1].locText.getLocaleText("de")).toBeFalsy();

  q1.title = "my question_new";
  expect(q1.locTitle.getLocaleText("de")).toBeFalsy();

  columns[0].title = "col1_new";
  expect(columns[0].locTitle.getLocaleText("de")).toBeFalsy();

  choices[0].text = "item1_new";
  expect(choices[0].locText.getLocaleText("de")).toBeFalsy();

  creator.survey.locale = "fr";
  q1.locTitle.setLocaleText("de", "de: my question_new");
  q2.locTitle.setLocaleText("de", "de: my question_new");
  q1.title = "fr: my question_new";
  q1.title = "fr: my question_new-1";
  expect(q1.locTitle.getJson()).toStrictEqual({
    default: "my question_new",
    de: "de: my question_new",
    fr: "fr: my question_new-1"
  });
  q2.name = "q2_new2";
  expect(q2.locTitle.getJson()).toStrictEqual({
    de: "de: my question_new"
  });
});
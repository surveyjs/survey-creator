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
import { SurveyElementAdornerBase } from "../src/components/action-container-view-model";
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

surveySettings.supportCreatorV2 = true;

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
  expect(settings.jsonEditor.indentation).toBe(2);
  expect(creator.text).toBe("{\n  \"logoPosition\": \"right\",\n  \"pages\": [\n    {\n      \"name\": \"page1\"\n    }\n  ]\n}");
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
  const creator = new CreatorTester({
    pages: [{ elements: [{ type: "text", name: "q1" }] }]
  });
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
  expect(creator.themeVariables).toStrictEqual({});

  designerTabModel["scaleSurface"](10);
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.themeVariables).toStrictEqual({});
  expect(creator.survey.widthScale).toBe(100);

  designerTabModel["scaleSurface"](200);
  expect(designerTabModel["surfaceScale"]).toBe(100);
  expect(creator.themeVariables).toStrictEqual({});
  expect(creator.survey.widthScale).toBe(100);

  designerTabModel["maxSurfaceScaling"] = 200;
  designerTabModel["scaleSurface"](150);
  expect(creator.survey.widthScale).toBe(150);
  expect(designerTabModel["surfaceScale"]).toBe(150);
  expect(creator.themeVariables).toStrictEqual({
    "--ctr-surface-base-unit": "12px",
    "--lbr-corner-radius-unit": "12px",
    "--lbr-font-unit": "12px",
    "--lbr-line-height-unit": "12px",
    "--lbr-size-unit": "12px",
    "--lbr-spacing-unit": "12px",
    "--lbr-stroke-unit": "1.5px"
  });
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
  const creator = new CreatorTester(undefined, undefined, false);
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
  const creator = new CreatorTester(undefined, undefined, false);
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

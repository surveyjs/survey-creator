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
import { getRowWrapperComponentData, getRowWrapperComponentName, isTextInput } from "../src/creator-base";
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

test("ConvertTo, show the current question type selected", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  expect(items).toHaveLength(22);
  expect(items[0].id).toEqual("radiogroup");
  const popup = questionModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("radiogroup");
  creator.convertCurrentQuestion("radiogroup");
  expect((<any>creator.selectedElement).id).toEqual(question.id);
});
test("ConvertTo, show it for a panel", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "panel", name: "panel" }
    ]
  };
  const panel = creator.survey.getPanelByName("panel");
  creator.selectElement(panel);

  const panelModel = new QuestionAdornerViewModel(
    creator,
    panel,
    undefined
  );
  const items = panelModel.getConvertToTypesActions();
  expect(items).toHaveLength(22);
  const popup = panelModel.getActionById("convertTo").popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  expect(popup).toBeTruthy();
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("panel");
  creator.convertCurrentQuestion("paneldynamic");
  expect((<any>creator.selectedElement).getType()).toEqual("paneldynamic");
});
test("ConvertTo & addNewQuestion for panel & maxNestedPanels (obsolete)", (): any => {
  const creator = new CreatorTester({ maxNestedPanels: 0 });
  creator.JSON = {
    elements: [
      {
        type: "panel", name: "panel1",
        elements: [
          {
            type: "panel", name: "panel3",
            elements: [
              { type: "panel", name: "panel5" },
              { type: "paneldynamic", name: "panel6" }
            ]
          },
          { type: "paneldynamic", name: "panel4" }
        ]
      },
      { type: "paneldynamic", name: "panel2" }
    ]
  };
  expect(creator.maxNestedPanels).toBe(0);
  expect(creator.dragDropSurveyElements.maxNestedPanels).toBe(0);
  creator.maxNestedPanels = -1;
  expect(creator.dragDropSurveyElements.maxNestedPanels).toBe(-1);
  const panel1 = creator.survey.getPanelByName("panel1");
  const panel2 = creator.survey.getQuestionByName("panel2");
  const panel3 = creator.survey.getPanelByName("panel3");
  const panel4 = creator.survey.getQuestionByName("panel4");
  const panel5 = creator.survey.getPanelByName("panel5");
  const panel6 = creator.survey.getQuestionByName("panel6");
  const itemCount = creator.getAvailableToolboxItems().length;
  expect(itemCount).toBe(22);
  const panel6Model = new QuestionAdornerViewModel(creator, panel6, undefined);
  const panel5Model = new QuestionAdornerViewModel(creator, panel5, undefined);
  expect(creator.getAvailableToolboxItems(panel5)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel6)).toHaveLength(itemCount);
  creator.maxNestedPanels = 3;
  expect(creator.dragDropSurveyElements.maxNestedPanels).toBe(3);
  expect(creator.getAvailableToolboxItems(panel5, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel6, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel5)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6)).toHaveLength(itemCount);
  expect(panel6Model.getConvertToTypesActions()).toHaveLength(itemCount);
  expect(panel5Model.getConvertToTypesActions()).toHaveLength(22);
  creator.maxNestedPanels = 2;
  expect(creator.dragDropSurveyElements.maxNestedPanels).toBe(2);
  expect(creator.getAvailableToolboxItems(panel5, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel5)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel3, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel4, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel3)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel4)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel2)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel1)).toHaveLength(itemCount);
  creator.maxNestedPanels = 1;
  expect(creator.dragDropSurveyElements.maxNestedPanels).toBe(1);
  expect(creator.getAvailableToolboxItems(panel5, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel5)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel3, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel4, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel3)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel4)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel1, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel2, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel1)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel2)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems()).toHaveLength(itemCount);
  creator.maxNestedPanels = 0;
  expect(creator.dragDropSurveyElements.maxNestedPanels).toBe(0);
  expect(creator.getAvailableToolboxItems(panel5, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel5)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel6)).toHaveLength(itemCount - 1);
  expect(panel6Model.getConvertToTypesActions()).toHaveLength(itemCount - 1);
  expect(panel5Model.getConvertToTypesActions()).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel3, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel4, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel3)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel4)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel1, false)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel2, false)).toHaveLength(itemCount);
  expect(creator.getAvailableToolboxItems(panel1)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems(panel2)).toHaveLength(itemCount - 1);
  expect(creator.getAvailableToolboxItems()).toHaveLength(itemCount);
});

test("ConvertTo & addNewQuestion for panel & toolboxitem.showInToolboxOnly attribute", (): any => {
  const creator = new CreatorTester();
  const itemCount = creator.getAvailableToolboxItems().length;
  creator.toolbox.addItem({
    name: "text2",
    title: "Text2",
    iconName: "icon-text",
    json: { type: "text", name: "question1" }
  });
  expect(creator.getAvailableToolboxItems()).toHaveLength(itemCount + 1);
  creator.toolbox.addItem({
    name: "text3",
    title: "Text3",
    iconName: "icon-text",
    showInToolboxOnly: true,
    json: { type: "text", name: "question1" }
  });
  expect(creator.getAvailableToolboxItems()).toHaveLength(itemCount + 1);
});

test("ConvertTo & addNewQuestion refresh items", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1" }]
  };
  creator.onQuestionAdded.add((sender, options) => {
    if (options.question.getType() === "text") {
      creator.toolbox.removeItem("text");
    }
  });

  const q1 = creator.survey.getQuestionByName("q1");
  const q1AdornerModel = new QuestionAdornerViewModel(creator, q1, undefined);
  const pageModel = creator.survey.pages[0];
  const pageAdornerModel = new PageAdorner(creator, pageModel);
  const convertToAction = q1AdornerModel.actionContainer.actions.filter(action => action.id === "convertTo")[0];
  const convertToActionPopupViewModel = new PopupDropdownViewModel(convertToAction.popupModel); // need for popupModel.onShow
  const questionTypeSelectorModel = pageAdornerModel.questionTypeSelectorModel;
  const questionTypeSelectorModelPopupViewModel = new PopupDropdownViewModel(questionTypeSelectorModel.popupModel); // need for popupModel.onShow
  const questionTypeSelectorListModel = questionTypeSelectorModel.popupModel.contentComponentData.model as ListModel;

  expect(convertToAction.data.actions.length).toBe(0);
  expect(questionTypeSelectorListModel.actions.length).toBe(0);

  convertToAction.popupModel.show();
  expect(convertToAction.data.actions.length).toBe(22);
  convertToAction.popupModel.hide();

  questionTypeSelectorModel.popupModel.show();
  expect(questionTypeSelectorListModel.actions.length).toBe(22);
  questionTypeSelectorModel.popupModel.hide();

  pageModel.addNewQuestion("text", "q2");

  convertToAction.popupModel.show();
  expect(convertToAction.data.actions.length).toBe(21);
  convertToAction.popupModel.hide();

  questionTypeSelectorModel.popupModel.show();
  expect(questionTypeSelectorListModel.actions.length).toBe(21);
  questionTypeSelectorModel.popupModel.hide();

  const q2AdornerModel = new QuestionAdornerViewModel(creator, creator.survey.getQuestionByName("q2"), undefined);
  const convertToAction2 = q2AdornerModel.actionContainer.actions.filter(action => action.id === "convertTo")[0];
  expect(convertToAction2.title).toBe("Single-Line Input");
});

test("ConverTo, change title of question item", (): any => {
  const creator = new CreatorTester();
  creator.toolbox.getItemByName("radiogroup").title = "Single selector";

  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const action = questionModel.getActionById("convertTo");
  expect(action.title).toEqual("Single selector");
});

test("ConvertTo separators", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" },
      { type: "panel", name: "panel" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  expect(items).toHaveLength(22);
  expect(items.filter(i => i.id == "text")[0].needSeparator).toBeTruthy();
  expect(items.filter(i => i.id == "comment")[0].needSeparator).toBeFalsy();
  expect(items.filter(i => i.id == "multipletext")[0].needSeparator).toBeFalsy();
  expect(items.filter(i => i.id == "panel")[0].needSeparator).toBeTruthy();

  const panel = creator.survey.getPanelByName("panel");
  creator.selectElement(panel);

  const panelModel = new QuestionAdornerViewModel(
    creator,
    panel,
    undefined
  );
  const items2 = panelModel.getConvertToTypesActions();
  expect(items2).toHaveLength(22);
});
test("convertInputType, change inputType for a text question", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  let question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  let questionModel = new QuestionAdornerViewModel(creator, question, undefined);
  expect(questionModel.getActionById("convertInputType")).toBeFalsy();
  let action = questionModel.getActionById("convertTo");
  expect(action).toBeTruthy();
  expect(action.css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeTruthy();
  question = creator.survey.getQuestionByName("q2");
  creator.selectElement(question);
  questionModel = new QuestionAdornerViewModel(creator, question, undefined);
  action = questionModel.getActionById("convertTo");
  expect(action).toBeTruthy();
  expect(action.css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeFalsy();
  action = questionModel.getActionById("convertInputType");
  expect(action).toBeTruthy();
  expect(action.css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeTruthy();
  expect(action.title).toBe("Text");
  let popup = action.popupModel;
  let popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  expect(popup).toBeTruthy();
  popup.show();
  let list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  expect(list.selectedItem).toBeTruthy();
  expect(list.selectedItem.id).toEqual("text-default");

  const telItem = list.actions.filter(item => item.id === "tel")[0];
  list.onItemClick(telItem);
  question = creator.survey.getQuestionByName("q2");
  questionModel = new QuestionAdornerViewModel(creator, question, undefined);
  action = questionModel.getActionById("convertInputType");
  expect(question.inputType).toBe("tel");
  expect(action.title).toBe("Phone Number");
  question.inputType = "password";
  expect(action.title).toBe("Password");
  popup = action.popupModel;
  popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  expect(popup).toBeTruthy();
  popup.show();
  list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toEqual("password");
});
test("convertInputType, hide it for readOnly creator", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  let questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q1"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeTruthy();
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q2"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeTruthy();
  creator.readOnly = true;
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q1"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeFalsy();
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q2"), undefined);
  expect(questionModel.getActionById("convertInputType").visible).toBeFalsy();
});
test("convertInputType styles with event", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
      { type: "text", name: "q2" },
      { type: "boolean", name: "q3" },
    ]
  };

  creator.onElementGetActions.add((sender, options) => {
    if (options.element.getType() === "rating") {
      const convertInputTypeActionIndex = options.actions.findIndex(
        (x) => x.id === "convertInputType"
      );
      if (!!convertInputTypeActionIndex) {
        options.actions.splice(convertInputTypeActionIndex, 1);
      }
    }
  });

  let questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q1"), undefined);
  expect(questionModel.getActionById("convertTo").css.indexOf("svc-dropdown-action--convertTo") > -1).toBeTruthy();
  expect(questionModel.getActionById("convertTo").css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeTruthy();
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q2"), undefined);
  expect(questionModel.getActionById("convertTo").css.indexOf("svc-dropdown-action--convertTo") > -1).toBeTruthy();
  expect(questionModel.getActionById("convertTo").css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeFalsy();
  expect(questionModel.getActionById("convertInputType").css.indexOf("svc-dropdown-action--convertTo") > -1).toBeTruthy();
  expect(questionModel.getActionById("convertInputType").css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeTruthy();
  questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q3"), undefined);
  expect(questionModel.getActionById("convertTo").css.indexOf("svc-dropdown-action--convertTo") > -1).toBeTruthy();
  expect(questionModel.getActionById("convertTo").css.indexOf("svc-dropdown-action--convertTo-last") > -1).toBeTruthy();
});
test("convertInputType, check locale", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  creator.locale = "de";
  const questionModel = new QuestionAdornerViewModel(creator, creator.selectQuestionByName("q1"), undefined);
  const action: any = questionModel.getActionById("convertInputType");
  expect(action.data.locOwner.locale).toBe("de");
});
test("convertTo & convertInputType, check search input is focused", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" },] };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionModel = new QuestionAdornerViewModel(creator, question, undefined);
  const convertToAction = questionModel.getActionById("convertTo");
  const convertInputTypeAction = questionModel.getActionById("convertInputType");

  expect(convertToAction).toBeTruthy();
  expect(convertInputTypeAction).toBeTruthy();

  let popupModel = convertToAction.popupModel;
  let popupViewModel = new PopupDropdownViewModel(popupModel); // need for popupModel.onShow
  expect(popupModel).toBeTruthy();
  popupModel.show();
  expect(popupModel.isFocusedContent).toBeTruthy();

  popupModel = convertInputTypeAction.popupModel;
  popupViewModel = new PopupDropdownViewModel(popupModel); // need for popupModel.onShow
  expect(popupModel).toBeTruthy();
  popupModel.show();
  expect(popupModel.isFocusedContent).toBeTruthy();
});
test("change locale & creator.sidebar.hasVisiblePages", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
      { type: "text", name: "q2" },
    ]
  };
  expect(creator.sidebar.hasVisiblePages).toBeTruthy();
  creator.locale = "de";
  expect(creator.sidebar.hasVisiblePages).toBeTruthy();
});
test("QuestionAdornerViewModel for selectbase and creator.minChoices", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  creator.minChoices = 2;
  let itemValue = new ItemValueWrapperViewModel(creator, q1, q1.choices[0]);
  expect(itemValue.allowRemove).toBeFalsy();
  q1.choices.push(new ItemValue("item3"));
  expect(itemValue.allowRemove).toBeTruthy();
  q1.choices.splice(2, 1);
  expect(itemValue.allowRemove).toBeFalsy();
});
test("QuestionAdornerViewModel for selectbase and creator.maxChoices", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  creator.maxChoices = 3;
  const q1Model = new QuestionAdornerViewModel(creator, q1, undefined);
  expect(q1.visibleChoices).toHaveLength(2 + 4);
  q1.choices.push(new ItemValue("item3"));
  expect(q1.visibleChoices[4] === q1.newItem).toBeFalsy();
  expect(q1.visibleChoices).toHaveLength(3 + 3);
  expect(q1.visibleChoices[3].value).toEqual("item3");
});
test("QuestionAdornerViewModel for selectbase and creator.readOnly", (): any => {
  const creator = new CreatorTester();
  creator.readOnly = true;
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const q1Model = new QuestionAdornerViewModel(creator, q1, undefined);
  expect(q1.visibleChoices).toHaveLength(2);
});
test("QuestionAdornerViewModel for selectbase and creator.onItemValueAdded", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "radiogroup", name: "q1", choices: ["item1", "item2"] }]
  };
  creator.onItemValueAdded.add((sender, options) => {
    options.newItem.text = options.element.getType() + ":" + options.propertyName + ","
      + options.newItem.value + "," + options.itemValues.length.toString();

  });
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const newItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.visibleChoices[2]);
  newItemAdorner.add(newItemAdorner);
  expect(q1.choices).toHaveLength(3);
  expect(q1.choices[2].text).toEqual("radiogroup:choices,item3,3");
});
test("QuestionAdornerViewModel question.newItem.value/text", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "radiogroup", name: "q1", choices: [{ value: 1, text: "Item 1" }, { value: 2, text: "Item 2" }] }]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const newItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.visibleChoices[2]);
  expect(q1.newItem.value).toEqual(3);
  expect(q1.newItem.text).toEqual("Item 3");
  newItemAdorner.add(newItemAdorner);
  expect(q1.choices).toHaveLength(3);
  expect(q1.choices[2].value).toEqual(3);
  expect(q1.choices[2].text).toEqual("Item 3");
  expect(q1.newItem.value).toEqual(4);
  expect(q1.newItem.text).toEqual("Item 4");
});

test("Modify property editor settings on event", (): any => {
  const creator = new CreatorTester();
  creator.onPropertyEditorCreated.add((sender, options) => {
    if (
      options.element.getType() == "text" &&
      options.property.name === "placeholder"
    ) {
      options.editor.textUpdateMode = "onTyping";
      options.editor.dataList = ["item1", "item2"];
    }
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  const placeholderQuestion = creator.sidebar.getPageById("propertyGrid").componentData.survey.getQuestionByName("placeholder");
  expect(placeholderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeholderQuestion.dataList).toHaveLength(2);
});
test("Modify property editor via property grid survey", (): any => {
  const creator = new CreatorTester();
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if (options.area !== "property-grid" || options.element?.getType() !== "text") return;
    const question = options.survey.getQuestionByName("placeholder");
    question.textUpdateMode = "onTyping";
    question.dataList = ["item1", "item2"];
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  const placeholderQuestion = creator.sidebar.getPageById("propertyGrid").componentData.survey.getQuestionByName("placeholder");
  expect(placeholderQuestion.textUpdateMode).toEqual("onTyping");
  expect(placeholderQuestion.dataList).toHaveLength(2);
});
test("createSurvey assigns a short elementIdPrefix derived from the survey area", (): any => {
  const creator = new CreatorTester();
  const getIdPrefix = (area: string): string => {
    return creator.createSurvey({}, area, undefined, undefined, area).elementIdPrefix;
  };
  expect(getIdPrefix("designer-tab")).toEqual("dt-");
  expect(getIdPrefix("property-grid")).toEqual("pg-");
  expect(getIdPrefix("preview-tab")).toEqual("pt-");
  expect(getIdPrefix("logic-rule:condition-editor")).toEqual("lrce-");
  expect(getIdPrefix("translation-tab:language-list")).toEqual("ttll-");
  expect(getIdPrefix("matrix-cell-values-popup-editor")).toEqual("mcvpe-");
  expect(getIdPrefix("")).toEqual("");
});
test("Design surface and property grid surveys do not share element ids", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const designerSurvey = creator.survey;
  creator.selectElement(designerSurvey.getAllQuestions()[0]);
  const propertyGridSurvey = creator.sidebar.getPageById("propertyGrid").componentData.survey;

  expect(designerSurvey.elementIdPrefix).toEqual("dt-");
  expect(propertyGridSurvey.elementIdPrefix).toEqual("pg-");

  const designerQuestionId = designerSurvey.getAllQuestions()[0].renderedId;
  const nameEditorId = propertyGridSurvey.getQuestionByName("name").renderedId;
  expect(designerQuestionId.indexOf("dt-sq_")).toEqual(0);
  expect(nameEditorId.indexOf("pg-sq_")).toEqual(0);
  expect(designerQuestionId).not.toEqual(nameEditorId);
});
test("Modify property editor titleActions on event", (): any => {
  PropertyGridEditorCollection.register(new PropertyGridEditorMatrixItemValues());
  const creator = new CreatorTester();
  creator.onPropertyEditorUpdateTitleActions.add((sender, options) => {
    const obj = options.element;
    if (
      obj.getType() === "checkbox" &&
      options.property.name === "choices" &&
      obj.name === "q2"
    ) {
      options.titleActions.push({
        id: "test", title: "test", action: () => { obj.choices = [1, 2]; }
      });
    }
  });
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1" }, { type: "checkbox", name: "q2" }]
  };
  creator.selectElement(creator.survey.getAllQuestions()[0]);
  let choicesQuestion = creator.sidebar.getPageById("propertyGrid").componentData.survey.getQuestionByName("choices");
  expect(choicesQuestion).toBeTruthy();
  expect(choicesQuestion.getType()).toEqual("matrixdynamic");
  expect(choicesQuestion.getTitleActions()).toHaveLength(4);
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[1];
  creator.selectElement(question);
  choicesQuestion = creator.sidebar.getPageById("propertyGrid").componentData.survey.getQuestionByName("choices");
  expect(choicesQuestion.getTitleActions()).toHaveLength(5);
  expect(question.choices).toHaveLength(0);
  choicesQuestion.titleActions[4].action();
  expect(question.choices).toHaveLength(2);
});
test("Set readOnly option", (): any => {
  try {
    const creator = new CreatorTester({ readOnly: true });
    expect(creator.readOnly).toBeTruthy();
  } catch(e) {
    expect(e).toBeNull();
  }
});
test("Set showSurveyHeader option", (): any => {
  const creator = new CreatorTester({ showSurveyHeader: false });
  const showProp = (className: string, propName: string): boolean => {
    const prop = Serializer.findProperty(className, propName);
    return creator.onCanShowPropertyCallback(undefined, prop, "", undefined, <any>undefined);
  };
  expect(creator.showSurveyHeader).toBeFalsy();
  expect(showProp("survey", "title")).toBeFalsy();
  expect(showProp("survey", "description")).toBeFalsy();
  expect(showProp("survey", "logo")).toBeFalsy();
  expect(showProp("survey", "logoFit")).toBeFalsy();
  expect(showProp("survey", "logoWidth")).toBeFalsy();
  expect(showProp("survey", "logoHeight")).toBeFalsy();
  creator.showSurveyHeader = true;
  expect(showProp("survey", "title")).toBeTruthy();
  expect(showProp("survey", "description")).toBeTruthy();
  expect(showProp("survey", "logo")).toBeTruthy();
  expect(showProp("survey", "logoFit")).toBeTruthy();
  expect(showProp("survey", "logoWidth")).toBeTruthy();
  expect(showProp("survey", "logoHeight")).toBeTruthy();
});
test("Set showSurveyHeader option with removed logoHeight property", (): any => {
  Serializer.removeProperty("survey", "logoHeight");
  const creator = new CreatorTester({ showSurveyHeader: false });
  const showProp = (className: string, propName: string): boolean => {
    const prop = Serializer.findProperty(className, propName);
    return creator.onCanShowPropertyCallback(undefined, prop, "", undefined, <any>undefined);
  };
  expect(creator.showSurveyHeader).toBeFalsy();
  expect(showProp("survey", "logoWidth")).toBeFalsy();
  creator.showSurveyHeader = true;
  expect(showProp("survey", "logoWidth")).toBeTruthy();
  Serializer.addProperty("survey", { name: "logoHeight", default: "200px", minValue: 0 });
});
test("creator.onActiveTabChanged", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  let tabName;
  let plugin;
  let model;
  creator.onActiveTabChanged.add((sender, options) => {
    tabName = options.tabName;
    plugin = options.plugin;
    model = options.model;
  });
  expect(creator.viewType).toEqual("designer");
  creator.switchTab("test");
  expect(tabName).toEqual("preview");
  expect(plugin).toEqual(creator.getPlugin("test"));
  expect(model).toEqual(plugin.model);
  expect(creator.activeTab).toEqual("preview");
  creator.switchTab("logic");
  expect(tabName).toEqual("logic");
  expect(plugin).toEqual(creator.getPlugin("logic"));
  expect(model).toEqual(plugin.model);
  expect(creator.activeTab).toEqual("logic");
});
test("creator.onActiveTabChaning", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  let tabName;
  let allow = true;
  creator.onActiveTabChanging.add((sender, options) => {
    tabName = options.tabName;
    options.allow = allow;
  });
  expect(creator.viewType).toEqual("designer");
  creator.switchTab("test");
  expect(tabName).toEqual("preview");
  expect(creator.activeTab).toEqual("preview");
  allow = false;
  creator.switchTab("logic");
  expect(tabName).toEqual("logic");
  expect(creator.activeTab).toEqual("preview");
});
test("active tab disableHide", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  expect(creator.viewType).toEqual("designer");
  expect(creator.tabs[0].active).toBeTruthy();
  expect(creator.tabs[0].disableHide).toBeTruthy();
  creator.switchTab("test");
  expect(creator.tabs[1].active).toBeTruthy();
  expect(creator.tabs[1].disableHide).toBeTruthy();
  expect(creator.tabs[0].active).toBeFalsy();
  expect(creator.tabs[0].disableHide).toBeFalsy();
});
test("update tab content", (): any => {
  const creator = new CreatorTester({
    showTranslationTab: true,
    showLogicTab: true,
  });
  const newJson = {
    elements: [{ type: "checkbox", name: "q1", choices: ["item1", "item2"] }]
  };
  const hasQ1 = (survey: SurveyModel) => !!survey.getQuestionByName("q1");
  expect(creator.viewType).toEqual("designer");
  expect(hasQ1(creator.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(creator.survey)).toBeTruthy();

  creator.JSON = {};
  creator.switchTab("test");
  expect(creator.viewType).toEqual("preview");
  const testPlugin = <TabTestPlugin>creator.getPlugin("test");
  expect(hasQ1(testPlugin.model.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(testPlugin.model.survey)).toBeTruthy();

  creator.JSON = {};
  creator.switchTab("logic");
  expect(creator.viewType).toEqual("logic");
  const logicPlugin = <TabLogicPlugin>creator.getPlugin("logic");
  expect(hasQ1(logicPlugin.model.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(logicPlugin.model.survey)).toBeTruthy();

  creator.JSON = {};
  creator.switchTab("translation");
  expect(creator.viewType).toEqual("translation");
  const translationPlugin = <TabLogicPlugin>creator.getPlugin("translation");
  expect(hasQ1(translationPlugin.model.survey)).toBeFalsy();
  creator.JSON = newJson;
  expect(hasQ1(translationPlugin.model.survey)).toBeTruthy();
});

test("Keyboard Shortcuts", (): any => {
  const creator = new CreatorTester();
  let count = 0;

  creator.registerShortcut("increase", {
    hotKey: {
      keyCode: 107, //numpad '-'
    },
    execute: () => { count++; }
  });

  creator.registerShortcut("decrease", {
    hotKey: {
      keyCode: 109, //numpad '+'
    },
    execute: () => { count--; }
  });

  const fakeIncreaseEvent: any = { keyCode: 107 };
  creator["onKeyDownHandler"](fakeIncreaseEvent);
  expect(count).toEqual(1);

  const fakeDecreaseEvent: any = { keyCode: 109 };
  creator["onKeyDownHandler"](fakeDecreaseEvent);
  expect(count).toEqual(0);
});

test("LogicPlugin Manual Entry: options.logicAllowTextEditExpressions", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  let logicTabActions = logicPlugin.createActions();
  expect(creator.logicAllowTextEditExpressions).toBeTruthy();
  expect(logicTabActions).toHaveLength(3);
  expect(logicTabActions[2].id).toEqual("svc-logic-fast-entry");

  creator.logicAllowTextEditExpressions = false;
  logicTabActions = logicPlugin.createActions();
  expect(logicTabActions).toHaveLength(2);
  expect(logicTabActions.filter(action => action.id === "svc-logic-fast-entry")).toHaveLength(0);
});

test("LogicPlugin Manual Entry: fastEntryAction switch active", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  const fastEntryAction = logicPlugin.createActions().filter(action => action.id === "svc-logic-fast-entry")[0];

  expect(fastEntryAction.visible).toBeFalsy();

  logicPlugin.activate();
  expect(fastEntryAction.visible).toBeTruthy();

  logicPlugin.model.expressionEditorIsFastEntry = true;
  expect(fastEntryAction.active).toBeTruthy();

  logicPlugin.model.expressionEditorIsFastEntry = false;
  expect(fastEntryAction.active).toBeFalsy();
});

test("LogicPlugin Manual Entry: fastEntryAction enabled", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  const fastEntryAction = logicPlugin.createActions().filter(action => action.id === "svc-logic-fast-entry")[0];

  expect(fastEntryAction.visible).toBeFalsy();

  logicPlugin.activate();
  expect(fastEntryAction.visible).toBeTruthy();
  expect(fastEntryAction.enabled).toBeFalsy();

  logicPlugin.model.expressionEditorCanShowBuilder = false;
  expect(fastEntryAction.enabled).toBeFalsy();

  logicPlugin.model.expressionEditorCanShowBuilder = true;
  expect(fastEntryAction.enabled).toBeTruthy();
});
test("getNewName get new element name", (): any => {
  const creator = new CreatorTester({ showSurveyHeader: false });
  creator.JSON = { pages: [{ name: "page1" }] };
  const getNewName = (elementType: string, isPanel?: boolean) => { return creator["getNewName"](elementType, isPanel); };

  let elementType = "rating";
  expect(getNewName(elementType)).toBe("question1");

  elementType = "page";
  expect(getNewName(elementType)).toBe("page2");

  elementType = "panel";
  let isPanel = true;
  expect(getNewName(elementType, isPanel)).toBe("panel1");

  elementType = "custompanel";
  isPanel = true;
  expect(getNewName(elementType, isPanel)).toBe("panel1");
});
test("change locale in several pages survey", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        title: {
          default: "Page 1",
          de: "Page 1 - de"
        },
        elements: [
          {
            type: "text",
            name: "q1",
            title: {
              default: "Question 1",
              de: "Question 1 - de"
            }
          }
        ]
      },
      {
        title: {
          default: "Page 2",
          de: "Page 2 - de"
        },
        elements: [
          {
            type: "text",
            name: "q2",
            title: {
              default: "Question 2",
              de: "Question 2 - de"
            }
          }
        ]
      }
    ]
  };
  expect(creator.survey.pages[0].locTitle.renderedHtml).toEqual("Page 1");
  expect(creator.survey.getAllQuestions()[0].locTitle.renderedHtml).toEqual("Question 1");
  expect(creator.survey.pages[1].locTitle.renderedHtml).toEqual("Page 2");
  expect(creator.survey.getAllQuestions()[1].locTitle.renderedHtml).toEqual("Question 2");
  const data = {};
  creator.survey.pages[0].locTitle.onChanged = () => {
    data["page1"] = true;
  };
  creator.survey.pages[1].locTitle.onChanged = () => {
    data["page2"] = true;
  };
  creator.survey.getAllQuestions()[0].locTitle.onChanged = () => {
    data["q1"] = true;
  };
  creator.survey.getAllQuestions()[1].locTitle.onChanged = () => {
    data["q2"] = true;
  };
  creator.survey.locale = "de";
  expect(data["page1"]).toBeTruthy();
  expect(data["page2"]).toBeTruthy();
  expect(data["q1"]).toBeTruthy();
  expect(data["q2"]).toBeTruthy();

});

test("process shortcut for text inputs", (): any => {
  const creator = new CreatorTester({ showDesignerTab: false });
  let log = "";
  creator.registerShortcut("delete_test", {
    hotKey: {
      keyCode: 46,
    },
    macOsHotkey: {
      keyCode: 46,
    },
    execute: () => log += "->execute"
  });
  expect(log).toEqual("");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: {} });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "input" } });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "textarea" } });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "span" } });
  expect(log).toEqual("->execute->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "div" } });
  expect(log).toEqual("->execute->execute->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: { tagName: "span", isContentEditable: true } });
  expect(log).toEqual("->execute->execute->execute");
});
test("Do not delete for read-only creator, Bug#6078", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  };
  creator.readOnly = true;
  creator.selectQuestionByName("q2");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: {} });
  expect(creator.selectedElementName).toBe("q2");
  creator.readOnly = false;
  creator.selectQuestionByName("q2");
  creator["onKeyDownHandler"](<any>{ keyCode: 46, target: {} });
  expect(creator.selectedElementName).toBe("q1");
});

test("process undo-redo shortcut for text inputs", (): any => {
  const creator = new CreatorTester({ showDesignerTab: false });
  let log = "";
  creator.registerShortcut("undo_test", {
    hotKey: {
      keyCode: 90,
    },
    macOsHotkey: {
      keyCode: 90,
    },
    execute: () => log += "->execute"
  });
  creator.registerShortcut("redo_test", {
    hotKey: {
      keyCode: 89,
    },
    macOsHotkey: {
      keyCode: 89,
    },
    execute: () => log += "->execute"
  });
  expect(log).toEqual("");
  creator["onKeyDownHandler"](<any>{ keyCode: 90, target: { tagName: "span" } });
  expect(log).toEqual("->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 89, target: { tagName: "div" } });
  expect(log).toEqual("->execute->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 89, target: { tagName: "input" } });
  expect(log).toEqual("->execute->execute");
  creator["onKeyDownHandler"](<any>{ keyCode: 90, target: { tagName: "input" } });
  expect(log).toEqual("->execute->execute");
});

test("doClickQuestionCore", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question4"
          },
          {
            "type": "boolean",
            "name": "question1"
          },
          {
            "type": "radiogroup",
            "name": "question2",
            "startWithNewLine": false,
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          },
          {
            "type": "rating",
            "name": "question3",
            "startWithNewLine": false
          }
        ]
      }
    ]
  };
  const q3 = creator.survey.getQuestionByName("question3");
  creator.selectElement(q3);
  const newQuestion1 = new QuestionTextModel("newQuestion1");
  creator["doClickQuestionCore"](newQuestion1);
  expect(creator.survey.getAllQuestions()[4].name).toEqual("newQuestion1");
  expect(creator.survey.getAllQuestions()[4].startWithNewLine).toEqual(true);
  expect(creator.survey.getAllQuestions()[3].startWithNewLine).toEqual(false);
});

test("Add new question to Panel and Page", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        elements: [{ type: "panel", name: "panel1" }]
      },
      {
        elements: [{ type: "panel", name: "panel2" }]
      },
      {
        elements: [{ type: "panel", name: "panel3" }]
      }
    ]
  };

  const panelAdornerModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[0],
    undefined
  );
  const panelAdornerModel2: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[1],
    undefined
  );
  const panelAdornerModel3: QuestionAdornerViewModel = new QuestionAdornerViewModel(
    creator,
    <any>creator.survey.getAllPanels()[2],
    undefined
  );

  const pageAdornerModel = new PageAdorner(creator, creator.survey.pages[0]);
  const pageAdornerModel2 = new PageAdorner(creator, creator.survey.pages[1]);
  const pageAdornerModel3 = new PageAdorner(creator, creator.survey.pages[2]);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel3.addNewQuestionText).toEqual("Add Question");

  expect(creator.survey.getAllQuestions().length).toEqual(0);
  pageAdornerModel.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions().length).toEqual(1);
  expect(panelAdornerModel.element.getElementsInDesign().length).toEqual(0);
  panelAdornerModel.addNewQuestion();
  expect(panelAdornerModel.element.getElementsInDesign().length).toEqual(1);

  const selectorModelPanel = panelAdornerModel.questionTypeSelectorModel;
  const listModelPanel: ListModel = selectorModelPanel.popupModel.contentComponentData.model;
  let actionPopupViewModel = new PopupDropdownViewModel(selectorModelPanel.popupModel); // need for popupModel.onShow
  selectorModelPanel.popupModel.show();
  const ratingItem = listModelPanel.actions.filter((item) => item.id == "rating")[0];
  listModelPanel.onItemClick(ratingItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPanel2 = panelAdornerModel2.questionTypeSelectorModel;
  const listModelPanel2: ListModel = selectorModelPanel2.popupModel.contentComponentData.model;
  actionPopupViewModel = new PopupDropdownViewModel(selectorModelPanel2.popupModel); // need for popupModel.onShow
  selectorModelPanel2.popupModel.show();
  const commentItem = listModelPanel2.actions.filter((item) => item.id == "comment")[0];
  listModelPanel2.onItemClick(commentItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Long Text");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Question");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPage = pageAdornerModel.questionTypeSelectorModel;
  const listModelPage: ListModel = selectorModelPage.popupModel.contentComponentData.model;
  actionPopupViewModel = new PopupDropdownViewModel(selectorModelPage.popupModel); // need for popupModel.onShow
  selectorModelPage.popupModel.show();
  const rankingItem = listModelPage.actions.filter((item) => item.id == "ranking")[0];
  listModelPage.onItemClick(rankingItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Long Text");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Ranking");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add Question");

  const selectorModelPage2 = pageAdornerModel2.questionTypeSelectorModel;
  const listModelPage2: ListModel = selectorModelPage2.popupModel.contentComponentData.model;
  actionPopupViewModel = new PopupDropdownViewModel(selectorModelPage2.popupModel); // need for popupModel.onShow
  selectorModelPage2.popupModel.show();
  const htmlItem = listModelPage2.actions.filter((item) => item.id == "html")[0];
  listModelPage2.onItemClick(htmlItem);

  expect(panelAdornerModel.addNewQuestionText).toEqual("Add Rating Scale");
  expect(panelAdornerModel2.addNewQuestionText).toEqual("Add Long Text");
  expect(pageAdornerModel.addNewQuestionText).toEqual("Add Ranking");
  expect(pageAdornerModel2.addNewQuestionText).toEqual("Add HTML");

  expect((creator.survey.getAllPanels()[0] as PanelModel).questions.map(q => q.getType())).toEqual(["text", "rating"]);
  expect((creator.survey.getAllPanels()[1] as PanelModel).questions.map(q => q.getType())).toEqual(["comment"]);
  expect(creator.survey.pages[0].questions.map(q => q.getType())).toEqual(["text", "rating", "text", "ranking"]);
  expect(creator.survey.pages[1].questions.map(q => q.getType())).toEqual(["comment", "html"]);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "text", "ranking", "comment", "html"]);

  pageAdornerModel.addNewQuestion(null, null);
  panelAdornerModel.addNewQuestion();
  pageAdornerModel2.addNewQuestion(null, null);
  panelAdornerModel2.addNewQuestion();

  expect((creator.survey.getAllPanels()[0] as PanelModel).questions.map(q => q.getType())).toEqual(["text", "rating", "rating"]);
  expect((creator.survey.getAllPanels()[1] as PanelModel).questions.map(q => q.getType())).toEqual(["comment", "comment"]);
  expect(creator.survey.pages[0].questions.map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking"]);
  expect(creator.survey.pages[1].questions.map(q => q.getType())).toEqual(["comment", "comment", "html", "html"]);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html"]);

  pageAdornerModel3.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html", "text"]);
  panelAdornerModel3.addNewQuestion();
  expect(creator.survey.getAllQuestions().map(q => q.getType())).toEqual(["text", "rating", "rating", "text", "ranking", "ranking", "comment", "comment", "html", "html", "text", "text"]);
});
test("Add new question from Page on selecting question in panel dynamic", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "paneldynamic", name: "panel1",
        templateElements: [
          { type: "text", name: "question1" }
        ]
      }
    ]
  };

  const pageAdornerModel = new PageAdorner(creator, creator.survey.pages[0]);
  creator.selectElement(creator.survey.getQuestionByName("question1"));
  pageAdornerModel.addNewQuestion(pageAdornerModel, null);
  expect(creator.selectedElementName).toBe("question2");
});
test("Use settings.designer.defaultAddQuestionType", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }] };
  settings.designer.defaultAddQuestionType = "radiogroup";
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const panel = <PanelModel>creator.survey.getAllPanels()[0];
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  pageModel.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions()[0].getType()).toEqual("radiogroup");
  panelModel.addNewQuestion();
  expect(panel.questions[0].getType()).toEqual("radiogroup");
  settings.designer.defaultAddQuestionType = "text";
});
test("Use creator.defaultAddQuestionType", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }] };
  creator.defaultAddQuestionType = "radiogroup";
  const pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  const panel = <PanelModel>creator.survey.getAllPanels()[0];
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  pageModel.addNewQuestion(null, null);
  expect(creator.survey.getAllQuestions()[0].getType()).toEqual("radiogroup");
  panelModel.addNewQuestion();
  expect(panel.questions[0].getType()).toEqual("radiogroup");
});
test("Use settings.designer.showAddQuestionButton = false", (): any => {
  settings.designer.showAddQuestionButton = false;
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }] };
  let pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  let panel = <PanelModel>creator.survey.getAllPanels()[0];
  let panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  expect(pageModel.showAddQuestionButton).toBeFalsy();
  expect(panelModel.showAddQuestionButton).toBeFalsy();
  settings.designer.showAddQuestionButton = true;
  pageModel = new PageAdorner(creator, creator.survey.pages[0]);
  panelModel = new QuestionAdornerViewModel(creator, panel, undefined);
  expect(pageModel.showAddQuestionButton).toBeTruthy();
  expect(panelModel.showAddQuestionButton).toBeTruthy();
});
test("Add Questions with selection", (): any => {
  const creator = new CreatorTester();
  creator.addNewQuestionLast = false;
  creator.JSON = { elements: [{ type: "panel", name: "panel1" }], showQuestionNumbers: true };
  const panel = <PanelModel>creator.survey.getAllPanels()[0];
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  panelModel.addNewQuestion();
  panelModel.addNewQuestion();
  panelModel.addNewQuestion();
  creator.selectElement(panel.elements[1]);
  panelModel.addNewQuestion();
  creator.selectElement(panel);
  panelModel.addNewQuestion();
  expect(panel.elements).toHaveLength(5);
  expect(panel.elements[0].name).toEqual("question1");
  expect(panel.elements[1].name).toEqual("question2");
  expect(panel.elements[2].name).toEqual("question4");
  expect(panel.elements[3].name).toEqual("question3");
  expect(panel.elements[4].name).toEqual("question5");
  expect((<any>panel.elements[4]).visibleIndex).toBe(4);
});
test("Add Questions into detail panel", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{
      type: "matrixdynamic", name: "matrix", columns: [{ cellType: "text", name: "col1" }],
      detailPanelMode: "underRow", detailElements: [{ type: "text", name: "question1" }]
    }]
  };
  const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("matrix");
  const row = matrix.visibleRows[0];
  row.showDetailPanel();
  const panel = row.detailPanel;
  expect(panel).toBeTruthy();
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  panelModel.addNewQuestion();
  expect(panel.questions).toHaveLength(2);
  const question1 = panel.questions[0];
  const question2 = panel.questions[1];
  expect(question1.no).toBeFalsy();
  expect(question2.name).toBe("question2");
  expect(question2.no).toBeFalsy();
});
test("Page add new question when a selected question is inside a panel, Bug#4468", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{
      type: "panel", name: "panel1",
      elements: [{ type: "text", name: "question1" }]
    }]
  };
  creator.selectQuestionByName("question1");
  expect(creator.selectedElementName).toBe("question1");
  const panel = creator.survey.getPanelByName("panel1");
  const page = creator.survey.pages[0];
  expect(panel.elements).toHaveLength(1);
  expect(page.elements).toHaveLength(1);
  const pageAdornerModel = new PageAdorner(creator, page);
  pageAdornerModel.addNewQuestion(pageAdornerModel, null);
  expect(panel.elements).toHaveLength(1);
  expect(page.elements).toHaveLength(2);
  const panelModel: QuestionAdornerViewModel = new QuestionAdornerViewModel(creator, panel, undefined);
  panelModel.addNewQuestion();
  expect(panel.elements).toHaveLength(2);
  expect(page.elements).toHaveLength(2);
});

test("Creator state, change the same property, autoSaveEnabled=false", () => {
  const creator = new CreatorTester();
  creator.saveSurveyFunc = function (
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    doSaveCallback(no, true);
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.state).toBeFalsy();
  const question = creator.survey.getAllQuestions()[0];
  question.title = "Title 1";
  expect(creator.state).toEqual("modified");
  creator.doSaveFunc();
  expect(creator.state).toEqual("saved");
  question.title = "Title 2";
  expect(creator.state).toEqual("modified");
});
test("Creator notify state, change the same property, autoSaveEnabled=false", () => {
  let notifierLog = "";
  const creator = new CreatorTester();
  creator.notify = (msg, type) => {
    notifierLog += msg;
    if (type) {
      notifierLog += " - " + type;
    }
    notifierLog += (", ");
  };

  creator.saveSurveyFunc = function (no: number, doSaveCallback: (no: number, isSuccess: boolean) => void) {
    doSaveCallback(no, false);
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.state).toBeFalsy();
  expect(notifierLog).toBe("");
  const question = creator.survey.getAllQuestions()[0];
  question.title = "Title 1";
  expect(creator.state).toEqual("modified");
  expect(notifierLog).toBe("Modified, ");
  notifierLog = "";
  creator.doSaveFunc();
  expect(creator.state).toEqual("modified");
  expect(notifierLog).toBe("Saving, Modified, Error! Editor content is not saved. - error, ");
});
test("Creator state, change the same property, autoSaveEnabled=true", () => {
  const creator = new CreatorTester();
  creator.autoSaveEnabled = true;
  var counter = 0;
  var saveNo = 0;
  creator.saveSurveyFunc = function (
    no: number,
    doSaveCallback: (no: number, isSuccess: boolean) => void
  ) {
    counter++;
    saveNo = no;
    doSaveCallback(no, true);
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.state).toBeFalsy();
  const question = creator.survey.getAllQuestions()[0];
  question.title = "Title 1";
  expect(counter).toEqual(1);
  expect(saveNo).toEqual(1);
  expect(creator.state).toEqual("saved");
  question.title = "Title 2";
  expect(counter).toEqual(2);
  expect(saveNo).toEqual(2);
  expect(creator.state).toEqual("saved");
});

test("hide top panel", () => {
  const oldValueShowTabs = settings.layout.showTabs;
  const oldValueShowToolbar = settings.layout.showToolbar;

  settings.layout.showTabs = false;
  settings.layout.showToolbar = false;

  const creator = new CreatorTester();
  expect(creator.showTabs).toEqual(false);
  expect(creator.showToolbar).toEqual(false);

  settings.layout.showTabs = oldValueShowTabs;
  settings.layout.showToolbar = oldValueShowToolbar;
});

test("creator showToolbox support", () => {
  const creator = new CreatorTester();
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("left");

  creator.showToolbox = false;
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("left");

  creator.showToolbox = <any>"left";
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("left");

  creator.showToolbox = <any>"right";
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("right");

  creator.showToolbox = <any>"none";
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("right");

  creator.showToolbox = <any>"top";
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("right");

  creator.showToolbox = true;
  expect(creator.showToolbox).toEqual(true);
  expect(creator.toolboxLocation).toEqual("right");
});
test("init creator with pageEditModeValue=single", (): any => {
  let creator = new CreatorTester({ pageEditMode: "single" });
  expect(creator.showJSONEditorTab).toBeFalsy();
  creator = new CreatorTester({ pageEditModeValue: "single", showJSONEditorTab: true });
  expect(creator.showJSONEditorTab).toBeTruthy();
  creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
  expect(creator.survey.pages[0].hasTitle).toBeFalsy();
  expect(creator.survey.pages[0]["_showDescription"]).toBeFalsy();
  expect(creator.JSON.pages).toBeUndefined();
  expect(creator.JSON.elements).toBeDefined();
  expect(creator.text.indexOf("pages")).toBe(-1);

  var objects = new ObjectSelector(creator, creator.survey);
  const allQuestions = creator.survey.getAllQuestions();
  expect(objects.items).toHaveLength(1 + allQuestions.length); // survey + questions
  expect(objects.items[0].title).toEqual("Survey");
  expect(objects.items[0].data).toEqual(creator.survey);
  expect(objects.items[1].title).toEqual(allQuestions[0].name);
  expect(objects.items[1].data).toEqual(allQuestions[0]);
});
test("get survey JSON with pageEditModeValue=single #2711", (): any => {
  let creator = new CreatorTester({ pageEditMode: "single" });
  creator.text = "";
  expect(creator.JSON).toStrictEqual({});
});
test("delete last question and selection with pageEditModeValue=single #2712", (): any => {
  let creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
  const question = creator.survey.getAllQuestions()[0];
  creator.selectElement(question);
  expect(creator.selectedElement).toBe(question);
  creator.deleteElement(question);
  expect(creator.selectedElement).toBe(creator.survey);
});

test("SurveyElementAdornerBase setSurveyElement updateActionsProperties", (): any => {
  const creator = new CreatorTester({ pageEditMode: "single" });
  creator.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
  const question = creator.survey.getAllQuestions()[0];
  let count = 0;
  const adorderBase = new SurveyElementAdornerBase(creator, null);

  creator.onElementAllowOperations.add(function (_, options) {
    count++;
  });
  adorderBase["setSurveyElement"](question);
  expect(count).toBe(1);
});

test("allowEdit and onElementAllowOperations", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "rating", name: "q1" }] };

  let allowEdit: any = undefined;
  creator.onElementAllowOperations.add((sender, options) => {
    options.allowEdit = allowEdit;
  });

  const pageModel = creator.survey.pages[0];
  const pageAdornerModel = new PageAdorner(creator, pageModel);
  const question = creator.survey.getQuestionByName("q1");
  const questionAdornerModel = new QuestionAdornerViewModel(creator, question, undefined);

  creator.sidebar.flyoutMode = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  creator.sidebar.flyoutMode = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();

  allowEdit = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  allowEdit = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();
});

test("allowShowSettings and onElementAllowOperations", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "rating", name: "q1" }] };

  let allowShowSettings: any = undefined;
  creator.onElementAllowOperations.add((sender, options) => {
    options.allowShowSettings = allowShowSettings;
  });

  const pageModel = creator.survey.pages[0];
  const pageAdornerModel = new PageAdorner(creator, pageModel);
  const question = creator.survey.getQuestionByName("q1");
  const questionAdornerModel = new QuestionAdornerViewModel(creator, question, undefined);

  creator.sidebar.flyoutMode = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  allowShowSettings = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  allowShowSettings = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();

  allowShowSettings = undefined;
  creator.sidebar.flyoutMode = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();

  allowShowSettings = true;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeTruthy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeTruthy();

  allowShowSettings = false;
  creator.selectElement(pageModel);
  expect(pageAdornerModel.getActionById("settings").visible).toBeFalsy();
  creator.selectElement(question);
  expect(questionAdornerModel.getActionById("settings").visible).toBeFalsy();
});

test("Carry-forward banner", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "dropdown", name: "q2", choicesFromQuestion: "q1" },
    ]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = creator.survey.getQuestionByName("q2");
  const q2AdornerModel = new QuestionAdornerViewModel(creator, q2, undefined);
  expect(q2AdornerModel.isBannerShowing).toBeTruthy();
  q2.choicesFromQuestion = "";
  expect(q2AdornerModel.isBannerShowing).toBeFalsy();
  expect(q2AdornerModel.createBannerParams()).toBeFalsy();
  q2.choicesFromQuestion = "q1";
  expect(q2AdornerModel.isBannerShowing).toBeTruthy();
  q1.name = "q11";
  expect(q2.choicesFromQuestion).toBe("q11");
  expect(q2AdornerModel.isBannerShowing).toBeTruthy();
  const params = q2AdornerModel.createBannerParams();
  expect(params.actionText).toBe("q11");
  expect(params.text).toBe("Choices are copied from");
  creator.selectElement(q2);
  expect(creator.selectedElementName).toBe("q2");
  params.onClick();
  expect(creator.selectedElementName).toBe("q11");
});
test("Carry-forward banner, if useElementTitles is true", (): any => {
  const creator = new CreatorTester({ useElementTitles: true });
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "714a02f5d68d", title: "Question 1", choices: [1, 2, 3, 4, 5] },
      { type: "dropdown", name: "q2", title: "Title 2", choicesFromQuestion: "714a02f5d68d" },
    ]
  };
  const q2 = creator.survey.getQuestionByName("q2");
  const q2AdornerModel = new QuestionAdornerViewModel(creator, q2, undefined);
  expect(q2AdornerModel.isBannerShowing).toBeTruthy();

  const params = q2AdornerModel.createBannerParams();
  expect(params.actionText).toBe("Question 1");
});
test("Choices restful banner", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", choicesByUrl: { url: "abc" } }
    ]
  };
  const q1 = <QuestionDropdownModel>creator.survey.getQuestionByName("q1");
  const q1AdornerModel = new QuestionAdornerViewModel(creator, q1, undefined);
  expect(q1AdornerModel.isBannerShowing).toBeTruthy();
  expect(q1AdornerModel.createBannerParams()).toBeTruthy();
  q1.choicesByUrl.url = "";
  expect(q1AdornerModel.isBannerShowing).toBeFalsy();
  expect(q1AdornerModel.createBannerParams()).toBeFalsy();
  q1.choicesByUrl.url = "edf";
  expect(q1AdornerModel.isBannerShowing).toBeTruthy();
  expect(q1AdornerModel.createBannerParams()).toBeTruthy();
});
test("Custom messagePanel", (): any => {
  Serializer.addProperty("selectbase", {
    name: "prop1", choices: [0, 1, 2, 3],
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("prop1", value);
      obj.setPropertyValue("isMessagePanelVisible", value > 0);
    }
  });
  const creator = new CreatorTester();
  let questionName;
  creator.onCreateCustomMessagePanel.add((sender, options) => {
    options.messageText = "Banner text#";
    options.actionText = "Action text#";
    questionName = options.question.name;
    options.onClick = () => {
      creator.selectElement(options.question, "prop1");
    };
  });
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3] },
      { type: "text", name: "q2" }
    ]
  };
  const q1 = <QuestionDropdownModel>creator.survey.getQuestionByName("q1");

  const q1AdornerModel = new QuestionAdornerViewModel(creator, q1, undefined);
  expect(q1AdornerModel.isBannerShowing).toBeFalsy();
  q1.prop1 = 1;
  expect(q1AdornerModel.isBannerShowing).toBeTruthy();
  const bannerParams = q1AdornerModel.createBannerParams();
  expect(questionName).toBe("q1");
  expect(bannerParams.text).toBe("Banner text#");
  expect(bannerParams.actionText).toBe("Action text#");
  expect(creator.selectedElementName).toBe("survey");
  bannerParams.onClick();
  expect(creator.selectedElementName).toBe("q1");
  q1.prop1 = 0;
  expect(q1AdornerModel.isBannerShowing).toBeFalsy();
  Serializer.removeProperty("selectbase", "prop1");
});
test("isTextInput", (): any => {
  const textarea = document.createElement("textarea");
  expect(isTextInput(textarea)).toBeTruthy();
  const input = document.createElement("input");
  expect(isTextInput(input)).toBeTruthy();

  const div = document.createElement("div");
  expect(isTextInput(div)).toBeFalsy();
  (<any>div)["isContentEditable"] = true;
  expect(isTextInput(div)).toBeTruthy();

  const span = document.createElement("span");
  expect(isTextInput(span)).toBeFalsy();
  (<any>span)["isContentEditable"] = true;
  expect(isTextInput(span)).toBeTruthy();
});
test("onAfterPropertyChanged event", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  let propertyName;
  let propertyValue;
  let objType;
  let counter = 0;
  creator.onAfterPropertyChanged.add((sender, options) => {
    counter++;
    objType = options.element.getType();
    propertyName = options.propertyName;
    propertyValue = options.value;
  });
  creator.survey.title = "New Survey";
  expect(counter).toEqual(1);
  expect(objType).toEqual("survey");
  expect(propertyName).toEqual("title");
  expect(propertyValue).toEqual("New Survey");
  creator.survey.getAllQuestions()[0].title = "New Question";
  expect(counter).toEqual(2);
  expect(objType).toEqual("text");
  expect(propertyName).toEqual("title");
  expect(propertyValue).toEqual("New Question");
});
test("showPropertyGrid: false generates error", () => {
  const options = { showPropertyGrid: false };
  const creator = new CreatorTester(options);
  expect(creator.sidebar.visible).toBeFalsy();
});
test("Test options, setting some of them can generate errors", () => {
  const options = {
    autoSaveEnabled: true,
    showJSONEditorTab: false,
    showElementEditorAsPropertyGrid: true,
    showLogicTab: true,
    showEmbededSurveyTab: false,
    showSidebar: true,
    previewAllowSimulateDevices: true,
    showPreviewTab: true,
    showPropertyGrid: "right",
    showToolbox: "right",
    showTranslationTab: false,
    showPagesToolbox: true,
    allowControlSurveyTitleVisibility: false,
    showState: true,
    showTitle: true
  };
  const creator = new CreatorTester(options);
  expect(creator.sidebar.visible).toBeTruthy();
});
test("Add and remove question immediately, incorrect selection", (): any => {
  const creator = new CreatorTester();
  creator.onQuestionAdded.add((sender, options) => {
    if (creator.survey.getAllQuestions().length > 1) {
      options.question.delete();
    }
  });
  creator.addNewQuestionInPage(() => { });
  creator.addNewQuestionInPage(() => { });
  expect(creator.survey.currentPage.elements).toHaveLength(1);
  expect(creator.selectedElementName).toEqual("question1");
});
test("Remove text question immediately on adding it via onQuestionAdded, Bug#7652", (): any => {
  const creator = new CreatorTester();
  creator.onQuestionAdded.add((sender, options) => {
    const q = options.question;
    if (q.getType() === "text") {
      q.delete();
    }
  });
  creator.addNewQuestionInPage(() => { }, null, "dropdown");
  creator.addNewQuestionInPage(() => { }, null, "text");
  const allQuestions = creator.survey.getAllQuestions();
  expect(allQuestions).toHaveLength(1);
  expect(allQuestions[0].getType()).toEqual("dropdown");
  expect(creator.survey.getAllQuestions().filter(q => q.getType() === "text")).toHaveLength(0);
});
test("Remove text question immediately on adding it into a new page via onQuestionAdded, Bug#11475", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", elements: [{ type: "text", name: "question1" }] }
    ]
  };
  // onQuestionAdded must fire before the new question is rendered into a row. Otherwise the
  // renderer is notified about a question that the next handler deletes, and renders a question
  // detached from its page: "Cannot read properties of undefined (reading 'page')".
  let renderedBeforeAddedEvent = false;
  creator.onQuestionAdded.add((_, options) => {
    const q = options.question;
    const page = q.page as PageModel;
    if (!!page && page.rows.some(row => row.elements.indexOf(q) > -1)) {
      renderedBeforeAddedEvent = true;
    }
  });
  // The user's handler that prevents adding a "text" question (the demo code from the issue)
  creator.onQuestionAdded.add((_, options) => {
    const q = options.question;
    if (q.getType() === "text") {
      q.delete();
    }
  });

  // Add a "text" question into the not-yet-existing page2 (the ghost new page)
  const designerPlugin = <TabDesignerPlugin>(creator.getPlugin("designer"));
  const pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.isGhost = true;
  pageModel.addNewQuestion(pageModel, null, "text");

  expect(renderedBeforeAddedEvent).toBeFalsy();
  // the text question is rejected and no empty page2 is left behind
  expect(creator.survey.pageCount).toEqual(1);
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
});
test("Convert question type for a question on the last page with the only question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const newPage = creator.survey.addNewPage("page2");
  let newQuestion = newPage.addNewQuestion("text", "question2");
  creator.selectElement(newQuestion);
  creator.convertCurrentQuestion("comment");
  expect(creator.survey.pageCount).toEqual(2);
  expect(creator.survey.pages[1].questions[0].getType()).toEqual("comment");
  expect(creator.survey.pages[1].questions[0].name).toEqual("question2");
});
test("Allow to set survey JSON via text if errors in JSON is not critical", (): any => {
  const creator = new CreatorTester();
  creator.text = JSON.stringify({
    elements: [
      { type: "text", name: "question1" },
      { type: "text_custom", name: "question2" },
    ]
  });
  expect(creator.activeTab).toEqual("designer");
  expect(creator.survey.getAllQuestions()).toHaveLength(1);
  creator.text = JSON.stringify({
    elements: [
      { type: "text", name: "question1" },
      {
        type: "matrixdynamic",
        name: "question2",
        columns: [
          { name: "col1", choices: [1, 2, 3] }
        ]
      },
    ]
  });
  expect(creator.activeTab).toEqual("designer");
  expect(creator.survey.getAllQuestions()).toHaveLength(2);
});
test("allowModifyPages=false 1", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.viewType).toEqual("designer");

  creator.getPlugin("designer").activate();
  let designer = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.allowModifyPages).toBeTruthy();
  expect(creator.pageEditMode).toEqual("standard");
  expect(designer.showNewPage).toBeTruthy();

  let pageModel = creator.survey.pages[0];
  let pageAdornerModel = new PageAdorner(creator, pageModel);
  pageAdornerModel.select(pageAdornerModel, { stopPropagation: () => { } } as any);
  expect(pageAdornerModel.getActionById("delete").visible).toBeTruthy();

  creator = new CreatorTester({ allowModifyPages: false });
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  expect(creator.viewType).toEqual("designer");

  creator.getPlugin("designer").activate();
  designer = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.allowModifyPages).toBeFalsy();
  expect(creator.pageEditMode).toEqual("standard");
  expect(designer.showNewPage).toBeFalsy();

  pageModel = creator.survey.pages[0];
  pageAdornerModel = new PageAdorner(creator, pageModel);
  pageAdornerModel.select(pageAdornerModel, { stopPropagation: () => { } } as any);
  expect(pageAdornerModel.getActionById("delete").visible).toBeFalsy();
});
test("allowModifyPages=false 2", (): any => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  creator.survey.pages[0].delete();
  expect(creator.survey.pages).toHaveLength(0);
  const enLocale = editorLocalization.getLocale("");
  const oldPageNewName = enLocale.ed.newPageName;
  enLocale.ed.newPageName = "MyPage";
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.pages).toHaveLength(1);
  expect(creator.survey.pages[0].name).toEqual("MyPage1");
  enLocale.ed.newPageName = oldPageNewName;
});
test("Check QuestionDropdownAdornerViewModel", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.maxVisibleChoices = 1;
  creator.JSON = {
    elements: [
      {
        type: "dropdown",
        name: "test_dropdown",
        choices: [
          "item1",
          "item2"
        ]
      },
    ],
  };
  const question: QuestionDropdownModel = <QuestionDropdownModel>(creator.survey.getAllQuestions()[0]);
  const model: QuestionDropdownAdornerViewModel = new QuestionDropdownAdornerViewModel(creator, question, null);

  expect(question.getPropertyValue("isSelectedInDesigner")).toEqual(undefined);
  expect(model.needToCollapse).toBeTruthy();

  expect(model.getRenderedItems().length).toBe(1);
  expect(model.getButtonText()).toBe("Show more");
  expect(model.isCollapseView).toBeTruthy();

  question.setPropertyValue("isSelectedInDesigner", true);
  model.switchCollapse();
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.getButtonText()).toBe("Show less");
  expect(model.isCollapseView).toBeFalsy();

  question.setPropertyValue("isSelectedInDesigner", false);
  expect(model.getRenderedItems().length).toBe(1);
  expect(model.getButtonText()).toBe("Show more");
  expect(model.isCollapseView).toBeTruthy();

  const propertiesFilter = property => property.name == "isSelectedInDesigner" && property.key == "dropdownCollapseChecker";
  expect(question["onPropChangeFunctions"].filter(propertiesFilter).length).toBe(1);
  model.dispose();
  expect(question["onPropChangeFunctions"].filter(propertiesFilter).length).toBe(0);
});
test("Check QuestionDropdownAdornerViewModel with unset maxVisibleChoices", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.maxVisibleChoices = -1;
  creator.JSON = {
    elements: [
      {
        type: "dropdown",
        name: "test_dropdown",
        choices: [
          "item1",
          "item2"
        ]
      },
    ],
  };
  const question: QuestionDropdownModel = <QuestionDropdownModel>(creator.survey.getAllQuestions()[0]);
  const model: QuestionDropdownAdornerViewModel = new QuestionDropdownAdornerViewModel(creator, question, null);

  expect(question.getPropertyValue("isSelectedInDesigner")).toEqual(undefined);
  expect(model.needToCollapse).toBeFalsy();
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.isCollapseView).toBeFalsy();

  question.setPropertyValue("isSelectedInDesigner", true);
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.isCollapseView).toBeFalsy();

  question.setPropertyValue("isSelectedInDesigner", false);
  expect(model.getRenderedItems().length).toBe(5);
  expect(model.isCollapseView).toBeFalsy();
});
test("creator.onModified, type='ELEMENT_REORDERED'", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] }]
  };
  let counter = 0, totalCounter = 0, indexFrom, indexTo;
  creator.onModified.add(function (sender, options) {
    totalCounter++;
    if (options.type === "ELEMENT_REORDERED" && options.arrayName === "choices" && options.parent.name === "q1") {
      counter++;
      indexFrom = options.indexFrom;
      indexTo = options.indexTo;
    }
  });
  const q = <QuestionDropdownModel>creator.survey.getQuestionByName("q1");
  const item = q.choices[1];
  creator.startUndoRedoTransaction();
  q.choices.splice(1, 1);
  q.choices.splice(4, 0, item);
  creator.stopUndoRedoTransaction();
  expect(q.choices[1].value).toBe(3);
  expect(q.choices[4].value).toBe(2);
  expect(counter).toBe(1);
  expect(totalCounter).toBe(1);
  expect(indexFrom).toBe(1);
  expect(indexTo).toBe(4);
  creator.undo();
  expect(q.choices[1].value).toBe(2);
  expect(q.choices[4].value).toBe(5);
  expect(counter).toBe(2);
  expect(totalCounter).toBe(2);
  expect(indexFrom).toBe(4);
  expect(indexTo).toBe(1);
});
test("Reordering on drag&drop", (): any => {
  const creator = new CreatorTester();
  creator.JSON;
  creator.onModified.add(function (sender, options) {
    // We use the question's name to display in the UI dropdown lists so keep it up to date
    if (options.type === "PROPERTY_CHANGED" && options.name === "title" && options.newValue !== "") {
      options.target.name = options.newValue;
    }
  });

  creator.onQuestionAdded.add(function (sender, options) {
    options.question.title = "default title";
  });
  const survey = creator.survey;
  const page = survey.addNewPage("page1");
  page.addNewQuestion("text", "q1");
  expect(survey.getAllQuestions()[0].title).toBe("default title");

  creator.survey.getAllQuestions()[0].title = "new title";

  creator.undo();
  expect(creator.undoRedoManager.canRedo()).toBeTruthy();
});
test("creator.addNewQuestionLast property", (): any => {
  const creator = new CreatorTester();
  creator.clickToolboxItem({ type: "text" });
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toEqual("question2");
  creator.selectQuestionByName("question1");
  creator.addNewQuestionInPage((str) => { }, undefined, "text");
  expect(creator.selectedElementName).toEqual("question3");
  expect(creator.survey.pages[0].elements[2].name).toEqual("question3");
  creator.selectQuestionByName("question1");
  creator.addNewQuestionLast = false;
  creator.addNewQuestionInPage((str) => { }, undefined, "text");
  expect(creator.selectedElementName).toEqual("question4");
  expect(creator.survey.pages[0].elements[1].name).toEqual("question4");
  expect(creator.survey.pages[0].elements[3].name).toEqual("question3");
});
test("addNewQuestionInPage with json", (): any => {
  const creator = new CreatorTester();
  creator.addNewQuestionInPage((str) => { }, undefined, "text", { type: "text", inputType: "email" });
  const newQuestion = creator.survey.pages[0].elements[0] as QuestionTextModel;

  expect(creator.selectedElementName).toEqual("question1");
  expect(newQuestion.name).toEqual("question1");
  expect(newQuestion.inputType).toEqual("email");
});
test("Initial Property Grid category expanded state", (): any => {
  const creator = new CreatorTester();
  creator.propertyGridNavigationMode = "accordion";
  let survey: SurveyModel;
  const getCategoryName = (): string => {
    if (!survey) return "";
    const panels = survey.getAllPanels();
    for (var i = 0; i < panels.length; i++) {
      const p = <PanelModel>panels[i];
      if (p.state === "expanded") return p.name;
    }
    return "";
  };
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if (options.area !== "property-grid") return;
    survey = options.survey;
  });
  const defaultJSON = settings.defaultNewSurveyJSON;
  settings.defaultNewSurveyJSON = {};
  creator.JSON = {};
  expect(creator.propertyGrid).toBeTruthy();
  expect(getCategoryName()).toBeFalsy();
  creator.survey.addNewPage("page1");
  creator.selectElement(creator.survey.getPageByName("page1"));
  expect(getCategoryName()).toEqual("general");
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(getCategoryName()).toEqual("general");
  creator.clickToolboxItem({ type: "text" });
  expect(getCategoryName()).toEqual("general");
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(getCategoryName()).toEqual("general");
  creator.JSON = {};
  expect(getCategoryName()).toBeFalsy();
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"), "visibleIf");
  (<PanelModel>(survey.getPanelByName("logic"))).collapse();
  creator.selectElement(creator.survey.getQuestionByName("q2"));
  expect(getCategoryName()).toEqual("general");
  settings.defaultNewSurveyJSON = defaultJSON;
});
test("PageAdorner: check Add new question creates property grid only once", (): any => {
  let creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  creator.getPlugin("designer").activate();
  creator = new CreatorTester({ allowModifyPages: false });
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };

  creator.getPlugin("designer").activate();
  let pageModel = creator.survey.pages[0];
  let pageAdornerModel = new PageAdorner(creator, pageModel);
  let log = "";
  creator.onElementSelecting.add(() => {
    log += "->changed";
  });
  pageAdornerModel.addNewQuestion(null, null);
  expect(log).toBe("->changed");
});
test("getNextItemValue test", (): any => {
  let creator = new CreatorTester();
  let question = new QuestionCheckboxModel("q");
  question.choices = ["a", "b"];
  expect(creator.getNextItemValue(question)).toBe("Item 1");

  question.choices = ["a1", "a2"];
  expect(creator.getNextItemValue(question)).toBe("a3");
});
test("Update choicesFromQuestion on question name change", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "checkbox", name: "q1", choices: [1, 2, 3] },
      { type: "radiogroup", name: "q2", choicesFromQuestion: "q1" }
    ]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = <QuestionRadiogroupModel>creator.survey.getQuestionByName("q2");
  expect(q2.choicesFromQuestion).toEqual("q1");
  q1.name = "q3";
  expect(q2.choicesFromQuestion).toEqual("q3");
});
test("creator.deleteLocaleStrings", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "question1",
        title: {
          de: "Title de"
        }
      }
    ]
  };
  creator.survey.locale = "de";
  const q = creator.survey.getQuestionByName("question1");
  expect(q.title).toEqual("Title de");
  creator.deleteLocaleStrings("de");
  expect(q.title).toEqual("question1");
});

test("Check onPageGetFooterActions event", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const page = <PageModel>creator.survey.currentPage;
  const pageModel = new PageAdorner(creator, page);
  let log = "";
  creator.onPageGetFooterActions.add((_, opt) => {
    expect(opt.page).toBe(creator.survey.currentPage);
    opt.actions.push({
      title: "test",
      action: () => {
        opt.addNewQuestion("panel");
      }
    });
    log += "->fired";
  });
  expect(pageModel.footerActionsBar.actions.length).toBe(2);
  expect(pageModel.footerActionsBar.actions[1].title).toBe("test");
  //check that footerActionsBar getter fires event only once
  expect(log).toBe("->fired");
  expect(page.rows.length).toBe(1);
  pageModel.footerActionsBar.actions[1].action();
  expect(page.rows.length).toBe(2);
  expect(page.rows[1].elements[0].getType()).toBe("panel");
});

test("Change column properties, isCorrectProperty", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "matrixdynamic", name: "q", columns: [{ cellType: "expression", name: "col1" }] }]
  };
  let propName;
  creator.onModified.add((sender, options) => {
    propName = options.name;
  });
  const matrix = creator.survey.getQuestionByName("q");
  const column = matrix.columns[0];
  expect(creator.undoRedoManager.isCorrectProperty(column, "expression")).toBeTruthy();
  column.title = "col title";
  expect(propName).toBe("title");
  column["expression"] = "today()";
  expect(propName).toBe("expression");
});
test("Deleted object shouldn't be disposed", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q" }]
  };
  const text = creator.survey.getQuestionByName("q");
  creator.deleteElement(text);
  expect(text.isDisposed).toBeFalsy();
});
test("Remove carry-forward property on deleting a question", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "dropdown", name: "q1", choices: ["B", "A", "D", "C"] },
      { type: "dropdown", name: "q2", choicesFromQuestion: "q1" }
    ]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = <QuestionDropdownModel>creator.survey.getQuestionByName("q2");
  expect(q2.choicesFromQuestion).toBe("q1");
  creator.deleteElement(q1);
  expect(q2.choicesFromQuestion).toBeFalsy();
});
test("Keep selection on deleting another question, #5634", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  };
  let counter = 0;
  creator.onElementSelected.add((sender, options) => {
    counter++;
  });
  creator.selectQuestionByName("q1");
  expect(counter).toBe(1);
  expect(creator.selectedElementName).toEqual("q1");
  const q2 = creator.survey.getQuestionByName("q2");
  creator.deleteElement(q2);
  expect(creator.selectedElementName).toEqual("q1");
  expect(counter).toBe(1);
});
test("Do not select a duplicated question if it is not selected, #5634", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  };
  let counter = 0;
  creator.onElementSelected.add((sender, options) => {
    counter++;
  });
  creator.selectQuestionByName("q1");
  expect(counter).toBe(1);
  expect(creator.selectedElementName).toEqual("q1");
  const q2 = creator.survey.getQuestionByName("q2");
  creator.copyQuestion(q2, true);
  expect(creator.selectedElementName).toEqual("question1");
  expect(counter).toBe(2);
});
test("Panel and inner fields contain original names when a panel which is located inside a dynamic panel is copied Bug#7466", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "paneldynamic",
        name: "q1",
        templateElements: [
          {
            type: "panel",
            name: "panel1",
            elements: [
              { type: "text", name: "q2" },
              {
                type: "panel",
                name: "panel2",
                elements: [
                  { type: "text", name: "q3" }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const dynamicPanel = <QuestionPanelDynamicModel>creator.survey.getQuestionByName("q1");
  expect(dynamicPanel.templateElements).toHaveLength(1);
  const panel1 = <PanelModel>dynamicPanel.templateElements[0];
  creator.copyQuestion(panel1, true);
  expect(dynamicPanel.templateElements).toHaveLength(2);
  const panel3 = <PanelModel>dynamicPanel.templateElements[1];
  expect(panel3.name).toEqual("panel3");
  expect(panel3.elements).toHaveLength(2);
  const q4 = panel3.elements[0];
  expect(q4.name).toEqual("question1");
  const panel4 = <PanelModel>panel3.elements[1];
  expect(panel4.name).toEqual("panel4");
  expect(panel4.elements).toHaveLength(1);
  const q5 = panel4.elements[0];
  expect(q5.name).toEqual("question2");
});
test("Questions nested into choices should get new names on copying a question, Bug#7963", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "checkbox",
        name: "aiUsage",
        choices: [
          {
            value: "used",
            text: "I used AI",
            elements: [
              { type: "text", name: "aiTool" },
              { type: "text", name: "aiPurpose" }
            ]
          }
        ]
      }
    ]
  };
  const question = creator.survey.getQuestionByName("aiUsage");
  creator.copyQuestion(question);
  expect(creator.survey.pages[0].questions).toHaveLength(2);
  const copy = <QuestionCheckboxModel>creator.survey.pages[0].questions[1];
  expect(copy.name).toEqual("question1");
  const elements = copy.choices[0].elements;
  expect(elements).toHaveLength(2);
  expect(elements[0].name).toEqual("question2");
  expect(elements[1].name).toEqual("question3");
  const names = creator.survey.getAllQuestions(false, false, true).map(q => q.name);
  expect(names).toHaveLength(6);
  expect(new Set(names).size).toEqual(6);
});
test("Do not focus title on mobile", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2"] }
    ]
  };
  expect(creator.startEditTitleOnQuestionAdded).toBeTruthy();

  creator.isMobileView = true;
  expect(creator.startEditTitleOnQuestionAdded).toBeFalsy();

  creator.isMobileView = false;
  creator.startEditTitleOnQuestionAdded = false;

  expect(creator.startEditTitleOnQuestionAdded).toBeFalsy();

  creator.isMobileView = true;
  expect(creator.startEditTitleOnQuestionAdded).toBeFalsy();

  creator.startEditTitleOnQuestionAdded = true;
  creator.isMobileView = false;
  expect(creator.startEditTitleOnQuestionAdded).toBeTruthy();
});

test("Set isMobile flag for survey when isMobileView true", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2"] }
    ]
  };
  let question = creator.survey.getAllQuestions()[0];
  expect(question.isMobile).toBeFalsy();

  creator.isMobileView = true;
  expect(question.isMobile).toBeTruthy();

  creator.JSON = {
    elements: [
      { type: "checkbox", name: "q1", choices: ["item1", "item2"] }
    ]
  };
  question = creator.survey.getAllQuestions()[0];
  expect(question.isMobile).toBeTruthy();
  creator.isMobileView = false;
  expect(question.isMobile).toBeFalsy();
});

test("Creator footer action bar: only designer tab", (): any => {
  const buttonOrder = ["svd-designer", "svd-preview", "action-undo", "action-redo", "svd-settings"].join("|");
  const creator = new CreatorTester({ showPreviewTab: false, showThemeTab: false, showLogicTab: true });
  creator.JSON = { elements: [{ type: "radiogroup", name: "q1", choices: ["item1", "item2"] }] };
  expect(creator.activeTab).toEqual("designer");

  creator.isMobileView = true;
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.actions.length).toEqual(6);
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  const receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(buttonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeTruthy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeFalsy();

  creator.activeTab = "logic";
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.actions.length).toEqual(6);
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);
});
test("Creator footer action bar: add custom action", (): any => {
  function addClearButtonIntoToolbar(creator) {
    const clearButton = new Action({
      id: "clear-survey",
      visible: new ComputedUpdater(function () { return creator.activeTab == "designer"; }),
      enabled: new ComputedUpdater(function () { return !creator.survey.isEmpty; }),
      iconName: "icon-clear",
      iconSize: 24,
      title: "Clear Survey",
      showTitle: false,
      action: function () {
        if (confirm("You are going to delete all elements in this survey. Do you want to proceed?") == true) {
          creator.JSON = {};
        }
      }
    });
    const settingsButton = creator.toolbarItems.filter(function (item) { return item.id === "svd-settings"; })[0];
    settingsButton.needSeparator = false;
    const clearButtonIndex = creator.toolbarItems.indexOf(settingsButton);
    creator.toolbarItems.splice(clearButtonIndex, 0, clearButton);
    creator.footerToolbar.actions.splice(4, 0, clearButton);
  }

  const designerTabButtonOrder = ["svd-designer", "svd-preview", "action-undo", "action-redo", "clear-survey", "svd-settings"].join("|");
  const testTabButtonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible"].join("|");
  const creator = new CreatorTester({ showDesignerTab: true, showPreviewTab: true, showThemeTab: false, showLogicTab: true });
  addClearButtonIntoToolbar(creator);
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("designer");

  creator.isMobileView = true;
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  let receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeTruthy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeFalsy();

  creator.activeTab = "test";
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(testTabButtonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);

  creator.activeTab = "designer";
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.visibleActions.length).toEqual(6);
  receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(designerTabButtonOrder);
});
test("Theme passed to preview (test) survey tab", (): any => {
  const creator = new CreatorTester();
  creator.theme = {
    cssVariables: {
      "a": "s"
    }
  };
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const testPlugin = <TabTestPlugin>creator.getPlugin("test");
  expect(creator.survey.themeVariables.a).toBeUndefined();
  testPlugin.activate();
  expect(testPlugin.model.survey.themeVariables.a).toBe("s");
});
test("onElementDeleting: options.elementType contains cryptic numbers #4740", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  creator.onElementDeleting.add((_, options) => {
    expect(options.elementType).toBe("question");
  });
  creator.deleteElement(creator.survey.getAllQuestions()[0]);
});
test("Creator bypage edit mode & onElementAllowOperations", (): any => {
  const creator = new CreatorTester();
  creator.pageEditMode = "bypage";
  creator.onElementAllowOperations.add(function (creator, options) {
    var obj = options.element;
    if (!obj) return;
    if (obj.getType() == "page") {
      options.allowDelete = creator.survey.pages.indexOf(obj) % 2 === 1;
    }
  });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] },
      { elements: [{ type: "text", name: "question3" }] },
      { elements: [{ type: "text", name: "question4" }] }
    ]
  };
  const pages = creator.survey.pages;

  expect(pages).toHaveLength(4);
  let pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  expect(pageAdorner.actionContainer.getActionById("delete").visible).toBeFalsy();
  creator.selectElement(creator.survey.pages[1]);
  pageAdorner["onElementSelectedChanged"](true);
  expect(pageAdorner.actionContainer.getActionById("delete").visible).toBeTruthy();
  creator.selectElement(creator.survey.pages[2]);
  pageAdorner["onElementSelectedChanged"](true);
  expect(pageAdorner.actionContainer.getActionById("delete").visible).toBeFalsy();
  creator.selectElement(creator.survey.pages[3]);
  pageAdorner["onElementSelectedChanged"](true);
  expect(pageAdorner.actionContainer.getActionById("delete").visible).toBeTruthy();
});
test("Creator pageEditMode edit onCanDeleteItemCallback", (): any => {
  const creator = new CreatorTester();
  const survey = creator.survey;
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  survey.currentPageNo = 1;
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[0], true)).toBeTruthy();
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[1], true)).toBeTruthy();
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[2], true)).toBeTruthy();
  creator.pageEditMode = "bypage";
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[0], true)).toBeTruthy();
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[1], true)).toBeFalsy();
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[2], true)).toBeTruthy();
  creator.pageEditMode = "single";
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[0], true)).toBeFalsy();
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[1], true)).toBeFalsy();
  expect(creator.onCanDeleteItemCallback(survey, survey.pages[2], true)).toBeFalsy();
});
test("Creator pageEditMode edit onCanDeleteItemCallback", (): any => {
  const creator = new CreatorTester();
  const func = () => {
    return creator.onConditionQuestionsGetListCallback("test", creator.survey, undefined, [], []);
  };
  expect(func()).toBe("asc");
  settings.logic.questionSortOrder = "none";
  expect(func()).toBe("none");
  let sortOrder = "asc";
  creator.onConditionGetQuestionList.add((sender, options) => {
    options.sortOrder = sortOrder;
  });
  expect(func()).toBe("asc");
  sortOrder = "test";
  expect(func()).toBe("test");
});

test("New ghost page shouldn't be created if onPageAdding sets allow to false", (): any => {
  const creator = new CreatorTester();
  let allowAdd = false;
  creator.onPageAdding.add((s, o) => {
    o.allow = allowAdd;
  });
  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(creator.survey.pages).toHaveLength(1);
  expect(desigerTab.newPage).toBeFalsy();
  expect(desigerTab.showNewPage).toBeFalsy();
});
test("Do not raise error on undefined property in onIsPropertyReadOnlyCallback", (): any => {
  const creator = new CreatorTester();
  creator.onPropertyGetReadOnly.add((_, options) => { });
  let counter = 0;
  expect(creator.onIsPropertyReadOnlyCallback(creator.survey, undefined, false, undefined, undefined)).toBeFalsy();
});

test("Check designer tab placeholder if isMobileView is true", (): any => {
  const creator = new CreatorTester();
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  expect(desigerTab.placeholderText).toBe("The survey is empty. Drag an element from the toolbox or click the button below.");

  creator.isMobileView = true;
  expect(desigerTab.placeholderText).toBe("Click the \"Add Question\" button below to start creating your form.");
});

test("Check the placeholders of the survey items if isMobileView is true", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "panel1"
          },
          {
            "type": "image",
            "name": "question1",
            "imageFit": "cover",
            "imageHeight": "auto",
            "imageWidth": "100%"
          }
        ]
      },
      {
        "name": "page2"
      }
    ]
  };
  const pageModelAdorner = new PageAdorner(creator, creator.survey.pages[1]);
  const panelModelAdorner = new QuestionAdornerViewModel(creator, creator.survey.getPanelByName("panel1"), undefined);
  const imageQuestionModelAdorner = new QuestionImageAdornerViewModel(creator, creator.survey.getQuestionByName("question1"), <any>{}, null);

  expect(pageModelAdorner.placeholderText).toBe("The page is empty. Drag an element from the toolbox or click the button below.");
  expect(panelModelAdorner.placeholderText).toBe("Drop a question from the toolbox here.");
  expect(imageQuestionModelAdorner.placeholderText).toBe("Drag and drop an image here or click the button below and choose an image to upload");

  creator.isMobileView = true;
  expect(pageModelAdorner.placeholderText).toBe("Click the \"Add Question\" button below to add a new element to the page.");
  expect(panelModelAdorner.placeholderText).toBe("Click the \"Add Question\" button below to add a new element to the panel.");
  expect(imageQuestionModelAdorner.placeholderText).toBe("Click the button below and choose an image to upload");
});

test("bypage mode - delete questions one by one from last page, Bug#7758", (): any => {
  const creator = new CreatorTester({ pageEditMode: "bypage" });
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "rating", name: "nps-score" },
          { type: "comment", name: "improvements-required" }
        ]
      },
      {
        name: "page2",
        elements: [
          { type: "boolean", name: "rebuy" }
        ]
      },
      {
        name: "page3",
        elements: [
          { type: "radiogroup", name: "testimonial", choices: ["yes", "no"] },
          { type: "text", name: "email", visibleIf: "{testimonial} = 'yes'" }
        ]
      }
    ]
  };
  const desigerTab = creator.getPlugin("designer").model as TabDesignerViewModel;
  const pagesController = desigerTab.pagesController;

  const page3 = creator.survey.pages[2];
  pagesController.currentPage = page3;
  creator.selectElement(page3);

  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.survey.currentPage.name).toBe("page3");

  const testimonial = creator.survey.getQuestionByName("testimonial");
  creator.selectElement(testimonial);
  creator.deleteElement(testimonial);

  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.selectedElementName).toBe("email");

  const email = creator.survey.getQuestionByName("email");
  creator.selectElement(email);
  creator.deleteElement(email);

  // In bypage mode the page should stay visible but empty, not auto-deleted
  expect(creator.survey.pages).toHaveLength(3);
  expect(creator.survey.pages[2].name).toBe("page3");
  expect(creator.survey.pages[2].elements).toHaveLength(0);
  expect(creator.selectedElementName).toBe("page3");
  expect(creator.survey.currentPage.name).toBe("page3");
});

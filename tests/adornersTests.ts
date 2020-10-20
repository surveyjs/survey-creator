import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { applyAdornerClass, SurveyForDesigner } from "../src/surveyjsObjects";
import {
  titleAdorner,
  TitleInplaceEditor,
  descriptionAdorner,
} from "../src/adorners/title-editor";
import {
  createAddItemHandler,
  ItemInplaceEditor,
} from "../src/adorners/item-editor";
import {
  questionActionsAdorner,
  panelActionsAdorner,
} from "../src/adorners/question-actions";
import { SurveyCreator } from "../src/editor";

export default QUnit.module("Adorners Tests");

QUnit.test("adorners getMarkerClass test", function(assert) {
  var classes = "sv_p_title";
  var adornerClass = "title_editable";

  assert.equal(
    applyAdornerClass(classes, adornerClass),
    "sv_p_title title_editable"
  );
  assert.equal(applyAdornerClass(null, adornerClass), "title_editable");
  assert.equal(applyAdornerClass(classes, null), "sv_p_title");
});

QUnit.test(
  "Serialize custom properties - https://surveyjs.answerdesk.io/ticket/details/T875",
  function(assert) {
    Survey.Serializer.addProperty("itemvalue", "guid");
    var question = new Survey.QuestionCheckboxModel("q1");
    var addItemHandler = createAddItemHandler(
      question,
      (itemValue) => (itemValue["guid"] = "some guid")
    );

    addItemHandler();
    var jsonObj = new Survey.JsonObject();
    var originalJson = {
      name: "q1",
      choices: [{ value: "item1", guid: "some guid" }],
    };
    var json = jsonObj.toJsonObject(question);
    assert.deepEqual(
      json,
      originalJson,
      "Custom property has serialized correctly"
    );
    Survey.Serializer.removeProperty("itemvalue", "guid");
  }
);

QUnit.test(
  "On property changing event for adorners - https://surveyjs.answerdesk.io/ticket/details/T1245 - Adjusting property value in event onPropertyValueChanging",
  function(assert) {
    var done = assert.async();
    var adorner = titleAdorner.getElementName;
    var editor = new SurveyCreator();
    var item = new Survey.ItemValue("1");
    ko.components.get("title-editor", (component: any) => {
      var titleEditorViewModel = component.createViewModel(
        { model: item, name: "value", editor: editor },
        { element: {} }
      );
      var callCounter = 0;
      editor.onPropertyValueChanging.add(() => {
        callCounter++;
      });

      titleEditorViewModel.editingName("2");
      titleEditorViewModel.postEdit();
      assert.equal(callCounter, 1, "It should be called only one time");
      done();
    });
  }
);

QUnit.test("titleAdorner.pageTitleEditable", function(assert) {
  var pageMock = {
    getType: () => "page",
  };
  assert.ok(titleAdorner.pageTitleEditable);
  assert.equal(
    titleAdorner.getMarkerClass(pageMock),
    "title_editable",
    "Allow to edit page title"
  );
  titleAdorner.pageTitleEditable = false;
  assert.equal(
    titleAdorner.getMarkerClass(pageMock),
    "",
    "Disable edit page title"
  );
});

QUnit.test(
  "panelActionsAdorner.getMarkerClass - T3379 - Custom adorner rendering bug",
  function(assert) {
    var pageMock = {
      parent: true,
      isPanel: true,
      getType: () => "page",
    };
    var panelMock = {
      parent: true,
      isPanel: true,
      getType: () => "panel",
    };
    assert.equal(
      panelActionsAdorner.getMarkerClass(pageMock),
      "",
      "Don't inject into page"
    );
    assert.equal(
      panelActionsAdorner.getMarkerClass(panelMock),
      "panel_actions",
      "Inject into panel"
    );
  }
);

QUnit.test(
  "questionActionsAdorner.getMarkerClass - T3379 - Custom adorner rendering bug",
  function(assert) {
    var pageMock = {
      parent: true,
      isPanel: false,
      isPage: true,
      getType: () => "page",
    };
    var panelMock = {
      parent: true,
      isPanel: true,
      isPage: false,
      getType: () => "panel",
    };
    var questionMock = {
      parent: true,
      isPanel: false,
      isPage: false,
      getType: () => "question",
    };
    assert.equal(
      questionActionsAdorner.getMarkerClass(pageMock),
      "",
      "Don't inject into page"
    );
    assert.equal(
      questionActionsAdorner.getMarkerClass(panelMock),
      "",
      "Don't inject into panel"
    );
    assert.equal(
      questionActionsAdorner.getMarkerClass(questionMock),
      "question_actions",
      "Inject into question"
    );
  }
);

QUnit.test("TitleInplaceEditor valueChanged", function(assert) {
  var target = new Survey.QuestionTextModel("q1");
  var model = new TitleInplaceEditor(target, "title", null, "", null);
  var lastChanged;
  model.valueChanged = (newValue) => (lastChanged = newValue);
  model.editingName("test");
  model.postEdit();
  assert.equal(lastChanged, "test", "New value has been passed");
});

QUnit.test("TitleInplaceEditor hasError/error", function(assert) {
  var target = new Survey.QuestionTextModel("q1");
  var model = new TitleInplaceEditor(target, "title", null, "", <any>{
      onIsPropertyReadOnlyCallback: (
        obj: Survey.Base,
        property: Survey.JsonObjectProperty,
        readOnly: boolean
      ): boolean => {
        return property.readOnly;
      },
      onGetErrorTextOnValidationCallback: (_, __, newValue) =>
      newValue === "test1" ? "error" : "",
  });
  assert.equal(model.error(), "", "No errors initial");
  model.editingName("test");
  model.postEdit();
  assert.equal(model.error(), "", "No errors first change");
  model.editingName("test1");
  model.postEdit();
  assert.equal(model.error(), "error", "Errors");
  model.editingName("test");
  model.postEdit();
  assert.equal(model.error(), "", "No errors revert back");
});

QUnit.test("TitleInplaceEditor start edit callback", function(assert) {
  var callCount = 0;
  const onTitleInplaceEditorStartEdit = function(inputElem) {
    callCount++;
  };

  var target = new Survey.QuestionTextModel("q1");
  var inputElement = {
    focus: () => inputElement["onfocus"](),
  };
  var model = new TitleInplaceEditor(target, "title", {}, "", <any>{
    onIsPropertyReadOnlyCallback: (
      obj: Survey.Base,
      property: Survey.JsonObjectProperty,
      readOnly: boolean
    ): boolean => {
      return property.readOnly;
    },
    onTitleInplaceEditorStartEdit,
  });
  model.getInputElement = () => inputElement;
  model.postEdit();
  model.startEdit(model, null);
  inputElement.focus();
  assert.equal(callCount, 1, "onTitleInplaceEditorStartEdit has been called");
});

QUnit.test("TitleInplaceEditor validateSelectedElement", function(assert) {
  var creator = new SurveyCreator();
  var target = new Survey.QuestionTextModel("q1");
  var adornerModel = new TitleInplaceEditor(target, "title", null, "", creator);
  creator.onPropertyValidationCustomError.add((_, options) => {
    options.error = options.value === "test1" ? "error" : "";
  });
  creator.selectedElement = target;

  var result = creator.validateSelectedElement();
  assert.equal(adornerModel.error(), "", "No errors initial");

  adornerModel.editingName("test");
  adornerModel.postEdit();
  result = creator.validateSelectedElement();
  assert.ok(result, "No errors first change");
  assert.equal(adornerModel.error(), "", "No errors first change");

  adornerModel.editingName("test1");
  adornerModel.postEdit();
  result = creator.validateSelectedElement();
  assert.notOk(result, "Error in adorner");
  assert.equal(adornerModel.error(), "error", "Error in adorner");

  assert.notOk(creator.onValidateSelectedElement.isEmpty, "Has subscriptions");
  adornerModel.dispose();
  assert.ok(
    creator.onValidateSelectedElement.isEmpty,
    "Subscriptions removed on destroy"
  );
});

QUnit.test("Title image read only mode", function(assert) {
  var survey = new SurveyForDesigner();
  SurveyForDesigner.isTitleLogoEditable(true);
  survey.isReadOnly(true);

  assert.notOk(survey.logo, "No logo");
  assert.equal(survey.logoPosition, "left", "Logo on the left");
  assert.notOk(survey.isLogoBefore, "No logo before");
  assert.notOk(survey.isLogoAfter, "No logo after");

  survey.logo = "Logo image link";
  assert.ok(survey.isLogoBefore, "Logo before");
  assert.notOk(survey.isLogoAfter, "No logo after");

  survey.logoPosition = "right";
  assert.notOk(survey.isLogoBefore, "No logo before");
  assert.ok(survey.isLogoAfter, "Logo after");

  survey.logoPosition = "none";
  assert.notOk(survey.isLogoBefore, "No logo before");
  assert.notOk(survey.isLogoAfter, "No logo after");
});

QUnit.test("Title has logo and logo position without adorner", function(assert) {
  var survey = new SurveyForDesigner();
  SurveyForDesigner.isTitleLogoEditable(false);

  assert.notOk(survey.logo, "No logo");
  assert.equal(survey.logoPosition, "left", "Logo on the left");
  assert.notOk(survey.isLogoBefore, "No logo before");
  assert.notOk(survey.isLogoAfter, "No logo after");

  survey.logo = "Logo image link";
  assert.ok(survey.isLogoBefore, "Logo before");
  assert.notOk(survey.isLogoAfter, "No logo after");

  survey.logoPosition = "right";
  assert.notOk(survey.isLogoBefore, "No logo before");
  assert.ok(survey.isLogoAfter, "Logo after");

  survey.logoPosition = "none";
  assert.notOk(survey.isLogoBefore, "No logo before");
  assert.notOk(survey.isLogoAfter, "No logo after");
});

QUnit.test("Title has logo and logo position with adorner", function(assert) {
  var survey = new SurveyForDesigner();
  SurveyForDesigner.isTitleLogoEditable(true);

  assert.notOk(survey.logo, "No logo");
  assert.equal(survey.logoPosition, "left", "Logo on the left");
  assert.ok(survey.isLogoBefore, "No logo before");
  assert.ok(survey.isLogoAfter, "No logo after");

  survey.logo = "Logo image link";
  assert.ok(survey.isLogoBefore, "Logo before");
  assert.ok(survey.isLogoAfter, "No logo after");

  survey.logoPosition = "right";
  assert.ok(survey.isLogoBefore, "No logo before");
  assert.ok(survey.isLogoAfter, "Logo after");

  survey.logoPosition = "none";
  assert.ok(survey.isLogoBefore, "No logo before");
  assert.ok(survey.isLogoAfter, "No logo after");
});

QUnit.test("Title editor read only mode", function (assert) {
  var survey = new SurveyForDesigner();
  var creatorStub = {
    onIsPropertyReadOnlyCallback: (
      obj: Survey.Base,
      property: Survey.JsonObjectProperty,
      readOnly: boolean
    ): boolean => {
      return property.readOnly && readOnly;
    }
  }
  var titleModel = new TitleInplaceEditor(survey, "title", null, "", <any>creatorStub);
  var descriptionModel = new TitleInplaceEditor(survey, "description", null, "", <any>creatorStub);
  Survey.Serializer.findProperty("survey", "title").readOnly = true;
  assert.ok(titleModel.readOnly, "title is read only");
  assert.notOk(descriptionModel.readOnly, "description is not read only");
  Survey.Serializer.findProperty("survey", "title").readOnly = false;
  assert.notOk(titleModel.readOnly, "title is not read only");
  assert.notOk(descriptionModel.readOnly, "description is not read only");
});

QUnit.test(
  "title/description adorner for removed properties - https://surveyjs.answerdesk.io/internal/ticket/details/T4683",
  function (assert) {
    Survey.Serializer.addClass("a_test", ["title", "description"]);
    var obj = { getType: () => "a_test" };

    assert.equal(
      titleAdorner.getMarkerClass(obj),
      "title_editable",
      "Has title, allows editing"
    );
    assert.equal(
      descriptionAdorner.getMarkerClass(obj),
      "description_editable",
      "Has description, allows editing"
    );

    Survey.Serializer.removeProperty("a_test", "title");
    assert.equal(
      titleAdorner.getMarkerClass(obj),
      "",
      "Has no title, no editing"
    );

    Survey.Serializer.removeProperty("a_test", "description");
    assert.equal(
      descriptionAdorner.getMarkerClass(obj),
      "",
      "Has no description, no editing"
    );
  }
);

QUnit.test(
  "title and item editor maxLength doesn't work in IE - https://surveyjs.answerdesk.io/internal/ticket/details/T4734",
  function (assert) {
    var creator = new SurveyCreator();
    var target = new Survey.QuestionTextModel("q1");
    var adornerModel = new TitleInplaceEditor(
      target,
      "title",
      null,
      "",
      creator
    );
    assert.equal(adornerModel.maxLength, "");

    var property = Survey.Serializer.findProperty("question", "title");
    var oldValue = property.maxLength;
    property.maxLength = 3;
    assert.equal(adornerModel.maxLength, 3);
    property.maxLength = oldValue;
  }
);

QUnit.test("item editor raises the onCollectionItemDeleting event", function (
  assert
) {
  var creator = new SurveyCreator();
  var question = new Survey.QuestionCheckboxModel("q1");
  question.choices = ["1", "2"];
  var adornerModel = new ItemInplaceEditor(
    question.choices[0],
    "value",
    question,
    question.choices[0],
    { addEventListener: () => {} },
    creator
  );
  var callCount = 0;
  creator.onCollectionItemDeleting.add(function (sender, options) {
    callCount++;
    assert.equal(options.propertyName, "choices");
    assert.equal(options.obj, question);
    assert.equal(options.item, question.choices[0]);
  });

  adornerModel.deleteItem(adornerModel, {});
  assert.equal(callCount, 1);
});

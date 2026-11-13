import { JsonObjectProperty, QuestionImageModel, QuestionImagePickerModel, QuestionMatrixDynamicModel, QuestionSignaturePadModel, Serializer, SurveyElement, SurveyModel } from "survey-core";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { PropertyGridModelTester } from "./property-grid.base";
import { IPropertyGridEditor, PropertyGridEditor, PropertyGridEditorCollection, PropertyGridLinkEditor } from "../../src/property-grid";
import {
  EmptySurveyCreatorOptions,
} from "../../src/creator-settings";
import { imageMimeTypes } from "../../src/utils/utils";
import { SurveyCreatorModel } from "../../src/creator-base";
import { CreatorTester } from "../creator-tester";

test("Check file editor value", () => {
  const question = new QuestionFileEditorModel("q1");
  question.storeDataAsText = true;
  question.value = "some_url_from_input";
  expect(question.value).toBe("some_url_from_input");
  question.value = { name: "image.png", type: "png", content: "base64_from_file_loader" };
  expect(question.value).toBe("base64_from_file_loader");
});

test("Check file editor with onDownloadfile and onUploadFile callbacks", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "fileedit",
        storeDataAsText: false
      }
    ]
  });
  const question: QuestionFileEditorModel = <QuestionFileEditorModel>survey.getAllQuestions()[0];
  const hashContent = {
    firstValueUrl: "firstValueBase64",
    secondValueUrl: "secondValueBase64"
  };

  let clearCallbackLog = "";
  survey.onClearFiles.add((survey, options) => {
    clearCallbackLog += `->${options.value[0].name}`;
    options.callback("success", undefined);
  });
  survey.onUploadFiles.add((survey, options) => {
    options.callback(
      "success",
      options.files.map((file) => {
        return { file: file, content: file.name + "Url" };
      })
    );
  });
  survey.onDownloadFile.add((survey, options) => {
    options.callback("success", hashContent[options.content]);
  });
  question.loadFiles(<any>[{ name: "firstValue" }]);
  expect(question.value).toBe("firstValueBase64");
  question.loadFiles(<any>[{ name: "secondValue" }]);
  expect(question.value).toBe("secondValueBase64");
  expect(clearCallbackLog).toBe("->firstValue");
  question.onInputBlur(<any>{
    target: {
      value: "url_from_input"
    }
  });
  expect(question.value).toBe("url_from_input");
  expect(clearCallbackLog).toBe("->firstValue->secondValue");
  expect(question["loadedFilesValue"]).toBe(undefined);
});

test("Check file editor event callbacks", () => {
  const question: QuestionFileEditorModel = new QuestionFileEditorModel("q1");
  question.onInputChange(<any>{
    target: {
      value: "first_base64"
    }
  });
  expect(question.value).toBe("first_base64");
  question.onInputBlur(<any>{
    target: {
      value: "second_url"
    }
  });
  expect(question.value).toBe("second_url");
});

test("Check PropertyGridLinkFileEditor visible only if enableLinkFileEditor set true", () => {
  let question = new QuestionImageModel("q1");
  let propertyGrid = new PropertyGridModelTester(question);
  let questionEditor = propertyGrid.survey.getQuestionByName("imageLink");
  expect(questionEditor.getType()).toBe("text");
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = true;
  question = new QuestionImageModel("q2");
  propertyGrid = new PropertyGridModelTester(question, options);
  questionEditor = propertyGrid.survey.getQuestionByName("imageLink");
  expect(questionEditor.getType()).toBe("fileedit");
});

function countLinkEditors(): number {
  return PropertyGridEditorCollection.editors.filter((ed: IPropertyGridEditor) => ed instanceof PropertyGridLinkEditor).length;
}
function unregisterEditor(editor: IPropertyGridEditor): void {
  const editors = PropertyGridEditorCollection.editors;
  const index = editors.indexOf(editor);
  if (index > -1) editors.splice(index, 1);
  PropertyGridEditorCollection.clearHash();
}
function getImageLinkEditorType(options?: any): string {
  const propertyGrid = new PropertyGridModelTester(new QuestionImageModel("q1"), options);
  return propertyGrid.survey.getQuestionByName("imageLink").getType();
}

test("Link editor: a grid with enableLinkFileEditor false after a grid with it on shows a text editor", () => {
  expect(getImageLinkEditorType(new CreatorTester()), "#1").toBe("fileedit");
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = false;
  expect(getImageLinkEditorType(options), "#2").toBe("text");
  expect(getImageLinkEditorType(new EmptySurveyCreatorOptions()), "#3").toBe("text");
});

test("Link editor: each grid follows its own creator's enableLinkFileEditor, in both orders", () => {
  expect(getImageLinkEditorType(new CreatorTester()), "on, then off #1").toBe("fileedit");
  expect(getImageLinkEditorType(new CreatorTester({ enableLinkFileEditor: false })), "on, then off #2").toBe("text");
  expect(getImageLinkEditorType(new CreatorTester({ enableLinkFileEditor: false })), "off, then on #1").toBe("text");
  expect(getImageLinkEditorType(new CreatorTester()), "off, then on #2").toBe("fileedit");
});

test("Link editor: the image picker choices detail panel follows the grid's option", () => {
  const getDetailType = (options: any): string => {
    const question = new QuestionImagePickerModel("q1");
    question.choices = [{ value: "lion" }];
    const propertyGrid = new PropertyGridModelTester(question, options);
    const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    expect(row.getQuestionByColumnName("imageLink").getType(), "the cell is always text").toBe("text");
    return row.detailPanel.getQuestionByName("imageLink").getType();
  };
  expect(getDetailType(new CreatorTester()), "#1").toBe("fileedit");
  expect(getDetailType(new CreatorTester({ enableLinkFileEditor: false })), "#2").toBe("text");
  expect(getDetailType(new CreatorTester()), "#3").toBe("fileedit");
});

test("Link editor: fitHash does not keep an editor chosen by the grid's options", () => {
  const prop = Serializer.findProperty("image", "imageLink");
  const on = new EmptySurveyCreatorOptions();
  on.enableLinkFileEditor = true;
  const off = new EmptySurveyCreatorOptions();
  off.enableLinkFileEditor = false;
  PropertyGridEditorCollection.clearHash();
  expect(PropertyGridEditorCollection.getEditor(prop, undefined, on), "on").toBeInstanceOf(PropertyGridLinkEditor);
  expect(PropertyGridEditorCollection.getEditor(prop, undefined, off), "off after on").not.toBeInstanceOf(PropertyGridLinkEditor);
  expect(PropertyGridEditorCollection.getEditor(prop, undefined, on), "on after off").toBeInstanceOf(PropertyGridLinkEditor);
  expect(PropertyGridEditorCollection.getEditor(prop, undefined, off), "off after on again").not.toBeInstanceOf(PropertyGridLinkEditor);
});

test("Link editor: building property grids does not register more link editors", () => {
  new PropertyGridModelTester(new QuestionImageModel("q0"), new CreatorTester());
  const count = countLinkEditors();
  expect(count, "registered once").toBe(1);
  for (let i = 0; i < 10; i++) {
    new PropertyGridModelTester(new QuestionImageModel("q" + (i + 1)), new CreatorTester());
  }
  expect(countLinkEditors()).toBe(count);
});

test("PropertyGridEditorCollection.register: an editor registered after a lookup is found by the next lookup", () => {
  const prop = new JsonObjectProperty(null, "registerAfterLookupProp");
  prop.type = "registerafterlookuptype";
  const editorBefore = PropertyGridEditorCollection.getEditor(prop);
  expect(editorBefore, "the default editor is found").toBeTruthy();
  class RegisterAfterLookupEditor extends PropertyGridEditor {
    public fit(prop: JsonObjectProperty): boolean {
      return prop.type === "registerafterlookuptype";
    }
    public getJSON(): any {
      return { type: "comment" };
    }
  }
  const custom = new RegisterAfterLookupEditor();
  PropertyGridEditorCollection.register(custom);
  try {
    expect(PropertyGridEditorCollection.getEditor(prop)).toBe(custom);
  } finally {
    unregisterEditor(custom);
  }
  expect(PropertyGridEditorCollection.getEditor(prop), "the default editor again").toBe(editorBefore);
});

test("Link editor: a custom editor registered for url properties wins over the link editor", () => {
  Serializer.addProperty("image", { name: "customUrlEditorTestProp:url" });
  class CustomUrlEditor extends PropertyGridEditor {
    public fit(prop: JsonObjectProperty): boolean {
      return prop.type === "url";
    }
    public getJSON(): any {
      return { type: "comment" };
    }
  }
  const custom = new CustomUrlEditor();
  PropertyGridEditorCollection.register(custom);
  try {
    const options = new EmptySurveyCreatorOptions();
    options.enableLinkFileEditor = true;
    const propertyGrid = new PropertyGridModelTester(new QuestionImageModel("q1"), options);
    expect(propertyGrid.survey.getQuestionByName("customUrlEditorTestProp").getType(), "custom editor").toBe("comment");
    expect(propertyGrid.survey.getQuestionByName("imageLink").getType(), "link editor for other file properties").toBe("fileedit");
  } finally {
    unregisterEditor(custom);
    Serializer.removeProperty("image", "customUrlEditorTestProp");
  }
});

test("Check PropertyGridLinkFileEditor acceptedTypes", () => {
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = true;
  const question = new QuestionImageModel("q1");
  const propertyGrid = new PropertyGridModelTester(question, options);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  expect(questionEditor.acceptedTypes).toBe(imageMimeTypes);
  question.contentMode = "video";
  expect(questionEditor.acceptedTypes).toBe("video/*");
  question.contentMode = "image";
  expect(questionEditor.acceptedTypes).toBe(imageMimeTypes);
});

function getContentModeHandlerCount(question: any): number {
  const handlers = question["propChangeHandlers"]?.get("contentMode");
  return !!handlers ? handlers.size : 0;
}

test("Link editor: a disposed grid removes its contentMode handler from the image question", () => {
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = true;
  const question = new QuestionImageModel("q1");
  const other = new QuestionImageModel("q2");
  const before = getContentModeHandlerCount(question);
  const propertyGrid = new PropertyGridModelTester(question, options);
  expect(propertyGrid.survey.getQuestionByName("imageLink").getType()).toBe("fileedit");
  expect(getContentModeHandlerCount(question), "one handler while the grid shows q1").toBe(before + 1);
  for (let i = 0; i < 5; i++) {
    propertyGrid.obj = other;
    propertyGrid.obj = question;
    expect(propertyGrid.survey.getQuestionByName("imageLink"), "rebuilt " + i).toBeTruthy();
  }
  expect(getContentModeHandlerCount(question), "still one handler after the grid is rebuilt").toBe(before + 1);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  question.contentMode = "video";
  expect(questionEditor.acceptedTypes, "the live editor follows contentMode").toBe("video/*");
  propertyGrid.obj = other;
  expect(getContentModeHandlerCount(question), "no handler after the grid leaves q1").toBe(before);
});

test("Link editor: two grids for one image question keep their own contentMode handlers", () => {
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = true;
  const question = new QuestionImageModel("q1");
  const before = getContentModeHandlerCount(question);
  const grid1 = new PropertyGridModelTester(question, options);
  const editor1 = <QuestionFileEditorModel>grid1.survey.getQuestionByName("imageLink");
  const grid2 = new PropertyGridModelTester(question, options);
  const editor2 = <QuestionFileEditorModel>grid2.survey.getQuestionByName("imageLink");
  expect(getContentModeHandlerCount(question), "a handler per grid").toBe(before + 2);
  question.contentMode = "video";
  expect(editor1.acceptedTypes, "grid 1 follows contentMode").toBe("video/*");
  expect(editor2.acceptedTypes, "grid 2 follows contentMode").toBe("video/*");
  grid1.obj = new QuestionImageModel("q2");
  expect(getContentModeHandlerCount(question), "grid 1 removed only its own handler").toBe(before + 1);
  question.contentMode = "image";
  expect(editor2.acceptedTypes, "grid 2 still follows contentMode").toBe(imageMimeTypes);
});

test("Link editor: detail panel editors in two grids for one image picker both follow contentMode", () => {
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = true;
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "lion" }];
  const showDetail = (grid: PropertyGridModelTester): QuestionFileEditorModel => {
    const matrix = <QuestionMatrixDynamicModel>grid.survey.getQuestionByName("choices");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    return <QuestionFileEditorModel>row.detailPanel.getQuestionByName("imageLink");
  };
  const editor1 = showDetail(new PropertyGridModelTester(question, options));
  const editor2 = showDetail(new PropertyGridModelTester(question, options));
  question.contentMode = "video";
  expect(editor1.acceptedTypes, "grid 1").toBe("video/*");
  expect(editor2.acceptedTypes, "grid 2").toBe("video/*");
});

test("Link editor: a detail panel imageLink handler goes away after its grid is disposed", () => {
  const options = new EmptySurveyCreatorOptions();
  options.enableLinkFileEditor = true;
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "lion" }];
  const other = new QuestionImageModel("q2");
  const before = getContentModeHandlerCount(question);
  const propertyGrid = new PropertyGridModelTester(question, options);
  const showDetail = (): QuestionFileEditorModel => {
    const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
    const row = matrix.visibleRows[0];
    row.showDetailPanel();
    return <QuestionFileEditorModel>row.detailPanel.getQuestionByName("imageLink");
  };
  let editor = showDetail();
  expect(getContentModeHandlerCount(question), "one handler for the detail panel").toBe(before + 1);
  for (let i = 0; i < 5; i++) {
    propertyGrid.obj = other;
    propertyGrid.obj = question;
    editor = showDetail();
  }
  question.contentMode = "video";
  expect(editor.acceptedTypes, "the live detail editor follows contentMode").toBe("video/*");
  expect(getContentModeHandlerCount(question), "only the live detail editor's handler is left").toBe(before + 1);
});

test("Check PropertyGridLinkFileEditor creator's onUploadFile and onClearFile events", () => {
  const creator = new SurveyCreatorModel({ enableLinkFileEditor: true });
  let uploadCount = 0;
  let lastUploadOptions;
  let clearCount = 0;
  let lastClearOptions;
  const question = new QuestionImageModel("q1");
  creator.onUploadFile.add((s, o) => {
    lastUploadOptions = o;
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  creator.onClearFile.add((s, o) => {
    lastClearOptions = o;
    clearCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
  expect(lastUploadOptions.question).toEqual(question);
  expect(lastUploadOptions.element).toEqual(question);
  expect(lastUploadOptions.elementType).toEqual("image");
  expect(lastUploadOptions.propertyName).toEqual("imageLink");
  expect(clearCount).toBe(0);
  expect(lastClearOptions).toBeUndefined();
  questionEditor.clear();
  expect(uploadCount).toBe(1);
  expect(clearCount).toBe(1);
  expect(lastClearOptions.question).toEqual(question);
  expect(lastClearOptions.element).toEqual(question);
  expect(lastClearOptions.elementType).toEqual("image");
  expect(lastClearOptions.propertyName).toEqual("imageLink");
});

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event with signature pad", () => {
  const creator = new SurveyCreatorModel({ enableLinkFileEditor: true });
  let uploadCount = 0;
  let lastUploadOptions;
  const question = new QuestionSignaturePadModel("q1");
  creator.onUploadFile.add((s, o) => {
    lastUploadOptions = o;
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("backgroundImage");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
  expect(lastUploadOptions.question).toEqual(question);
  expect(lastUploadOptions.element).toEqual(question);
  expect(lastUploadOptions.elementType).toEqual("signaturepad");
  expect(lastUploadOptions.propertyName).toEqual("backgroundImage");
});

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event with image item value", () => {
  const creator = new SurveyCreatorModel({ enableLinkFileEditor: true });
  let uploadCount = 0;
  let lastUploadOptions;
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "lion" }];
  creator.onUploadFile.add((s, o) => {
    lastUploadOptions = o;
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  const propertyGrid = new PropertyGridModelTester(question.choices[0], creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
  expect(lastUploadOptions.question).toEqual(question);
  expect(lastUploadOptions.element).toEqual(question.choices[0]);
  expect(lastUploadOptions.elementType).toEqual("imageitemvalue");
  expect(lastUploadOptions.propertyName).toEqual("imageLink");
});

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event with logo image", () => {
  const creator = new SurveyCreatorModel({ enableLinkFileEditor: true });
  let uploadCount = 0;
  let lastUploadOptions;
  creator.onUploadFile.add((s, o) => {
    lastUploadOptions = o;
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question).toBe(undefined);
  });
  const propertyGrid = new PropertyGridModelTester(creator.survey, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("logo");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
  expect(lastUploadOptions.element).toEqual(creator.survey);
  expect(lastUploadOptions.elementType).toEqual("survey");
  expect(lastUploadOptions.propertyName).toEqual("logo");
});

test("Check PropertyGridLinkFileEditor acceptedTypes for matrix cell", () => {
  const creator = new SurveyCreatorModel({ enableLinkFileEditor: true });
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "lion" }];

  const propertyGrid = new PropertyGridModelTester(question, creator);
  const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  matrix.visibleRows[0].showDetailPanel();
  const questionEditor = <QuestionFileEditorModel>(matrix.visibleRows[0].detailPanel.getQuestionByName("imageLink"));
  expect(propertyGrid.survey.getQuestionByName("choices").renderedTable.rows[0].cells[3].question.getType()).toBe("text");
  expect(questionEditor.acceptedTypes).toBe(imageMimeTypes);
  question.contentMode = "video";
  expect(questionEditor.acceptedTypes).toBe("video/*");
  question.contentMode = "image";
  expect(questionEditor.acceptedTypes).toBe(imageMimeTypes);
});

test("Check file editor placeholder and renderedValue", () => {
  const placeholder = "test_placeholder";
  const survey = new SurveyModel({
    elements: [
      {
        name: "q1",
        type: "fileedit",
        storeDataAsText: false,
        placeholder
      }
    ]
  });
  const question: QuestionFileEditorModel = <QuestionFileEditorModel>survey.getAllQuestions()[0];
  const base64Url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII";
  const url = "some_url";

  question.value = url;
  expect(question.value).toBe("some_url");
  expect(question.renderedPlaceholder).toBe(placeholder);
  expect(question.renderedValue).toBe("some_url");

  question.value = base64Url;
  expect(question.value).toBe(base64Url);
  expect(question.renderedPlaceholder).toBe("data:image/png;base64,...");
  expect(question.renderedValue).toBe("");

  survey.setValue("q1", url);
  expect(question.value).toBe("some_url");
  expect(question.renderedPlaceholder).toBe(placeholder);
  expect(question.renderedValue).toBe("some_url");

  survey.setValue("q1", base64Url);
  expect(question.value).toBe(base64Url);
  expect(question.renderedPlaceholder).toBe("data:image/png;base64,...");
  expect(question.renderedValue).toBe("");
});

test("Check onOpenFileChooser called and onUploadFile context exists", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const question = creator.survey.getAllQuestions()[0];
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  questionEditor["contentElement"] = <any>{ querySelectorAll: () => [{}] };
  let uploadCount = 0;
  let log = "";
  let lastContext: any;
  let lastUploadOptions;
  creator.onOpenFileChooser.add((s, o) => {
    log += "->openedFileChooser";
    lastContext = (o as any).context;
    o.callback([{}]);
  });
  creator.onUploadFile.add((s, o) => {
    log += "->uploadFile";
    lastUploadOptions = o;
    uploadCount++;
    o.callback("success", "url");
  });
  expect(uploadCount).toBe(0);
  expect(log).toBe("");
  questionEditor.chooseFiles(<any>{ preventDefault: () => { }, stopPropagation: () => { } });
  expect(uploadCount).toBe(1);
  expect(log).toBe("->openedFileChooser->uploadFile");
  expect(questionEditor.value).toBe("url");
  expect(lastContext.element).toEqual(question);
  expect(lastContext.elementType).toEqual("image");
  expect(lastContext.propertyName).toEqual("imageLink");
  expect(lastUploadOptions.element).toEqual(question);
  expect(lastUploadOptions.elementType).toEqual("image");
  expect(lastUploadOptions.propertyName).toEqual("imageLink");
});

test("Check isTextInputReadOnly", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const question = creator.survey.getAllQuestions()[0];
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  expect(questionEditor.isTextInputReadOnly).toBe(false);
  questionEditor.disableInput = true;
  expect(questionEditor.isTextInputReadOnly).toBe(true);
  questionEditor.disableInput = false;
  expect(questionEditor.isTextInputReadOnly).toBe(false);
  questionEditor.readOnly = true;
  expect(questionEditor.isTextInputReadOnly).toBe(true);
});
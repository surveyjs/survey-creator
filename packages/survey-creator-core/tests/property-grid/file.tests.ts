import { QuestionImageModel, QuestionImagePickerModel, QuestionMatrixDynamicModel, QuestionSignaturePadModel, SurveyElement, SurveyModel } from "survey-core";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { PropertyGridModelTester } from "./property-grid.base";
import {
  EmptySurveyCreatorOptions,
} from "../../src/creator-settings";
import { imageMimeTypes } from "../../src/utils/utils";
import { SurveyCreatorModel } from "../../src/creator-base";
import { CreatorTester } from "../creator-tester";
export * from "../../src/custom-questions/question-text-with-reset";

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

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event", () => {
  const creator = new SurveyCreatorModel({ enableLinkFileEditor: true });
  let uploadCount = 0;
  let lastUploadOptions;
  const question = new QuestionImageModel("q1");
  creator.onUploadFile.add((s, o) => {
    lastUploadOptions = o;
    uploadCount++;
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

test("Check PropertyGridLinkFileEditor acceptedTypes", () => {
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
  questionEditor["rootElement"] = <any>{ querySelectorAll: () => [{}] };
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
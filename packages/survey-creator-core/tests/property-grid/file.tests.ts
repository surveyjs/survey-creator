import { QuestionImageModel, QuestionImagePickerModel, QuestionSignaturePadModel, SurveyElement, SurveyModel } from "survey-core";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";
import { PropertyGridModelTester } from "./property-grid.tests";
import {
  EmptySurveyCreatorOptions,
} from "../../src/creator-settings";
import { imageMimeTypes } from "../../src/utils/utils";
import { CreatorBase } from "../../src/creator-base";

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
  question.onInputBlur(<any>{ target: {
    value: "url_from_input"
  } });
  expect(question.value).toBe("url_from_input");
  expect(clearCallbackLog).toBe("->firstValue->secondValue");
  expect(question["loadedFilesValue"]).toBe(undefined);
});

test("Check file editor event callbacks", () => {
  const question: QuestionFileEditorModel = new QuestionFileEditorModel("q1");
  question.onInputChange(<any>{ target: {
    value: "first_base64"
  } });
  expect(question.value).toBe("first_base64");
  question.onInputBlur(<any>{ target: {
    value: "second_url"
  } });
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
  const creator = new CreatorBase({ enableLinkFileEditor: true });
  let uploadCount = 0;
  const question = new QuestionImageModel("q1");
  creator.onUploadFile.add((s, o) => {
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
});

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event with signature pad", () => {
  const creator = new CreatorBase({ enableLinkFileEditor: true });
  let uploadCount = 0;
  const question = new QuestionSignaturePadModel("q1");
  creator.onUploadFile.add((s, o) => {
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("backgroundImage");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
});

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event with image item value", () => {
  const creator = new CreatorBase({ enableLinkFileEditor: true });
  let uploadCount = 0;
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "lion" }];
  creator.onUploadFile.add((s, o) => {
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  const propertyGrid = new PropertyGridModelTester(question.choices[0], creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
});

test("Check PropertyGridLinkFileEditor creator's onUploadFiles event with logo image", () => {
  const creator = new CreatorBase({ enableLinkFileEditor: true });
  const survey = new SurveyModel();
  let uploadCount = 0;
  creator.onUploadFile.add((s, o) => {
    uploadCount++;
    o.callback("success", "test_url");
    expect(o.question).toBe(undefined);
  });
  const propertyGrid = new PropertyGridModelTester(survey, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("logo");
  questionEditor.loadFiles(<any>[{ type: "image", name: "test_name" }]);
  expect(uploadCount).toBe(1);
  expect(questionEditor.value).toBe("test_url");
});

test("Check PropertyGridLinkFileEditor acceptedTypes", () => {
  const creator = new CreatorBase({ enableLinkFileEditor: true });
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "lion" }];
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("choices").renderedTable.rows[0].cells[3].question;
  expect(questionEditor.acceptedTypes).toBe(imageMimeTypes);
  question.contentMode = "video";
  expect(questionEditor.acceptedTypes).toBe("video/*");
  question.contentMode = "image";
  expect(questionEditor.acceptedTypes).toBe(imageMimeTypes);
});

test("Check PropertyGridLinkFileEditor maxSize", () => {
  const question = new QuestionImageModel("q1");
  let creator = new CreatorBase({});
  creator.onUploadFile.add((s, o) => {
    o.callback("success", "test_url");
    expect(o.question.name).toBe("q1");
  });
  let propertyGrid = new PropertyGridModelTester(question, creator);
  let questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  expect(questionEditor.maxSize).toBe(0);

  creator = new CreatorBase({});
  propertyGrid = new PropertyGridModelTester(question, creator);
  questionEditor = <QuestionFileEditorModel>propertyGrid.survey.getQuestionByName("imageLink");
  expect(questionEditor.maxSize).toBe(65536);
});
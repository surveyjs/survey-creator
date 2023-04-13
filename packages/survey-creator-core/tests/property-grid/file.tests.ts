import { SurveyElement, SurveyModel } from "survey-core";
import { QuestionFileEditorModel } from "../../src/custom-questions/question-file";

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

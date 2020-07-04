import { Selector, ClientFunction } from "testcafe";

export const url = "http://127.0.0.1:7777/example/";

export const init = ClientFunction(creatorOptions => {
  Survey.Survey.cssType = "bootstrap";
  Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  if (!creatorOptions) creatorOptions = null;
  var creator = new SurveyCreator.SurveyCreator(
    "editorElement",
    creatorOptions
  );
  creator.saveSurveyFunc = function(saveNo, callback) {
    alert("ok");
    callback(saveNo, true);
  };
  creator.showOptions = true;
  creator.showState = true;

  window.creator = creator;
});

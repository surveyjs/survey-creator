import * as Survey from "survey-knockout";
import { SurveyTextWorker } from "../src/textWorker";

export default QUnit.module("SurveyTextWorker Tests");

QUnit.test(
  "text worker leaves artifacts in the created survey - https://surveyjs.answerdesk.io/ticket/details/T941",
  function(assert) {
    var jsonText = `{
        \"pages\": [
            {
                \"name\": \"page1\",
                \"elements\": [
                    {
                        \"type\": \"text\",
                        \"name\": \"question1\",
                        \"snippets\": [
                            {
                                \"function\": \"q1\"
                            }
                        ]
                    }
                ]
            }
        ]
    }`;

    Survey.JsonObject.metaData.addProperty("questionbase", {
      name: "snippets"
    });
    var textWorker = new SurveyTextWorker(jsonText);
    var q = textWorker.survey.getQuestionByName("question1");

    assert.equal(textWorker.errors.length, 0);
    assert.deepEqual(q["snippets"], [{ function: "q1" }]);

    Survey.JsonObject.metaData.removeProperty("questionbase", "snippets");
  }
);

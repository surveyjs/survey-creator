const { _setIsTouch } = require("survey-core");
const { QuestionToolbox } = require("../src/toolbox");

QuestionToolbox.defaultQuestionJsonCache = {};

beforeEach(() => {
  _setIsTouch(false);
});

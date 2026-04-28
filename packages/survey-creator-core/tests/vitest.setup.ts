// Vitest setup file (ported from tests/jest.setup.js).
import { beforeEach } from "vitest";
import { _setIsTouch } from "survey-core";
import { QuestionToolbox } from "../src/toolbox";

(QuestionToolbox as any).defaultQuestionJsonCache = {};

beforeEach(() => {
  _setIsTouch(false);
});

import { QuestionMatrixDynamicModel, Base } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { CreatorTester } from "../creator-tester";

test("creator.onElementDeleting", () => {
  const creator = new CreatorTester();
  creator.onElementDeleting.add((sender, options) => {
    if(options.element.isPage) {
      options.allowing = creator.survey.pages.indexOf(options.element) > 1;
    }
  });
  const survey = creator.survey;
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  var propertyGrid = new PropertyGridModelTester(survey, creator);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  const rows = pagesQuestion.visibleRows;
  pagesQuestion.removeRowUI(rows[0]);
  expect(survey.pages).toHaveLength(3);
  pagesQuestion.removeRowUI(rows[1]);
  expect(survey.pages).toHaveLength(3);
  pagesQuestion.removeRowUI(rows[2]);
  expect(survey.pages).toHaveLength(2);
});

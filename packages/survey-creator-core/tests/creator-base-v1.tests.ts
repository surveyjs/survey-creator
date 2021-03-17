import { PanelModel, SurveyModel } from "survey-core";
import { CreatorBase } from "../src/creator-base";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "../src/settings";

export class CreatorTest extends CreatorBase<SurveyModel> {
  protected createSurveyCore(json: any = {}): SurveyModel {
    return new SurveyModel(json);
  }
}

test("Change names in copyElements", () => {
  var creator = new CreatorTest(new EmptySurveyCreatorOptions());
  creator.JSON = {
    elements: [
      {
        type: "panel",
        name: "panel1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
          {
            type: "text",
            name: "question2",
          },
        ],
      },
    ],
  };
  var panel = new PanelModel("panel1");
  panel.addNewQuestion("text", "question1");
  panel.addNewQuestion("text", "question2");
  var newPanel = <PanelModel>creator.copyElement(panel);
  expect(newPanel.name).toEqual("panel2");
  expect(newPanel.questions[0].name).toEqual("question3");
  expect(newPanel.questions[1].name).toEqual("question4");
});
test("Update expressions in copyElements", () => {
  var creator = new CreatorTest(new EmptySurveyCreatorOptions());
  creator.JSON = {
    elements: [
      {
        type: "panel",
        name: "panel1",
        elements: [
          {
            type: "text",
            name: "question1",
          },
          {
            type: "text",
            name: "question2",
          },
        ],
      },
    ],
  };
  var panel = new PanelModel("panel1");
  panel.addNewQuestion("text", "question1");
  panel.addNewQuestion("text", "question2");
  panel.questions[1].visibleIf = "{question1} = 'a'";
  var newPanel = <PanelModel>creator.copyElement(panel);
  expect(newPanel.questions[1].visibleIf).toEqual("{question3} = 'a'");
  expect(newPanel.questions[1].visible).toBeTruthy();
});

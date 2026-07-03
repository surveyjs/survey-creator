import { expect, test } from "vitest";
import { Serializer, QuestionPanelDynamicModel, PanelModel, PageModel, Question } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { ShowElementDescriptionInDesignerEvent } from "../src/creator-events-api";

test("onShowElementDescriptionInDesigner: show/hide empty description per instance", () => {
  // Make empty descriptions show by default in design mode for these element types
  const props = [
    Serializer.getProperty("text", "description"),
    Serializer.getProperty("panel", "description"),
    Serializer.getProperty("page", "description")
  ];
  const oldValues = props.map(p => p.placeholder);
  props.forEach(p => p.placeholder = "Enter a description");

  const creator = new CreatorTester();
  const handled: Array<string> = [];
  creator.onShowElementDescriptionInDesigner.add((_, options: ShowElementDescriptionInDesignerEvent) => {
    handled.push(options.element.name);
    // Show the empty description only for the first question, the panel, and the dynamic panel's inner question
    options.show = ["q1", "panel1", "q4"].indexOf(options.element.name) > -1;
  });
  creator.JSON = {
    pages: [{
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
        { type: "panel", name: "panel1", elements: [{ type: "text", name: "q3" }] },
        { type: "paneldynamic", name: "dp1", templateElements: [{ type: "text", name: "q4" }] }
      ]
    }]
  };
  const survey = creator.survey;
  const page1 = survey.getPageByName("page1") as PageModel;
  const q1 = survey.getQuestionByName("q1") as Question;
  const q2 = survey.getQuestionByName("q2") as Question;
  const panel1 = survey.getPanelByName("panel1") as PanelModel;
  const q3 = survey.getQuestionByName("q3") as Question;
  const dp1 = survey.getQuestionByName("dp1") as QuestionPanelDynamicModel;
  const q4 = dp1.template.getQuestionByName("q4") as Question;

  expect(q1.hasDescription, "q1: shown by the event").toBe(true);
  expect(q2.hasDescription, "q2: hidden by the event").toBe(false);
  expect(q3.hasDescription, "q3: hidden by the event (no name in list)").toBe(false);
  expect(panel1.hasDescription, "panel1: shown by the event").toBe(true);
  expect(q4.hasDescription, "q4 (dynamic panel template): shown by the event").toBe(true);
  // Page description is controlled by the page adorner placeholder; the event still applies
  expect(page1.hasDescription, "page1: hidden by the event (no name in list)").toBe(false);

  expect(handled.indexOf("q1") > -1, "the event is raised for q1").toBe(true);
  expect(handled.indexOf("q4") > -1, "the event is raised for the dynamic panel template question").toBe(true);

  props.forEach((p, i) => p.placeholder = oldValues[i]);
});

test("onShowElementDescriptionInDesigner: default visibility is used when the event is not handled", () => {
  const prop = Serializer.getProperty("text", "description");
  const oldValue = prop.placeholder;
  prop.placeholder = "Enter a description";

  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  const q1 = creator.survey.getQuestionByName("q1") as Question;
  expect(q1.hasDescription, "empty description shown by default in design mode").toBe(true);

  prop.placeholder = oldValue;
});

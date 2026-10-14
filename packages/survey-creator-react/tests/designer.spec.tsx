import React from "react";
import ReactDOM from "react-dom";
import TestRenderer, { act } from "react-test-renderer";
import { TabDesignerViewModel } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "../src/SurveyCreator";
import { TabDesignerComponent } from "../src/tabs/Designer";
import { CreatorSurveyPageComponent } from "../src/adorners/Page";

describe("TabDesignerComponent", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal["mockClear"] && ReactDOM.createPortal["mockClear"]();
  });

  test("getRenderedPages doesn't crash for empty survey in bypage mode", () => {
    const creator = new SurveyCreator({ pageEditMode: "bypage" });
    const tabDesigner = new TabDesignerViewModel(creator);
    const designer = new TabDesignerComponent({ data: tabDesigner });

    const renderedPages = designer["getRenderedPages"]();
    expect(renderedPages).toEqual([]);
  });

  test("survey choiceShortcutsEnabled shows and hides choice badges on the design surface", () => {
    const creator = new SurveyCreator({});
    creator.JSON = {
      elements: [{ type: "checkbox", name: "q1", choices: ["a", "b"] }]
    };
    const survey = creator.survey;
    const page = survey.pages[0];
    let tr: TestRenderer.ReactTestRenderer;
    act(() => {
      tr = TestRenderer.create(
        React.createElement(CreatorSurveyPageComponent as any, { creator, survey, page, isGhost: false })
      );
    });
    const badgeCount = () => tr.root.findAll(
      (n) => typeof n.props?.className === "string" && n.props.className.indexOf("shortcut-key") > -1,
      { deep: true }
    ).length;

    expect(badgeCount()).toBe(0);
    act(() => { survey.choiceShortcutsEnabled = true; });
    expect(badgeCount()).toBeGreaterThan(0);
    act(() => { survey.choiceShortcutsEnabled = false; });
    expect(badgeCount()).toBe(0);
  });
});
import React from "react";
import ReactDOM from "react-dom";
import TestRenderer, { act } from "react-test-renderer";
import { ITheme, SurveyModel } from "survey-core";
import { EditableSurvey } from "../src/EditableSurvey";

const theme = { cssVariables: { "--sjs-test-surface": "1px" } } as ITheme;

describe("EditableSurvey", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as any;
  });

  test("edit mode copies the survey json and theme onto the surface, and view mode copies the json back", () => {
    const survey = new SurveyModel({
      elements: [{ type: "text", name: "q1", title: "Hello" }]
    });
    let tr: TestRenderer.ReactTestRenderer;
    act(() => {
      tr = TestRenderer.create(React.createElement(EditableSurvey, { survey, theme }));
    });
    const button = () => tr.root.find(
      (node) => node.type === "button" && node.props.className === "svc-editable-survey__mode"
    );

    expect(button().children).toContain("Edit");
    act(() => { button().props.onClick(); });
    expect(button().children).toContain("View");

    const surface = tr.root.findAll(
      (node) => typeof node.props?.className === "string" && node.props.className.indexOf("svc-designer-surface") > -1
    );
    expect(surface.length).toBeGreaterThan(0);
    expect(surface[0].props.style["--sjs-test-surface"]).toBe("1px");

    const editable: any = tr.root.findByType(EditableSurvey).instance;
    editable.creator.survey.getQuestionByName("q1").title = "Changed";

    act(() => { button().props.onClick(); });
    expect(button().children).toContain("Edit");
    expect(survey.getQuestionByName("q1").title).toBe("Changed");

    act(() => { tr.unmount(); });
  });
});

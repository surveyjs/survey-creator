import React from "react";
import ReactDOM from "react-dom";
import TestRenderer, { act } from "react-test-renderer";
import { SurveyCreator } from "../src/SurveyCreator";
import { TabDesignerViewModel } from "survey-creator-core";
import { CreatorSurveyPageComponent } from "../src/adorners/Page";
import { TabDesignerComponent } from "../src/tabs/Designer";

describe("Page description in-place editor re-render", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as any;
  });
  afterEach(() => {
    ReactDOM.createPortal["mockClear"] && ReactDOM.createPortal["mockClear"]();
  });

  function renderPage(creator: SurveyCreator) {
    const survey = creator.survey;
    const page = survey.getPageByName("page1");
    let tr: TestRenderer.ReactTestRenderer;
    act(() => {
      tr = TestRenderer.create(
        React.createElement(CreatorSurveyPageComponent as any, { creator, survey, page, isGhost: false })
      );
    });
    const isDescriptionRendered = () =>
      tr.root.findAll(
        (n) => typeof n.props?.className === "string" && n.props.className.indexOf("sd-page__description") > -1,
        { deep: true }
      ).length > 0;
    return { page, isDescriptionRendered };
  }

  test("setting/clearing the page description re-renders the design surface (dynamic onBeforeShowInplaceDescriptionEditor)", () => {
    const creator = new SurveyCreator({});
    // Dynamic decision: show the in-place description editor only while the description is not empty.
    creator.onBeforeShowInplaceDescriptionEditor.add((_, options: any) => {
      if (options.element.getType() === "page") options.show = !!options.element.description;
    });
    creator.JSON = { pages: [{ name: "page1", title: "Page 1", elements: [{ type: "text", name: "q1" }] }] };
    const { page, isDescriptionRendered } = renderPage(creator);

    // Empty -> hidden.
    expect(isDescriptionRendered()).toBeFalsy();

    // Set the description in code -> it must appear on the design surface.
    act(() => { page.description = "Hello"; });
    expect(isDescriptionRendered()).toBeTruthy();

    // Clear the description in code -> it must disappear again.
    act(() => { page.description = ""; });
    expect(isDescriptionRendered()).toBeFalsy();
  });

  test("empty page description is shown by default on the design surface", () => {
    const creator = new SurveyCreator({});
    creator.JSON = { pages: [{ name: "page1", title: "Page 1", elements: [{ type: "text", name: "q1" }] }] };
    const { isDescriptionRendered } = renderPage(creator);
    expect(isDescriptionRendered()).toBeTruthy();
  });
});

describe("Survey description in-place editor re-render", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as any;
  });
  afterEach(() => {
    ReactDOM.createPortal["mockClear"] && ReactDOM.createPortal["mockClear"]();
  });

  function renderDesigner(creator: SurveyCreator) {
    const tabDesigner = new TabDesignerViewModel(creator);
    let tr: TestRenderer.ReactTestRenderer;
    act(() => {
      tr = TestRenderer.create(React.createElement(TabDesignerComponent as any, { data: tabDesigner }));
    });
    // The survey header renders the description inside a div whose class is exactly `sd-description`
    // (page/panel/question descriptions use the `sd-*__description` variants, which we must ignore).
    const descriptionNodeCount = () =>
      tr.root.findAll(
        (n) =>
          typeof n.props?.className === "string" &&
          n.props.className.split(" ").indexOf("sd-description") > -1 &&
          n.props.className.indexOf("__description") === -1,
        { deep: true }
      ).length;
    return { descriptionNodeCount };
  }

  test("setting/clearing the survey description re-renders the design surface header (dynamic)", () => {
    const creator = new SurveyCreator({});
    creator.onBeforeShowInplaceDescriptionEditor.add((_, options: any) => {
      if (options.element.getType() === "survey") options.show = !!options.element.description;
    });
    creator.JSON = { title: "My survey", elements: [{ type: "text", name: "q1" }] };
    const survey = creator.survey;
    const { descriptionNodeCount } = renderDesigner(creator);

    // Empty -> hidden.
    expect(descriptionNodeCount()).toBe(0);

    // Set the description in code -> it must appear on the design surface.
    act(() => { survey.description = "Hello"; });
    expect(descriptionNodeCount()).toBeGreaterThan(0);

    // Clear the description in code -> it must disappear again.
    act(() => { survey.description = ""; });
    expect(descriptionNodeCount()).toBe(0);
  });
});

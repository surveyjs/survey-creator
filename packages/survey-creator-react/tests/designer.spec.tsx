import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import { TabDesignerViewModel } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "../src/SurveyCreator";
import { TabDesignerComponent } from "../src/tabs/Designer";

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
});
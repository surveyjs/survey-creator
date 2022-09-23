import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import { SurveyCreator, SurveyCreatorComponent } from "../src/SurveyCreator";

describe("Creator", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal["mockClear"] && ReactDOM.createPortal["mockClear"]();
  });

  test("check creator props without style", () => {
    const creator = new SurveyCreator({ showLogicTab: true });
    let testRenderer = TestRenderer.create(<SurveyCreatorComponent creator={creator} />);
    let testInstance = testRenderer.root;
    let creatorElement = testInstance.findByType("div");

    expect(testInstance.props.style).toBeUndefined();
    expect(testInstance.instance.style).toBeUndefined();
    expect(testInstance.props.creator).not.toBeNull();
    expect(creatorElement.props.className.includes("svc-creator")).toBe(true);
    expect(creatorElement.props.style).toBeUndefined();
  });

  test("check creator props with style", () => {
    const creator = new SurveyCreator({ showLogicTab: true });
    const styleValue = { height: "100vh" };
    let testRenderer = TestRenderer.create(<SurveyCreatorComponent style={{ height: "100vh" }} creator={creator} />);
    let testInstance = testRenderer.root;
    let creatorElement = testInstance.findByType("div");

    expect(testInstance.props.style).toEqual(styleValue);
    expect(testInstance.instance.style).toEqual(styleValue);
    expect(testInstance.props.creator).not.toBeNull();
    expect(creatorElement.props.className.includes("svc-creator")).toBe(true);
    expect(creatorElement.props.style).toEqual(styleValue);
  });
});
import React from "react";
import ReactDOM from "react-dom";
import TestRenderer, { act } from "react-test-renderer";
import { TabDesignerViewModel } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "../src/SurveyCreator";
import { TabDesignerComponent } from "../src/tabs/Designer";
import { CreatorSurveyPageComponent } from "../src/adorners/Page";
import { ItemValueAdornerComponent } from "../src/ItemValueWrapper";
import { ImageItemValueAdornerComponent } from "../src/ImageItemValueWrapper";

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

  const renderedChoiceModels = (json: any, componentType: any): Array<any> => {
    const creator = new SurveyCreator({});
    creator.JSON = json;
    const survey = creator.survey;
    const page = survey.pages[0];
    let tr: TestRenderer.ReactTestRenderer;
    act(() => {
      tr = TestRenderer.create(
        React.createElement(CreatorSurveyPageComponent as any, { creator, survey, page, isGhost: false })
      );
    });
    const models = tr.root.findAllByType(componentType).map((node) => node.instance.model);
    expect(models.length).toBeGreaterThan(0);
    expect(models.filter((model) => model.isDisposed)).toHaveLength(0);
    act(() => tr.unmount());
    return models;
  };
  test("choice adorner models are disposed when the design surface unmounts", () => {
    const models = renderedChoiceModels({ elements: [{ type: "checkbox", name: "q1", choices: ["a", "b"] }] }, ItemValueAdornerComponent);
    expect(models.filter((model) => !model.isDisposed)).toHaveLength(0);
  });
  test("a choice adorner remounted by React StrictMode gets a live model", () => {
    // StrictMode (React 18+, development) calls componentWillUnmount and
    // componentDidMount again on the same instance.
    const creator = new SurveyCreator({});
    creator.JSON = { elements: [{ type: "checkbox", name: "q1", choices: ["a", "b"] }] };
    const survey = creator.survey;
    const page = survey.pages[0];
    let tr: TestRenderer.ReactTestRenderer;
    act(() => {
      tr = TestRenderer.create(
        React.createElement(CreatorSurveyPageComponent as any, { creator, survey, page, isGhost: false })
      );
    });
    const component: any = tr.root.findAllByType(ItemValueAdornerComponent)
      .filter((node) => node.instance.model.item === survey.getAllQuestions()[0].choices[0])[0].instance;
    act(() => {
      component.componentWillUnmount();
      component.componentDidMount();
    });
    expect(component.model.isDisposed).toBe(false);
    expect(component.model.allowRemove).toBe(true);
    act(() => tr.unmount());
  });
  test("image choice adorner models are disposed when the design surface unmounts", () => {
    const models = renderedChoiceModels({
      elements: [{ type: "imagepicker", name: "q1", choices: [{ value: "a", imageLink: "a.png" }] }]
    }, ImageItemValueAdornerComponent);
    expect(models.filter((model) => !model.isDisposed)).toHaveLength(0);
  });
});
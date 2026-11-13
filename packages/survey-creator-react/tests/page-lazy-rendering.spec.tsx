// The package targets React 17, ReactDOM.render is the API to mount into a real DOM node here.
// The test needs real DOM elements: the page adorner tracks its root element via IntersectionObserver.
/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import { PageModel } from "survey-core";
import { SurveyCreator } from "../src/SurveyCreator";
import { CreatorSurveyPageComponent } from "../src/adorners/Page";
// registers svc-add-new-question-btn, the footer action that renders the question type selector
import "../src/AddQuestionButton";

// jsdom does not implement IntersectionObserver
class FakeIntersectionObserver {
  public targets: Array<Element> = [];
  constructor(private callback: (entries: Array<any>) => void) { }
  public observe(target: Element): void {
    this.targets.push(target);
  }
  public unobserve(target: Element): void {
    this.targets = this.targets.filter(el => el !== target);
  }
  public disconnect(): void {
    this.targets = [];
  }
  public fireIntersecting(isIntersecting: boolean = true): void {
    this.callback(this.targets.map(target => ({ target, isIntersecting })));
  }
}

function createJSON(pageCount: number): any {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push({ name: "page" + i, elements: [{ type: "text", name: "q" + i }] });
  }
  return { pages: pages };
}

function getAdorner(page: PageModel): any {
  return page.getPropertyValue("__sjs_creator_adorner");
}

describe("CreatorSurveyPageComponent lazy content rendering", () => {
  let originalIntersectionObserver: any;
  beforeEach(() => {
    originalIntersectionObserver = (window as any).IntersectionObserver;
    (window as any).IntersectionObserver = FakeIntersectionObserver;
  });
  afterEach(() => {
    (window as any).IntersectionObserver = originalIntersectionObserver;
  });

  test("The adorner re-created on the page prop change is attached to the root element", async () => {
    const creator = new SurveyCreator({ showLogicTab: false });
    creator.JSON = createJSON(8);
    const container = document.createElement("div");
    document.body.appendChild(container);

    const render = (page: PageModel) => {
      ReactDOM.render(
        React.createElement(CreatorSurveyPageComponent as any, { creator, survey: creator.survey, page, isGhost: false }),
        container
      );
    };

    const page = creator.survey.pages[0];
    render(page);
    expect(getAdorner(page).rootElement).toBeTruthy();

    // Re-assigning the JSON re-creates the survey. Page ids are generated per survey, so the new
    // pages get the same ids, React reconciles them by key and re-uses this component instance
    // instead of re-mounting it: componentDidMount does not run for the re-created adorner.
    creator.JSON = createJSON(8);
    const newPage = creator.survey.pages[0];
    expect(newPage).not.toBe(page);
    expect(newPage.id).toBe(page.id);

    render(newPage);

    const adorner = getAdorner(newPage);
    expect(adorner).toBeTruthy();
    expect(adorner.rootElement).toBeTruthy();

    // the content stays behind the loading placeholder until the page becomes visible
    expect(adorner.needRenderContent).toBe(false);
    adorner["visibilityObserver"].fireIntersecting();
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(adorner.needRenderContent).toBe(true);

    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  test("A page placeholder renders no header actions and no footer until its content renders", async () => {
    const creator = new SurveyCreator({ showLogicTab: false });
    creator.JSON = createJSON(8);
    const container = document.createElement("div");
    document.body.appendChild(container);
    const page = creator.survey.pages[5];
    ReactDOM.render(
      React.createElement(CreatorSurveyPageComponent as any, { creator, survey: creator.survey, page, isGhost: false }),
      container
    );

    const adorner = getAdorner(page);
    const root = container.querySelector(".svc-page__content");
    expect(adorner.needRenderContent).toBe(false);
    expect(root.getAttribute("data-sv-drop-target-survey-page")).toBe("page6");
    expect(root.querySelectorAll(".svc-question__drop-indicator")).toHaveLength(2);
    expect(root.querySelector(".svc-page__loading-content")).toBeTruthy();
    expect(root.querySelector(".svc-page__content-actions")).toBeNull();
    expect(root.querySelector(".svc-page__footer")).toBeNull();
    expect(root.querySelector(".svc-question__drag-area")).toBeNull();
    expect(adorner["actionContainerValue"]).toBeUndefined();
    expect(adorner["topActionContainerValue"]).toBeUndefined();
    expect(adorner["_footerActionsBar"]).toBeUndefined();
    expect(adorner["questionTypeSelectorModelValue"]).toBeUndefined();

    adorner["visibilityObserver"].fireIntersecting();
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(adorner.needRenderContent).toBe(true);
    expect(root.querySelector(".svc-page__loading-content")).toBeNull();
    expect(root.querySelector(".svc-question__drag-area .svc-page__content-actions")).toBeTruthy();
    expect(root.querySelector(".svc-page__footer .svc-add-new-question-action .svc-surface-btn__selector")).toBeTruthy();
    expect(root.getAttribute("data-sv-drop-target-survey-page")).toBe("page6");

    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  test("A page placeholder's loading indicator is marked visible only while the page is in the viewport", async () => {
    const creator = new SurveyCreator({ showLogicTab: false });
    creator.JSON = createJSON(8);
    // keeps the placeholder on screen: the page content does not render when the page becomes visible
    (creator.survey as any)._isLazyRenderingSuspended = true;
    const container = document.createElement("div");
    document.body.appendChild(container);
    const page = creator.survey.pages[5];
    ReactDOM.render(
      React.createElement(CreatorSurveyPageComponent as any, { creator, survey: creator.survey, page, isGhost: false }),
      container
    );

    const adorner = getAdorner(page);
    const getPlaceholderClass = () => container.querySelector(".svc-page__loading-content").className;
    expect(adorner.needRenderContent).toBe(false);
    expect(getPlaceholderClass()).toBe("svc-page__loading-content");

    adorner["visibilityObserver"].fireIntersecting(true);
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(adorner.needRenderContent).toBe(false);
    expect(getPlaceholderClass()).toBe("svc-page__loading-content svc-page__loading-content--visible");

    adorner["visibilityObserver"].fireIntersecting(false);
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(adorner.needRenderContent).toBe(false);
    expect(getPlaceholderClass()).toBe("svc-page__loading-content");

    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  test("The ghost page renders its footer from the start", () => {
    const creator = new SurveyCreator({ showLogicTab: false });
    creator.JSON = createJSON(8);
    const container = document.createElement("div");
    document.body.appendChild(container);
    const ghostPage = (creator.getPlugin("designer").model as any).newPage as PageModel;
    expect(ghostPage).toBeTruthy();
    ReactDOM.render(
      React.createElement(CreatorSurveyPageComponent as any, { creator, survey: creator.survey, page: ghostPage, isGhost: true }),
      container
    );

    const adorner = getAdorner(ghostPage);
    expect(adorner.needRenderContent).toBe(true);
    const root = container.querySelector(".svc-page__content");
    expect(root.querySelector(".svc-page__loading-content")).toBeNull();
    expect(root.querySelector(".svc-page__footer .svc-add-new-question-action .svc-surface-btn__selector")).toBeTruthy();
    expect(root.querySelector(".svc-page__content-actions")).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });
});

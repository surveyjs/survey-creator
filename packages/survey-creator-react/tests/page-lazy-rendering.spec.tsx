// The package targets React 17, ReactDOM.render is the API to mount into a real DOM node here.
// The test needs real DOM elements: the page adorner tracks its root element via IntersectionObserver.
/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import { PageModel } from "survey-core";
import { SurveyCreator } from "../src/SurveyCreator";
import { CreatorSurveyPageComponent } from "../src/adorners/Page";

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
  public fireIntersecting(): void {
    this.callback(this.targets.map(target => ({ target, isIntersecting: true })));
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
});

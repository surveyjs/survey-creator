import React from "react";
import ReactDOM from "react-dom";
import TestRenderer, { act } from "react-test-renderer";
import { PageModel } from "survey-core";
import { TabDesignerViewModel } from "survey-creator-core";
import { SurveyCreator } from "../src/SurveyCreator";
import { TabDesignerComponent } from "../src/tabs/Designer";

describe("Designer page wrapper: page name handler", () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as any;
  });
  afterEach(() => {
    ReactDOM.createPortal["mockClear"] && ReactDOM.createPortal["mockClear"]();
  });

  // Test-only snapshot of the "name" handlers registered by page wrappers
  function wrapperHandlers(page: PageModel): Array<any> {
    return (page["onPropChangeFunctions"] || []).filter(
      (h: any) => h.name === "name" && String(h.key).startsWith("PageWrapperCallback_")
    );
  }
  function createCreator(): SurveyCreator {
    const creator = new SurveyCreator({});
    creator.JSON = {
      pages: [
        { name: "page1", elements: [{ type: "text", name: "q1" }] },
        { name: "page2", elements: [{ type: "text", name: "q2" }] }
      ]
    };
    return creator;
  }
  // PageWrapperComponent is not exported: take its element from the designer
  function createWrapperElement(creator: SurveyCreator, page: PageModel): React.ReactElement {
    const designer = new TabDesignerComponent({ data: new TabDesignerViewModel(creator) });
    return designer["createRenderedPage"](page, "svc-page", false);
  }
  function renderElement(element: React.ReactElement): TestRenderer.ReactTestRenderer {
    let tr: TestRenderer.ReactTestRenderer;
    act(() => { tr = TestRenderer.create(element); });
    return tr;
  }
  function dropTargetPage(tr: TestRenderer.ReactTestRenderer): string {
    return (tr.toJSON() as TestRenderer.ReactTestRendererJSON).props["data-sv-drop-target-page"];
  }

  test("unmount removes the wrapper's name handler", () => {
    const creator = createCreator();
    const page = creator.survey.pages[0];
    const tr = renderElement(createWrapperElement(creator, page));
    expect(wrapperHandlers(page)).toHaveLength(1);

    act(() => { tr.unmount(); });
    expect(wrapperHandlers(page)).toHaveLength(0);
  });

  test("switching the page moves the wrapper's name handler", () => {
    const creator = createCreator();
    const pageA = creator.survey.pages[0];
    const pageB = creator.survey.pages[1];
    const element = createWrapperElement(creator, pageA);
    const tr = renderElement(element);
    expect(wrapperHandlers(pageA)).toHaveLength(1);
    const key = wrapperHandlers(pageA)[0].key;

    // cloneElement keeps the original key, so React updates the wrapper (componentDidUpdate)
    act(() => { tr.update(React.cloneElement(element, { page: pageB })); });
    expect(dropTargetPage(tr)).toBe("page2");
    expect(wrapperHandlers(pageA)).toHaveLength(0);
    expect(wrapperHandlers(pageB)).toHaveLength(1);
    // Same wrapper instance: it was updated, not re-mounted
    expect(wrapperHandlers(pageB)[0].key).toBe(key);

    act(() => { tr.unmount(); });
  });

  test("name handlers are per wrapper instance", () => {
    const creator = createCreator();
    const page = creator.survey.pages[0];
    // Separate roots: siblings would share key={page.id}
    const tr1 = renderElement(createWrapperElement(creator, page));
    const tr2 = renderElement(createWrapperElement(creator, page));
    expect(wrapperHandlers(page)).toHaveLength(2);

    act(() => { tr1.unmount(); });
    expect(wrapperHandlers(page)).toHaveLength(1);

    act(() => { page.name = "renamed"; });
    expect(dropTargetPage(tr2)).toBe("renamed");

    act(() => { tr2.unmount(); });
  });

  test("renaming the page re-renders the wrapper", () => {
    const creator = createCreator();
    const page = creator.survey.pages[0];
    const tr = renderElement(createWrapperElement(creator, page));
    expect(dropTargetPage(tr)).toBe("page1");

    act(() => { page.name = "test1"; });
    expect(dropTargetPage(tr)).toBe("test1");
    act(() => { page.name = "test2"; });
    expect(dropTargetPage(tr)).toBe("test2");

    act(() => { tr.unmount(); });
  });
});

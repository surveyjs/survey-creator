import { ComponentCollection, ListModel, PopupDropdownViewModel, QuestionTextModel } from "survey-core";
import { vi } from "vitest";
import { PageAdorner } from "../src/components/page";
import { PageNavigatorViewModel } from "../src/components/page-navigator/page-navigator";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { settings } from "../src/creator-settings";
import { DropIndicatorPosition } from "../src/drag-drop-enums";
import { PagesController } from "../src/pages-controller";
import { CreatorTester } from "./creator-tester";

test("Check page adorner css on drag over", (): any => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "never";
  creator.JSON = {
    pages: [
      { name: "page1" },
    ]
  };
  const pageAdorner = new PageAdorner(
    creator,
    creator.survey.pages[0]
  );
  expect(pageAdorner.css).toBe("");
  pageAdorner.dropIndicatorPosition = DropIndicatorPosition.Inside;
  expect(pageAdorner.css).toBe("svc-question__content--drag-over-inside");
  pageAdorner.showPlaceholder = false;
  pageAdorner.isGhost = true;
  expect(pageAdorner.css).toBe("svc-page--drag-over-empty svc-page__content--new");
  settings.designer.showAddQuestionButton = false;
  expect(pageAdorner.css).toBe("svc-page--drag-over-empty svc-page--drag-over-empty-no-add-button svc-page__content--new");
  settings.designer.showAddQuestionButton = true;
});

test("Check page getAnimatedElement methods", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: {
      name: "p1",
      elements: [
        { type: "text", name: "11" },
      ]
    }
  };
  const page = creator.survey.getPageByName("p1");
  creator.selectElement(page);
  const pageAdorner = new PageAdorner(
    creator,
    page,
  );
  const animationOptions = pageAdorner["getExpandCollapseAnimationOptions"]();
  const rootElement = document.createElement("div");
  const descriptionElement = document.createElement("div");
  descriptionElement.className = page.cssClasses.page.description;
  const bodyElement = document.createElement("div");
  bodyElement.className = page.cssRoot;
  const contentElement = document.createElement("div");
  contentElement.className = page.cssContent;
  const rowElement = document.createElement("div");
  rowElement.className = "svc-row";
  const footerElement = document.createElement("div");
  footerElement.className = "svc-page__footer";
  contentElement.appendChild(rowElement);
  bodyElement.appendChild(descriptionElement);
  bodyElement.appendChild(contentElement);
  rootElement.appendChild(bodyElement);
  rootElement.appendChild(footerElement);
  pageAdorner.rootElement = rootElement;

  expect(pageAdorner["getInnerAnimatedElements"]()).toEqual([rowElement, footerElement]);
  expect(animationOptions.getAnimatedElement()).toBe(descriptionElement);
});
test("Check css when dragging page over top/bottom", () => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "never";
  creator.JSON = {
    pages: [
      { name: "page1" },
    ]
  };
  const pageAdorner = new PageAdorner(
    creator,
    creator.survey.pages[0]
  );
  expect(pageAdorner.css).toBe("");
  creator.dragDropSurveyElements.draggedElement = creator.survey.pages[0];
  pageAdorner.dropIndicatorPosition = DropIndicatorPosition.Left;
  expect(pageAdorner.css).toBe("");
  pageAdorner.dropIndicatorPosition = DropIndicatorPosition.Right;
  expect(pageAdorner.css).toBe("");
  pageAdorner.dropIndicatorPosition = DropIndicatorPosition.Top;
  expect(pageAdorner.css).toBe("svc-question__content--drag-over-top");
  pageAdorner.dropIndicatorPosition = DropIndicatorPosition.Bottom;
  expect(pageAdorner.css).toBe("svc-question__content--drag-over-bottom");
});
test("Check ghost page adorner actions visibility", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1" },
    ]
  };
  creator.sidebar.flyoutMode = true;
  const pageAdorner = new PageAdorner(
    creator,
    creator.survey.pages[0]
  );
  const newPage = (creator.getPlugin("designer").model as TabDesignerViewModel).newPage;
  const pageAdornerGhost = new PageAdorner(
    creator,
    newPage
  );
  pageAdornerGhost.isGhost = true;
  expect(pageAdorner.getActionById("settings").visible).toBeTruthy();
  expect(pageAdornerGhost.getActionById("settings").visible).toBeFalsy();
});
test("Actions should always shrink in mobile", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1" },
    ]
  };
  creator.sidebar.flyoutMode = true;
  const pageAdorner = new PageAdorner(
    creator,
    creator.survey.pages[0]
  );

  expect(pageAdorner.actionContainer.alwaysShrink).toBeFalsy();
  creator.isMobileView = true;
  expect(pageAdorner.actionContainer.alwaysShrink).toBeTruthy();
});

class FakeIntersectionObserver {
  public static instances: Array<FakeIntersectionObserver> = [];
  // the creator creates observers for other elements as well, count only the observed ones
  public static observersFor(target: Element): Array<FakeIntersectionObserver> {
    return FakeIntersectionObserver.instances.filter(el => el.allTargets.indexOf(target) !== -1);
  }
  public targets: Array<Element> = [];
  public allTargets: Array<Element> = [];
  constructor(private callback: (entries: Array<any>) => void) {
    FakeIntersectionObserver.instances.push(this);
  }
  public observe(target: Element): void {
    this.targets.push(target);
    this.allTargets.push(target);
  }
  public unobserve(target: Element): void {
    this.targets = this.targets.filter(el => el !== target);
  }
  public disconnect(): void {
    this.targets = [];
  }
  public fireIntersecting(isIntersecting: boolean): void {
    this.callback(this.targets.map(target => ({ target, isIntersecting })));
  }
}

function useFakeIntersectionObserver(): () => void {
  const original = (window as any).IntersectionObserver;
  FakeIntersectionObserver.instances = [];
  (window as any).IntersectionObserver = FakeIntersectionObserver;
  return () => {
    (window as any).IntersectionObserver = original;
    FakeIntersectionObserver.instances = [];
  };
}

function createPagesJSON(pageCount: number): any {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push({ name: "page" + i, elements: [{ type: "text", name: "q" + i }] });
  }
  return { pages: pages };
}

test("Page content lazy rendering: needRenderContent depends on the pages count threshold", (): any => {
  const creatorSmall = new CreatorTester();
  creatorSmall.JSON = createPagesJSON(5);
  creatorSmall.survey.pages.forEach(page => {
    expect(new PageAdorner(creatorSmall, page).needRenderContent).toBe(true);
  });

  const creatorLarge = new CreatorTester();
  creatorLarge.JSON = createPagesJSON(6);
  creatorLarge.survey.pages.forEach(page => {
    expect(new PageAdorner(creatorLarge, page).needRenderContent).toBe(false);
  });
});

test("Page content lazy rendering: settings.pageContentLazyRendering = false should disable it", (): any => {
  settings.pageContentLazyRendering = false;
  try {
    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    creator.survey.pages.forEach(page => {
      expect(new PageAdorner(creator, page).needRenderContent).toBe(true);
    });
  } finally {
    settings.pageContentLazyRendering = true;
  }
});

test("Page content lazy rendering: needRenderContent should be updated on creator.pageEditMode change", (): any => {
  const creator = new CreatorTester();
  creator.JSON = createPagesJSON(6);
  const pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  expect(pageAdorner.needRenderContent).toBe(false);

  creator.pageEditMode = "bypage";
  expect(pageAdorner.needRenderContent).toBe(true);

  // the rendered content should not fall back to the loading placeholder
  creator.pageEditMode = "standard";
  expect(pageAdorner.needRenderContent).toBe(true);
});

test("Page content lazy rendering: the observer resolves the loading placeholder", async (): Promise<any> => {
  const restoreIntersectionObserver = useFakeIntersectionObserver();
  try {
    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    const page = creator.survey.pages[5];
    const pageAdorner = new PageAdorner(creator, page);
    expect(pageAdorner.needRenderContent).toBe(false);

    const rootElement = document.createElement("div");
    pageAdorner.attachToUI(page, rootElement);
    const observer = FakeIntersectionObserver.instances.filter(el => el.targets.indexOf(rootElement) !== -1)[0];
    expect(observer).toBeTruthy();

    observer.fireIntersecting(true);
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(pageAdorner.isVisibleInViewPort).toBe(true);
    expect(pageAdorner.needRenderContent).toBe(true);

    pageAdorner.detachFromUI();
  } finally {
    restoreIntersectionObserver();
  }
});

test("Page content lazy rendering: the loading placeholder is marked as visible only while the page is in the viewport", (): any => {
  const restoreIntersectionObserver = useFakeIntersectionObserver();
  try {
    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    // keep the placeholder on screen instead of replacing it with the page content
    (creator.survey as any)._isLazyRenderingSuspended = true;
    const page = creator.survey.pages[5];
    const pageAdorner = new PageAdorner(creator, page);
    expect(pageAdorner.loadingContentCss).toBe("svc-page__loading-content");

    const rootElement = document.createElement("div");
    pageAdorner.attachToUI(page, rootElement);
    const observer = FakeIntersectionObserver.observersFor(rootElement)[0];

    observer.fireIntersecting(true);
    expect(pageAdorner.needRenderContent).toBe(false);
    expect(pageAdorner.loadingContentCss).toBe("svc-page__loading-content svc-page__loading-content--visible");

    observer.fireIntersecting(false);
    expect(pageAdorner.loadingContentCss).toBe("svc-page__loading-content");

    pageAdorner.detachFromUI();
  } finally {
    restoreIntersectionObserver();
  }
});

test("Page content lazy rendering: setRootElement should not create a second observer for the same element", (): any => {
  const restoreIntersectionObserver = useFakeIntersectionObserver();
  try {
    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    const page = creator.survey.pages[0];
    const pageAdorner = new PageAdorner(creator, page);
    const rootElement = document.createElement("div");

    pageAdorner.attachToUI(page, rootElement);
    expect(FakeIntersectionObserver.observersFor(rootElement)).toHaveLength(1);

    pageAdorner.attachToUI(page, rootElement);
    pageAdorner.setRootElement(rootElement);
    expect(FakeIntersectionObserver.observersFor(rootElement)).toHaveLength(1);
    expect(FakeIntersectionObserver.observersFor(rootElement)[0].targets).toEqual([rootElement]);

    const newRootElement = document.createElement("div");
    pageAdorner.setRootElement(newRootElement);
    expect(FakeIntersectionObserver.observersFor(rootElement)).toHaveLength(1);
    expect(FakeIntersectionObserver.observersFor(rootElement)[0].targets).toEqual([]);
    expect(FakeIntersectionObserver.observersFor(newRootElement)).toHaveLength(1);
    expect(FakeIntersectionObserver.observersFor(newRootElement)[0].targets).toEqual([newRootElement]);

    pageAdorner.detachFromUI();
    expect(FakeIntersectionObserver.observersFor(newRootElement)[0].targets).toEqual([]);
  } finally {
    restoreIntersectionObserver();
  }
});

test("Page content lazy rendering: an adorner re-created for a rendered page should render the content", async (): Promise<any> => {
  const restoreIntersectionObserver = useFakeIntersectionObserver();
  try {
    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    const page = creator.survey.pages[0];
    const rootElement = document.createElement("div");

    const pageAdorner = new PageAdorner(creator, page);
    pageAdorner.attachToUI(page, rootElement);
    pageAdorner.dispose();

    // the UI layer re-creates the adorner for the same page and the same root element,
    // it should observe the page visibility as well
    const newPageAdorner = new PageAdorner(creator, page);
    newPageAdorner.attachToUI(page, rootElement);
    expect(newPageAdorner.needRenderContent).toBe(false);

    const observer = FakeIntersectionObserver.instances.filter(el => el.targets.indexOf(rootElement) !== -1)[0];
    expect(observer).toBeTruthy();
    observer.fireIntersecting(true);
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(newPageAdorner.needRenderContent).toBe(true);

    newPageAdorner.detachFromUI();
  } finally {
    restoreIntersectionObserver();
  }
});

test("Page content lazy rendering: the content is rendered if IntersectionObserver is not supported", (): any => {
  const original = (window as any).IntersectionObserver;
  (window as any).IntersectionObserver = undefined;
  try {
    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    const page = creator.survey.pages[0];
    const pageAdorner = new PageAdorner(creator, page);
    expect(pageAdorner.needRenderContent).toBe(false);

    pageAdorner.attachToUI(page, document.createElement("div"));
    expect(pageAdorner.needRenderContent).toBe(true);
  } finally {
    (window as any).IntersectionObserver = original;
  }
});

function getRowNames(panel: any): Array<Array<string>> {
  return panel.rows.map(row => row.elements.map(el => el.name));
}
function createAdornerWithoutContent(): any {
  const creator = new CreatorTester();
  creator.JSON = createPagesJSON(6);
  const page = creator.survey.pages[3];
  const adorner = new PageAdorner(creator, page);
  expect(adorner.needRenderContent).toBe(false);
  return { creator, page, adorner };
}
function createPendingPage(): any {
  const res = createAdornerWithoutContent();
  expect(res.page.rows).toHaveLength(0);
  return res;
}
function createAllAdorners(creator: CreatorTester): Array<PageAdorner> {
  return creator.survey.pages.map(page => new PageAdorner(creator, page));
}

test("Page content lazy rendering: a page that does not render has no rows", (): any => {
  const json = createPagesJSON(6);
  json.pages[1].elements.push({ type: "panel", name: "panel1", elements: [{ type: "text", name: "q2_1" }] });
  const creator = new CreatorTester();
  creator.JSON = json;
  const page = creator.survey.pages[1];
  const adorner = new PageAdorner(creator, page);
  expect(adorner.needRenderContent).toBe(false);
  expect(page.rows).toHaveLength(0);
  expect((<any>creator.survey.getPanelByName("panel1")).rows).toHaveLength(0);
  expect(page.wasRendered).toBe(false);
});

test("Page content lazy rendering: turning the content on builds the rows", (): any => {
  const json = createPagesJSON(6);
  json.pages[1].elements.push({ type: "panel", name: "panel1", elements: [{ type: "text", name: "q2_1" }, { type: "text", name: "q2_2" }] });
  const creator = new CreatorTester();
  creator.JSON = json;
  const page = creator.survey.pages[1];
  const adorner = new PageAdorner(creator, page);
  expect(page.rows).toHaveLength(0);

  adorner.needRenderContent = true;
  expect(getRowNames(page)).toEqual([["q2"], ["panel1"]]);
  expect(getRowNames(creator.survey.getPanelByName("panel1"))).toEqual([["q2_1"], ["q2_2"]]);
  expect(page.wasRendered).toBe(true);
});

test("Page content lazy rendering: showPlaceholder does not depend on the rows of a pending page", (): any => {
  const json = createPagesJSON(6);
  json.pages[1].elements = [{ type: "text", name: "hidden", visible: false }];
  json.pages[2].elements = [{ type: "text", name: "conditional", visibleIf: "{q1} = 1" }];
  json.pages[3].elements = [{ type: "panel", name: "emptyPanel" }];
  json.pages[4].elements = [];
  const creator = new CreatorTester();
  creator.JSON = json;
  const expectedPlaceholders = [false, false, false, true, false];
  const adorners = creator.survey.pages.slice(1).map(page => new PageAdorner(creator, page));
  adorners.forEach((adorner, index) => {
    expect(adorner.page.rows).toHaveLength(0);
    expect(adorner.showPlaceholder).toBe(expectedPlaceholders[index]);
  });
  adorners.slice(0, 3).forEach(adorner => {
    adorner.needRenderContent = true;
    expect(adorner.page.rows).toHaveLength(1);
    expect(adorner.showPlaceholder).toBe(false);
  });
  adorners[3].needRenderContent = true;
  expect(adorners[3].showPlaceholder).toBe(true);

  const lastPage = adorners[4].page;
  expect(lastPage.rows).toHaveLength(0);
  lastPage.removeElement(lastPage.elements[0]);
  expect(adorners[4].showPlaceholder).toBe(true);
});

test("Page content lazy rendering: creator.pageEditMode change builds the rows", (): any => {
  const { creator, page } = createPendingPage();
  creator.pageEditMode = "bypage";
  expect(getRowNames(page)).toEqual([["q4"]]);
});

test("Page content lazy rendering: isGhost builds the rows", (): any => {
  const { page, adorner } = createPendingPage();
  adorner.isGhost = true;
  expect(getRowNames(page)).toEqual([["q4"]]);
});

test("Page content lazy rendering: the page navigator builds the rows", (): any => {
  const { creator, page, adorner } = createPendingPage();
  const navigator = new PageNavigatorViewModel(new PagesController(creator), "");
  navigator.scrollToPage(page);
  expect(adorner.needRenderContent).toBe(true);
  expect(getRowNames(page)).toEqual([["q4"]]);
});

test("Page content lazy rendering: the observer builds the rows", async (): Promise<any> => {
  const restoreIntersectionObserver = useFakeIntersectionObserver();
  try {
    const { page, adorner } = createPendingPage();
    const rootElement = document.createElement("div");
    adorner.attachToUI(page, rootElement);
    expect(page.rows).toHaveLength(0);

    FakeIntersectionObserver.observersFor(rootElement)[0].fireIntersecting(true);
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(adorner.needRenderContent).toBe(true);
    expect(getRowNames(page)).toEqual([["q4"]]);
    adorner.detachFromUI();
  } finally {
    restoreIntersectionObserver();
  }
});

test("Page content lazy rendering: setRootElement without IntersectionObserver builds the rows", (): any => {
  const original = (window as any).IntersectionObserver;
  (window as any).IntersectionObserver = undefined;
  try {
    const { page, adorner } = createPendingPage();
    adorner.attachToUI(page, document.createElement("div"));
    expect(adorner.needRenderContent).toBe(true);
    expect(getRowNames(page)).toEqual([["q4"]]);
  } finally {
    (window as any).IntersectionObserver = original;
  }
});

test("Page content lazy rendering: creator.focusElement builds the rows", async (): Promise<any> => {
  const { creator, page, adorner } = createPendingPage();
  const question = page.elements[0];
  creator.focusElement(question, false, question);
  expect(page.rows).toHaveLength(0);
  await new Promise(resolve => setTimeout(resolve, 60));
  clearTimeout(creator["currentFocusTimeout"]);
  expect(adorner.needRenderContent).toBe(true);
  expect(getRowNames(page)).toEqual([["q4"]]);
});

test("Page content lazy rendering: an adorner re-created for a built page does not rebuild the rows", (): any => {
  const { creator, page, adorner } = createPendingPage();
  adorner.needRenderContent = true;
  adorner.dispose();
  const row = page.rows[0];

  const newAdorner = new PageAdorner(creator, page);
  expect(newAdorner.needRenderContent).toBe(false);
  expect(page.rows[0]).toBe(row);
  newAdorner.needRenderContent = true;
  expect(page.rows[0]).toBe(row);
});

test("Page content lazy rendering: elements added to a pending page get their first rendering with the rows", (): any => {
  const { creator, page, adorner } = createPendingPage();
  const question = page.addNewQuestion("text", "added1");
  const panel = page.addNewPanel("addedPanel");
  const nestedQuestion = panel.addNewQuestion("text", "nested");
  const element = new QuestionTextModel("added2");
  page.addElement(element);
  expect(page.rows).toHaveLength(0);
  expect(question.wasRendered).toBe(false);

  adorner.needRenderContent = true;
  expect(getRowNames(page)).toEqual([["q4"], ["added1"], ["addedPanel"], ["added2"]]);
  expect(question.wasRendered).toBe(true);
  expect(element.wasRendered).toBe(true);
  expect(getRowNames(panel)).toEqual([["nested"]]);
  expect(nestedQuestion.wasRendered).toBe(true);

  const emptyPage = creator.survey.pages[4];
  emptyPage.removeElement(emptyPage.elements[0]);
  const emptyPageAdorner = new PageAdorner(creator, emptyPage);
  expect(emptyPage.rows).toHaveLength(0);
  const firstQuestion = emptyPage.addNewQuestion("text", "first");
  expect(getRowNames(emptyPage)).toEqual([["first"]]);
  emptyPage.addNewQuestion("text", "second");
  emptyPageAdorner.needRenderContent = true;
  expect(getRowNames(emptyPage)).toEqual([["first"], ["second"]]);
  expect(firstQuestion.wasRendered).toBe(true);
});

test("Page content lazy rendering: bypage and single modes build the rows when the adorner is attached", (): any => {
  ["bypage", "single"].forEach((mode: any) => {
    const creator = new CreatorTester({ pageEditMode: mode });
    creator.JSON = createPagesJSON(6);
    const page = creator.survey.pages[3];
    expect(page.rows).toHaveLength(0);
    const adorner = new PageAdorner(creator, page);
    expect(adorner.needRenderContent).toBe(true);
    expect(getRowNames(page)).toEqual([["q4"]]);
  });
});

test("Page content lazy rendering: a page with elements on one line sets the width mode when the adorner is attached", (): any => {
  ComponentCollection.Instance.add({
    name: "same-line-composite",
    elementsJSON: [{ type: "text", name: "c1" }, { type: "text", name: "c2", startWithNewLine: false }]
  });
  try {
    const pair = [{ type: "text", name: "p1" }, { type: "text", name: "p2", startWithNewLine: false }];
    const elementsList: Array<any> = [
      pair,
      [{ type: "panel", name: "panel1", elements: pair }],
      [{ type: "paneldynamic", name: "panel2", templateElements: pair }],
      [{ type: "same-line-composite", name: "composite1" }]
    ];
    elementsList.forEach(elements => {
      const json = createPagesJSON(6);
      json.pages[4].elements = elements;
      const creator = new CreatorTester();
      creator.JSON = json;
      createAllAdorners(creator);
      expect(creator.survey.calculatedWidthMode).toBe("responsive");
      expect(creator.survey.pages[4].rows).toHaveLength(1);
    });

    const creator = new CreatorTester();
    creator.JSON = createPagesJSON(6);
    createAllAdorners(creator);
    expect(creator.survey.calculatedWidthMode).toBe("static");
  } finally {
    ComponentCollection.Instance.clear();
  }
});

test("Page content lazy rendering: removing an element from a row normalises the next element on a page that is not rendered", (): any => {
  const removers: Array<(creator: CreatorTester, page: any, element: any) => void> = [
    (creator, page, element) => creator.deleteElement(element),
    (creator, page, element) => page.removeElement(element),
    (creator, page, element) => element.delete()
  ];
  removers.forEach(remove => {
    const json = createPagesJSON(6);
    json.pages[2].elements = [
      { type: "text", name: "x" },
      { type: "text", name: "y" },
      { type: "text", name: "z", startWithNewLine: false }
    ];
    const creator = new CreatorTester();
    creator.JSON = json;
    createAllAdorners(creator);
    const page = creator.survey.pages[2];
    remove(creator, page, page.getElementByName("y"));
    expect(creator.survey.toJSON().pages[2]).toEqual({
      name: "page3",
      elements: [{ type: "text", name: "x" }, { type: "text", name: "z" }]
    });
    expect(getRowNames(page)).toEqual([["x"], ["z"]]);
  });
});

test("Page content lazy rendering: startWithNewLine set on a pending page gets the rows right", (): any => {
  const { page, adorner } = createPendingPage();
  page.addNewQuestion("text", "added");
  page.elements[1].startWithNewLine = false;
  expect(page.rows).toHaveLength(0);
  adorner.needRenderContent = true;
  expect(getRowNames(page)).toEqual([["q4", "added"]]);
});

test("Page content lazy rendering: gridLayoutColumns stay in the JSON of a page that is not rendered", (): any => {
  const createGridJSON = (gridLayoutEnabled: boolean): any => {
    const json: any = createPagesJSON(6);
    json.gridLayoutEnabled = gridLayoutEnabled;
    json.pages[2].gridLayoutColumns = [{ width: 40 }, { width: 60 }];
    json.pages[2].elements = [
      { type: "text", name: "x", colSpan: 2 },
      {
        type: "panel", name: "panel1", colSpan: 2,
        gridLayoutColumns: [{ width: 25 }, { width: 75 }],
        elements: [{ type: "text", name: "y", colSpan: 2 }]
      }
    ];
    return json;
  };
  const expectColumns = (creator: CreatorTester): void => {
    const page = creator.JSON.pages[2];
    expect(page.gridLayoutColumns.map(col => col.width)).toEqual([40, 60]);
    expect(page.elements[1].gridLayoutColumns.map(col => col.width)).toEqual([25, 75]);
  };

  const creator = new CreatorTester();
  creator.JSON = createGridJSON(true);
  createAllAdorners(creator);
  expectColumns(creator);

  const creatorGridOff = new CreatorTester();
  creatorGridOff.JSON = createGridJSON(false);
  createAllAdorners(creatorGridOff);
  creatorGridOff.survey.gridLayoutEnabled = true;
  expectColumns(creatorGridOff);
});

test("Page content lazy rendering: the rows exist before the subscribers of needRenderContent are notified", (): any => {
  const { page, adorner } = createPendingPage();
  let rowCount = -1;
  adorner.addOnPropertyValueChangedCallback((sender, options) => {
    if (options.name === "needRenderContent") {
      rowCount = page.rows.length;
    }
  });
  adorner.needRenderContent = true;
  expect(rowCount).toBe(1);
});

test("Page content lazy rendering: turning the content on for a stale adorner does nothing", (): any => {
  const detached = createAdornerWithoutContent().adorner;
  detached.detachFromUI();
  expect(() => { detached.needRenderContent = true; }).not.toThrow();

  const disposed = createAdornerWithoutContent().adorner;
  disposed.dispose();
  expect(() => { disposed.needRenderContent = true; }).not.toThrow();

  const { creator, adorner } = createAdornerWithoutContent();
  creator.JSON = createPagesJSON(6);
  expect(adorner.page.isDisposed).toBe(true);
  expect(() => { adorner.needRenderContent = true; }).not.toThrow();
});

test("Page adorner builds questionTypeSelectorModel on first read", (): any => {
  const creator = new CreatorTester();
  creator.JSON = createPagesJSON(2);
  const page = creator.survey.pages[1];
  const getSelectorSpy = vi.spyOn(creator, "getQuestionTypeSelectorModel");
  const pageAdorner = new PageAdorner(creator, page);
  expect(getSelectorSpy).toHaveBeenCalledTimes(0);
  expect(pageAdorner["questionTypeSelectorModelValue"]).toBeUndefined();

  const selectorModel = pageAdorner.questionTypeSelectorModel;
  expect(selectorModel).toBeTruthy();
  expect(getSelectorSpy).toHaveBeenCalledTimes(1);
  expect(pageAdorner.questionTypeSelectorModel).toBe(selectorModel);
  expect(getSelectorSpy).toHaveBeenCalledTimes(1);

  const popupViewModel = new PopupDropdownViewModel(selectorModel.popupModel); // need for popupModel.onShow
  selectorModel.popupModel.show();
  const listModel = selectorModel.popupModel.contentComponentData.model as ListModel;
  listModel.onItemClick(listModel.actions.filter(action => action.id === "comment")[0]);
  expect(page.elements).toHaveLength(2);
  expect(page.elements[1].getType()).toBe("comment");

  pageAdorner.dispose();
  expect(selectorModel.isDisposed).toBe(true);
  popupViewModel.dispose();
  getSelectorSpy.mockRestore();
});

test("Page adorner fires onPageGetFooterActions when footerActionsBar is first read", (): any => {
  const creator = new CreatorTester();
  creator.JSON = createPagesJSON(2);
  let counter = 0;
  creator.onPageGetFooterActions.add((sender, options) => {
    counter++;
    expect(options.page).toBe(creator.survey.pages[0]);
  });
  const pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  expect(counter).toBe(0);
  expect(pageAdorner["_footerActionsBar"]).toBeUndefined();
  const footer = pageAdorner.footerActionsBar;
  expect(counter).toBe(1);
  expect(pageAdorner.footerActionsBar).toBe(footer);
  expect(counter).toBe(1);
});

test("Page adorner disposes its footerActionsBar if it was built", (): any => {
  const creator = new CreatorTester();
  creator.JSON = createPagesJSON(2);
  const pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  const footer = pageAdorner.footerActionsBar;
  const addQuestionAction = footer.actions[0];
  expect(footer.isDisposed).toBe(false);
  pageAdorner.dispose();
  expect(footer.isDisposed).toBe(true);
  expect(addQuestionAction.isDisposed).toBe(true);

  // the footer was never read: nothing to dispose, and dispose does not build it
  const notRenderedAdorner = new PageAdorner(creator, creator.survey.pages[1]);
  notRenderedAdorner.dispose();
  expect(notRenderedAdorner["_footerActionsBar"]).toBeUndefined();
});

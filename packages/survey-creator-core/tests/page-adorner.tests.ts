import { PageAdorner } from "../src/components/page";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { settings } from "../src/creator-settings";
import { DropIndicatorPosition } from "../src/drag-drop-enums";
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

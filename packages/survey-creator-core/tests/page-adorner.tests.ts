import { PageAdorner } from "../src/components/page";
import { TabDesignerViewModel } from "../src/components/tabs/designer";
import { settings } from "../src/creator-settings";
import { CreatorTester } from "./creator-tester";

test("Check page adorner css on drag over", (): any => {
  const creator = new CreatorTester();
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
  pageAdorner.dragTypeOverMe = true as any;
  expect(pageAdorner.css).toBe("svc-question__content--drag-over-inside");
  pageAdorner.showPlaceholder = false;
  expect(pageAdorner.css).toBe("svc-page--drag-over-empty");
  settings.designer.showAddQuestionButton = false;
  expect(pageAdorner.css).toBe("svc-page--drag-over-empty svc-page--drag-over-empty-no-add-button");
  settings.designer.showAddQuestionButton = true;
});

test("Check page adorner css on drag over", (): any => {
  const creator = new CreatorTester();
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
  pageAdorner.dragTypeOverMe = true as any;
  expect(pageAdorner.css).toBe("svc-question__content--drag-over-inside");
  pageAdorner.showPlaceholder = false;
  expect(pageAdorner.css).toBe("svc-page--drag-over-empty");
  settings.designer.showAddQuestionButton = false;
  expect(pageAdorner.css).toBe("svc-page--drag-over-empty svc-page--drag-over-empty-no-add-button");
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
  const rowElement = document.createElement("div");
  rowElement.className = "svc-row";
  const footerElement = document.createElement("div");
  footerElement.className = "svc-page__footer";
  bodyElement.appendChild(descriptionElement);
  bodyElement.appendChild(rowElement);
  rootElement.appendChild(bodyElement);
  rootElement.appendChild(footerElement);
  pageAdorner.rootElement = rootElement;

  expect(pageAdorner["getInnerAnimatedElements"]()).toEqual([rowElement, footerElement]);
  expect(animationOptions.getAnimatedElement()).toBe(descriptionElement);
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
  expect(pageAdorner.getActionById("settings").visible).toBeTruthy();
  expect(pageAdornerGhost.getActionById("settings").visible).toBeFalsy();
});

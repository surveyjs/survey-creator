import { PageAdorner } from "../src/components/page";
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

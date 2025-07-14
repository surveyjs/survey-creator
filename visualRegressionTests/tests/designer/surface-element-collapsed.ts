import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getPropertyGridCategory, generalGroupName, getListItemByText, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByAriaLabel, setAllowEditSurveyTitle, setShowAddQuestionButton, setExpandCollapseButtonVisibility, setShowToolbox, setShowSidebar, getSurveyListItemByText, upArrowImageLink, setAllowZoom } from "../../helper";

const title = "Surface question collapsed";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Question adorner - collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        },
        {
          "type": "checkbox",
          "name": "question1",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ],
          "choicesByUrl": {
            "url": "#"
          }
        },
        {
          "type": "image",
          "name": "question2",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
        },
        {
          "type": "html",
          "name": "question3",
          "html": "HTML<br>\nLines"
        }
      ]
    };
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    const qCollapseButton = Selector(".svc-question__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-adorner-collapsed.png", qContent.nth(0), t, comparer);
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("panel-adorner-collapsed.png", qContent.nth(1), t, comparer);
    await t.click(qContent.nth(2), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-carry-forward-collapsed.png", qContent.nth(2), t, comparer);
    await t.click(qContent.nth(3), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-image-collapsed.png", qContent.nth(3), t, comparer);
    await t.click(qContent.nth(4), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-html-collapsed.png", qContent.nth(4), t, comparer);

    await t.click(Selector(".svc-tabbed-menu-item").withText("Preview"));
    await t.click(Selector(".svc-tabbed-menu-item").withText("Designer"));
    await takeElementScreenshot("question-adorner-collapsed-first-render.png", qContent.nth(0), t, comparer);
    await takeElementScreenshot("panel-adorner-collapsed-first-render.png", qContent.nth(1), t, comparer);
  });
});

test("Question adorner - no title collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1",
              "titleLocation": "hidden"
            },
            {
              "type": "paneldynamic",
              "name": "question4",
              "titleLocation": "hidden"
            },
            {
              "type": "html",
              "name": "question2"
            },
            {
              "type": "image",
              "name": "question3",
              "imageFit": "cover",
              "imageHeight": "auto",
              "imageWidth": "100%"
            }
          ]
        }
      ]
    };
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    const qCollapseButton = Selector(".svc-question__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-adorner-no-title-collapsed.png", qContent.nth(0), t, comparer);
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("panel-dynamic-adorner-no-title-collapsed.png", qContent.nth(1), t, comparer);
    await t.click(qContent.nth(2), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-html-adorner-no-title-collapsed.png", qContent.nth(2), t, comparer);
    await t.click(qContent.nth(3), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-image-adorner-no-title-collapsed.png", qContent.nth(3), t, comparer);
  });
});

test("Page adorner - collapsed", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1000, 600);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "expression",
          name: "question1"
        }
      ]
    };
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-page__content");
    const qCollapseButton = Selector(".svc-page__content #collapse");
    await t.hover(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.expect(qContent.nth(0).hasClass("svc-hovered")).ok();
    await takeElementScreenshot("page-adorner-expanded.png", ".svc-tab-designer_content", t, comparer);
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await resetHoverToCreator(t);
    await takeElementScreenshot("page-adorner-collapsed-selected.png", ".svc-tab-designer_content", t, comparer);
    await t.click(".svc-tab-designer_content", { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("page-adorner-collapsed.png", ".svc-tab-designer_content", t, comparer);
  });
});

test("Question adorner - collapsed mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(551, 1080);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-question__content");
    const qCollapseButton = Selector(".svc-question__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("question-adorner-collapsed-mobile.png", qContent.nth(0), t, comparer);
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await takeElementScreenshot("panel-adorner-collapsed-mobile.png", qContent.nth(1), t, comparer);

    await t.click(Selector(".svc-creator"), { offsetX: 1, offsetY: 1 });
    await takeElementScreenshot("question-adorner-collapsed-unselected.png", qContent.nth(0), t, comparer);
    await takeElementScreenshot("panel-adorner-collapsed-unselected.png", qContent.nth(1), t, comparer);
  });
});

test("Page adorner - collapsed mobile", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(551, 1080);
    const json = {
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        },
        {
          "name": "page3",
          "elements": [
            {
              "type": "text",
              "name": "question3"
            }
          ]
        }
      ]
    };
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    const qContent = Selector(".svc-page__content");
    const qCollapseButton = Selector(".svc-page__content #collapse");
    await t.click(qContent.nth(0), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible());
    await t.click(qContent.nth(1), { offsetX: 10, offsetY: 10 });
    await t.click(qCollapseButton.filterVisible().nth(1));
    await resetHoverToCreator(t, 0, -1);
    await takeElementScreenshot("page-adorner-collapsed-mobile.png", ".svc-tab-designer_content", t, comparer);
  });
});

test("Collapse all and expand all toolbar", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(912, 1080);
    const json = {
      showQuestionNumbers: "on",
      elements: [
        {
          type: "text",
          name: "question1"
        },
        {
          type: "panel",
          name: "panel1"
        }
      ]
    };
    await setShowToolbox(false);
    await setAllowEditSurveyTitle(false);
    await setShowAddQuestionButton(false);
    await setShowSidebar(false);
    await setExpandCollapseButtonVisibility("onhover");
    await setJSON(json);
    await t.click("#lockQuestions");
    await t.hover("#collapseAll");
    await takeElementScreenshot("design-surface-toolbar.png", Selector(".svc-tab-designer"), t, comparer);

    await setAllowZoom(true);
    await t.hover("#zoomOut");
    await takeElementScreenshot("design-surface-toolbar-with-zoom.png", Selector(".svc-tab-designer__surface-toolbar"), t, comparer);
  });
});
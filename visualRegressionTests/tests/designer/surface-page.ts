import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, takeElementScreenshot, addQuestionByAddQuestionButton, wrapVisualTest, getTabbedMenuItemByText, creatorTabPreviewName, creatorTabDesignerName, resetHoverToCreator, getPropertyGridCategory, generalGroupName, getListItemByText, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled, getToolboxItemByAriaLabel, setAllowEditSurveyTitle, setShowAddQuestionButton, setExpandCollapseButtonVisibility, setShowToolbox, setShowSidebar, getSurveyListItemByText, upArrowImageLink, setAllowZoom } from "../../helper";

const title = "Page surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Page borders", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1232, 900);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        }
      ]
    };
    await setShowToolbox(false);
    await setAllowEditSurveyTitle(false);
    await setJSON(json);
    await setShowSidebar(false);
    await ClientFunction(() => {
      (<any>window).creator.toolbox.isCompact = true;
    })();
    const designerTabContent = Selector(".svc-tab-designer");
    const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");

    await takeElementScreenshot("page-content.png", designerTabContent, t, comparer);
    await t.hover(pageContent, { offsetX: 5, offsetY: 5 }).wait(300);
    await takeElementScreenshot("page-content-hover.png", designerTabContent, t, comparer);

    await t.hover(pageContent.find(".svc-element__add-new-question"));
    await takeElementScreenshot("question-add-hover.png", pageContent, t, comparer);

    await t.click(pageContent, { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-content-click.png", designerTabContent, t, comparer);

    await t.click(pageContent.find(".sd-page__title"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-title-click.png", designerTabContent, t, comparer);

  });
});

test("Page placeholder without elements", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(770, 900);
    await setJSON({
      showQuestionNumbers: "on",
      "pages": [
        {
          "name": "page1",
          "title": "Page1"
        }
      ]
    });

    await takeElementScreenshot("page-placeholder-without-elements.png", Selector(".svc-page"), t, comparer);
  });
});

test("Check page selection when width mode is responsive", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t
      .resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      widthMode: "responsive",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "text",
            }
          ]
        }
      ]
    };
    await setAllowEditSurveyTitle(false);
    await setJSON(json);
    const rootSelector = Selector(".svc-tab-designer");
    await t.click(".svc-page", { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-selected-responsive.png", rootSelector, t, comparer);
  });
});

test("Page hidden header and top toolbar", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t
      .resizeWindow(1920, 1080);
    const json = {
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "pages": [
        {
          "name": "page1",
          "elements": [
            {
              "type": "text",
              "name": "question1"
            }
          ]
        }
      ]
    };

    await ClientFunction((json) => {
      (window as any).Survey.settings.designMode.showEmptyTitles = false;
      (window as any).updateCreatorModel({ expandCollapseButtonVisibility: "never" }, json);
    })(json);

    const rootSelector = Selector(".svc-tab-designer");
    await t.click(".svc-page", { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-selected-hidden-header.png", rootSelector, t, comparer);
  });
});

test("Check page button states", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await ClientFunction(() => {
      window["creator"].onDefineElementMenuItems.add((_, options) => {
        if (!options.obj["isPage"]) return;
        options.items.push({
          id: "duplicate2",
          title: "Duplicate",
          enabled: false,
          iconSize: 16,
          iconName: "icon-copy-16x16",
          action: () => { }
        });
      });
    })();
    await setJSON({
      showQuestionNumbers: "on",
      "logoPosition": "right",
      "elements": [
        {
          type: "text",
          name: "q1",
          title: "Question Title"
        }
      ]
    });
    const button = Selector(".svc-page-toolbar__item");
    const buttonDisabled = Selector(".svc-page-toolbar__item:disabled");
    await t.click(Selector(".svc-page__content"), { offsetX: 5, offsetY: 5 });
    await takeElementScreenshot("page-button.png", button, t, comparer);
    await t.hover(button);
    await takeElementScreenshot("page-button-hover.png", button, t, comparer);
    await t.pressKey("tab");
    await takeElementScreenshot("page-button-focused.png", button, t, comparer);
    await takeElementScreenshot("page-button-disabled.png", buttonDisabled, t, comparer);
    await t.hover(buttonDisabled);
    await takeElementScreenshot("page-button-disabled-hover.png", buttonDisabled, t, comparer);
    await ClientFunction(() => {
      const page = window["creator"].survey.getPageByName("page1");
      const adorner = window["SurveyCreatorCore"].PageAdorner.GetAdorner(page);
      adorner.actionContainer.actions[0].pressed = true;
      adorner.actionContainer.actions[2].pressed = true;
    })();
    await takeElementScreenshot("page-button-pressed.png", button, t, comparer);
    await takeElementScreenshot("page-button-pressed-disabled.png", buttonDisabled, t, comparer);
  });
});

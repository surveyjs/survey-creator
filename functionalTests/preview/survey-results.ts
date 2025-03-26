import { url, getTabbedMenuItemByText, setJSON, creatorTabPreviewName } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Preview tab";

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

const json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "matrixdynamic",
          "name": "Question1",
          "defaultValue": [
            {
              "Column 1": [
                1
              ]
            },
            {
              "Column 1": [
                2
              ]
            }
          ],
          "columns": [
            {
              "name": "Column 1"
            }
          ],
          "choices": [
            1,
            2
          ],
          "cellType": "checkbox"
        }
      ]
    }
  ]
};

test("Test survey results table expand/collapse", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"))
    .expect(Selector("h3").withText("Thank you for completing the survey").visible).ok();

  const tableRows = Selector(".svd-test-results__table table tbody tr");

  await t
    .click(tableRows.nth(0))
    .expect(Selector("td span").withText("row 1").visible).ok()
    .click(tableRows.nth(1))
    .expect(Selector("td span").withText("Column 1").visible).ok()
    .click(tableRows.nth(2))
    .expect(Selector("td span").withText("Choice").visible).ok()
    .click(tableRows.nth(0))
    .expect(Selector("td span").withText("row 1").visible).notOk();
});

test("Check dropdowns inside survey are hided when scrolling container", async (t) => {
  await t.resizeWindow(1920, 800);
  await setJSON({
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "dropdown",
            "name": "question3",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "dropdown",
            "name": "question2",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "dropdown",
            "name": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          },
          {
            "type": "dropdown",
            "name": "question4",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  });

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-dropdown__filter-string-input"))
    .expect(Selector(".sv-popup__container").filterVisible().exists).ok()
    .scroll(Selector(".sd-root-modern.sd-root-modern--full-container > .sv-scroll__wrapper > .sv-scroll__scroller"), "bottom")
    .expect(Selector(".sv-popup__container").filterVisible().exists).notOk();
});

test("Test survey results not visible on mobile", async (t) => {
  await setJSON(json);

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"))
    .expect(Selector("h3").withText("Thank you for completing the survey").visible).ok();

  const tableRows = Selector(".svd-test-results__table");

  await t
    .expect(tableRows.visible).ok()
    .resizeWindow(500, 800)
    .expect(tableRows.exists).notOk()
    .expect(tableRows.visible).notOk();
});

test("Test markdown is processed in result question titles", async (t) => {
  await setJSON(json);
  await ClientFunction(() => {
    window["creator"].onSurveyInstanceCreated.add((s, o) => {
      if (o.reason == "preview") {
        o.survey.onTextMarkdown.add(function (survey, options) {
          options.html = "Markdown converted text";
        });
      }
    });
  })();

  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(Selector(".sd-navigation__complete-btn"))
    .expect(Selector("h3").withText("Thank you for completing the survey").visible).ok();

  const questionTitleProcessed = Selector(".svd-test-results__table td .sv-string-viewer").withText("Markdown converted text");
  await t.expect(questionTitleProcessed.visible).ok();
});

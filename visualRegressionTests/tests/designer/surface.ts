import { ClientFunction, Selector } from "testcafe";
import { url, setJSON, checkElementScreenshot, addQuestionByAddQuestionButton } from "../../helper";

const title = "Designer surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

test("Check section", async (t) => {
  await t.resizeWindow(1920, 1080);

  const surveyJSON = {
    "showQuestionNumbers": "off",
    "widthMode": "static",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            title: "Question 1",
          },
          {
            "type": "text",
            "name": "question2",
            title: "Question 2",
            startWithNewLine: false,
          },
        ]
      }
    ]
  };

  await setJSON(surveyJSON);
  await checkElementScreenshot("questions-in-one-row.png", Selector(".svc-row .sd-row"), t);
});

test("Matrix column editor", async (t) => {
  await t.resizeWindow(1920, 900);
  await addQuestionByAddQuestionButton(t, "Matrix (multiple choice)");
  const row1Column1Cell = Selector(".sv_matrix_row").nth(0).find(".svc-matrix-cell").filterVisible().nth(1);
  const editColumnButton = Selector(".svc-matrix-cell__question-controls-button").filterVisible();

  const showControl = ClientFunction(() => {
    const el: any = document.querySelectorAll("td:nth-child(2) .svc-matrix-cell .svc-matrix-cell__question-controls")[0];
    el.style.display = "block";
  });

  await t
    .expect(Selector(".svc-question__content").exists).ok()
    .hover(row1Column1Cell, { speed: 0.5 });

  // TODO: remove this line after TestCafe implements workig hover
  await showControl();

  await t.click(editColumnButton);

  await checkElementScreenshot("matrix-cell-edit.png", Selector(".svc-matrix-cell__popup .sv-popup__container"), t);
});

test("Choices (Checkbox): Layout", async (t) => {
  await t.resizeWindow(2560, 1440);

  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            "type": "checkbox",
            "name": "question1",
            "choices": [
              "item1",
              "item2"
            ],
            "hasOther": true,
            "colCount": 2
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const QRoot = Selector(".svc-question__adorner").filterVisible();
  await checkElementScreenshot("surface-checkbox-layout.png", QRoot, t);
});

test("Placeholder", async (t) => {
  await t.resizeWindow(1920, 900);
  const designerTabContent = Selector(".svc-tab-designer");

  await checkElementScreenshot("surface-placeholder.png", designerTabContent, t);
});

test("Page and question borders", async (t) => {
  await t.resizeWindow(1920, 900);
  const json = {
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
  await setJSON(json);
  const designerTabContent = Selector(".svc-tab-designer");
  const pageContent = Selector(".svc-page__content:not(.svc-page__content--new)");
  const qContent = Selector(".svc-question__content");
  await checkElementScreenshot("page-content.png", designerTabContent, t);
  await checkElementScreenshot("question-content.png", pageContent, t);
  await t.hover(pageContent, { offsetX: 5, offsetY: 5 }).wait(300);
  await checkElementScreenshot("page-content-hover.png", designerTabContent, t);
  await t.hover(qContent, { offsetX: 5, offsetY: 5 }).wait(300);
  await checkElementScreenshot("question-content-hover.png", pageContent, t);
  await t.hover(pageContent.find(".svc-page__add-new-question"));
  await checkElementScreenshot("question-add-hover.png", pageContent, t);
  await t.click(qContent, { offsetX: 5, offsetY: 5 });
  await checkElementScreenshot("question-content-click.png", pageContent, t);
  await t.click(pageContent, { offsetX: 5, offsetY: 5 });
  await checkElementScreenshot("page-content-click.png", designerTabContent, t);
  await t.click(pageContent.find(".sd-page__title"), { offsetX: 5, offsetY: 5 });
  await checkElementScreenshot("page-title-click.png", designerTabContent, t);

});
/*
test("Check question width and position", async (t) => {
  await t.resizeWindow(1920, 1080);

  const surveyJSON = {
    "showQuestionNumbers": "off",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            title: "Question 1",
          },
        ]
      }
    ]
  };

  await setJSON(surveyJSON);
  await checkElementScreenshot("question-in-center", Selector(".svc-tab-designer"), t);
});
*/
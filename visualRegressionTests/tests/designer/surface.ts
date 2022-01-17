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

test.only("Check question width and position", async (t) => {
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
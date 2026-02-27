import { url, compareScreenshot, test, setJSON, expect } from "./helper";

const title = "Small (thin) questions on design surface";

test.describe(title, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${url}`);
  });

  const json = {
    showQuestionNumbers: true,
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "ranking",
            "name": "question1",
            "minWidth": "100px",
            "maxWidth": "220px",
            "choices": [
              "Item 1",
              "ItemItemItemItemItemItemItemItemItemItemItemItemItemItemItem2",
              "Item 3"
            ]
          },
          {
            "type": "imagepicker",
            "name": "question2",
            "visible": false,
            "visibleIf": "{panel.product-type} = 'T-Shirt'",
            "width": "50%",
            "minWidth": "256px",
            "maxWidth": "350px",
            "titleLocation": "hidden",
            "defaultValue": "Item 3",
            "choices": [
              {
                "value": "Item 1",
                "text": "",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFFJREFUeNrsz0ENAAAIBCC11fUvZgofbtCATlKfTT0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG8FGAB8PgErFl1dKwAAAABJRU5ErkJggg=="
              },
              {
                "value": "Item 2",
                "text": "",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFRJREFUeNrszzENADAIADCYKQwhEIlTwUHSOmh2TVz24jgBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBfV+AAQCkdAHL3L3OHgAAAABJRU5ErkJggg=="
              },
              {
                "value": "Item 3",
                "text": "",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFRJREFUeNrszzENADAIADCYKpTgXwfXVHCQtA6aUx2XvThOQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYN8XYAAk3gIItMLpbQAAAABJRU5ErkJggg=="
              },
              {
                "value": "Item 4",
                "text": "",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFRJREFUeNrszzENADAIADCYCLShE4VTwUHSOmjWdFz24jgBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBfV+AAQCJnAGgQEs8ogAAAABJRU5ErkJggg=="
              },
              {
                "value": "Item 5",
                "text": "",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFNJREFUeNrszzERADAIBLCn/v1hhgEH3blLHKSmc9pLBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT+VoABAEgyAlNQjV39AAAAAElFTkSuQmCC"
              },
              {
                "value": "Item 6",
                "text": "",
                "imageLink": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFFJREFUeNrsz0ENAAAIBCC1f8lrYgofbtCATlKfTT0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG8FGAB73wMjMVeD8AAAAABJRU5ErkJggg=="
              }
            ],
            "imageHeight": 64,
            "imageWidth": 64,
            "minImageWidth": "",
            "minImageHeight": "",
            "maxImageWidth": "",
            "maxImageHeight": ""
          },
          {
            "type": "dropdown",
            "name": "question3",
            "visibleIf": "{panel.product-type} = 'Sneakers'",
            "width": "20%",
            "minWidth": "128px",
            "maxWidth": "150px",
            "titleLocation": "hidden",
            "description": "Size",
            "setValueIf": "{panel.product-type} = 'Sneakers'",
            "setValueExpression": "'8.5'",
            "choices": [
              "6",
              "6.5",
              "7",
              "7.5",
              "8",
              "8.5",
              "9",
              "9.5",
              "10",
              "10.5",
              "11"
            ],
            "placeholder": "",
            "allowClear": false
          },
          {
            "type": "dropdown",
            "name": "question4",
            "width": "30%",
            "minWidth": "144px",
            "maxWidth": "190px",
            "titleLocation": "hidden",
            "description": "Quantity",
            "setValueIf": "{panel.product-type} notempty",
            "setValueExpression": "'1'",
            "choices": [
              1,
              2,
              3,
              4,
              5
            ],
            "placeholder": "",
            "allowClear": false
          },
          {
            "type": "multipletext",
            "name": "question5",
            "width": "65%",
            "minWidth": "256px",
            "maxWidth": "300px",
            "items": [
              {
                "name": "date",
                "inputType": "date",
                "title": "Date of birth"
              }
            ]
          }
        ]
      }
    ],
    "widthMode": "static",
    "width": "860"
  };

  test("Small questions should look good - https://github.com/surveyjs/survey-creator/issues/4862", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 4080 });
    await setJSON(page, json);
    await page.waitForLoadState("load");

    let question = page.locator("div[data-name=question1]");
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question1]"), "small-rating-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question1]")).toBeVisible();
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question1]"), "small-rating-selected.png");

    question = page.locator("div[data-name=question2]");
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question2]"), "small-image-picker-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question2]")).toBeVisible();
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question2]"), "small-image-picker-selected.png");

    question = page.locator("div[data-name=question3]");
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question3]"), "small-dropdown-1-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question3]")).toBeVisible();
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question3]"), "small-dropdown-1-selected.png");

    question = page.locator("div[data-name=question4]");
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question4]"), "small-dropdown-2-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question4]")).toBeVisible();
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question4]"), "small-dropdown-2-selected.png");

    question = page.locator("div[data-name=question5]");
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question5]"), "small-multiple-text-not-selected.png");

    await question.click({ position: { x: 0, y: 40 } });
    await expect(page.locator(".svc-question__content--selected div[data-name=question5]")).toBeVisible();
    await compareScreenshot(page, page.locator("div[data-sv-drop-target-survey-element=question5]"), "small-multiple-text-selected.png");
  });
});

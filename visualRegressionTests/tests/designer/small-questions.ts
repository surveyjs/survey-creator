import { Selector } from "testcafe";
import { url, setJSON, wrapVisualTest, takeElementScreenshot } from "../../helper";

const title = "Small (thin) questions on design surface";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
});

const json = {
  showQuestionNumbers: "on",
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
          "defaultValue": "https://api.surveyjs.io/private/Surveys/files?name=facda824-2734-478c-90ac-db94ef35c28a",
          "choices": [
            {
              "value": "https://api.surveyjs.io/private/Surveys/files?name=e51dcbdf-2f8b-4770-828b-610583587e3f",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a9c2e950-4066-4263-bf02-f68f5ba31e62"
            },
            {
              "value": "https://api.surveyjs.io/private/Surveys/files?name=4446e7d2-9a9b-45af-baae-bc2773331ae0",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cc6a36e0-e332-4c46-8637-1e15f1eef229"
            },
            {
              "value": "https://api.surveyjs.io/private/Surveys/files?name=facda824-2734-478c-90ac-db94ef35c28a",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b44a0a43-7f35-42eb-818e-269881047632"
            },
            {
              "value": "https://api.surveyjs.io/private/Surveys/files?name=9995584c-2cd0-4629-bae8-83deb90de0f8",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=bf448beb-e73b-4350-a008-d9bc57e9795b"
            },
            {
              "value": "https://api.surveyjs.io/private/Surveys/files?name=d8da6e40-a7e3-423a-b32b-fa18dc9222d4",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a3bc912e-7925-45c7-bf27-4757743e0a60"
            },
            {
              "value": "https://api.surveyjs.io/private/Surveys/files?name=60840717-c76b-4eb9-b569-7239daa93616",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=26138806-03ee-4509-a044-fd876ffd8b6c"
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

test("Small questions should look good - https://github.com/surveyjs/survey-creator/issues/4862", async (t) => {
  await wrapVisualTest(t, async (t, comparer) => {
    await t.resizeWindow(1920, 1080);
    await setJSON(json);

    let question = Selector("div[data-name=question1]");
    await takeElementScreenshot("small-rating-not-selected.png", Selector("div[data-sv-drop-target-survey-element=question1]"), t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question1]").visible).ok();
    await takeElementScreenshot("small-rating-selected.png", Selector("div[data-sv-drop-target-survey-element=question1]"), t, comparer);

    question = Selector("div[data-name=question2]");
    await takeElementScreenshot("small-image-picker-not-selected.png", Selector("div[data-sv-drop-target-survey-element=question2]"), t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question2]").visible).ok();
    await takeElementScreenshot("small-image-picker-selected.png", Selector("div[data-sv-drop-target-survey-element=question2]"), t, comparer);

    question = Selector("div[data-name=question3]");
    await takeElementScreenshot("small-dropdown-1-not-selected.png", Selector("div[data-sv-drop-target-survey-element=question3]"), t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question3]").visible).ok();
    await takeElementScreenshot("small-dropdown-1-selected.png", Selector("div[data-sv-drop-target-survey-element=question3]"), t, comparer);

    question = Selector("div[data-name=question4]");
    await takeElementScreenshot("small-dropdown-2-not-selected.png", Selector("div[data-sv-drop-target-survey-element=question4]"), t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question4]").visible).ok();
    await takeElementScreenshot("small-dropdown-2-selected.png", Selector("div[data-sv-drop-target-survey-element=question4]"), t, comparer);

    question = Selector("div[data-name=question5]");
    await takeElementScreenshot("small-multiple-text-not-selected.png", Selector("div[data-sv-drop-target-survey-element=question5]"), t, comparer);

    await t
      .click(question, { offsetY: 40 })
      .expect(Selector(".svc-question__content--selected div[data-name=question5]").visible).ok();
    await takeElementScreenshot("small-multiple-text-selected.png", Selector("div[data-sv-drop-target-survey-element=question5]"), t, comparer);
  });
});

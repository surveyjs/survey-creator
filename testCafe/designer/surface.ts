import { url, setJSON, collapseButtonSelector, getTabbedMenuItemByText, creatorTabPreviewName, explicitErrorHandler, generalGroupName, getPropertyGridCategory } from "../helper";
import { Selector } from "testcafe";
const title = "Designer surface";

fixture`${title}`.page`${url}`;

test("Image question", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "image",
            "name": "question1",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
          }
        ]
      }
    ]
  };
  const imageQuestionSelector = Selector(".sd-image__image");
  await setJSON(json);

  await t
    .resizeWindow(1280, 900)
    .expect(imageQuestionSelector.exists).ok()
    .expect(imageQuestionSelector.classNames).contains("sd-image__image--adaptive")
    .expect(imageQuestionSelector.clientWidth).eql(540)
    .expect(imageQuestionSelector.clientHeight).eql(359)

    .click(imageQuestionSelector)
    .click(getPropertyGridCategory(generalGroupName))
    .expect(Selector("div [data-name=\"imageHeight\"] input").value).eql("")
    .expect(Selector("div [data-name=\"imageHeight\"] input").getAttribute("placeholder")).eql("auto")
    .expect(Selector("div [data-name=\"imageWidth\"] input").value).eql("")
    .expect(Selector("div [data-name=\"imageWidth\"] input").getAttribute("placeholder")).eql("auto")

    .click(collapseButtonSelector)
    .expect(imageQuestionSelector.exists).ok()
    .expect(imageQuestionSelector.classNames).contains("sd-image__image--adaptive")
    .expect(imageQuestionSelector.clientWidth).eql(540)
    .expect(imageQuestionSelector.clientHeight).eql(359)

    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(imageQuestionSelector.exists).ok()
    .expect(imageQuestionSelector.classNames).contains("sd-image__image--adaptive")
    .expect(imageQuestionSelector.clientWidth).eql(640)
    .expect(imageQuestionSelector.clientHeight).eql(426);
});

test("Check scrollbar is not appear when width mode is responsive", async (t) => {
  const json = {
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
  await setJSON(json);
  const rootSelector = Selector(".svc-tab-designer");
  const verticalScrollWidth = 12;
  const rootOffsetWidth = await rootSelector.offsetWidth;
  const rootScrollWidth = await rootSelector.scrollWidth;
  await t
    .resizeWindow(1920, 1080)
    .expect(rootOffsetWidth - rootScrollWidth).lte(verticalScrollWidth);
});

test("Check imagepicker add/delete items not raises errors and works fine: #3203", async (t) => {
  await t.resizeWindow(1920, 1080);
  await setJSON({});
  await explicitErrorHandler();
  await t
    .click(".svc-toolbox__item--icon-imagepicker")
    .click(".spg-panel__title--expandable[aria-label='Choices']")
    .click(".spg-action-button[title='Add a choice']")
    .click(".spg-matrixdynamic tr:last-child .spg-action-button--danger")
    .expect(Selector(".sd-imagepicker").childElementCount).eql(6);
});
import { url, setJSON, collapseButtonSelector, getTabbedMenuItemByText, creatorTabPreviewName } from "../helper";
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
  await t
    .resizeWindow(1920, 1080)
    .expect(await rootSelector.scrollWidth === await rootSelector.offsetWidth).ok();
});
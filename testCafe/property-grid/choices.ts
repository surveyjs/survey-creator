import { url, setJSON, getJSON } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "Property Grid";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Rename choice", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const expectedNewChoiceName = "newItem1";
  const question1 = Selector("[data-name=\"question1\"]");
  const choicesTab = Selector("h4").withExactText("Choice Options");
  const item1PGEditorInput = Selector("[data-name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).find("td").nth(1).find("input");

  await t
    .click(question1)
    .click(choicesTab)

    .typeText(item1PGEditorInput, expectedNewChoiceName, { replace: true, paste: true })
    .pressKey("enter");

  const resultJson = await getJSON();
  await t
    .expect(resultJson.pages[0].elements[0].choices[0]).eql(expectedNewChoiceName);
});

test("https://github.com/surveyjs/survey-library/issues/4170, responsiveness bug in property grid ", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);
  const question1 = Selector("[data-name=\"question1\"]");
  const choicesTabTitle = Selector("h4").withExactText("Choice Options");
  const choicesTabContent = choicesTabTitle.parent().nextSibling();
  const clearButton = choicesTabContent.find(".spg-action-button[title='Clear']");
  const addButton = choicesTabContent.find(".spg-action-button[title='Add new choice']");

  await t
    .click(question1)
    .click(choicesTabTitle)
    .click(clearButton)
    .click(addButton)
    .expect(clearButton.visible).ok();
});
test("Load choices by custom button in fast edit", async (t) => {
  const setCreatorHandler = ClientFunction(() => {
    window["creator"].onPropertyGridShowModal.add((sender, options) => {
      const editor = options.popupEditor;
      options.popupModel.footerToolbar.addAction({
        id: "fast-entry-custom",
        innerCss: "sv-popup__body-footer-item sv-popup__button",
        title: "Set Items",
        visibleIndex: 2,
        action: () => {
          editor.comment.value = "1|Item 1\n2|Item 2\ncustom-3|Item 3\n4|Item 4\n5|Item 5";
        }
      });
    });
  });
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "Item 1",
              "Item 2",
              "Item 3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);
  await setCreatorHandler();
  const question1 = Selector("[data-name=\"question1\"]");
  const choicesTabTitle = Selector("h4").withExactText("Choice Options");
  const choicesTabContent = choicesTabTitle.parent().nextSibling();
  const fastEntryButton = choicesTabContent.find(".spg-action-button[title='Edit']");
  const setItemsButton = choicesTabContent.find(".sv-popup__button[title='Set Items']");
  const applyButton = choicesTabContent.find(".sv-popup__button[title='Apply']");
  const item5Text = choicesTabContent.find("input[placeholder='custom-3']");

  await t
    .click(question1)
    .click(choicesTabTitle)
    .click(fastEntryButton)
    .click(setItemsButton)
    .click(applyButton)
    .expect(item5Text.exists).ok()
    .expect(item5Text.value).eql("Item 3");
});
test("Enter image link after choice added via property grid", async (t) => {
  const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "imagepicker",
            "name": "question1",
            "choices": [
              {
                "value": "Image 1",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                "value": "Image 2",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                "value": "Image 3",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                "value": "Image 4",
                "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ],
            "imageFit": "cover"
          }
        ]
      }
    ]
  };
  await setJSON(json);
  const question1 = Selector("[data-name=\"question1\"]");
  const choicesTabTitle = Selector("h4").withExactText("Choice Options");
  const choicesTabContent = choicesTabTitle.parent().nextSibling();
  const addButton = choicesTabContent.find(".spg-action-button[title='Add new choice']");
  const input = choicesTabContent.find("input").nth(14);

  await t
    .click(question1)
    .click(choicesTabTitle)
    .click(addButton)
    .expect(Selector(" .sd-imagepicker__no-image").exists).ok()
    .typeText(input, "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg")
    .expect(Selector(" .sd-imagepicker__no-image").exists).notOk();
});

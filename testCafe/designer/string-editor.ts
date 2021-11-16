import { setJSON, url } from "../helper";
import { ClientFunction, Selector } from "testcafe";
const title = "String Editor";

const json = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};

const json2 = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      description: "desc",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    }
  ]
};
const json3 = {
  questions: [
    {
      type: "checkbox",
      name: "string_editor",
      description: "desc",
      choices: [
        "item1",
        "item2",
        "item3"
      ]
    },
    {
      "type": "matrixdropdown",
      "name": "question1",
      "columns": [
        {
          "name": "Column 1"
        },
        {
          "name": "Column 2"
        },
        {
          "name": "Column 3"
        }
      ],
      "choices": [
        1,
        2,
        3,
        4,
        5
      ],
      "rows": [
        "Row 1",
        "Row 2"
      ]
    }
  ]
};

fixture`${title}`.page`${url}`.beforeEach(
  async (t) => {
    await t.maximizeWindow();
  }
);

test("Edit question title", async (t) => {
  await setJSON(json);
  const title = json.questions[0].name;
  const svStringSelector = Selector(".sv-string-editor").withText(title);
  const prefix = "prefix";

  await t
    .click(svStringSelector)
    .typeText(svStringSelector, prefix, { caretPos: 0 })
    .pressKey("esc")
    .expect(Selector("textarea[aria-label=Title]").value).eql("", "Question title in property grid still empty")

    .click(svStringSelector)
    .typeText(svStringSelector, prefix, { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector("textarea[aria-label=Title]").value).eql(prefix + title, "Question title in property grid is updated")

    .click(svStringSelector)
    .pressKey("ctrl+a")
    .pressKey("delete")
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText(title).visible).ok("Question title is reset to question name")

    .click(svStringSelector)
    .pressKey("ctrl+a")
    .pressKey("delete")
    .pressKey("enter")
    .expect(Selector(".sv-string-editor").withText(title).visible).ok("Question title still contains question name");
});

test("Check string editor visibility", async (t) => {
  await setJSON(json);

  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).notOk();

  const newJson = json;
  newJson.questions[0]["description"] = "Desc";
  await setJSON(newJson);
  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).ok();

  await ClientFunction((json) => {
    window["Survey"].Serializer.findProperty("question", "description").placeholder = "Q placeholder";
    window["creator"].JSON = json;
  })(json);
  await t.expect(Selector(".sd-question__description .svc-string-editor").visible).ok();
});

test("Check creator events on string editor", async (t) => {
  const msg = "Description length can not be greater than 10 characters";
  await ClientFunction((json, msg) => {
    window["creator"].JSON = json;
    window["creator"].onPropertyValidationCustomError.add(function (sender, options) {
      if(options.obj.isQuestion && options.propertyName == "description" && options.value.length > 10) {
        options.error = msg;
      }
    });
  })(json2, msg);

  const svStringSelector = Selector(".sv-string-editor").withText("desc");

  await t
    .click(svStringSelector)
    .typeText(svStringSelector, "1234567890", { caretPos: 0 })
    .pressKey("enter")
    .expect(Selector(".sd-question__description .svc-string-editor").withText(msg).visible).ok();
});

test("Check string editor not loosing focus and selects underlying items", async (t) => {
  await setJSON(json3);

  const svStringSelector = Selector(".sv-string-editor").withText("string_editor");
  const svItemSelector = Selector(".sv-string-editor").withText("item1");

  await t
    .click(svStringSelector)
    .expect(svStringSelector.focused).ok()
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .pressKey("tab")
    .expect(Selector(".sv-string-editor").withText("desc").focused).ok()
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .click(svItemSelector)
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("string_editor").visible).ok()
    .expect(svItemSelector.focused).ok()
    .click(Selector(".sv-string-editor").withText("Column 1"))
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 1").visible).ok()
    .click(Selector(".sv-string-editor").withText("Column 2"))
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 2").visible).ok()
    .pressKey("tab")
    .expect(Selector(".svc-side-bar__container-header .sv-action-bar-item__title").withText("Column 3").visible).ok();
});
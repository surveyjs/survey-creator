import { url, init } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = `adorners`;

fixture`General: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  await init();
});

test(`dropdown change item values`, async (t) => {
  await t
    .click(`[title~=Dropdown]`)
    .click(`.item_editable.item_draggable>span`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.item_editable.item_draggable>span`).innerText)
    .eql("puppies");

  const choicesTab = Selector(".svd_object_editor span").withText("Choices");
  const hasOtherCheckbox = Selector(".svd_object_editor")
    .find("span")
    .withText("Has other item");

  await t
    .maximizeWindow()
    .click(choicesTab)
    .click(hasOtherCheckbox)
    .expect(
      Selector(
        `.svda-select-items-editor .svda-select-items-collection+.item_editable > span:first-child`
      ).innerText
    )
    .eql("Other (describe)")
    .click(
      `.svda-select-items-editor .svda-select-items-collection+.item_editable > span:first-child`
    )
    .typeText(`input:focus`, `puppiesOther`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(
      Selector(
        `.svda-select-items-editor .svda-select-items-collection+.item_editable > span:first-child`
      ).innerText
    )
    .eql("puppiesOther");
  //.debug()
  //.wait(3000);
});

// test(`boolean change title`, async t => {
//   await t
//     .click(`[title~=Boolean]`)
//     .click(`.label_editable > span`)
//     .typeText(`input:focus`, `puppies`)
//     .click(`input:focus+span.svda-edit-button`)
//     .expect(Selector(`.label_editable > span`).innerText)
//     .eql("puppies");
// });

test(`text change title`, async (t) => {
  await t
    .click(`[title="Single Input"]`)
    .click(`.title_editable > span:nth-child(3)`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`h5.title_editable > span:nth-child(2)`).innerText)
    .eql("puppies");
});

test(`change page title`, async (t) => {
  const pageTitle = Selector(".svd_page")
    .find("span")
    .withText("Input page title here");
  await t
    .expect(pageTitle.visible)
    .ok()
    .click(pageTitle)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.svd_page .title_editable > span:nth-child(1)`).innerText)
    .eql("puppies");
});

test(`change page description`, async (t) => {
  const pageTitle = Selector(".svd_page")
    .find("span")
    .withText("Enter a page description");
  await t
    .expect(pageTitle.visible)
    .ok()
    .click(pageTitle)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(
      Selector(`.svd_page .description_editable > span:nth-child(1)`).innerText
    )
    .eql("puppies");
});

test(`change survey title`, async (t) => {
  const surveyTitle = Selector(".sv_header__text")
    .find("span")
    .withText("Input survey title here");
  await t
    .expect(surveyTitle.visible)
    .notOk()
    .click(`[title="Expand/collapse title"]`)
    .click(surveyTitle)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(
      Selector(`.sv_header__text .title_editable > span:nth-child(1)`).innerText
    )
    .eql("puppies");
});

test(`change survey description`, async (t) => {
  const surveyTitle = Selector(".sv_header__text")
    .find("span")
    .withText("Enter a survey description");
  await t
    .expect(surveyTitle.visible)
    .notOk()
    .click(`[title="Expand/collapse title"]`)
    .click(surveyTitle)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(
      Selector(`.sv_header__text .description_editable > span:nth-child(1)`)
        .innerText
    )
    .eql("puppies");
});

test(`set survey logo`, async (t) => {
  const surveyLogo = Selector(".sv_logo");
  const callChooseImage = ClientFunction(() => {
    var el = document.querySelectorAll(
      "title-actions .svda_question_action"
    )[0];
    var model = ko.contextFor(el).$parents[0];
    var fileInputEl = document.querySelectorAll(
      ".svd_survey_header .svda-choose-file"
    )[0];
    model.uploadFiles([fileInputEl.files[0]]);
  });

  await t
    .expect(surveyLogo.visible)
    .notOk()
    .click(`[title="Expand/collapse title"]`)
    .expect(surveyLogo.visible)
    .notOk()
    .setFilesToUpload(".svd_survey_header .svda-choose-file", ["./image.jpg"]);

  await callChooseImage();

  await t.expect(surveyLogo.visible).ok();
});

test(`dropdown work with other`, async (t) => {
  await t
    .click(`[title~=Dropdown]`)
    .click(`.svda-add-new-item.svda-add-custom-item`)

    .click(`.item_editable:not(.item_draggable)>span`)
    .typeText(`input:focus`, `other puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.item_editable:not(.item_draggable)>span`).innerText)
    .eql("other puppies")
    .click(`.item_editable:not(.item_draggable) .svda-delete-item`)
    .expect(Selector(`.item_editable:not(.item_draggable)>span`).exists)
    .notOk();
  //.debug()
  //.wait(3000);
});

test(`checkbox work with other/select all/none`, async (t) => {
  await t
    .click(`[title~=Checkbox]`)
    .expect(
      Selector(`.svda-add-custom-item+.svda-add-custom-item>span`).innerText
    )
    .eql("Other")
    .expect(
      Selector(
        `.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item>span`
      ).innerText
    )
    .eql("Select All")
    .expect(
      Selector(
        `.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item>span`
      ).innerText
    )
    .eql("None")
    .click(`.svda-add-custom-item+.svda-add-custom-item`)
    .click(`.svda-add-custom-item+.svda-add-custom-item`)
    .click(`.svda-add-custom-item+.svda-add-custom-item`)
    .expect(
      Selector(`.sv_qcbx div:nth-child(2) label .item_editable > span`)
        .innerText
    )
    .eql("Select All")
    .expect(
      Selector(`.sv_qcbx div:nth-child(3) label .item_editable > span`)
        .innerText
    )
    .eql("item1")
    .expect(
      Selector(`.sv_qcbx div:nth-child(4) label .item_editable > span`)
        .innerText
    )
    .eql("item2")
    .expect(
      Selector(`.sv_qcbx div:nth-child(5) label .item_editable > span`)
        .innerText
    )
    .eql("item3")
    .expect(
      Selector(`.sv_qcbx div:nth-child(6) label .item_editable > span`)
        .innerText
    )
    .eql("Other (describe)")
    .expect(
      Selector(`.sv_qcbx div:nth-child(7) label .item_editable > span`)
        .innerText
    )
    .eql("None");
  // .click(`.svda-add-custom-item+.svda-add-custom-item`)
  // .click(`.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item`)
  // .click(`.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item`)
  // .expect(Selector(`.sv_qcbx div:nth-child(2) label .item_editable > span`).innerText)
  // .eql("item1")
  // .expect(Selector(`.sv_qcbx div:nth-child(3) label .item_editable > span`).innerText)
  // .eql("item2")
  // .expect(Selector(`.sv_qcbx div:nth-child(4) label .item_editable > span`).innerText)
  // .eql("item3")
  // .debug()
  // .wait(3000);
});

test(`dropdown readonly`, async (t) => {
  const makeEditorReadOnly = ClientFunction(() => {
    creator.readOnly = true;
    creator.text = `{
      "pages": [
        {
        "name": "page1",
        "elements": [
          {
          "type": "dropdown",
          "name": "question1",
          "hasOther": "true",
          "choices": [
            "item1",
            "item2",
            "item3"
          ]
          }
        ]
        }
      ]
      }`;
    return "dummy";
  });
  await makeEditorReadOnly();
  await t
    .expect(
      Selector(".svda-select-items-collection div:nth-child(1) span").innerText
    )
    .eql("item1")
    .expect(
      Selector(".svda-select-items-collection div:nth-child(2) span").innerText
    )
    .eql("item2")
    .expect(
      Selector(".svda-select-items-collection div:nth-child(3) span").innerText
    )
    .eql("item3")
    .expect(Selector(".svda-select-items-collection + div span").innerText)
    .eql("Other (describe)");
});

test("delete button click when editing text of item - T4545", async (t) => {
  await t
    .click(`[title~=Dropdown]`)
    .click(".item_editable span:first-child")
    .pressKey("delete")
    .pressKey("esc")
    .expect(
      Selector(".svda-select-items-collection div:nth-child(1) span").innerText
    )
    .eql("item1");
});

test("ctrl+Z click when editing title - #855", async (t) => {
  await t
    .doubleClick("[title~=Dropdown]")
    .click(".svd_survey_designer .sv_row .title_editable span:nth-child(2)")
    .pressKey("ctrl+z")
    .expect(
      Selector(".svd_survey_designer .sv_row").count
    )
    .eql(2);
});

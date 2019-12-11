import { url } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `adorners`;

const init = ClientFunction(() => {
  Survey.Survey.cssType = "bootstrap";
  var editorOptions = {};
  window.editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
});

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`dropdown change item values`, async t => {
  await t
    .click(`[title~=Dropdown]`)
    .click(`.item_editable.item_draggable>span`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.item_editable.item_draggable>span`).innerText)
    .eql("item1puppies")
    .click(`.svd_properties_grid tr:nth-child(16) input[type='checkbox']`)
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
    .eql("Other (describe)puppiesOther");
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
//     .eql("question1puppies");
// });

test(`text change title`, async t => {
  await t
    .click(`[title="Single Input"]`)
    .click(`.title_editable > span:nth-child(3)`)
    .typeText(`input:focus`, `puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.title_editable > span:nth-child(3)`).innerText)
    .eql("question1puppies");
});

test(`dropdown work with other`, async t => {
  await t
    .click(`[title~=Dropdown]`)
    .click(`.svda-add-new-item.svda-add-custom-item`)

    .click(`.item_editable:not(.item_draggable)>span`)
    .typeText(`input:focus`, `other puppies`)
    .click(`input:focus+span.svda-edit-button`)
    .expect(Selector(`.item_editable:not(.item_draggable)>span`).innerText)
    .eql("Other (describe)other puppies")
    .click(`.item_editable:not(.item_draggable) .svda-delete-item`)
    .expect(Selector(`.item_editable:not(.item_draggable)>span`).exists)
    .notOk()
  //.debug()
  //.wait(3000);
});

test(`checkbox work with other/select all/none`, async t => {
  await t
    .click(`[title~=Checkbox]`)
    .expect(Selector(`.svda-add-custom-item+.svda-add-custom-item>span`).innerText)
    .eql("Other")
    .expect(Selector(`.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item>span`).innerText)
    .eql("Select All")
    .expect(Selector(`.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item+.svda-add-custom-item>span`).innerText)
    .eql("None")
    .click(`.svda-add-custom-item+.svda-add-custom-item`)
    .click(`.svda-add-custom-item+.svda-add-custom-item`)
    .click(`.svda-add-custom-item+.svda-add-custom-item`)
    .expect(Selector(`.sv_qcbx div:nth-child(2) label .item_editable > span`).innerText)
    .eql("Select All")
    .expect(Selector(`.sv_qcbx div:nth-child(3) label .item_editable > span`).innerText)
    .eql("item1")
    .expect(Selector(`.sv_qcbx div:nth-child(4) label .item_editable > span`).innerText)
    .eql("item2")
    .expect(Selector(`.sv_qcbx div:nth-child(5) label .item_editable > span`).innerText)
    .eql("item3")
    .expect(Selector(`.sv_qcbx div:nth-child(6) label .item_editable > span`).innerText)
    .eql("Other (describe)")
    .expect(Selector(`.sv_qcbx div:nth-child(7) label .item_editable > span`).innerText)
    .eql("None")
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
test(`dropdown readonly`, async t => {
  const makeEditorReadOnly = ClientFunction(() => {
    editor.readOnly = true;
    editor.text = `{
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
      }`
    return 'dummy';
  });  
  await makeEditorReadOnly();
  await t
    .expect(Selector(".svda-select-items-collection div:nth-child(1) span").innerText)
    .eql("item1")
    .expect(Selector(".svda-select-items-collection div:nth-child(2) span").innerText)
    .eql("item2")
    .expect(Selector(".svda-select-items-collection div:nth-child(3) span").innerText)
    .eql("item3")
    .expect(Selector(".svda-select-items-collection + div span").innerText)
    .eql("Other (describe)")
});

import { init } from "../settings";
import { Selector } from "testcafe";
const title = `custom widgets`;

const url = "http://127.0.0.1:7777/example/customWidget.html";

fixture`General: ${title}`.page`${url}`.beforeEach(async ctx => {
  var creatorOptions = {
    questionTypes: ["text", "radiogroup", "dropdown"],
    showJSONEditorTab: false
  };
  await init(creatorOptions);
});

test(`check widgets`, async t => {
  const getTestTab = Selector(
    () => document.querySelectorAll(".svd_container ul li:nth-child(2)")[0]
  );

  await t
    .click(`[title~=Radiogroup]`)
    .click(`[title~=Dropdown]`)
    .click(`[title~=Bar]`)
    .click(getTestTab)
    .wait(1000)
    .click(`#surveyjsExample .iradio_square-blue`)
    .click(`#surveyjsExample .br-theme-css-stars a`);
});

import { url, init } from "../../settings";
import { Selector } from "testcafe";
const title = `old-property-grid`;

fixture`Property grid: ${title}`.page`${url}`.beforeEach(async (ctx) => {
  var creatorOptions = {
    showElementEditorAsPropertyGrid: false,
  };
  await init(creatorOptions);
});

test(`old-property-grid`, async (t) => {
  await t
    .click(`[title~=Radiogroup]`)
    .click(
      Selector("svd-object-editor-old-table-content a").withText("[ Items: 3 ]")
    );

  await t.click(
    Selector(".modal[style='display: block;']").find("input[value='Add New']")
  );

  await t.click(
    Selector(".modal[style='display: block;']").find("input[value='Apply']")
  );

  await t.click(
    Selector(".modal[style='display: block;']").find("input[value='OK']")
  );

  await t.click(Selector("question-actions span").withText("Edit"));

  await t.click(
    Selector(".svd-accordion-tab-header[data-title='Choices']").withText(
      "Choices"
    )
  );

  await t.click(
    Selector(".modal[style='display: block;']").find("input[value='OK']")
  );
});

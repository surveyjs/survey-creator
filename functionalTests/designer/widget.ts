import { setJSON } from "../helper";
import { Selector, ClientFunction } from "testcafe";
const title = "Check Empty Survey JSON";
const url = "http://127.0.0.1:8080/testCafe/testcafe-widget";
fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Custom widgets should be locked in design mode", async (t) => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "sortablelist",
            name: "q1",
          },
        ],
      },
    ],
  };
  await setJSON(json);
  await t.expect(Selector(".svc-widget__content").visible).ok()
    .expect(Selector("span").withText("Move items here.").visible).ok()
    .expect(Selector(".svc-widget__content .sd-question__content").getStyleProperty("pointer-events")).eql("none");
});

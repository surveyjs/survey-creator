import { url, getPagesLength, getQuestionsLength, setJSON, getJSON, getQuestionNameByIndex, getItemValueByIndex, patchDragDropToDisableDrop, RatingToolboxItem, SingleInputToolboxItem, surveySettingsButtonSelector, changeToolboxScrolling, changeToolboxSearchEnabled } from "../helper";
import { Selector, ClientFunction } from "testcafe";
import { large_json } from "./performance_json";
const title = "Performance";

const explicitErrorHandler = () => {
  window.addEventListener("error", e => {
    if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
      e.message === "ResizeObserver loop limit exceeded") {
      e.stopImmediatePropagation();
    }
  });
};

fixture`${title}`.page`${url}`.clientScripts({ content: `(${explicitErrorHandler.toString()})()` }).beforeEach(async (t) => {
  await setJSON(large_json);
  await t.maximizeWindow();
});

test("Memory leaks between designer/test tabs switch", async (t) => {
  const changeTab = ClientFunction((tabName: string) => { window["creator"].activeTab = tabName; });
  const getMemory = ClientFunction(() => { return (performance as any).memory.usedJSHeapSize; });

  await changeTab("preview");
  const memory1 = await getMemory();
  await changeTab("designer");
  await changeTab("preview");
  const memory2 = await getMemory();

  await t.expect((memory2 - memory1) / 1000).lt(1000);
});

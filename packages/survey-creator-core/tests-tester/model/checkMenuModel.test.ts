// The check menu is the tester's own registry, filtered twice and never restated here. What is tested
// is exactly that: a check the tester registers appears by itself, a check the tester says does not
// apply is not offered at all, and what a press writes is the confirming run's `actual` and never the
// value the row happened to be showing.
import { afterEach, describe, expect, it } from "vitest";
import { SurveyTestCheckFactory } from "survey-core/tester";
import type { ISurveyTestCheckHandler } from "survey-core/tester";
import { TesterCheckMenuModel } from "../../src/tester/model/checkMenuModel";
import { getCheckOffers } from "../../src/tester/recorder/checks";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { formatSuite, TesterHostStub } from "./testerHostStub";

let open: Array<SurveyTesterModel> = [];
let menus: Array<TesterCheckMenuModel> = [];
afterEach(() => {
  menus.forEach(menu => menu.dispose());
  menus = [];
  open.forEach(model => model.dispose());
  open = [];
});

// A session on an empty test of the sample's own survey. Nothing here touches the DOM: the menu is a
// model over the model the tester built, and a press on it is a call.
async function session(): Promise<{ model: SurveyTesterModel, host: TesterHostStub }> {
  const host = new TesterHostStub(conditional.surveyJson,
    formatSuite({
      name: "recorded",
      options: { clearInvisibleValues: "onComplete" },
      tests: [{ name: "walk", steps: [] }],
    }));
  const model = new SurveyTesterModel(host);
  open.push(model);
  await model.openRecorder("walk");
  return { model: model, host: host };
}

// The survey's own adorner is the one that exists with nothing rendered: it is the one target with no
// element anywhere, so the list carries it whether the form has drawn a thing or not.
function menuFor(model: SurveyTesterModel, target: string): TesterCheckMenuModel {
  const found = model.recorder.adorners.find(target);
  expect(found, "no adorner was offered for \"" + target + "\"").toBeTruthy();
  return (found as any).menu as TesterCheckMenuModel;
}

// A menu over a question. Nothing has rendered in these tests, so the registry the adorner list is
// built from is empty (adornerModel.test.ts is where that half is driven); the menu itself needs only
// the object it is about, which is what an adorner would have handed it.
function questionMenu(model: SurveyTesterModel, target: string): TesterCheckMenuModel {
  const survey: any = model.recorder.liveSurvey;
  return standalone(model, target, "question", survey.getQuestionByName(target));
}

function standalone(model: SurveyTesterModel, target: string, kind: any, obj: any): TesterCheckMenuModel {
  const menu = new TesterCheckMenuModel(model.recorder, {
    target: target, kind: kind, obj: obj, survey: model.recorder.liveSurvey as any,
  });
  menus.push(menu);
  return menu;
}

// What a person doing it would produce: the model takes the answer, and the step is the one the capture
// would have reported for it. Setting the value with no gesture open records nothing by itself - that
// is the two-signal rule - so the step is handed over explicitly, exactly as the headless tests do.
function answer(model: SurveyTesterModel, target: string, value: any): void {
  (model.recorder.liveSurvey as any).setValue(target, value);
  model.recorder.recordStep({ command: "set", target: target, payload: value, description: "" });
}

function names(menu: TesterCheckMenuModel): Array<string> {
  return menu.rowModels.map(row => row.name);
}

function steps(host: TesterHostStub): Array<any> {
  return JSON.parse(host.text).tests[0].steps;
}

describe("the check menu", () => {
  it("offers what the tester registers here and leaves out what it refuses", async() => {
    const { model } = await session();
    const survey: any = model.recorder.liveSurvey;
    const question = survey.getQuestionByName("hasInsurance");
    const offers = getCheckOffers("question", "hasInsurance", question);
    const applies = offers.filter(offer => !offer.disabled).map(offer => offer.name).sort();
    const refused = offers.filter(offer => !!offer.disabled).map(offer => offer.name);
    // A menu that happened to offer everything would pass the assertion below without ever having
    // filtered anything, so the fixture is checked first.
    expect(refused.length, "the tester refused no check here, so this test proves nothing")
      .toBeGreaterThan(0);

    const menu = standalone(model, "hasInsurance", "question", question);
    expect(names(menu).slice().sort(), "the menu is not the registry filtered by the handlers")
      .toEqual(applies);
    refused.forEach(name => {
      expect(names(menu), "\"" + name + "\" does not apply here and was offered anyway")
        .not.toContain(name);
    });
    // The properties a person reads first come first, whatever order the registry lists them in.
    expect(names(menu)[0]).toBe("value");
    // The list is the library's, searchable, and it searches the value as well as the name - because a
    // menu whose rows show the value is one an author reads by the value.
    expect(menu.list.searchEnabled).toBe(true);
    expect(menu.list.forceShowFilter).toBe(true);
    const visible = menu.rowModels.filter(row => row.name === "visible")[0];
    expect(visible.valueText).toBe("true");
    expect(visible.matches("visi")).toBe(true);
    expect(visible.matches("true")).toBe(true);
    expect(visible.matches("nothing of the sort")).toBe(false);
  }, 60000);

  // The rule the whole file rests on: the menu is built from SurveyTestCheckFactory.Instance, so a
  // check registered by anybody appears with no edit anywhere in this widget - which is the same
  // sentence PROMPT-recorder.md section 5.4 makes about the "description" check the tester does not
  // have yet.
  it("shows a check the tester learns after this widget was written", async() => {
    const { model } = await session();
    const survey: any = model.recorder.liveSurvey;
    const question = survey.getQuestionByName("hasInsurance");
    expect(names(standalone(model, "hasInsurance", "question", question)))
      .not.toContain("fakeInkColour");

    const fake: ISurveyTestCheckHandler = {
      name: "fakeInkColour",
      kinds: ["question"],
      payloadType: "string",
      check: () => ({ passed: true, actual: "blue" }),
    };
    SurveyTestCheckFactory.Instance.register(fake);
    try {
      const menu = standalone(model, "hasInsurance", "question", question);
      expect(names(menu), "a registered check did not reach the menu").toContain("fakeInkColour");
      // And it sorts under the properties the menu knows about rather than disappearing among them.
      expect(names(menu).indexOf("fakeInkColour")).toBeGreaterThan(names(menu).indexOf("value"));
    } finally {
      SurveyTestCheckFactory.Instance.unregister("fakeInkColour");
    }
    expect(names(standalone(model, "hasInsurance", "question", question)))
      .not.toContain("fakeInkColour");
  }, 60000);

  // Rule 2 of PROMPT-recorder.md section 11: the expected value comes from the tester. The row shows
  // what the model holds, the case gets what the confirming run reported - and here the two are
  // deliberately different, because the question is invisible while the row still says so.
  it("writes the confirming run's actual and not the value the row showed", async() => {
    const { model, host } = await session();
    const recorder = model.recorder;
    answer(model, "hasInsurance", "no");
    const menu = questionMenu(model, "insuranceProvider");
    menu.update(recorder.tickedFor("insuranceProvider"), false);
    const visible = menu.rowModels.filter(row => row.name === "visible")[0];
    expect(visible, "the provider question offers no \"visible\" check").toBeTruthy();
    expect(visible.valueText, "the row does not say what the model holds").toBe("false");
    expect(visible.ticked).toBe(false);

    menu.toggle(visible);
    await recorder.verify();
    expect(steps(host)[1])
      .toEqual({ name: "expect-insuranceProvider", expect: { insuranceProvider: { visible: false } } });
    expect(recorder.verifyOutcome?.status, "the case the menu wrote does not pass").toBe("passed");

    // And the row now says the case asserts it, so pressing it again is plainly the undo of the press
    // that wrote it.
    menu.update(recorder.tickedFor("insuranceProvider"), false);
    expect(visible.ticked).toBe(true);
    expect(visible.tooltip).toContain("take it back out");
    menu.toggle(visible);
    expect(steps(host).length).toBe(1);
  }, 60000);

  // Checks added for several targets with no command between them land in the same "expect" step, one
  // entry per target - that is what the format is for.
  it("merges the checks of several targets into one expect step", async() => {
    const { model, host } = await session();
    const recorder = model.recorder;
    answer(model, "hasInsurance", "yes");

    const provider = questionMenu(model, "insuranceProvider");
    provider.update(recorder.tickedFor("insuranceProvider"), false);
    provider.toggle(provider.rowModels.filter(row => row.name === "visible")[0]);
    await recorder.verify();

    const target = questionMenu(model, "hasInsurance");
    target.update(recorder.tickedFor("hasInsurance"), false);
    target.toggle(target.rowModels.filter(row => row.name === "value")[0]);
    await recorder.verify();

    expect(steps(host).length, "the second target opened a second expect step").toBe(2);
    expect(steps(host)[1].expect).toEqual({
      insuranceProvider: { visible: true },
      hasInsurance: { value: "yes" },
    });
    expect(recorder.verifyOutcome?.status).toBe("passed");
  }, 60000);

  // The picker is what stops "values" and "noValues" from recording the whole data blob: a check with
  // one is not complete until the keys are chosen, and what it starts with is what the check can
  // actually assert right now (README section 1.5 refuses whole-object equality).
  it("picks the keys of values and noValues rather than the whole data", async() => {
    const { model, host } = await session();
    const recorder = model.recorder;
    answer(model, "hasInsurance", "no");
    const menu = menuFor(model, "survey");
    menu.update(recorder.tickedFor("survey"), false);

    const values = menu.rowModels.filter(row => row.name === "values")[0];
    const noValues = menu.rowModels.filter(row => row.name === "noValues")[0];
    expect(values.hasPicker).toBe(true);
    expect(noValues.hasPicker).toBe(true);
    // Pressing a row with a picker writes nothing: it opens the picker.
    menu.toggle(values);
    expect(steps(host).length).toBe(1);
    expect(menu.pending).toBe(values);
    expect(values.picking).toBe(true);
    expect(menu.picked.slice()).toEqual(["hasInsurance"]);
    expect(menu.pickerItems.map(item => item.value)).toEqual(["hasInsurance"]);
    expect(menu.pickerNote).toContain("values");
    menu.addPending();
    await recorder.verify();
    expect(steps(host)[1].expect.survey.values).toEqual({ hasInsurance: "no" });
    expect(menu.pending).toBe(undefined);

    // "noValues" offers the names that hold nothing right now - the answered question is not among
    // them, which is exactly the refusal: a name that holds a value cannot be asserted absent.
    menu.update(recorder.tickedFor("survey"), false);
    menu.toggle(noValues);
    expect(menu.pickerItems.map(item => item.value)).toEqual(["insuranceProvider"]);
    expect(menu.picked.slice()).toEqual(["insuranceProvider"]);
    menu.addPending();
    await recorder.verify();
    expect(steps(host)[1].expect.survey.noValues).toEqual(["insuranceProvider"]);
    expect(recorder.verifyOutcome?.status).toBe("passed");

    // And a key forced in that does hold a value is dropped by the confirming run rather than written
    // as a check that is false the moment it is recorded - with the reason said out loud.
    await recorder.addChecks("survey", [
      { name: "noValues", payloadType: "stringArray", keys: ["hasInsurance"] },
    ]);
    expect(steps(host)[1].expect.survey.noValues, "a name that holds a value was recorded as absent")
      .toEqual(["insuranceProvider"]);
    expect(recorder.notice).toContain("hasInsurance");
  }, 60000);

  // A menu that is closed keeps nothing: a half-made check is abandoned, and the search goes with it -
  // a menu that reopened on the last thing typed into it would reopen showing one row of the dozen it
  // offers.
  it("abandons a half-made check and its search when it closes", async() => {
    const { model } = await session();
    const menu = menuFor(model, "survey");
    menu.setOpen(true);
    expect(menu.isOpen).toBe(true);
    menu.toggle(menu.rowModels.filter(row => row.name === "values")[0]);
    menu.list.filterString = "val";
    expect(menu.pending).toBeTruthy();
    menu.setOpen(false);
    expect(menu.isOpen).toBe(false);
    expect(menu.pending).toBe(undefined);
    expect(menu.list.filterString).toBe("");
  }, 60000);
});

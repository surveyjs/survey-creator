// The promise the Recorder makes: a step for what the person did, and nothing for what the survey did by
// itself. These tests drive a real SurveyModel through real DOM events and assert both halves of it.
import { describe, expect, it } from "vitest";
import { SurveyModel } from "survey-core";
import { RecorderCapture } from "../../src/tester/recorder/capture";
import type { CapturedCommand, IgnoredReason } from "../../src/tester/recorder/capture";
import type { ElementRegistry } from "../../src/tester/recorder/elementRegistry";

interface Harness {
  survey: SurveyModel;
  capture: RecorderCapture;
  container: HTMLElement;
  commands: Array<CapturedCommand>;
  ignored: Array<{ text: string, reason: IgnoredReason }>;
  node(name: string): HTMLElement;
  // A node for a question the harness did not create one for: a matrix cell, a panel of a dynamic panel.
  // In the application these come from the model's own render events.
  attachNode(question: any): HTMLElement;
  chrome: HTMLElement;
  dispose(): void;
}

// An event a script dispatches is untrusted by definition - dispatchEvent() sets the flag to false - and
// an untrusted event is exactly what the recorder refuses to open a gesture on, so a test that dispatched
// one plainly would prove nothing. The flag is flipped from a listener on the window, in the capture
// phase, which runs before the recorder's own listener on the pane: from there the event looks to the code
// under test exactly as a pointer would. This is the only place in the repository that touches a jsdom
// internal, and it touches only the events these tests created.
const TRUSTED = new WeakSet<Event>();
let trustInstalled = false;

function installTrust(): void {
  if (trustInstalled) return;
  trustInstalled = true;
  ["pointerdown", "keydown", "input", "change", "click"].forEach(type => {
    window.addEventListener(type, event => {
      if (!TRUSTED.has(event)) return;
      const impl = Object.getOwnPropertySymbols(event)[0];
      if (!!impl) (event as any)[impl].isTrusted = true;
    }, true);
  });
}

function fire(node: Element, type: string): void {
  installTrust();
  const event = new Event(type, { bubbles: true });
  TRUSTED.add(event);
  node.dispatchEvent(event);
}

function createHarness(json: any, recording = true): Harness {
  const survey = new SurveyModel(json);
  const container = document.createElement("div");
  document.body.appendChild(container);
  const chrome = document.createElement("div");
  // Outside every question: this is where the navigation buttons live.
  container.appendChild(chrome);
  const nodes: { [name: string]: HTMLElement } = {};
  const byNode = new Map<HTMLElement, any>();
  const attachNode = (question: any): HTMLElement => {
    const node = document.createElement("div");
    node.setAttribute("data-q", question.name);
    container.appendChild(node);
    byNode.set(node, question);
    return node;
  };
  survey.getAllQuestions().forEach(question => { nodes[question.name] = attachNode(question); });
  const registry = {
    resolve: (target: EventTarget | null): any => {
      let node: any = target;
      while(!!node) {
        const question = node instanceof HTMLElement ? byNode.get(node) : undefined;
        if (!!question) return { kind: "question", targetKind: "question", obj: question, node: node };
        node = node.parentNode;
      }
      return undefined;
    },
  } as unknown as ElementRegistry;

  const commands: Array<CapturedCommand> = [];
  const ignored: Array<{ text: string, reason: IgnoredReason }> = [];
  const capture = new RecorderCapture();
  capture.attach(survey, {
    registry: registry,
    isRecording: () => recording,
    onCommand: command => commands.push(command),
    onIgnored: (text, reason) => ignored.push({ text: text, reason: reason }),
  });
  capture.setContainer(container);
  return {
    survey: survey,
    capture: capture,
    container: container,
    commands: commands,
    ignored: ignored,
    chrome: chrome,
    node: (name: string) => nodes[name],
    attachNode: attachNode,
    dispose: () => {
      capture.detach();
      container.remove();
    },
  };
}

const simple = {
  pages: [
    { name: "page1", elements: [{ type: "text", name: "who" }, { type: "text", name: "note" }] },
    { name: "page2", elements: [{ type: "text", name: "later" }] },
  ],
};

describe("what a person did", () => {
  it("records the answer they typed, once, on the question they touched", () => {
    const harness = createHarness(simple);
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    fire(harness.node("who"), "input");
    harness.capture.flush();
    expect(harness.commands.map(command => command.command + " " + command.target)).toEqual(["set who"]);
    expect(harness.commands[0].payload).toBe("Ann");
    harness.dispose();
  });

  it("records a removed answer as a clear, because \"value\" refuses undefined", () => {
    const harness = createHarness(simple);
    harness.survey.setValue("who", "Ann");
    fire(harness.node("who"), "pointerdown");
    // What the Clear button of the question calls. The answer is gone, not set to null.
    (harness.survey.getQuestionByName("who") as any).clearValue();
    harness.capture.flush();
    expect(harness.commands.map(command => command.command)).toEqual(["clear"]);
    harness.dispose();
  });

  it("records a Next press, because the press is what the case holds", () => {
    const harness = createHarness(simple);
    fire(harness.chrome, "pointerdown");
    harness.survey.nextPageUIClick();
    expect(harness.commands.map(command => command.command + " " + command.target)).toEqual(["nextPage survey"]);
    harness.dispose();
  });

  it("puts the value typed before a button press in the earlier step", () => {
    const harness = createHarness(simple);
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    // The blur of the input arrives while the pointer is already on the navigation, exactly as it does in
    // a browser: the value is still the earlier step.
    fire(harness.chrome, "pointerdown");
    fire(harness.node("who"), "change");
    harness.survey.nextPageUIClick();
    expect(harness.commands.map(command => command.command)).toEqual(["set", "nextPage"]);
    harness.dispose();
  });

  it("records the value the person entered, not the one a cascade left behind", () => {
    const harness = createHarness(simple);
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    // Everything the survey does after the answer belongs to the same input: an expression recomputing, a
    // trigger copying, a question being cleared. The step is the answer, and replaying it produces all of
    // this again.
    harness.survey.setValue("who", "written by the survey afterwards");
    harness.capture.flush();
    expect(harness.commands.map(command => command.command)).toEqual(["set"]);
    expect(harness.commands[0].payload).toBe("Ann");
    harness.dispose();
  });

  it("records the last keystroke of a word, not the first", () => {
    const harness = createHarness(simple);
    const node = harness.node("who");
    fire(node, "pointerdown");
    ["A", "An", "Ann"].forEach(text => {
      // Each keystroke is an input of its own, so each one replaces the snapshot the one before it took.
      fire(node, "input");
      harness.survey.setValue("who", text);
    });
    harness.capture.flush();
    expect(harness.commands.map(command => command.command)).toEqual(["set"]);
    expect(harness.commands[0].payload).toBe("Ann");
    harness.dispose();
  });

  it("records a cell even when the question object is replaced by the cascade", () => {
    const harness = createHarness({
      elements: [{
        type: "matrixdynamic", name: "items", rowCount: 1,
        columns: [{ name: "quantity", cellType: "text" }],
      }],
    });
    const items: any = harness.survey.getQuestionByName("items");
    const cell = items.visibleRows[0].cells[0].question;
    fire(harness.attachNode(cell), "pointerdown");
    cell.value = "2";
    // A matrix that rebuilds its rows leaves the recorder holding a detached question: its value stops
    // moving and its row can no longer be found, so a reading taken at the end would produce nothing.
    items.value = [{ quantity: "2" }, { quantity: "9" }];
    harness.capture.flush();
    expect(harness.commands.map(command => command.command + " " + command.target)).toEqual(["set items[0].quantity"]);
    expect(harness.commands[0].payload).toBe("2");
    harness.dispose();
  });

  it("records nothing at all while the host says it is not recording", () => {
    const harness = createHarness(simple, false);
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    harness.capture.flush();
    expect(harness.commands).toEqual([]);
    expect(harness.ignored.map(entry => entry.reason)).toContain("paused");
    harness.dispose();
  });
});

describe("what the survey did by itself", () => {
  it("does not record a value a trigger wrote", () => {
    const harness = createHarness({
      elements: [{ type: "text", name: "who" }, { type: "text", name: "greeting" }],
      triggers: [{ type: "setvalue", expression: "{who} = 'Ann'", setToName: "greeting", setValue: "hi" }],
    });
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    harness.capture.flush();
    expect(harness.survey.getValue("greeting")).toBe("hi");
    // The trigger's own value change is announced before the answer that set it off, so the answer has to
    // survive arriving second - and it has to keep the value the person entered.
    expect(harness.commands.map(command => command.target)).toEqual(["who"]);
    expect(harness.commands[0].payload).toBe("Ann");
    expect(harness.ignored.some(entry => entry.reason === "trigger")).toBe(true);
    harness.dispose();
  });

  it("does not record a value an expression computed", () => {
    const harness = createHarness({
      elements: [
        { type: "text", name: "a" },
        { type: "text", name: "b", defaultValueExpression: "{a} + 1" },
      ],
    });
    fire(harness.node("a"), "pointerdown");
    harness.survey.setValue("a", 1);
    harness.capture.flush();
    expect(harness.commands.map(command => command.target)).toEqual(["a"]);
    expect(harness.commands.length).toBe(1);
    harness.dispose();
  });

  it("does not record a value that changed with no gesture open", () => {
    const harness = createHarness(simple);
    harness.survey.setValue("who", "Ann");
    harness.capture.flush();
    expect(harness.commands).toEqual([]);
    expect(harness.ignored.map(entry => entry.reason)).toContain("noGesture");
    harness.dispose();
  });

  it("does not record the page the survey advanced by itself", () => {
    const harness = createHarness(simple);
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    // performNext() is the call auto-advance makes - tryGoNextPageAutomatic never goes through
    // nextPageUIClick(), which is the Next button's own entry point and the only one the recorder watches.
    harness.survey.performNext();
    harness.capture.flush();
    // The survey is on page 2 and the case says only "set". A recorded nextPage would press the button a
    // second time on the replay, on a survey that had already moved.
    expect(harness.survey.currentPage.name).toBe("page2");
    expect(harness.commands.map(command => command.command)).toEqual(["set"]);
    harness.dispose();
  });

  it("tells a Complete press from a completion the survey performed itself", () => {
    // A completetrigger and an auto-complete both land on tryComplete(), the very method the Complete
    // button uses, so the gesture is what tells them apart: a press comes from the survey's chrome, an
    // automatic completion from inside the question that was just answered.
    const harness = createHarness({ elements: [{ type: "text", name: "who" }] });
    fire(harness.node("who"), "pointerdown");
    harness.survey.setValue("who", "Ann");
    harness.survey.tryComplete();
    harness.capture.flush();
    expect(harness.commands.map(command => command.command)).toEqual(["set"]);

    fire(harness.chrome, "pointerdown");
    harness.survey.tryComplete();
    expect(harness.commands.map(command => command.command)).toEqual(["set", "complete"]);
    harness.dispose();
  });

  it("records a row the person added and ignores one the survey grew", () => {
    const harness = createHarness({
      elements: [{
        type: "matrixdynamic", name: "items", rowCount: 1,
        columns: [{ name: "quantity", cellType: "text" }],
      }],
    });
    const items: any = harness.survey.getQuestionByName("items");
    // No gesture: this is the growth a default value or a set performs.
    items.addRow();
    expect(harness.commands).toEqual([]);
    expect(harness.ignored.map(entry => entry.reason)).toContain("noGesture");

    fire(harness.node("items"), "pointerdown");
    items.addRow();
    expect(harness.commands.map(command => command.command + " " + command.target + " " + command.payload))
      .toEqual(["addRow items 1"]);
    harness.dispose();
  });
});

describe("the model afterwards", () => {
  it("is left exactly as it was found", () => {
    const harness = createHarness(simple);
    const survey: any = harness.survey;
    expect(Object.prototype.hasOwnProperty.call(survey, "nextPageUIClick")).toBe(true);
    harness.capture.detach();
    // The wrappers are own properties shadowing the prototype, so detaching restores the model itself.
    expect(Object.prototype.hasOwnProperty.call(survey, "nextPageUIClick")).toBe(false);
    expect(typeof survey.nextPageUIClick).toBe("function");
    harness.container.remove();
  });
});

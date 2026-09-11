import { readdirSync, readFileSync, statSync } from "fs";
import { join, resolve } from "path";

// The size of the per-framework surface, asserted rather than promised.
//
// Prompt 07's rule, inherited from the prototype's PROMPT-runner-views.md: count what a framework has
// to write before writing it, and if the count grows, something that should be an Action, a ListModel
// or a PanelModel is being hand-drawn. This file is that count, plus the two greps its acceptance
// section asks for - the ones that say the adorners are wrappers and not an overlay.

const testerDir = resolve(__dirname, "../src/tester");

function walk(dir: string): Array<string> {
  const found: Array<string> = [];
  readdirSync(dir).forEach(entry => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...walk(path));
    else found.push(path);
  });
  return found;
}

function sources(): Array<{ rel: string, text: string }> {
  return walk(testerDir).map(path => ({
    rel: path.substring(testerDir.length + 1).replace(/\\/g, "/"),
    text: readFileSync(path, "utf8"),
  }));
}

// Comments are prose about the design and name plenty of things the code may not. The carriage returns
// go first: these files are checked out with CRLF, and a "//.*$" applied line by line then never
// matches, because "$" sits after the "\r" that "." will not cross.
function codeOf(text: string): string {
  return text.replace(/\r/g, "").replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n").map(line => line.replace(/(^|[^:])\/\/.*$/, "$1")).join("\n");
}

describe("the React surface of the Tests widget", () => {
  it("is eight files and nothing more", () => {
    // A ninth is a design smell, and the prototype's rule says what to do about it: go back to the
    // model layer rather than hand-drawing something here.
    expect(sources().map(file => file.rel).sort()).toEqual([
      "ConsolePane.tsx",
      "JsonEditorView.tsx",
      "StepRowView.tsx",
      "SurveyPane.tsx",
      "SurveyTester.tsx",
      "TestRowView.tsx",
      "adorners.tsx",
      "useModel.ts",
    ]);
  });

  it("registers exactly the components the model layer hands out, and all of them are svt-", () => {
    // Every one of these is a string a model puts in a component slot: four wrapper names from
    // TesterAdornersModel, two row components, the check menu inside the popup an adorner opens, and
    // the settings form. survey-creator-core's tests-tester/checkLayers.ts holds the same list from the
    // other side, which is what keeps the two in step.
    const registered: Array<string> = [];
    sources().forEach(file => {
      const code = codeOf(file.text);
      const pattern = /registerElement\(\s*(?:"([^"]+)"|([A-Z_]+))/g;
      for (const match of code.matchAll(pattern)) registered.push(match[1] || match[2]);
    });
    expect(registered.length).toBe(9);
    expect(registered.sort()).toEqual([
      "SETTINGS_COMPONENT",
      "TESTER_ADORNED_CELL",
      "TESTER_ADORNED_PAGE",
      "TESTER_ADORNED_PANEL",
      "TESTER_ADORNED_QUESTION",
      "svt-check-menu",
      "svt-check-row",
      "svt-step-row",
      "svt-test-row",
    ]);
  });

  it("measures nothing, because an adorner is a child of the element it is about", () => {
    // The prototype's first recorder drew one absolutely placed layer over the form and measured every
    // element into it. A measurement is a photograph, and it is wrong the moment the pane scrolls. The
    // wrapper technique replaced it, and these four greps are what stop it coming back.
    const banned = [
      "ResizeObserver",
      "getBoundingClientRect",
      "MutationObserver",
      "position: absolute",
    ];
    const offenders: Array<string> = [];
    sources().forEach(file => {
      const code = codeOf(file.text);
      banned.forEach(word => {
        if (code.indexOf(word) > -1) offenders.push(file.rel + ": " + word);
      });
    });
    expect(offenders).toEqual([]);
  });

  it("draws no chrome the library already draws, and names no private half of the model", () => {
    // The roles, the layers and the click-away belong to the stock list and the stock popup; the
    // capture belongs to the session, and attachTo/detach is the only part of it a view may know about.
    const banned = ["role=\"menu\"", "role=\"listbox\"", "recorder.capture", ".capture."];
    const offenders: Array<string> = [];
    sources().forEach(file => {
      const code = codeOf(file.text);
      banned.forEach(word => {
        if (code.indexOf(word) > -1) offenders.push(file.rel + ": " + word);
      });
    });
    expect(offenders).toEqual([]);
  });

  it("holds no state of the widget's own, and no timer", () => {
    // The rules of PROMPT-runner-views.md section 3. useState and useRef are permitted in exactly two
    // places - useModel.ts, which is the subscription itself, and a DOM ref - so the scan is of
    // everything else.
    const offenders: Array<string> = [];
    sources().forEach(file => {
      if (file.rel === "useModel.ts") return;
      const code = codeOf(file.text);
      if (code.indexOf("useState") > -1) offenders.push(file.rel + ": useState");
      if (code.indexOf("useMemo") > -1) offenders.push(file.rel + ": useMemo");
      if (code.indexOf("setTimeout") > -1) offenders.push(file.rel + ": setTimeout");
      if (code.indexOf("setInterval") > -1) offenders.push(file.rel + ": setInterval");
    });
    expect(offenders).toEqual([]);
  });

  it("imports no creator component", () => {
    // The other half of the ESLint fence, over the import graph rather than over one file's spellings:
    // the widget is a bundle of its own and the future plugin tab is a thin adapter over it.
    const offenders: Array<string> = [];
    sources().forEach(file => {
      const code = codeOf(file.text);
      const pattern = /from\s+"([^"]+)"/g;
      for (const match of code.matchAll(pattern)) {
        const from = match[1];
        const legal = from === "react" || from === "react-dom" || from === "survey-core" ||
          from === "survey-core/tester" || from === "survey-react-ui" ||
          from === "survey-creator-core/tester" || from.indexOf("./") === 0;
        if (!legal) offenders.push(file.rel + ": " + from);
      }
    });
    expect(offenders).toEqual([]);
  });
});

import React, { useEffect, useState } from "react";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "survey-creator-react/tester";
import { findSample, formatSuite, samples } from "./testerSamples";

// The Tests widget, embedded the way a host embeds it: two documents this page owns, one model built
// over them, one component rendering it.
//
// Everything about persistence is here and none of it is in the widget. The widget owns no documents
// (it asks the host for both and hands every edit straight back) and it holds no storage of its own -
// getState()/setState() is a plain object it will restore itself from, and where that object lives is
// this page's business. localStorage is what this example chose.
//
// This page is also the manual QA surface of the whole widget: pick a sample, run it, watch the
// spectator pane, press Edit on a row, record steps and checks through the adorners, go back to the
// runner, run one test, open the JSON screen at that test - and reload, which must come back on the
// same screen, on the same test, with the same selection.

const SAMPLE_KEY = "survey-creator-react-tester-sample";
const TESTS_KEY = "survey-creator-react-tester-tests";
const STATE_KEY = "survey-creator-react-tester-state";

function read(key) {
  try {
    return window.localStorage.getItem(key) || "";
  } catch {
    // A private window, or storage the browser refuses. The widget works exactly the same without it;
    // only the reload stops remembering anything.
    return "";
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // See above.
  }
}

export default function TesterPage() {
  const [sampleId, setSampleId] = useState(() => read(SAMPLE_KEY) || samples[0].id);
  const sample = findSample(sampleId);
  const [model, setModel] = useState(null);

  // The host. It is built once per sample, because the two documents it owns are the sample's - and
  // `getTestsText`/`setTestsText` are a pull and a push over the very same string, which is the whole
  // of the contract.
  // Construct in the effect so every setup owns its model, including StrictMode's second setup.
  // Starting a restored recorder from useMemo would also start work in a render React may discard.
  useEffect(() => {
    const stored = read(TESTS_KEY + ":" + sample.id);
    let testsText = stored || formatSuite(sample.tests);
    const host = {
      getSurveyJson: () => sample.surveyJson,
      getTestsText: () => testsText,
      setTestsText: text => {
        testsText = text;
        write(TESTS_KEY + ":" + sample.id, text);
      },
      options: { mode: "ui" },
    };
    const built = new SurveyTesterModel(host);
    // Where the person was, restored. It is a plain object the widget produced, so it survives
    // JSON.stringify and a reload with nothing else around it.
    try {
      const saved = read(STATE_KEY + ":" + sample.id);
      if (!!saved) built.setState(JSON.parse(saved));
    } catch {
      // A state from an older version of the widget. It is a convenience, not a document: dropping it
      // costs the person their screen and nothing else.
    }
    // A host that has a survey editor wires this; this page has none, so the "in the survey" link on an
    // issue line says where to look in the console instead of doing nothing silently.
    built.onRevealSurveyJson = path => {
      // eslint-disable-next-line no-console
      console.log("the survey definition, at " + path);
    };
    // Child changes do not bubble to the root. Save after their callbacks finish, when selection,
    // option values and recorder state have all reached getState(). Skip intermediate restores:
    // setState starts the recorder replay asynchronously, leaving screen at runner until it finishes.
    const observed = [built, built.runner, built.settings, built.settings.survey, built.recorder];
    let active = true;
    let pending = false;
    let lastSaved;
    const save = () => {
      if (built.transition !== "none") return;
      const next = JSON.stringify(built.getState());
      if (next === lastSaved) return;
      write(STATE_KEY + ":" + sample.id, next);
      lastSaved = next;
    };
    const scheduleSave = () => {
      if (pending) return;
      pending = true;
      queueMicrotask(() => {
        pending = false;
        if (active) save();
      });
    };
    observed.forEach(source => source.onPropertyChanged.add(scheduleSave));
    window.addEventListener("pagehide", save);
    scheduleSave();
    setModel(built);
    return () => {
      save();
      active = false;
      observed.forEach(source => source.onPropertyChanged.remove(scheduleSave));
      window.removeEventListener("pagehide", save);
      built.dispose();
    };
  }, [sample]);

  useEffect(() => write(SAMPLE_KEY, sampleId), [sampleId]);

  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column" }}>
      <header style={headerStyle}>
        <strong>Tests</strong>
        <select value={sampleId} onChange={event => setSampleId(event.target.value)} style={selectStyle}>
          {samples.map(one => (
            <option key={one.id} value={one.id}>{one.name} — {one.expectedStatus}</option>
          ))}
        </select>
        <span style={noteStyle}>{sample.why}</span>
        <button style={buttonStyle} onClick={() => resetSample(sample, setSampleId)}>
          Reset this sample
        </button>
        <a href="#creator" style={linkStyle}>Creator →</a>
      </header>
      <div style={{ flex: 1, minHeight: 0 }}>
        {!!model && <SurveyTester model={model} />}
      </div>
    </div>
  );
}

// Both documents and the remembered screen, back to what the sample ships with. It is the way out of a
// suite this page has recorded into far enough to be confusing, and it is a host operation - the widget
// has no notion of a sample.
function resetSample(sample, setSampleId) {
  write(TESTS_KEY + ":" + sample.id, "");
  write(STATE_KEY + ":" + sample.id, "");
  setSampleId("");
  window.setTimeout(() => setSampleId(sample.id), 0);
}

const headerStyle = {
  display: "flex", alignItems: "center", gap: "12px", padding: "8px 16px",
  borderBottom: "1px solid #e5e7eb", background: "#fff", font: "14px/1.4 system-ui, sans-serif",
};
const selectStyle = { minHeight: "32px", padding: "0 8px" };
const noteStyle = { color: "#6b7280", fontSize: "12px" };
const buttonStyle = { marginLeft: "auto", minHeight: "32px", padding: "0 12px" };
const linkStyle = { color: "#2563eb" };

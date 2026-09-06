// The public surface of survey-creator-react/tester.
//
// The widget's whole API is survey-creator-core/tester - the host contract, the models, the string
// table - and this bundle adds one thing to it: the component that draws the model. Everything else
// exported here is exported because a host may legitimately compose with it (the two panes and the
// adorner context), never because the widget needs it from outside.
//
// The bundle is a second rollup config of this package (rollup.tester.config.mjs), so nothing under
// src/ outside src/tester/ imports any of it and the main survey-creator-react bundle does not grow by
// a byte. The ESLint fences in .eslintrc.js say so in both directions.
//
// React >= 18.1, and this entry alone. The main bundle keeps its 16.5 floor; this one uses hooks and
// its lifecycle is pinned by a StrictMode test that is only honest on 18 - see the README.

import { checkLibraryVersion } from "survey-core";

// The one thing a host needs: <SurveyTester model={new SurveyTesterModel(host)} />.
export { SurveyTester, SettingsView } from "../tester/SurveyTester";

// The two panes, for a host that lays the widget out itself.
export { RecordingPane, SpectatorPane, TargetMark } from "../tester/SurveyPane";
export { ConsolePane } from "../tester/ConsolePane";
export { JsonEditorView } from "../tester/JsonEditorView";

// The rows and the adorners. They are registered by importing this entry - the factory registrations
// are import side effects, exactly as they are in the main entry - and are exported by name so that a
// host can wrap one.
export { TestRowView } from "../tester/TestRowView";
export { StepRowView } from "../tester/StepRowView";
export { Adorner, AdornerContext, CheckMenuView, CheckRowView, SurveyAdorner } from "../tester/adorners";

// The two hooks this bundle is built on. A host writing a component of its own over one of the
// widget's models needs the first; the second is what makes a model survive React 18's StrictMode
// rehearsal.
export { useModelUpdates, useOwnedModel } from "../tester/useModel";

export let Version: string;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Version = `${process.env.VERSION}`;
checkLibraryVersion(Version, "survey-creator-react-tester");

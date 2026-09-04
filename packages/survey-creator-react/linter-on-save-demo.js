// Demo page for issue #7967 - the linter in the save flow. Throwaway: it is not part of the
// package, it only drives the creator so the save states can be looked at. The console logs
// are the point of it - they show what the events carry.
/* eslint-disable no-console */

// Every finding below survives the serializer, so the save path sees the same defects the JSON
// tab does.
const json = {
  title: "Linter on save",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "age", inputType: "number", title: "Your age" },
        { type: "dropdown", name: "country", title: "Country", choices: ["France", "Germany"] },
        // reference/unknown - error
        { type: "text", name: "note", title: "Note", visibleIf: "{ag} > 18" },
        // reference/self - error
        { type: "text", name: "nickname", title: "Nickname", visibleIf: "{nickname} notempty" },
        // choices/dead-source - error
        { type: "checkbox", name: "copied", title: "Copied choices", choicesFromQuestion: "nosuchquestion" },
        // expression/unknown-choice - warning
        { type: "text", name: "city", title: "City", visibleIf: "{country} = 'Fance'" },
        // expression/type-mismatch - warning
        { type: "text", name: "hint", title: "Hint", visibleIf: "{age} = 'eighteen'" }
      ]
    },
    // page/empty - warning
    { name: "page2", elements: [] }
  ],
  triggers: [
    // trigger/unknown-target - error
    { type: "setvalue", expression: "{age} > 18", setToName: "citty", setValue: 1 }
  ]
};

const creator = new SurveyCreator.SurveyCreator({
  showLogicTab: true,
  showThemeTab: true,
  autoSaveEnabled: false
});
creator.JSON = json;

creator.saveSurveyFunc = (no, callback) => {
  setTimeout(() => callback(no, true), 300);
};

// The policy lives in the host, which is the whole point of the event: the creator never
// blocks a save on its own.
window.demoBlockOnErrors = true;
creator.onSurveySaving.add((sender, options) => {
  console.log("onSurveySaving", options.reason, options.lintResult);
  if (options.reason === "auto") return;
  if (!window.demoBlockOnErrors || !options.lintResult) return;
  options.allow = options.lintResult.errorCount === 0;
});

creator.onSurveyLinted.add((sender, options) => {
  console.log("onSurveyLinted", options.reason, options.result.errorCount, options.result.warningCount);
});

const policyAction = new Survey.Action({
  id: "demo-lint-policy",
  title: "Block on errors: on",
  showTitle: true,
  action: () => {
    window.demoBlockOnErrors = !window.demoBlockOnErrors;
    policyAction.title = "Block on errors: " + (window.demoBlockOnErrors ? "on" : "off");
  }
});
creator.toolbar.actions.push(policyAction);

const autoSaveAction = new Survey.Action({
  id: "demo-auto-save",
  title: "Auto-save: off",
  showTitle: true,
  action: () => {
    creator.autoSaveEnabled = !creator.autoSaveEnabled;
    creator.showSaveButton = !creator.autoSaveEnabled;
    autoSaveAction.title = "Auto-save: " + (creator.autoSaveEnabled ? "on" : "off");
  }
});
creator.toolbar.actions.push(autoSaveAction);

window.creator = creator;

ReactDOM.createRoot(document.getElementById("root"))
  .render(React.createElement(SurveyCreator.SurveyCreatorComponent, { creator: creator }));

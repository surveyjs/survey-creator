const json = {
  title: "Release feedback",
  description: "A short form you can answer or redesign in place.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "satisfaction",
          title: "How satisfied are you with the latest release?",
          choices: ["Very satisfied", "Satisfied", "Neutral", "Unsatisfied"]
        },
        {
          type: "panel",
          name: "panel1",
          elements: [
            {
              type: "text",
              name: "text1",
              title: "Enter your text here"
            }
          ]
        },
        {
          type: "comment",
          name: "comments",
          title: "What should we change next?"
        }
      ]
    }
  ]
};

const survey = new Survey.Model(json);
const host = document.getElementById("survey-host");

function currentTheme() {
  const family = document.getElementById("theme-family").value;
  const mode = document.getElementById("theme-mode").value;
  const panels = document.getElementById("theme-panels").value;
  return SurveyTheme[family + mode + panels];
}

function renderSurvey() {
  const theme = currentTheme();
  ReactDOM.render(
    <SurveyCreator.EditableSurvey survey={survey} theme={theme} />,
    host
  );
}

["theme-family", "theme-mode", "theme-panels"].forEach((id) => {
  document.getElementById(id).addEventListener("change", renderSurvey);
});

renderSurvey();

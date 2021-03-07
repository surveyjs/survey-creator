if (!window["%hammerhead%"]) {
  // SurveyCreator.SurveyJSONEditor.aceBasePath = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/";

  SurveyCore.StylesManager.applyTheme("modern");
  let options = {
    // showTestSurveyTab: false,
    // showJSONEditorTab: false
  };
  let creator = new SurveyCreatorKnockout.SurveyCreator(options);
  let json = {
    completedHtml:
      "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    completedHtmlOnCondition: [
      {
        expression: "{nps_score} > 8",
        html:
          "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>",
      },
      {
        expression: "{nps_score} < 7",
        html:
          "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>",
      },
    ],
    pages: [
      {
        name: "page1",
        title: "page1 -- title",
        description: "page1 -- description",
        elements: [
          {
            type: "rating",
            name: "nps_score",
            title:
              "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: "(Most unlikely)",
            maxRateDescription: "(Most likely)",
          },
          {
            type: "checkbox",
            name: "promoter_features",
            visibleIf: "{nps_score} >= 9",
            title: "What features do you value the most?",
            isRequired: true,
            validators: [
              {
                type: "answercount",
                text: "Please select two features maximum.",
                maxCount: 2,
              },
            ],
            hasOther: true,
            choices: [
              "Performance",
              "Stability",
              "User Interface",
              "Complete Functionality",
            ],
            otherText: "Other feature:",
            colCount: 2,
          },
          {
            type: "comment",
            name: "passive_experience",
            visibleIf: "{nps_score} > 6  and {nps_score} < 9",
            title: "What is the primary reason for your score?",
          },
          {
            type: "comment",
            name: "disappointed_experience",
            visibleIf: "{nps_score} notempty",
            title:
              "What do you miss and what was disappointing in your experience with us?",
          },
        ],
      },
      {
        name: "page2",
        elements: [
          {
            type: "checkbox",
            name: "question4",
            choices: ["item1", "item2", "item3"],
          },
        ],
      },
      {
        name: "page3",
        elements: [
          {
            type: "dropdown",
            name: "question5",
            choices: ["item1", "item2", "item3"],
          },
        ],
      },
      {
        name: "page4",
        elements: [
          {
            type: "rating",
            name: "question6",
          },
        ],
      },
    ],
    showQuestionNumbers: "off",
  };
  creator.JSON = json;
  ko.applyBindings({ creator: creator });
}

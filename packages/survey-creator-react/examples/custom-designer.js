let json = {
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
          maxRateDescription: "(Most likely)"
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
              maxCount: 2
            }
          ],
          showOtherItem: true,
          choices: [
            "Performance",
            "Stability",
            "User Interface",
            "Complete Functionality"
          ],
          otherText: "Other feature:",
          colCount: 2
        },
        {
          type: "comment",
          name: "passive_experience",
          visibleIf: "{nps_score} > 6  and {nps_score} < 9",
          title: "What is the primary reason for your score?"
        },
        {
          type: "comment",
          name: "disappointed_experience",
          visibleIf: "{nps_score} notempty",
          title:
            "What do you miss and what was disappointing in your experience with us?"
        }
      ]
    }
  ]
};

const options = {
  showLogicTab: true,
  showTranslationTab: true,
  autoSaveEnabled: true
};

class CustomDesignerTab extends SurveyCreator.TabDesignerComponent {
  constructor(props) {
    super(props);
  }
  renderElement() {
    const survey = this.creator.survey;
    const designerTabClassName = "svc-tab-designer " + survey.css.root;

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {SurveyReact.ReactElementFactory.Instance.createElement('svc-toolbox', { model: this.creator })}
        </div>
        <div className={designerTabClassName}>
          <div className={survey.css.container}>
            <div onClick={function () { this.creator.selectElement(survey); }}>
              <SurveyReact.SurveyHeader survey={survey}></SurveyReact.SurveyHeader>
            </div>
            <div>Actions below survey header</div>
            <SurveyReact.SurveyActionBar model={this.creator.toolbar}/>
            <SurveyCreator.SurveyNavigation survey={survey} location="top"/>
            {this.getRenderedPages()}
            <SurveyCreator.SurveyNavigation survey={survey} location="bottom" css={survey.css} />
          </div>
        </div>
        {SurveyReact.ReactElementFactory.Instance.createElement('svc-property-panel', { model: this.creator })}
      </React.Fragment>
    );
  }
}

SurveyReact.ReactElementFactory.Instance.registerElement(
  "svc-tab-designer",
  (props) => {
    return React.createElement(CustomDesignerTab, props);
  }
);

class CustomCreator extends SurveyCreator.SurveyCreatorComponent {
  constructor(props) {
    super(props);
  }
  renderElement() {
    const creator = this.props.creator;
    return (
      <div className="svc-creator">
        <div className="svc-creator__area svc-flex-column">
          <div className="svc-creator__content-wrapper svc-flex-row">
            <div className="svc-creator__content-holder svc-flex-column">
              {this.renderActiveTab()}
            </div>
          </div>
          <SurveyCreator.NotifierComponent
            creator={creator}
            notifier={creator.notifier}
          />
        </div>
      </div>
    );
  }
}

const creator = new SurveyCreator.SurveyCreator(options);
creator.JSON = json;
window.creator = creator;

creator.saveSurveyFunc = (no, callback) => {
  setTimeout(function () {
    callback(no, true);
  }, 1000);
};

ReactDOM.render(
  <React.StrictMode>
    <div>Custom navigation</div>
    <SurveyCreator.TabbedMenuComponent model={creator.tabbedMenu}/>
    <div>Some custom markup and custom creator component below</div>
    <CustomCreator creator={creator} />
  </React.StrictMode>,
  document.getElementById("root")
);

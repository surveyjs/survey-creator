Survey.ComponentCollection.Instance.add({ name: "newrating", title: "SuperRating", elementsJSON: [{ "type": "rating", "name": "superrating", "title": "1", "isRequired": true, "rateMin": 0, "rateMax": 10, "minRateDescription": "1", "maxRateDescription": "2" }] });
Survey.ComponentCollection.Instance.add({ name: "d2", title: "DDD", questionJSON: { "type": "dropdown", "name": "superrating", "title": "1", "isRequired": true, choices: [1, 2, 3] } });

let json = {
  completedHtml:
    "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
  completedHtmlOnCondition: [
    {
      expression: "{nps_score} > 8",
      html:
        "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
    },
    {
      expression: "{nps_score} < 7",
      html:
        "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>"
    }
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
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "question4",
          choices: ["item1", "item2", "item3"]
        }
      ]
    },
    {
      name: "page3",
      elements: [
        {
          type: "dropdown",
          name: "question5",
          choices: ["item1", "item2", "item3"]
        }
      ]
    },
    {
      name: "page4",
      elements: [
        {
          type: "rating",
          name: "question6"
        }
      ]
    }
  ]
};

const options = {
  showLogicTab: true,
  showTranslationTab: true,
  showThemeTab: true,
  showEmbeddedSurveyTab: true,
  showThemeTab: true,
  showCreatorThemeSettings: true,
  autoSaveEnabled: true
};

class CustomToolboxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }
  toggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            left: "100%",
            top: 0,
            padding: "16px",
            cursor: "pointer"
          }}
          title={this.state.collapsed ? "Show toolbox" : "Hide toolbox"}
          onClick={() => this.toggle()}
        >
          {this.state.collapsed ? ">>" : "<<"}
        </div>
        {this.state.collapsed ? null : (
          <SurveyCreator.SurveyCreatorToolbox
            creator={this.props.creator}
          ></SurveyCreator.SurveyCreatorToolbox>
        )}
      </div>
    );
  }
}

// class CustomPropertyGridWrapper extends React.Component {
//   constructor(props) {
//       super(props);
//       this.btnClick = this
//           .btnClick
//           .bind(this);
//   }
//   btnClick() {
//       alert("The Button is clicked");
//   }
//   render() {
//       const model = this.props.model;
//       if (!model) 
//           return null;
//       const btnStyle = {
//           width: "100%",
//           height: "32px"
//       };
//       return <div>
//           <button onClick={this.btnClick} style={btnStyle}>Click me...</button>
//           <SurveyCreator.PropertyGridComponent model={model}></SurveyCreator.PropertyGridComponent>
//       </div>;
//   }
// }

// SurveyReact
//   .ReactElementFactory
//   .Instance
//   .registerElement("svc-property-grid", (props) => {
//       return React.createElement(CustomPropertyGridWrapper, props);
//   });
/*
class CreatorSurveyPageComponent2 extends SurveyCreator.CreatorSurveyPageComponent {
  renderFooter() {
    return (<div>Some Text {super.renderFooter()}</div>);
  }
}

SurveyReact.ReactElementFactory.Instance.registerElement("svc-page", (props) => {
  return React.createElement(CreatorSurveyPageComponent2, props);
});
*/
SurveyCreatorCore.registerSurveyTheme(SurveyTheme);
SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme);
const creator = new SurveyCreator.SurveyCreator(options);
//creator.applyCreatorTheme(SurveyCreatorTheme.testTheme);
creator.onModified.add((sender, options) => {
  console.log(JSON.stringify(options, null, 3));
});
creator.onMachineTranslate.add((_, options) => {
  const translatedStrings = [];
  options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
  options.callback(translatedStrings);
});
// creator.JSON = json;
// creator.locale = "de";
window.creator = creator;
creator.showOneCategoryInPropertyGrid = true;
creator.propertyGridNavigationMode = "buttons";
// creator.getPlugin("designer").showOneCategoryInPropertyGrid = true;
// creator.getPlugin("theme").showOneCategoryInPropertyGrid = true;

// Step 3: Add a custom adorner that saves a question configuration as a toolbox item
creator.onElementGetActions.add((_, options) => {
  if (options.element["isPage"]) return;
  const objToAdd = options.element;
  options.actions.unshift({
    id: "save-to-toolbox",
    title: "Save to Toolbox",
    iconName: "icon-toolbox",
    iconSize: 16,
    action: () => {
      //saveCustomItem(objToAdd);
    }
  });
});

function getCompositeInput(question) {
  return question.contentPanel.getQuestionByName("q1");
}

Survey.ComponentCollection.Instance.add({
  name: "myComposite",
  elementsJSON: [
    {
      name: "b1",
      type: "boolean",
      title: "N/A",
    },
    {
      name: "q1",
      type: "text",
      title: "Answer",
    },
  ],
  onInit() {
    Survey.Serializer.addProperties("myComposite", [
      {
        name: "maskType",
        category: "mask",
        default: "none",
        visibleIndex: 0,
        choices: ["none", "pattern", "datetime", "numeric", "currency"],
        onSetValue: function (obj, value) {
          obj.setPropertyValue("maskType", value);
          const q = getCompositeInput(obj);
          if (q) q.maskType = value;
        },
      },
      {
        name: "maskSettings:masksettings",
        category: "mask",
        visibleIndex: 1,
        dependsOn: ["maskType"],
        onGetValue: function (obj) {
          const q = getCompositeInput(obj);
          return q ? q.maskSettings : {};
        },
        onSetValue: function (obj, value) {
          const q = getCompositeInput(obj);
          if (q) {
            q.maskSettings.setData(value);
          }
        },
      },
    ]);
  },
});

creator.toolbox.searchEnabled = true;
creator.expandCollapseButtonVisibility = "onhover";
creator.onElementAllowOperations.add((sender, options) => {
  if (options.element.isPage) {
    options.allowDelete = sender.survey.pageCount > 1;
  }
});
//creator.toolboxLocation = "sidebar";
creator.animationEnabled = true;
creator.saveSurveyFunc = (no, callback) => {
  console.log(no);
  setTimeout(function () {
    callback(no, true);
  }, 1000);
};

// const editor = new SurveyCreatorCorePresets.CreatorPresetEditorModel();
// window.editor = editor;
// class PresetsTabComponent extends React.Component {
//   render() {
//     return (
//       <SurveyReact.Survey model={editor.model} />
//     );
//   }
// }

// const presetsPlugin = {
//   // Do nothing when the tab is activated or deactivated
//   activate: () => { },
//   deactivate: () => { return true; }
// };

// SurveyReact.ReactElementFactory.Instance.registerElement(
//   "svc-tab-presets",
//   (props) => {
//       return React.createElement(PresetsTabComponent, props);
//   }
// );
// creator.addTab({
//   name: "presets",
//   plugin: presetsPlugin,
//   title: "Presets",
//   componentName: "svc-tab-presets",
//   index: 100
// });




ReactDOM.render(
  <React.StrictMode>
    <SurveyCreator.SurveyCreatorComponent creator={creator} />
  </React.StrictMode>,
  document.getElementById("root")
);
// creator.toolbarItems.push(
//   new Survey.Action({
//     id: "toolboxCustomization",
//     visible: true,
//     title: "Toolbox Customization",
//     enabled: true,
//     action: function () {
//       alert("Hi!");
//     }
//   })
// );
// creator.toolbox.isCompact = true;
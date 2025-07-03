Survey.ComponentCollection.Instance.add({ name: "newrating", title: "SuperRating", elementsJSON: [{ "type": "rating", "name": "superrating", "title": "1", "isRequired": true, "rateMin": 0, "rateMax": 10, "minRateDescription": "1", "maxRateDescription": "2" }] });
Survey.ComponentCollection.Instance.add({ name: "d2", title: "DDD", questionJSON: { "type": "dropdown", "name": "superrating", "title": "1", "isRequired": true, choices: [1, 2, 3] } });

let json = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "panel",
          "name": "panel1",
          "questionTitleWidth": "200px",
          "questionTitleLocation": "left",
          "elements": [
            {
              "type": "rating",
              "name": "question1",
              "title": "Organization",
              "rateType": "stars"
            },
            {
              "type": "rating",
              "name": "question2",
              "title": "Service",
              "rateType": "stars"
            },
            {
              "type": "rating",
              "name": "question3",
              "title": "Ambiance",
              "rateType": "stars"
            },
            {
              "type": "rating",
              "name": "question4",
              "title": "Concert",
              "rateType": "stars"
            }
          ]
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
  isAutoSave: true
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
creator.onDefineElementMenuItems.add((_, options) => {
  if (options.obj["isPage"]) return;
  const objToAdd = options.obj;
  options.items.unshift({
    id: "save-to-toolbox",
    title: "Save to Toolbox",
    iconName: "icon-toolbox",
    iconSize: 16,
    action: () => {
      //saveCustomItem(objToAdd);
    }
  });
});
creator.JSON = json;

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
  if (options.obj.isPage) {
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

if(window.SurveyCreatorCorePresets) {
  window.editor = new SurveyCreatorCorePresets.TabPresetsPlugin(creator);
}


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
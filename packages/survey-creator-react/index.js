let json = {
  elements: [
      {
          type: "matrixdynamic",
          name: "question1",
      }
  ]
};

const options = {
  showLogicTab: true,
  showTranslationTab: true,
  showEmbeddedSurveyTab: true,
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

SurveyReact.ReactElementFactory.Instance.registerElement(
  "svc-toolbox",
  (props) => {
    return React.createElement(CustomToolboxWrapper, props);
  }
);

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

const creator = new SurveyCreator.SurveyCreator(options);

ReactDOM.render(
  <React.StrictMode>
    <SurveyCreator.SurveyCreatorComponent creator={creator} />
  </React.StrictMode>,
  document.getElementById("root")
);

creator.JSON = {
  elements: [
      {
          type: "matrixdynamic",
          name: "question1",
      }
  ]
};

creator.onGetPropertyReadOnly.add(function(editor, options) {
  var obj = options.obj;
  if (!obj || !obj.page) return;

  //you may check obj.getType();
  if (obj.name === "question1") {
      options.readOnly = true;
  }
 });

window.creator = creator;

creator.onElementAllowOperations.add((sender, options) => {
  if (options.obj.isPage) {
    options.allowDelete = sender.survey.pageCount > 1;
  }
});

creator.saveSurveyFunc = (no, callback) => {
  setTimeout(function () {
    callback(no, true);
  }, 1000);
};


creator.toolbarItems.push(
  new Survey.Action({
    id: "toolboxCustomization",
    visible: true,
    title: "Toolbox Customization",
    enabled: true,
    action: function () {
      alert("Hi!");
    }
  })
);
// creator.toolbox.isCompact = true;

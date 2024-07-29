function init() {

  if (!window["%hammerhead%"]) {
    // SurveyCreator.SurveyJSONEditor.aceBasePath = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/";

    Survey.Serializer.findProperty("page", "name").defaultValue = "test";

    SurveyCreator.localization.currentLocale = "en";
    let options = {
      // showTestSurveyTab: false,
      // showJSONEditorTab: false
      showLogicTab: true,
      showTranslationTab: true,
      showThemeTab: true,
      showEmbeddedSurveyTab: true,
      isAutoSave: true,
      inplaceEditForValues: true
    };

    // const propertyGridTemplate = "<div><button data-bind='click: btnClick, style: btnStyle'>Click me...</button><!-- ko template: { name: 'survey-content', data: model  } --><!-- /ko --></div>";
    // ko.components.unregister("svc-property-grid");
    // ko.components.register("svc-property-grid", {
    //   viewModel: {
    //     createViewModel: (params, componentInfo) => {
    //       const subscrib = ko.computed(() => {
    //         const model = ko.unwrap(params.model);
    //         new SurveyKnockout.ImplementorBase(model);
    //       });
    //       ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
    //         subscrib.dispose();
    //       });
    //       params.btnClick = ()=> { alert("The Button is clicked") };
    //       params.btnStyle = {
    //         width: "100%",
    //         height: "32px"
    //       };

    //       return params;
    //     }
    //   },
    //   template: propertyGridTemplate
    // });

    let creator = new SurveyCreator.SurveyCreator(options);
    creator.onMachineTranslate.add((sender, options) => {
      options.callback(false, []);
    });

    creator.saveSurveyFunc = (no, callback) => {
      setTimeout(function () {
        callback(no, true);
      }, 1000);
    };
    creator.toolbox.searchEnabled = true;

    let json = {
      "elements": [{
        "type": "dropdown",
        "name": "country",
        "title": "Select a country",
        "description": "A full list of countries is queried from a RESTful web service.",
        "choicesByUrl": {
          "url": "https://surveyjs.io/api/CountriesExample",
          "valueName": "name"
        }
      }, {
        "type": "panel",
        "name": "countriesByRegion",
        "title": "Filter countries by selected region",
        "description": "Only countries from the selected region are queried.",
        "elements": [{
          "type": "dropdown",
          "name": "region",
          "title": "Select a region",
          "choices": ["Africa", "Americas", "Asia", "Europe", "Oceania"]
        }, {
          "type": "dropdown",
          "name": "reg_country",
          "title": "Select a country",
          "choicesByUrl": {
            "url": "https://surveyjs.io/api/CountriesExample?region={region}",
            "valueName": "name"
          }
        }]
      }],
      "showQuestionNumbers": false
    };

    window.creator = creator;
    // ko.applyBindings({ creator: creator });
    creator.render("surveyCreator");

    function setJSON() {
      window.creator.JSON = json;
    }
    setJSON();
  }

}

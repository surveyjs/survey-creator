import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { creatorCss } from "../../surveyTheme/creator-css";
import "./property-panel.scss";
import "../../surveyTheme/survey.scss";
const template = require("./property-panel.html");

// export class PropertyPanelTabViewModel {
//   public data: SurveyElementEditorTabModel;
//   public editorProperties: ko.MaybeObservableArray<any>;
//   public disabled: ko.MaybeObservable<boolean>;

//   constructor(data: SurveyElementEditorTabModel) {
//     this.data = data;
//     this.editorProperties = data.editorProperties;
//     this.disabled = ko.observable(false);
//   }

//   public collapsed: ko.Observable<boolean> = ko.observable(false);

//   public toggle = () => {
//     this.collapsed(!this.collapsed());
//   };

//   public get title() {
//     return this.data.title;
//   }
// }

// export class PropertyPanelViewModel {
//   public title: ko.MaybeObservable<string>;
//   public tabs: ko.Computed<Array<PropertyPanelTabViewModel>>;
//   constructor(
//     tabs: ko.MaybeObservableArray<SurveyElementEditorTabModel>,
//     title: ko.MaybeObservable<string>
//   ) {
//     this.tabs = ko.computed<Array<PropertyPanelTabViewModel>>(() => {
//       var res = ko
//         .unwrap(tabs)
//         .map((tabData) => new PropertyPanelTabViewModel(tabData));
//       if (res.length > 0 && !res[0].disabled) {
//         res[0].collapsed(false);
//       }
//       return res;
//     });
//     this.showHeader = ko.computed<boolean>(() => {
//       return this.tabs().length > 1;
//     });
//     this.title = title;
//   }

//   showHeader: ko.Computed<boolean>;
// }

export class PropertyPanelViewModel {
  setupSurvey: ko.Computed<any>;
  constructor(public title: string, public survey: ko.Observable<Survey>) {
    //todo
    this.setupSurvey = ko.computed(() => {
      survey().showQuestionNumbers = "off";
      survey().css = creatorCss;
    });
  }
  public dispose() {
    this.setupSurvey.dispose();
  }
}

ko.components.register("svc-property-panel", {
  viewModel: {
    createViewModel: (params: any) => {
      return new PropertyPanelViewModel(params.title, params.survey);
    },
  },
  template: template,
});

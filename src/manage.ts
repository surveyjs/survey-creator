import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyCreator } from "./editor";

class ServiceAPI extends Survey.dxSurveyService {
  constructor(private baseUrl: string, private accessKey: string) {
    super();
  }

  public getActiveSurveys(
    onLoad: (success: boolean, result: string, response: any) => void
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.baseUrl + "/getActive?accessKey=" + this.accessKey);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      var result = xhr.response ? JSON.parse(xhr.response) : null;
      onLoad(xhr.status == 200, result, xhr.response);
    };
    xhr.send();
  }
  public createSurvey(
    name: string,
    onCreate: (success: boolean, result: string, response: any) => void
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      this.baseUrl + "/create?accessKey=" + this.accessKey + "&name=" + name
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      var result = xhr.response ? JSON.parse(xhr.response) : null;
      onCreate(xhr.status == 200, result, xhr.response);
    };
    xhr.send();
  }
  public saveSurvey(
    id: string,
    json: string,
    onSave?: (success: boolean, result: string, response: any) => void
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.baseUrl + "/changeJson?accessKey=" + this.accessKey);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
      var result = xhr.response ? JSON.parse(xhr.response) : null;
      !!onSave && onSave(xhr.status == 200, result, xhr.response);
    };
    xhr.send(JSON.stringify({ Id: id, Json: json, Text: json }));
  }
  public updateSurveyName(
    id: string,
    name: string,
    onUpdate?: (success: boolean, result: string, response: any) => void
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      this.baseUrl +
        "/changeName/" +
        id +
        "?accessKey=" +
        this.accessKey +
        "&name=" +
        name
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      var result = xhr.response ? JSON.parse(xhr.response) : null;
      !!onUpdate && onUpdate(xhr.status == 200, result, xhr.response);
    };
    xhr.send();
  }
}

export interface ISurveyInfo {
  name: any;
  id: string;
  postId: string;
}

export class SurveyDescription implements ISurveyInfo {
  constructor(
    public name = ko.observable(""),
    public createdAt = new Date(Date.now()).toDateString(),
    public id = "",
    public resultId = "",
    public postId = ""
  ) {}
}

export class SurveysManager {
  public static serviceUrlPath: string = "/api/MySurveys";
  static StorageKey = "mySurveys";
  private api: ServiceAPI;

  getSurveys(): Array<SurveyDescription> {
    return JSON.parse(
      window.localStorage.getItem(SurveysManager.StorageKey) || "[]"
    ).map(item => {
      return new SurveyDescription(
        ko.observable<string>(item.name),
        item.createdAt,
        item.id,
        item.resultId,
        item.postId
      );
    });
  }

  setSurveys(surveys: Array<ISurveyInfo>) {
    window.localStorage.setItem(SurveysManager.StorageKey, ko.toJSON(surveys));
  }

  constructor(
    private baseUrl: string,
    private accessKey: string,
    private editor: SurveyCreator
  ) {
    var hash = window.location.hash;
    if (hash.indexOf("#") === 0) {
      this.surveyId(hash.slice(1));
    }
    this.api = new ServiceAPI(
      baseUrl + SurveysManager.serviceUrlPath,
      accessKey
    );

    editor.isAutoSave = true;
    editor.showState = true;
    editor.saveSurveyFunc = (saveNo, callback) => {
      if (!editor.surveyId && !this.surveyId()) {
        this.addHandler(success => callback(saveNo, success));
      }
      if (!!editor.surveyId || !!this.surveyId()) {
        this.api.saveSurvey(
          editor.surveyId || this.surveyId(),
          editor.text,
          success => callback(saveNo, success)
        );
      }
    };

    this.surveys(this.getSurveys());
    if (!this.surveyId()) {
      this.currentSurvey(this.surveys()[0]);
    } else {
      var survey = this.surveys().filter(s => s.id === this.surveyId())[0];
      if (!!survey) {
        this.currentSurvey(survey);
        this.surveyId(undefined);
      } else {
        editor.loadSurvey(this.surveyId());
      }
    }
    var onCurrentSurveyChanged = (survey: ISurveyInfo) => {
      if (!!survey) {
        this.surveyId(undefined);
        window.location.hash = "#" + survey.id;
        if (editor.surveyId === survey.id) return;
        editor.loadSurvey(survey.id);
        editor.surveyId = survey.id;
        editor.surveyPostId = survey.postId;
      } else {
        if (!this.surveyId()) {
          editor.surveyId = "";
          editor.surveyPostId = "";
          window.location.hash = "";
          editor.text = "";
        }
      }
    };
    this.currentSurvey.subscribe(onCurrentSurveyChanged);
    onCurrentSurveyChanged(this.currentSurvey());

    var currentSurveyCanBeAttached = ko.observable(false);
    ko.computed(() => {
      var survey = this.currentSurvey();
      currentSurveyCanBeAttached(false);
      if (!!survey) {
        this.api.updateSurveyName(survey.id, survey.name.peek(), success => {
          currentSurveyCanBeAttached(success);
        });
      }
    });
    this.toolbarItem = {
      id: "svd-attach-survey",
      template: "attach-survey",
      visible: currentSurveyCanBeAttached,
      action: ko.computed(
        () =>
          "https://dxsurvey.com/Home/AttachSurvey/" +
          (this.currentSurvey() && this.currentSurvey().id)
      ),
      css: "link-to-attach",
      innerCss: "icon-cloud",
      title: "Attach survey to your SurveyJS service account..."
    };
  }
  toolbarItem;

  isEditMode = ko.observable(false);
  edit(model, event) {
    var survey = this.currentSurvey();
    if (!!survey) {
      if (this.isEditMode()) {
        survey.name(this.currentSurveyName());
        this.setSurveys(this.surveys());
        this.api.updateSurveyName(survey.id, survey.name());
        this.isEditMode(false);
      } else {
        this.currentSurveyName(survey.name());
        this.isEditMode(true);
        event.target.parentNode.parentElement
          .getElementsByTagName("input")[0]
          .focus();
      }
    }
  }

  addHandler(
    onAdd?: (success: boolean, result: string, response: any) => void
  ) {
    this.isLoading(true);
    this.api.createSurvey(
      "NewSurvey",
      (success: boolean, result: any, response: any) => {
        var newSurveyDescription = new SurveyDescription(
          ko.observable(result.Name),
          result.CreatedAt,
          result.Id,
          result.ResultId,
          result.PostId
        );
        this.surveys.push(newSurveyDescription);
        this.setSurveys(this.surveys());
        this.editor.surveyId = result.Id;
        this.editor.surveyPostId = result.PostId;
        this.api.saveSurvey(result.Id, this.editor.text);
        this.currentSurvey(newSurveyDescription);
        this.isLoading(false);
        onAdd && onAdd(success, result, response);
      }
    );
  }

  add() {
    this.addHandler();
  }

  remove() {
    if (confirm("Do you really want to remove current survey?")) {
      this.surveys.remove(this.currentSurvey());
      this.setSurveys(this.surveys());
      this.currentSurvey(this.surveys()[0]);
    }
  }

  surveyId = ko.observable<string>();
  surveys = ko.observableArray<ISurveyInfo>();
  currentSurvey = ko.observable<ISurveyInfo>();
  currentSurveyName = ko.observable<string>("");
  isLoading = ko.observable<boolean>(false);

  get cssEdit() {
    return this.isEditMode() ? "icon-saved" : "icon-edit";
  }
  get cssAdd() {
    return !this.surveyId() ? "icon-new" : "icon-fork";
  }
  get titleEdit() {
    return this.isEditMode() ? "Save survey name" : "Edit survey name";
  }
  get titleAdd() {
    return !this.surveyId() ? "Add new survey" : "Fork this survey";
  }
  nameEditorKeypress = (model, event) => {
    if (event.keyCode === 13) {
      this.edit(model, event);
    } else if (event.keyCode === 27) {
      this.isEditMode(false);
    }
  };
}

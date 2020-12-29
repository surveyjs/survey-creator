import * as ko from "knockout";
import { ICreatorPlugin, SurveyCreator } from "./creator";

// import "./plugin.scss";
const template = require("./plugin.html");
// import template from "./plugin.html";

export class PluginModel implements ICreatorPlugin {
    private _text: string = undefined;
    private _isModified = false;
    public creator: SurveyCreator;
  
    constructor(creator: SurveyCreator) {
      this.creator = creator;
      creator.tabs.push({
        name: "plugin",
        title: "My Plugin",
        template: "my-plugin",
        data: this,
        action: () => {
            creator.makeNewViewActive("plugin");
            this.activate();
        },
      });
      creator.plugins["plugin"] = this;
    }

    get text() {
        return this._text;
    }
    set text(val: string) {
        if(this._text != val) {
            this._text = val;
            this.onTextChanged();
        }
    }

    onTextChangedCallback: (text: string) => void;
    onTextChanged() {
        this._isModified = true;
        this.onTextChangedCallback && this.onTextChangedCallback(this.text);
    }

    activate() {
        this.text = this.creator.text;
        this._isModified = false;
    }
    deactivate() {
        if(!this._isModified) {
            return true;
        }
        // Long long checks and finally fail
        return false;
    }
    dispose() {
    }
  }
  
export class PluginViewModel {
  public model: PluginModel;

  constructor(model: PluginModel) {
    this.model = model;
    model.onTextChangedCallback = val => this.text(val);
    this.text(model.text);
  }

  text = ko.observable();

  dispose() {
    this.model.onTextChangedCallback = undefined;
  }
}

ko.components.register("my-plugin", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model = params.data;
      const viewModel = new PluginViewModel(model);
      return viewModel;
    },
  },
  template: template,
});

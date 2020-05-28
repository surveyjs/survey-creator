import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { IQuestionToolboxItem } from './toolbox';
import { getLocString } from "../editorLocalization";
import { SurveyCreator } from '../editor';

import "./toolbox-item.scss";
var template = require("html-loader?interpolate!val-loader!./toolbox-item.html");

export class ToolboxItemViewModel {
  constructor(public item: IQuestionToolboxItem, private _creator: SurveyCreator) {
  }
  get ariaLabel() { return this.item.tooltip + ' ' + getLocString('toolbox') + ' item'; }
  click = () => { this._creator.clickToolboxItem(this.item); }
  dragstart = (el, e) => { this._creator.draggingToolboxItem(this.item, e); return true; }
  dragend = (el, e) => { this._creator.dragEnd(); }
}

ko.components.register("svd-toolbox-item", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var item: IQuestionToolboxItem = params.item;
      var creator = params.creator;
      return new ToolboxItemViewModel(item, creator);
    }
  },
  template: template
});

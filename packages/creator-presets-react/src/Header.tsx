import * as React from "react";
import { Base } from "survey-core";
import { CreatorPresetEditorModel } from "creator-presets-core";
import { SurveyElementBase, SurveyActionBar, Survey, SvgIcon } from "survey-react-ui";

export class PresetsHeaderComponent extends SurveyElementBase<{ editor: CreatorPresetEditorModel }, any> {
  constructor(props) {
    super(props);
  }
  get model() {
    return this.props.editor;
  }
  get navigationBar() {
    return this.model.navigationBar;
  }
  get locTitle() {
    return this.model.locTitle;
  }
  renderElement() {
    return <div className="presets-top-bar">
      <span className="presets-top-bar__header presets-header">
        <SvgIcon iconName={"icon-creator_logo"} className="presets-header__icon" size={"auto"}></SvgIcon>
        <span className="presets-header__title">{this.renderLocString(this.locTitle)}</span>
      </span>
      <div className="presets-top-bar__navigation-bar">
        {<SurveyActionBar model={this.navigationBar} handleClick={true} />}
      </div>
    </div>;
  }
}

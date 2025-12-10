import * as React from "react";
import { Base, SurveyModel, PageModel, RendererFactory } from "survey-core";
import {
  ReactElementFactory,
  ReactQuestionFactory,
  Survey,
  SurveyElementBase,
  SurveyQuestionElementBase,
  SvgIcon,
} from "survey-react-ui";
import { getLocString, PropertyGridViewModel } from "survey-creator-core";
export class PresetsLauncher extends SurveyQuestionElementBase {
  renderElement() {
    return (
      <div className="sps-launch">
        <button className="sps-launch__card"
          onClick={() => this.questionBase.booleanValue = true}
        >
          <div className="sps-launch__container">
            <div className="sps-launch__text">{getLocString("presets.plugin.buttonTitle")}</div>
            <div className="sps-launch__text2">{getLocString("presets.plugin.buttonDescription")}</div>
          </div>
          <div className="sps-launch__icon">
            <div className="sps-launch__chevron-right-16-x-16">
              <div className="sps-launch__icon2">
                <SvgIcon size={"auto"} iconName={"chevrondown-24x24"}></SvgIcon>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion(
  "presets-launcher",
  (props) => {
    return React.createElement(PresetsLauncher, props);
  }
);

import * as React from "react";
import PropTypes from "prop-types";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  Survey,
  SurveyElementBase,
  SvgIcon,
} from "survey-react-ui";
import { PropertyGridViewModel } from "survey-creator-core";
interface IPresetsPropertyGridWrapperProps {
  model: PropertyGridViewModel;

}
export class PresetsPropertyGridWrapper extends React.Component {
  static propTypes = {
    model: PropTypes.object.isRequired,

  };

  constructor(props: IPresetsPropertyGridWrapperProps) {
    super(props);
  }
  render() {
    const model = (this.props as IPresetsPropertyGridWrapperProps).model;
    if (!model) return null;

    return (
      <React.Fragment>
        <div className="sps-launch">
          <button className="sps-launch__card"
            onClick={ model["showPresets"] }
          >
            <div className="sps-launch__container">
              <div className="sps-launch__text">Set up Creator Presets</div>
              <div className="sps-launch__text2">Global UI customization</div>
              <div className="sps-launch__icon">
                <div className="sps-launch__chevron-right-16-x-16">
                  <div className="sps-launch__icon2">
                    <SvgIcon size={"auto"} iconName={"chevrondown-24x24"}></SvgIcon>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        { ReactElementFactory.Instance.createElement("svc-property-grid", { model: model })}
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-presets-property-grid", (props) => {
  return React.createElement(PresetsPropertyGridWrapper, props);
});

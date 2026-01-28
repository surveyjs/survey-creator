import * as React from "react";
import {
  ReactElementFactory,
  SvgIcon,
} from "survey-react-ui";
import { getLocString, PropertyGridViewModel } from "survey-creator-core";
interface IPresetsPropertyGridWrapperProps {
  model: PropertyGridViewModel;
}
export class PresetsPropertyGridWrapper extends React.Component<IPresetsPropertyGridWrapperProps, any> {
  constructor(props: IPresetsPropertyGridWrapperProps) {
    super(props);
  }
  render() {
    const model = this.props.model;
    if (!model) return null;

    return (
      <React.Fragment>
        <div className="sps-launch">
          <button className="sps-launch__card"
            onClick={ model["showPresets"] }
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
        { ReactElementFactory.Instance.createElement("svc-property-grid", { model: model })}
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-presets-property-grid", (props) => {
  return React.createElement(PresetsPropertyGridWrapper, props as IPresetsPropertyGridWrapperProps);
});

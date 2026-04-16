import * as React from "react";
import { ReactElementFactory, SvgIcon } from "survey-react-ui";

interface ISideBarLaunchCardModel {
  onClick: () => void;
  title: string;
  description: string;
}

interface ISideBarLaunchCardProps {
  model: ISideBarLaunchCardModel;
}

export class SideBarLaunchCard extends React.Component<ISideBarLaunchCardProps, any> {
  render() {
    const model = this.props.model;
    if (!model) return null;
    return (
      <div className="spg-launch">
        <button className="spg-launch__card"
          onClick={model.onClick}
        >
          <div className="spg-launch__container">
            <div className="spg-launch__text">{model.title}</div>
            <div className="spg-launch__text2">{model.description}</div>
          </div>
          <div className="spg-launch__icon">
            <div className="spg-launch__chevron-right-16-x-16">
              <div className="spg-launch__icon2">
                <SvgIcon size={"auto"} iconName={"chevrondown-24x24"}></SvgIcon>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-launch-card", (props) => {
  return React.createElement(SideBarLaunchCard, props as ISideBarLaunchCardProps);
});

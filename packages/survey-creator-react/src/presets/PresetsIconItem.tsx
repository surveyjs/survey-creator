import * as React from "react";
import { ItemValue } from "survey-core";
import {
  ReactElementFactory,
  Survey,
  SurveyElementBase,
  SvgIcon,
} from "survey-react-ui";
import { PropertyGridViewModel } from "survey-creator-core";
interface IPresetsIconItemProps {
  item: ItemValue;
}
export class PresetsIconItem extends React.Component<any, any> {
  constructor(props: IPresetsIconItemProps) {
    super(props);
  }
  render() {
    const item = (this.props as IPresetsIconItemProps).item;
    if (!item) return null;

    return (
      <div className="sps-icon-item"
        style={{ display: "flex" }}>
        <SvgIcon className="sps-icon-item__icon" size="auto" iconName={item.value} />
        <span className="sps-icon-item__text">{item.title}</span>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-presets-icon-item", (props) => {
  return React.createElement(PresetsIconItem, props);
});

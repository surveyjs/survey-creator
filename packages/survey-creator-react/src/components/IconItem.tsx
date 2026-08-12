import * as React from "react";
import { ItemValue } from "survey-core";
import { ReactElementFactory, SvgIcon } from "survey-react-ui";

interface IIconItemProps {
  item: ItemValue;
}

export class IconItem extends React.Component<IIconItemProps, any> {
  render() {
    const item = this.props.item;
    if (!item) return null;

    return (
      <div className="svc-icon-item">
        <SvgIcon className="svc-icon-item__icon" size="auto" iconName={item.value} />
        <span className="svc-icon-item__text">{item.title}</span>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-presets-icon-item", (props) => {
  return React.createElement(IconItem, props as IIconItemProps);
});


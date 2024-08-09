import * as React from "react";
import { Switcher } from "survey-creator-core";
import { Base } from "survey-core";
import { ReactElementFactory, attachKey2click, SurveyElementBase } from "survey-react-ui";

interface ISwitcherComponentProps {
  item: Switcher;
}

export class SwitcherComponent extends SurveyElementBase<ISwitcherComponentProps, any> {
  get item(): Switcher {
    return this.props.item;
  }

  protected getStateElement(): Base {
    return this.item;
  }

  renderElement() {
    const tooltip = this.item.tooltip || this.item.title;
    const title = this.item.hasTitle ? <span className="svc-switcher__title">{this.item.title}</span> : null;
    const button = attachKey2click(
      <button
        className={this.item.getActionBarItemCss()}
        type="button"
        disabled={this.item.disabled}
        onClick={(args) => this.item.action(this.item, this.item.getIsTrusted(args))}
        title={tooltip}
        aria-checked={this.item.ariaChecked}
        aria-expanded={this.item.ariaExpanded}
        role={this.item.ariaRole}
      >
        <div className={this.item.getSwitcherIconCss()}>
          <div className="svc-switcher__icon-thumb"></div>
        </div>
        {title}
      </button>, this.item, { processEsc: false });

    return button;
  }
}

export default SwitcherComponent;

ReactElementFactory.Instance.registerElement("svc-switcher", (props) => {
  return React.createElement(SwitcherComponent, props);
});
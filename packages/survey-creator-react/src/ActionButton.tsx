import * as React from "react";
import { attachKey2click, ReactElementFactory, SurveyElementBase, SvgIcon, } from "survey-react-ui";

interface IActionButtonProps {
  classes?;
  click: () => void;
  selected?: boolean;
  disabled?: boolean;
  text?: string;
  title?: string;
  iconName?: string;
  allowBubble?: boolean;
}
export class ActionButton extends SurveyElementBase<IActionButtonProps, any> {
  renderElement(): JSX.Element {
    let classes = this.props.classes + " svc-action-button";
    if (this.props.selected) {
      classes += " svc-action-button--selected";
    }
    if (this.props.disabled) {
      classes += " svc-action-button--disabled";
    }
    if (this.props.iconName) {
      return this.renderIcon(classes);
    }
    return this.renderButtonText(classes);
  }

  renderButtonText(classes): JSX.Element {
    if (this.props.disabled) {
      return <span className={classes}>{this.props.text}</span>;
    }
    return (
      <>
        {attachKey2click(
          <span
            role="button"
            className={classes}
            onClick={(e) => {
              if (!this.props.allowBubble) {
                e.stopPropagation();
              }
              this.props.click();
            }}
            title={this.props.title}
          >
            {this.props.text}
          </span>
        )}
      </>
    );
  }
  renderIcon(classes): JSX.Element {
    classes += " svc-action-button--icon";
    if (this.props.disabled) {
      return <span className={classes}><SvgIcon size={"auto"} iconName={this.props.iconName}></SvgIcon></span>;
    }
    return (
      <>
        {attachKey2click(
          <span className={classes}
            onClick={(e) => {
              if (!this.props.allowBubble) {
                e.stopPropagation();
              }
              this.props.click();
            }}
            title={this.props.title}
          >
            <SvgIcon size={"auto"} iconName={this.props.iconName}></SvgIcon>
          </span>
        )}
      </>
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-action-button", (props: any) => { return React.createElement(ActionButton, props); });
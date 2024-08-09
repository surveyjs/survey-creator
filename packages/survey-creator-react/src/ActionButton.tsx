import * as React from "react";
import { attachKey2click, SurveyElementBase, } from "survey-react-ui";

export class ActionButton extends SurveyElementBase<any, any> {
  renderElement(): JSX.Element {
    let classes = this.props.classes + " svc-action-button";
    if (this.props.selected) {
      classes += " svc-action-button--selected";
    }
    if (this.props.disabled) {
      classes += " svc-action-button--disabled";
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
}

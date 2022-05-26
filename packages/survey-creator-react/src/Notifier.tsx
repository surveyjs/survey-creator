import React from "react";
import { Base, SurveyModel } from "survey-core";
import { SurveyElementBase, } from "survey-react-ui";
import { CreatorBase, Notifier } from "survey-creator-core";

export interface NotifierComponentProps {
  creator: CreatorBase;
  notifier: Notifier;
}

export class NotifierComponent extends SurveyElementBase<NotifierComponentProps, any> {
  get notifier() {
    return this.props.notifier;
  }
  protected getStateElement(): Base {
    return this.notifier;
  }
  renderElement(): JSX.Element {
    if (!this.notifier.active) {
      return null;
    }
    return (
      <div className={this.notifier.css}>
        <span>{this.notifier.message}</span>
      </div>
    );
  }
}

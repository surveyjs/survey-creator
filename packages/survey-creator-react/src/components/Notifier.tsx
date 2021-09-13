import React from "react";
import { Base, SurveyModel } from "survey-core";
import { SurveyElementBase, } from "survey-react-ui";
import { CreatorBase, Notifier } from "@survey/creator";

export interface NotifierComponentProps {
  creator: CreatorBase<SurveyModel>;
  notifier: Notifier;
}

export class NotifierComponent extends SurveyElementBase<
    NotifierComponentProps,
  any
> {
  constructor(props: NotifierComponentProps) {
    super(props);
  }

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

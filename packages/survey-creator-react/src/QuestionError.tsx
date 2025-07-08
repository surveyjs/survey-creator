import * as React from "react";
import { SurveyError } from "survey-core";
import { ReactElementFactory, SvgIcon } from "survey-react-ui";
import { SurveyLocStringViewer } from "survey-react-ui";

export interface IQuestionErrorComponentProps {
  error: SurveyError;
  cssClasses: any;
  element: any;
}

export class QuestionErrorComponent extends React.Component<IQuestionErrorComponentProps, any> {
  render(): React.JSX.Element | null {
    return (
      <div>
        <SvgIcon aria-hidden="true" iconName="icon-alert_24x24" size="24" className={this.props.cssClasses.error.icon}></SvgIcon>
        <span className={this.props.cssClasses.error.item || undefined}>
          <SurveyLocStringViewer locStr={this.props.error.locText} />
        </span>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-question-error", (props) => {
  return React.createElement(QuestionErrorComponent, props);
});
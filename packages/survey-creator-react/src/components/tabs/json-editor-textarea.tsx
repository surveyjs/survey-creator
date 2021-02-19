import { ReactElementFactory, SurveyElementBase } from "survey-react";
import React from "react";

export class TabJsonEditorTextareaComponent extends SurveyElementBase<any, any> {
  constructor(props) {
    super(props);

    // const creator: CreatorBase<Survey.Model> = this.props.creator;
    // const survey: Survey.Model = this.props.survey;
    // const data: any = this.props.survey;
  }

  render(): JSX.Element {
    return <div>JSON TAB</div>;
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-json-editor-textarea", (props) => {
  return React.createElement(TabJsonEditorTextareaComponent, props);
});

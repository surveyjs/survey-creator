import React from "react";
import { Base, ReactElementFactory, SurveyElementBase } from "survey-react";
import { TextareaJsonEditorModel } from "@survey/creator";


export class TabJsonEditorTextareaComponent extends SurveyElementBase<any, any> {
  private model: TextareaJsonEditorModel;
  constructor(props) {
    super(props);
    this.model = props.data.model;

    // const creator: CreatorBase<Survey.Model> = this.props.creator;
    // const survey: Survey.Model = this.props.survey;
    // const data: any = this.props.survey;
  }

  protected getStateElement(): Base {
    return this.model as any;
  }

  render(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <textarea className="svc-json-editor-tab__content-area"
            value={this.model.text}
            disabled={this.model.readOnly}
            aria-label={this.model.ariaLabel}
          >
          </textarea>
          <div className="svc-json-editor-tab__content-errors"
            //data-bind="foreach: errors"
          >
            <span>Error: </span><span /*data-bind="text: text"*/></span>
          </div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-json-editor-textarea", (props) => {
  return React.createElement(TabJsonEditorTextareaComponent, props);
});

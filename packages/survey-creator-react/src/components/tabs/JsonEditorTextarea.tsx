import React from "react";
import { Base, ReactElementFactory, SurveyElementBase } from "survey-react";
import { TabJsonEditorBasePlugin, TextareaJsonEditorModel } from "@survey/creator";

interface ITabJsonEditorTextarearComponentProps {
  data: TabJsonEditorBasePlugin<TextareaJsonEditorModel>
}

export class TabJsonEditorTextareaComponent extends SurveyElementBase<ITabJsonEditorTextarearComponentProps, any> {
  private model: TextareaJsonEditorModel;
  constructor(props: ITabJsonEditorTextarearComponentProps) {
    super(props);
    this.model = props.data.model;
  }

  protected getStateElement(): Base {
    return this.model as any;
  }

  render(): JSX.Element {
    const errors: JSX.Element[] = [];
    for (let i: number = 0; i < this.model.errors.length; i++) {
      errors.push(<span>Error: </span>);
      errors.push(<span>{this.model.errors[i].text}</span>);
    }
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <textarea className="svc-json-editor-tab__content-area"
            value={this.model.text}
            disabled={this.model.readOnly}
            aria-label={this.model.ariaLabel}
          >
          </textarea>
          <div className="svc-json-editor-tab__content-errors">
            {errors}
          </div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-json-editor-textarea", (props) => {
  return React.createElement(TabJsonEditorTextareaComponent, props);
});
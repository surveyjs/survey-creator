import React, { ChangeEvent } from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, List } from "survey-react-ui";
import { TextareaJsonEditorModel } from "survey-creator-core";

interface ITabJsonEditorTextareaComponentProps {
  data: TextareaJsonEditorModel;
}

export class TabJsonEditorTextareaComponent extends SurveyElementBase<
  ITabJsonEditorTextareaComponentProps,
  any
> {
  constructor(props) {
    super(props);
    this.model.canShowErrors = false;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private get model(): TextareaJsonEditorModel {
    return this.props.data;
  }
  renderElement(): JSX.Element {
    const errorList = this.model.hasErrors ? <List model={this.model.errorList} /> : undefined;
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          {errorList}
          <textarea
            className="svc-json-editor-tab__content-area"
            value={this.model.text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              (this.model.text = e.target.value)
            }
            onKeyDown={(e) => this.model.checkKey(e, e)}
            disabled={this.model.readOnly}
            aria-label={this.model.ariaLabel}
          ></textarea>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-json-editor-textarea",
  (props: ITabJsonEditorTextareaComponentProps) => {
    return React.createElement(TabJsonEditorTextareaComponent, props);
  }
);

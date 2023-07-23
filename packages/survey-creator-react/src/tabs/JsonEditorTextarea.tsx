import React, { ChangeEvent } from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, List } from "survey-react-ui";
import { TextareaJsonEditorModel, JsonEditorBaseModel } from "survey-creator-core";

interface ITabJsonEditorTextareaComponentProps {
  data: TextareaJsonEditorModel;
}

interface ITabJsonEditorErrorsProps {
  data: JsonEditorBaseModel;
}

export class TabJsonEditorErrorsComponent extends SurveyElementBase<ITabJsonEditorErrorsProps, any> {
  protected getStateElement(): Base {
    return this.model;
  }
  private get model(): JsonEditorBaseModel {
    return this.props.data;
  }
  renderElement(): JSX.Element {
    if(!this.model.hasErrors) return null;
    return <div className="svc-json-editor-tab__errros_list">
      <List model={this.model.errorList} />
    </div>;
  }
}

export class TabJsonEditorTextareaComponent extends SurveyElementBase<
  ITabJsonEditorTextareaComponentProps,
  any
> {
  constructor(props) {
    super(props);
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private get model(): TextareaJsonEditorModel {
    return this.props.data;
  }
  renderElement(): JSX.Element {
    const setControl = (el: HTMLTextAreaElement) => {
      this.model.textElement = el;
    };
    const errors = <TabJsonEditorErrorsComponent data={this.model}/>;
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          {errors}
          <textarea
            ref={input => (setControl(input))}
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

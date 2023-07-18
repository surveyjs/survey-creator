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
    }
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          {this.renderErrorList()}
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
  private renderErrorList(): JSX.Element {
    if(!this.model.hasErrors) return undefined;
    const style = { width: "100%", height: "150px" };
    return <div style={style}>
      <List model={this.model.errorList} />
    </div>;
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-json-editor-textarea",
  (props: ITabJsonEditorTextareaComponentProps) => {
    return React.createElement(TabJsonEditorTextareaComponent, props);
  }
);

import React, { ChangeEvent } from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { TextareaJsonEditorModel } from "@survey/creator";

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
    const errors: JSX.Element[] = [];
    var key = 1;
    const userFriendlyErrors: any[] = this.model.userFriendlyErrors;
    for (let i: number = 0; i < userFriendlyErrors.length; i++) {
      errors.push(<span key={key}><b>Error: </b></span>);
      key++;
      errors.push(<span key={key}>{userFriendlyErrors[i]}</span>);
      key++;
    }
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <textarea
            className="svc-json-editor-tab__content-area"
            value={this.model.text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              (this.model.text = e.target.value)
            }
            disabled={this.model.readOnly}
            aria-label={this.model.ariaLabel}
          ></textarea>
          { errors.length > 0 &&
              <button className="svc-json-editor-tab__errros_button" onClick={() => this.model.toggleErrors()}>
                {this.model.errorButtonText}
              </button>
          }
          { this.model.canShowErrors &&
            <div className="svc-json-editor-tab__content-errors">{errors}</div>
          }
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

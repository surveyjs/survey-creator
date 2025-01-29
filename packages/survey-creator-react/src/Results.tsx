import * as React from "react";
import { Base, SurveyModel } from "survey-core";
import { SurveyResultsItemModel, SurveyResultsModel } from "survey-creator-core";
import { attachKey2click, SurveyLocStringViewer, SvgIcon } from "survey-react-ui";
import { ActionButton } from "./ActionButton";
import { CreatorModelElement } from "./ModelElement";

interface ISurveyResultsProps {
  survey: SurveyModel;
}
export class SurveyResults extends CreatorModelElement<
  ISurveyResultsProps,
  any
> {
  model: SurveyResultsModel;
  protected createModel(props: any): void {
    if (this.props.survey) {
      this.model = new SurveyResultsModel(props.survey);
    }
  }
  protected getUpdatedModelProps(): string[] {
    return ["survey"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  render(): React.JSX.Element {
    if (!this.model) {
      return null;
    }
    return (
      <div className="svd-test-results">
        <div className="svd-test-results__content">
          <div className="svd-test-results__header">
            <div className="svd-test-results__header-text">{this.model.surveyResultsText}</div>
            <div className="svd-test-results__header-types">
              <ActionButton
                click={() => this.model.selectTableClick()}
                text={this.model.surveyResultsTableText}
                selected={this.model.isTableSelected}
                disabled={false}
              ></ActionButton>
              <ActionButton
                click={() => this.model.selectJsonClick()}
                text={this.model.surveyResultsJsonText}
                selected={this.model.isJsonSelected}
                disabled={false}
              ></ActionButton>
            </div>
          </div>
          {this.renderResultAsText()}
          {this.renderResultAsTable()}
        </div>
      </div>
    );
  }
  renderResultAsText(): React.JSX.Element {
    if (this.model.resultViewType !== "text") {
      return null;
    }
    return (
      <div className="svd-test-results__text svd-light-bg-color">
        <div>{this.model.resultText}</div>
      </div>
    );
  }
  renderResultAsTable(): React.JSX.Element {
    if (this.model.resultViewType !== "table") {
      return null;
    }
    return (
      <div className="svd-test-results__table svd-light-bg-color">
        <table>
          <thead>
            <tr className="svd-light-background-color">
              <th key={1} className="svd-dark-border-color">
                {this.model.resultsTitle}
              </th>
              <th key={2} className="svd-dark-border-color">
                {this.model.resultsDisplayValue}
              </th>
            </tr>
          </thead>
          <tbody>{SurveyResults.renderRows(this.model.resultData)}</tbody>
        </table>
      </div>
    );
  }
  static renderRows(data: Array<any>): Array<React.JSX.Element> {
    const rows = [];
    for (var i = 0; i < data.length; i++) {
      rows.push(<SurveyResultsByRow key={i + 1} row={data[i]} />);
    }
    return rows;
  }
}

export class SurveyResultsByRow extends CreatorModelElement<any, any> {
  private get row(): SurveyResultsItemModel {
    return this.props.row;
  }

  protected getStateElement(): Base {
    return this.row;
  }

  render(): React.JSX.Element {
    return (
      <>
        {attachKey2click(<tr onClick={() => this.row.toggle()}>
          <td key={1}
            style={{ paddingLeft: this.row.textMargin }}
            className="svd-dark-border-color">

            {this.row.isNode ? (
              <span
                style={{ left: this.row.markerMargin }}
                className={"svd-test-results__marker " + (this.row.collapsed ? "" : "svd-test-results__marker--expanded")}>
                <SvgIcon
                  iconName={"icon-expand_16x16"}
                  size={16}
                ></SvgIcon>
              </span>
            ) : null}

            {this.row.question ? <SurveyLocStringViewer locStr={this.row.question.locTitle} /> : <span>{this.row.title}</span>}
          </td>
          <td key={2} className={this.row.isNode ? "svd-test-results__node-value" : "svd-dark-border-color"}>
            {this.row.getString(this.row.displayValue)}
          </td>
        </tr>)}
        {this.row.isNode && !this.row.collapsed ? SurveyResults.renderRows(this.row.data) : null}
      </>
    );
  }
}

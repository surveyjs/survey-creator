import React from "react";
import { Base, SurveyModel } from "survey-core";
import { SurveyResultsItemModel, SurveyResultsModel } from "@survey/creator";
import { attachKey2click, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface ISurveyResultsProps {
  survey: SurveyModel;
}
export class SurveyResults extends SurveyElementBase<
  ISurveyResultsProps,
  any
> {
  model: SurveyResultsModel;
  constructor(props: ISurveyResultsProps) {
    super(props);
    if (props.survey) {
      this.model = new SurveyResultsModel(props.survey);
    }
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if (!this.model) {
      return null;
    }
    return (
      <div className="svd_test_results">
        <div className="svd_results_header">
          <div className="svd_results__header_text">{this.model.surveyResultsText}</div>
          <div className="svd_results_types">
            <div className={"svd_results_nav-item " + (this.model.resultViewType === "table" ? "svd_results_nav-item__active" : "")}>
              {attachKey2click(<a
                className="svd_results_nav-link"
                href="#"
                onClick={() => this.model.selectTableClick(this.model)}
              >
                {this.model.getLocString("ed.surveyResultsTable")}
              </a>)}
            </div>
            <div className={"svd_results_nav-item " + (this.model.resultViewType === "text" ? "svd_results_nav-item__active" : "")}>
              {attachKey2click(<a
                className="svd_results_nav-link"
                href="#"
                onClick={() => this.model.selectJsonClick(this.model)}
              >
                {this.model.getLocString("ed.surveyResultsJson")}
              </a>)}
            </div>
          </div>
        </div>
        {this.renderResultAsText()}
        {this.renderResultAsTable()}
      </div>
    );
  }
  renderResultAsText(): JSX.Element {
    if (this.model.resultViewType !== "text") {
      return null;
    }
    return (
      <div className="svd_results_text svd-light-bg-color">
        <div>{this.model.resultText}</div>
      </div>
    );
  }
  renderResultAsTable(): JSX.Element {
    if (this.model.resultViewType !== "table") {
      return null;
    }
    return (
      <div className="svd_results_table svd-light-bg-color">
        <table>
          <thead>
            <tr className="svd-light-background-color">
              <th className="svd-dark-border-color">
                {this.model.resultsTitle}
              </th>
              <th className="svd-dark-border-color">
                {this.model.resultsDisplayValue}
              </th>
            </tr>
          </thead>
          <tbody>{SurveyResults.renderRows(this.model.resultData)}</tbody>
        </table>
      </div>
    );
  }
  static renderRows(data: Array<any>): Array<JSX.Element> {
    return data.map((item) => <SurveyResultsByRow key={item.id} row={item} />);
  }
}

export class SurveyResultsByRow extends SurveyElementBase<any, any> {
  private get row(): SurveyResultsItemModel {
    return this.props.row;
  }

  protected getStateElement(): Base {
    return this.row;
  }

  render(): JSX.Element {
    return (
      <>
        {attachKey2click(<tr onClick={() => this.row.toggle()}>
          <td
            style={{ paddingLeft: "calc(" + (6 + 2 * this.row.lvl) + " * 8px)" }}
            className="svd-dark-border-color">

            {this.row.isNode ? (
              <span
                style={{ left: "calc(" + (3.5 + 2 * this.row.lvl) + " * 8px)" }}
                className={"survey-result-marker " + (this.row.collapsed ? "" : "survey-result-marker--expanded")}>
                <SvgIcon
                  iconName={"icon-expand_16x16"}
                  size={16}
                ></SvgIcon>
              </span>
            ) : null}

            <span>{this.row.title}</span>
          </td>
          <td className={this.row.isNode ? "svd-node-value" : "svd-dark-border-color"}>
            {this.row.getString(this.row.displayValue)}
          </td>
        </tr>)}
        {this.row.isNode && !this.row.collapsed ? SurveyResults.renderRows(this.row.data) : null}
      </>
    );
  }
}

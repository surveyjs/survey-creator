import React from "react";
import { Base, SurveyModel } from "survey-core";
import { SurveyResultsModel } from "@survey/creator";
import { SurveyElementBase } from "survey-react-ui";

interface ICreatorSurveyResultsComponentProps {
  survey: SurveyModel;
}
export class CreatorSurveyResultsComponent extends SurveyElementBase<
  ICreatorSurveyResultsComponentProps,
  any
> {
  model: SurveyResultsModel;
  constructor(props: ICreatorSurveyResultsComponentProps) {
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
          <h2>{this.model.surveyResultsText}</h2>
        </div>
        <ul className="navbar-default container-fluid nav nav-tabs editor-tabs">
          <li
            className={
              "nav-item " + this.model.resultViewType === "table"
                ? "active"
                : ""
            }
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => this.model.selectTableClick(this.model)}
            >
              {this.model.getLocString("ed.surveyResultsTable")}
            </a>
          </li>
          <li
            className={
              "nav-item " + this.model.resultViewType === "text" ? "active" : ""
            }
          >
            <a
              className="nav-link"
              href="#"
              onClick={() => this.model.selectJsonClick(this.model)}
            >
              {this.model.getLocString("ed.surveyResultsJson")}
            </a>
          </li>
        </ul>
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
                {this.model.resultsName}
              </th>
              <th className="svd-dark-border-color">
                {this.model.resultsValue}
              </th>
              <th className="svd-dark-border-color">
                {this.model.resultsDisplayValue}
              </th>
            </tr>
          </thead>
          <tbody>{this.renderRows(this.model.resultData)}</tbody>
        </table>
      </div>
    );
  }
  renderRows(data: Array<any>): Array<JSX.Element> {
    return data.map((item) => this.renderRow(item));
  }
  renderRow(row: any): JSX.Element {
    return (
      <>
        <tr data-bind="click: toggle">
          <td className="svd-dark-border-color">
            {row.isNode ? (
              <span
                className={
                  "survey-result-marker " + row.collapsed
                    ? ""
                    : "survey-result-marker--expanded"
                }
              >
                ▶
              </span>
            ) : null}
            <span>{row.title}</span>
          </td>
          <td className="svd-dark-border-color">{row.name}</td>
          <td className="svd-dark-border-color">
            <div className="survey-result-value">
              {row.getString(row.value)}
            </div>
          </td>
          <td className="svd-dark-border-color">
            {row.getString(row.displayValue)}
          </td>
        </tr>
        {this.renderRows(row.data)}
      </>
    );
  }
}

/*

<div class="svd_test_results">
    <div class="svd_results_header">
        <h2 data-bind="text: surveyResultsText"></h2>
    </div>
    <ul class="navbar-default container-fluid nav nav-tabs editor-tabs">
        <li class="nav-item active" data-bind="css: {active: resultViewType === 'table'}">
            <a class="nav-link" href="#"
                data-bind="click: selectTableClick, text: $data.getLocString('ed.surveyResultsTable')"></a>
        </li>
        <li class="nav-item" data-bind="css: {active: resultViewType === 'text'}">
            <a class="nav-link" href="#"
                data-bind="click: selectJsonClick, text: $data.getLocString('ed.surveyResultsJson')"></a>
        </li>
    </ul>
    <div class="svd_results_text svd-light-bg-color" data-bind="visible: resultViewType === 'text'">
        <div data-bind="text: resultText"></div>
    </div>
    <div class="svd_results_table svd-light-bg-color" data-bind="visible: resultViewType === 'table'">
        <table>
            <thead>
                <tr class="svd-light-background-color">
                    <th class="svd-dark-border-color" data-bind="text: resultsTitle"></th>
                    <th class="svd-dark-border-color" data-bind="text: resultsName"></th>
                    <th class="svd-dark-border-color" data-bind="text: resultsValue"></th>
                    <th class="svd-dark-border-color" data-bind="text: resultsDisplayValue"></th>
                </tr>
            </thead>
            <tbody>
                <!-- ko foreach: resultData -->
                <!-- ko component: { name: 'survey-results-table-row', params: { model: $data } } -->
                <!-- /ko -->
                <!-- /ko -->
            </tbody>
        </table>
    </div>
</div>
*/

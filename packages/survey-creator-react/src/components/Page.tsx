import { Base, PageModel, SurveyModel } from "survey-core";
import {
  SurveyActionBar,
  SurveyElementBase,
  SurveyPage,
  SurveyQuestion,
} from "survey-react-ui";
import { CreatorBase, PageViewModel } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";

interface ICreatorSurveyPageComponentProps {
  creator: CreatorBase<SurveyModel>;
  survey: SurveyModel;
  page: PageModel;
}

export class CreatorSurveyPageComponent extends SurveyElementBase<
  ICreatorSurveyPageComponentProps,
  any
> {
  private model: PageViewModel<SurveyModel>;
  constructor(props: ICreatorSurveyPageComponentProps) {
    super(props);
    this.model = new PageViewModel<SurveyModel>(
      this.props.creator,
      this.props.page
    );
  }

  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    return (
      <React.Fragment>
      <div
        className={"svc-page__content " + this.model.css}
        onClick={(e) => {
          return this.model.select(this.model, new ReactMouseEvent(e));
        }}
        onDragOver={(e) =>
          this.model.dragOver(this.model, new ReactDragEvent(e))
        }
        onDrop={(e) => this.model.drop(this.model, new ReactDragEvent(e))}
        // data-bind="click: select, clickBubble: false, css: css, event: { dragover: dragOver, drop: drop }"
      >
        <SurveyPage
          page={this.props.page}
          survey={this.props.survey}
          creator={this.props.creator}
          css={this.model.css}
        ></SurveyPage>
        <div
          className="svc-page__add-new-question"
          onClick={(e) =>
            this.model.addNewQuestion(this.model, new ReactMouseEvent(e))
          }
          data-bind="click: addNewQuestion"
        >
          <span className="svc-text svc-text--normal svc-text--bold">
            {this.model.addNewQuestionText}
          </span>
        </div>
          <div className="svc-page__content-actions">
            <SurveyActionBar items={this.model.actions}></SurveyActionBar>
          </div>
        </div>
      </React.Fragment>
    );
    /*
<div class="svc-page__content" data-bind="click: select, clickBubble: false, css: css, event: { dragover: dragOver, drop: drop }">
  <!-- ko template: { name: 'survey-page', data: page } -->
  <!-- /ko -->
  <div class="svc-page__add-new-question" data-bind="click: addNewQuestion">
    <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: addNewQuestionText">
    </span>
  </div>
  <div class="svc-page__content-actions">
    <sv-action-bar params="items: actions"></sv-action-bar>
  </div>
</div>
     */

    /*
<script type="text/html" id="survey-page">
  <div data-bind="css: cssClasses.page.root">
      <!-- ko if: _showTitle -->
      <h4 data-bind="css: cssClasses.page.title">
          <!-- ko template: { name: 'survey-string', data: locTitle } -->
          <!-- /ko -->
      </h4>
      <!-- /ko -->
      <!-- ko if: _showDescription-->
      <div data-bind="visible: data.showPageTitles, css: cssClasses.page.description">
          <!-- ko template: { name: 'survey-string', data: locDescription } -->
          <!-- /ko -->
      </div>
      <!-- /ko -->
      <!-- ko template: { name: 'survey-rows', data: $data} -->
      <!-- /ko -->
  </div>
</script>
     */
  }
}

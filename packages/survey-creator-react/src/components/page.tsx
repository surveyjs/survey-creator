import * as Survey from "survey-react";
import { Base, ReactElementFactory, SurveyElementBase } from "survey-react";
import { CreatorBase } from "@survey/creator";
import React from "react";

export class CreatorSurveyPageComponent extends SurveyElementBase {
  constructor(props) {
    super(props);
    // const survey: Survey.ReactSurveyModel;
    // const page: Survey.PageModel = this.props.page;
    // const creator: CreatorBase<Survey.ReactSurveyModel>;
  }

  render(): JSX.Element {
    return null;
    // const page: Survey.PageModel = this.props.page;
    // let className = "svc-page__content" + page.css;
    // return (
    //   <div
    //     className={className}
    //     data-bind="click: select, clickBubble: false, css: css, event: { dragover: dragOver, drop: drop }"
    //   ></div>
    // );
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
  }
}

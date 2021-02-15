import * as Survey from "survey-react";
import {
  ActionBar,
  Base,
  ReactElementFactory,
  SurveyElementBase,
  SurveyPage,
} from "survey-react";
import { CreatorBase } from "@survey/creator";
import React from "react";

interface ICreatorSurveyPageComponentProps {
  creator: CreatorBase<Survey.Model>;
  survey: Survey.Model;
  page: Survey.PageModel;
}

export class CreatorSurveyPageComponent extends SurveyElementBase<
  ICreatorSurveyPageComponentProps,
  any
> {
  private addNewQuestionText = "Add a New Question";
  constructor(props: ICreatorSurveyPageComponentProps) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.page;
  }
  render(): JSX.Element {
    //AM: dirty hack, need to call in the right place
    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
    //

    return (
      <div
        className={"svc-page__content " + this.css}
        onClick={(e) => this.selectPage(e)}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e)}
        // data-bind="click: select, clickBubble: false, css: css, event: { dragover: dragOver, drop: drop }"
      >
        <SurveyPage
          page={this.page}
          survey={this.props.survey}
          creator={this.creator}
          css={this.css}
        ></SurveyPage>
        <div
          className="svc-page__add-new-question"
          onClick={() => this.addNewQuestion()}
          data-bind="click: addNewQuestion"
        >
          <span className="svc-text svc-text--normal svc-text--bold">
            {this.addNewQuestionText}
          </span>
        </div>
        <div className="svc-page__content-actions">
          <ActionBar items={this.actions}></ActionBar>
        </div>
      </div>
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

  private get page(): Survey.PageModel {
    return this.props.page;
  }
  private get creator(): CreatorBase<Survey.Model> {
    return this.props.creator;
  }
  private get isGhost() {
    return false;
  }
  private get css() {
    if (this.isGhost) {
      return "svc-page__content--new";
    }
    return this.creator.isElementSelected(this.page as any)
      ? "svc-page__content--selected"
      : "";
  }

  private get actions() {
    if (!this.isGhost) {
      return this.creator.getContextActions(this.page);
    }
  }

  private addNewQuestion() {
    this.addGhostPage();
    this.creator.survey.currentPage = this.page;
    this.creator.clickToolboxItem({ type: "text" });
  }
  private addGhostPage() {
    //    if (this._isGhost()) {
    //      this._isGhost(false);
    //      this.page["_addToSurvey"]();
    //    }
  }
  private selectPage(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!this.isGhost) {
      this.creator.selectElement(this.page);
      e.stopPropagation();
    }
  }
  private onDragOver(event: React.DragEvent<HTMLDivElement>) {
    // if (!event["markEvent"]) {
    //   event["markEvent"] = true;
    //   this.creator.dragDropHelper.ddTarget.moveToPage(<any>this.page);
    //   this.creator.dragDropHelper.doDragDropOver(event, this.page, true);
    //   return false;
    // }
  }
  private onDrop(event: React.DragEvent<HTMLDivElement>) {
    // var helper = this.creator.dragDropHelper;
    // if (!event["markEvent"]) {
    //   event["markEvent"] = true;
    //   helper.doDrop(event, true);
    //   this.addGhostPage();
    // }
  }
}

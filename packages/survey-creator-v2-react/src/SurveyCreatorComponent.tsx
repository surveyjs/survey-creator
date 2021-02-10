import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";
import "./index.css";
import TabbedMenuComponent from "./TabbedMenuComponent";
import PropertyGridComponent from "./PropertyGridComponent";
import { ActionBar, Base, SurveyElementBase } from "survey-react";
import { CreatorBase } from "@survey/creator";

Survey.StylesManager.applyTheme("modern");

export class SurveyCreatorComponent extends SurveyElementBase {
  private json = {
    completedHtml:
      "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    completedHtmlOnCondition: [
      {
        expression: "{nps_score} > 8",
        html:
          "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>",
      },
      {
        expression: "{nps_score} < 7",
        html:
          "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>",
      },
    ],
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "rating",
            name: "nps_score",
            title:
              "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: "(Most unlikely)",
            maxRateDescription: "(Most likely)",
          },
          {
            type: "checkbox",
            name: "promoter_features",
            visibleIf: "{nps_score} >= 9",
            title: "What features do you value the most?",
            isRequired: true,
            validators: [
              {
                type: "answercount",
                text: "Please select two features maximum.",
                maxCount: 2,
              },
            ],
            hasOther: true,
            choices: [
              "Performance",
              "Stability",
              "User Interface",
              "Complete Functionality",
            ],
            otherText: "Other feature:",
            colCount: 2,
          },
          {
            type: "comment",
            name: "passive_experience",
            visibleIf: "{nps_score} > 6  and {nps_score} < 9",
            title: "What is the primary reason for your score?",
          },
          {
            type: "comment",
            name: "disappointed_experience",
            visibleIf: "{nps_score} notempty",
            title:
              "What do you miss and what was disappointing in your experience with us?",
          },
        ],
      },
    ],
    showQuestionNumbers: "off",
  };

  constructor(props: any) {
    super(props);
  }
  // protected getStateElement(): Base {
  //   return this.creator;
  // }

  render() {
    const toolbarItems: Array<Survey.IActionBarItem> = [];
    toolbarItems.push(
      ...[
        {
          id: "undo",
          iconName: "icon-undo",
          action: () => {},
          title: "Undo",
          showTitle: false,
        },
        {
          id: "redo",
          iconName: "icon-redo",
          action: () => {},
          title: "Redo",
          showTitle: false,
        },
      ]
    );

    const creator = this.props.creator;
    //AM: width unrecognized by react
    const style = { width: "auto", borderLeft: "1px solid lightgray" };
    return (
      <>
        <div className="svc-creator__area svc-flex-column">
          <div className="svc-top-bar">
            <TabbedMenuComponent items={creator.tabs}></TabbedMenuComponent>
            <ActionBar items={toolbarItems}></ActionBar>
          </div>
          <div className="svc-creator__content-wrapper svc-flex-row">
            <div className="svc-creator__content-holder svc-flex-column">
              {this.renderCreatorTabs()}
            </div>
          </div>
        </div>
        <div className="svc-flex-column" style={style}>
          <PropertyGridComponent></PropertyGridComponent>
        </div>
      </>
    );
  }
  renderCreatorTabs() {
    const survey = new Survey.Model(this.json);
    /* Creator Tabs Collection should be here */
    return <Survey.Survey model={survey} />;
  }
}

export function createReactSurveyCreator(json: any) {
  //const survey = new Survey.Model(this.json);
  const creator = new CreatorBase<Survey.Survey>({});
  //creator.survey = survey;
  creator.JSON = json;
  return creator;
}

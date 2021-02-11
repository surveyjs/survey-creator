import React from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";
import TabbedMenuComponent from "./TabbedMenuComponent";
import PropertyGridComponent from "./PropertyGridComponent";
import { ActionBar, Base, SurveyElementBase } from "survey-react";
import { CreatorBase, ICreatorOptions } from "@survey/creator";

Survey.StylesManager.applyTheme("modern");

export class SurveyCreatorComponent extends SurveyElementBase {
  constructor(props: any) {
    super(props);
  }
  get creator(): CreatorBase<Survey.Model> {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return this.props.creator;
  }

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
    return <Survey.Survey model={this.creator.survey} />;
  }
}

class SurveyCreator extends CreatorBase<Survey.Model> {
  constructor(options: ICreatorOptions = {}) {
    super(options);
  }
  protected createSurveyCore(json: any = {}): Survey.Model {
    return new Survey.Model(json);
  }
}

export function createReactSurveyCreator(json: any) {
  const creator = new SurveyCreator({});
  creator.JSON = json;
  return creator;
}

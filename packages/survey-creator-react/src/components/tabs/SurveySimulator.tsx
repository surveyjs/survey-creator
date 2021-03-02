import { Base, SurveyModel } from "survey-core";
import { ActionBar, ReactElementFactory, Survey, SurveyElementBase } from "survey-react-ui";
import { CreatorBase, SurveySimulatorComponent, TabTestPlugin, TestSurveyTabViewModel } from "@survey/creator";
import React from "react";

export class SurveySimulator extends SurveyElementBase<any, any> {
  private model: SurveySimulatorComponent;

  constructor(props) {
    super(props);
    const plugin: TabTestPlugin = this.props.data;
    this.model = new SurveySimulatorComponent(this.props.options);;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if(!this.model.survey) {
      return (<div className="svd-simulator-main"></div>);
    }
    if(this.model.hasFrame) {
      return (
        <div className="svd-simulator-main">
          <div
            className="svd-simulator-wrapper"
            data-bind="style: { width: simulatorFrame.frameWidth + 'px', height: simulatorFrame.frameHeight + 'px' }"
          >
            <div
              className="svd-simulator-frame"
              data-bind="style: { width: (landscapeOrientation ? simulatorFrame.frameHeight: simulatorFrame.frameWidth) + 'px', height: (landscapeOrientation ? simulatorFrame.frameWidth : simulatorFrame.frameHeight) + 'px' }, css: simulatorFrame.cssClass"
            ></div>
            <div
              className="svd-simulator"
              data-bind="style: { width: simulatorFrame.width / simulatorFrame.scale + 'px', height: simulatorFrame.height / simulatorFrame.scale + 'px', transform: 'scale(' + simulatorFrame.scale + ') translate(-50%, -50%)' }"
            >
          <Survey
            className="svd-simulator-content"
            model={this.model.survey}
          ></Survey>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="svd-simulator-main">
          <Survey
            className="svd-simulator-content"
            model={this.model.survey}
          ></Survey>
        </div>
      );
    }
  }
}

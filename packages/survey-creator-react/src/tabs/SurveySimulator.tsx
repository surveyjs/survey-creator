import { Base } from "survey-core";
import { Survey, SurveyElementBase } from "survey-react-ui";
import { SurveySimulatorModel } from "survey-creator-core";
import React from "react";

export class SurveySimulator extends SurveyElementBase<any, any> {
  private get model(): SurveySimulatorModel {
    return this.props.model;
  }

  constructor(props: any) {
    super(props);
  }
  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): JSX.Element {
    const mainSimulatorClass = "svd-simulator-main" +
      (this.model.device === "desktop" ? " svd-simulator-main--desktop" : "");
    if (!this.model.survey) {
      return <div className={mainSimulatorClass}></div>;
    }
    if (this.model.hasFrame) {
      return (
        <div
          className={mainSimulatorClass + " " + this.model.simulatorMainCssClass}
          onKeyDown={e => this.model.tryToZoom(e)}
          onMouseEnter={this.model.activateZoom}
          onMouseLeave={this.model.deactivateZoom}
        >
          <div
            className="svd-simulator-wrapper"
            id="svd-simulator-wrapper"
            style={{
              width: this.model.simulatorFrame.frameWidth + "px",
              height: this.model.simulatorFrame.frameHeight + "px"
            }}
          >
            <div
              className={
                "svd-simulator-frame " + this.model.simulatorFrame.cssClass
              }
              style={{
                width:
                  this.model.simulatorFrame.landscapedFrameWidth + "px",
                height:
                  this.model.simulatorFrame.landscapedFrameHeight + "px"
              }}
            ></div>
            <div
              className="svd-simulator"
              style={{
                width:
                  this.model.simulatorFrame.deviceWidth + "px",
                height:
                  this.model.simulatorFrame.deviceHeight + "px",
                transform:
                  "scale(" +
                  this.model.simulatorFrame.scale +
                  ") translate(-50%, -50%)"
              }}
            >
              <div className="svd-simulator-content">
                <Survey model={this.model.survey}></Survey>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={mainSimulatorClass}>
          <div className="svd-simulator-content">
            <Survey model={this.model.survey}></Survey>
          </div>
        </div>
      );
    }
  }
}

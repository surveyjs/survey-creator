import { Base } from "survey-core";
import { Survey, SurveyElementBase } from "survey-react-ui";
import { SurveySimulatorModel } from "survey-creator-core";
import * as React from "react";

function simulatorShellStyle(overlayHeight: string): React.CSSProperties {
  return overlayHeight
    ? ({ ["--sv-popup-overlay-height" as string]: overlayHeight } as React.CSSProperties)
    : {};
}

export class SurveySimulator extends SurveyElementBase<any, any> {
  private get model(): SurveySimulatorModel {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  public componentDidMount(): void {
    super.componentDidMount();
    this.model.queueSurveyLayoutRefresh();
  }

  public componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    this.model.queueSurveyLayoutRefresh();
  }

  public componentWillUnmount(): void {
    this.model.cancelSurveyLayoutRefresh();
    super.componentWillUnmount();
  }

  renderElement(): React.JSX.Element {
    const mainSimulatorClass = this.model.getRootCss();
    const shellStyle = simulatorShellStyle(this.model.popupOverlayHeight);
    if (!this.model.survey) {
      return <div className={mainSimulatorClass}></div>;
    }
    if (this.model.hasFrame) {
      return (
        <div
          className={mainSimulatorClass}
          onKeyDown={e => this.model.tryToZoom(e, e)}
          onMouseEnter={this.model.device === "desktop" ? null : this.model.activateZoom}
          onMouseLeave={this.model.device === "desktop" ? null : this.model.deactivateZoom}
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
              <div className="svd-simulator-content" style={shellStyle}>
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
          <div className="svd-simulator-content" style={shellStyle}>
            <Survey model={this.model.survey}></Survey>
          </div>
        </div>
      );
    }
  }
}

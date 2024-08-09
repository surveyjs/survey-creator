import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { SurveyCreatorToolboxCategory } from "./ToolboxCategory";

export interface ISurveyCreatorToolboxProps {
  model: SurveyCreatorModel;
}

export class Toolbox extends SurveyElementBase<ISurveyCreatorToolboxProps, any> {
  public get creator() {
    return this.props.model;
  }
  public get toolbox() {
    return this.creator.toolbox;
  }
  protected getStateElement(): Base {
    return this.toolbox;
  }

  render(): JSX.Element {
    if (!this.toolbox.hasActions) return null;

    return (
      <div className="svc-toolbox">
        <div className="svc-toolbox__container">
          {(this.toolbox.categories.length == 1 || !this.toolbox.showCategoryTitles) ?
            (<div className="svc-toolbox__category">
              {this.renderItems(this.toolbox.visibleActions)}
            </div>)
            : this.renderCategories()
          }
        </div>
      </div>
    );
  }

  renderItems(items: Array<any>, isCompact = false): Array<JSX.Element> {
    const result = [];
    items.forEach((item, itemIndex) => {
      const tool = <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} parentModel={this.toolbox} isCompact={isCompact} key={"item" + itemIndex} ></SurveyCreatorToolboxTool>;
      result.push(tool);
    });
    return result;
  }

  renderCategories() {
    return this.toolbox.categories.map((category, index) => {
      return <SurveyCreatorToolboxCategory category={category} toolbox={this.toolbox} key={"category" + index} ></SurveyCreatorToolboxCategory>;
    });
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox", (props) => {
  return React.createElement(Toolbox, props);
});

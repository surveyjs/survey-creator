import * as React from "react";
import { ListModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { QuestionToolbox } from "survey-creator-core";

interface IListProps {
  model: ListModel;
  toolbox: QuestionToolbox;
}

export class ToolboxList extends SurveyElementBase<IListProps, any> {
  constructor(props: any) {
    super(props);
  }

  get model(): ListModel {
    return this.props.model;
  }
  get toolbox(): QuestionToolbox {
    return this.props.toolbox;
  }
  getStateElement() {
    return this.model;
  }

  render() {
    if (!this.model || !this.model.renderElements) return null;

    const items = this.renderItems();
    return (
      <div className={this.model.cssClasses.root}>
        {items}
      </div>
    );
  }
  renderItems() {
    const items = this.model.renderedActions;
    return items.map((item, itemIndex) =>
      <SurveyCreatorToolboxTool item={(item as any)} creator={this.toolbox.creator} parentModel={this.model} isCompact={false} key={"item" + itemIndex} ></SurveyCreatorToolboxTool>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox-list", (props) => {
  return React.createElement(ToolboxList, props);
});

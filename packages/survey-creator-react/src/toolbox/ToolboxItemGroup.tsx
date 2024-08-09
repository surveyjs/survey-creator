import * as React from "react";
import { Base } from "survey-core";
import { Popup, ReactElementFactory } from "survey-react-ui";
import { CreatorModelElement } from "../ModelElement";
import { ISurveyCreatorToolboxItemProps, SurveyCreatorToolboxItem } from "./ToolboxItem";

export class SurveyCreatorToolboxItemGroup extends CreatorModelElement<ISurveyCreatorToolboxItemProps, any> {
  constructor(props) {
    super(props);
  }
  protected getUpdatedModelProps(): string[] {
    return ["creator", "item"];
  }
  public get item() {
    return this.props.item;
  }
  public get creator() {
    return this.props.creator;
  }
  public get isCompact() {
    return this.props.isCompact;
  }
  public get parentModel() {
    return this.props.parentModel;
  }

  protected getStateElement(): Base {
    return this.item;
  }
  render(): JSX.Element {
    return <>
      <SurveyCreatorToolboxItem item={this.item} creator={this.creator} parentModel={this.parentModel} isCompact={this.isCompact} ></SurveyCreatorToolboxItem >
      <Popup model={this.item.popupModel} getArea={this.item.getArea} />
    </>;
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox-item-group", (props) => {
  return React.createElement(SurveyCreatorToolboxItemGroup, props);
});

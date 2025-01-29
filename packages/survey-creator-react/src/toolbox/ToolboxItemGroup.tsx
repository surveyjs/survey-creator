import * as React from "react";
import { Base } from "survey-core";
import { Popup, ReactElementFactory, SvgIcon } from "survey-react-ui";
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
  public get model() {
    return this.props.model;
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
  render(): React.JSX.Element {
    return <>
      <SurveyCreatorToolboxItem item={this.item} creator={this.creator} model={this.model} parentModel={this.parentModel} isCompact={this.isCompact} ></SurveyCreatorToolboxItem >
      <div className="svc-toolbox__item-submenu-button"
        onMouseOver={(event: any) => this.model.onMouseOver(this.item, event)}
        onMouseLeave={(event: any) => this.model.onMouseLeave(this.item, event)}
      >
        <SvgIcon size={"auto"} iconName={this.item.subitemsButtonIcon} ></SvgIcon>
        <Popup model={this.item.popupModel} />
      </div>
    </>;
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox-item-group", (props) => {
  return React.createElement(SurveyCreatorToolboxItemGroup, props);
});

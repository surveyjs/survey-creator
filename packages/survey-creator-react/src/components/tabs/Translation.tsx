import React from "react";
import { Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  Survey,
} from "survey-react-ui";
import {
  TabTranslationPlugin,
  TranslationModel,
  Translation,
  TranslationGroup,
  TranslationItem,
  TranslationItemString,
} from "@survey/creator";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private model: TranslationModel;

  constructor(props: any) {
    super(props);
    const plugin: TabTranslationPlugin = this.props.data;
    this.model = plugin.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if (!this.model.showTranslation) return null;
    return (
      <TranslationUIComponent
        model={this.model.translation}
      ></TranslationUIComponent>
    );
  }
}

export class TranslationUIComponent extends SurveyElementBase<any, any> {
  constructor(props: any) {
    super(props);
  }
  private get model(): Translation {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        <Survey model={this.model.settingsSurvey}></Survey>
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar items={this.model.toolbarItems}></SurveyActionBar>
        </div>
        <TranslationGroupComponent
          model={this.model.root}
        ></TranslationGroupComponent>
      </div>
    );
  }
}
export class TranslationGroupComponent extends SurveyElementBase<any, any> {
  constructor(props) {
    super(props);
    this.handleExpandButton = this.handleExpandButton.bind(this);
  }
  private get model(): TranslationGroup {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }
  handleExpandButton = (event: any) => {
    this.model.expanded = !this.model.expanded;
  };
  render(): JSX.Element {
    if (this.model.items.length == 0) return null;
    var headerDiv = null;
    //Panel header with expanded
    if (!this.model.isRoot) {
      //TODO replace with icon
      var expandText = this.model.expanded ? "Collapse" : "Expaned";
      headerDiv = (
        <div>
          <span>{this.model.text}</span>
          <button onClick={this.handleExpandButton}>{expandText}</button>
        </div>
      );
    }
    if (!this.model.expanded && !this.model.isRoot) return headerDiv;

    var headers = [];
    headers.push(<th key={"header"}></th>);
    var headerStyle = { width: this.model.locWidth };
    for (var i = 0; i < this.model.locales.length; i++) {
      headers.push(
        <th key={"header" + i} style={headerStyle}>
          {this.model.getLocaleName(this.model.locales[i])}
        </th>
      );
    }
    var rows = [];
    for (var i = 0; i < this.model.locItems.length; i++) {
      rows.push(
        <TranslationItemComponent
          key={"item" + i}
          model={this.model.locItems[i]}
          group={this.model}
        ></TranslationItemComponent>
      );
    }
    var groups = [];
    for (var i = 0; i < this.model.groups.length; i++) {
      groups.push(
        <TranslationGroupComponent
          key={"group" + i}
          model={this.model.groups[i]}
        ></TranslationGroupComponent>
      );
    }
    return (
      <div>
        {headerDiv}
        <table>
          <thead>
            <tr>{headers}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {groups}
      </div>
    );
  }
}

export class TranslationItemComponent extends SurveyElementBase<any, any> {
  constructor(props: any) {
    super(props);
  }
  private get model(): TranslationItem {
    return this.props.model;
  }
  private get group(): TranslationGroup {
    return this.props.group;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    var item = this.model;
    var tds = [];
    var tdNameStyle = { maxWidth: "200px", minWidth: "100px" };
    var headerStyle = { width: this.group.locWidth };
    tds.push(
      <td key={"name"} style={tdNameStyle}>
        {item.text}
      </td>
    );
    for (var i = 0; i < this.group.locales.length; i++) {
      var locale = this.group.locales[i];
      tds.push(
        <td key={"cell" + i} style={headerStyle}>
          <TranslationItemTextComponent
            key={"editor" + i}
            item={this.model}
            str={this.model.values(locale)}
          ></TranslationItemTextComponent>
        </td>
      );
    }
    return <tr>{tds}</tr>;
  }
}

export class TranslationItemTextComponent extends SurveyElementBase<any, any> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  private get item(): TranslationItem {
    return this.props.item;
  }
  private get str(): TranslationItemString {
    return this.props.str;
  }
  protected getStateElement(): Base {
    return this.str;
  }
  handleChange = (event: any) => {
    this.str.text = event.target.value;
  };
  render(): JSX.Element {
    var style = { width: "100%" };
    return (
      <textarea
        className="form-control"
        style={style}
        readOnly={this.item.readOnly}
        value={this.str.text}
        placeholder={this.str.placeholder}
        onChange={this.handleChange}
      ></textarea>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-translation", (props) => {
  return React.createElement(TabTranslationComponent, props);
});
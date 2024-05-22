import React from "react";
import { Base } from "survey-core";
import { SurveyActionBar, SurveyElementBase, Survey } from "survey-react-ui";
import { CreatorPresetEditorModel, SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "./SurveyCreator";

export class CreatorPresetEditor extends CreatorPresetEditorModel {
  protected createCreator(): SurveyCreatorModel {
    return new SurveyCreator({});
  }
}

interface ICreatorPresetEditorComponentProps {
  editor: CreatorPresetEditor;
  style?: any;
}

export class CreatorPresetEditorComponent extends SurveyElementBase<ICreatorPresetEditorComponentProps, any> {
  constructor(props: ICreatorPresetEditorComponentProps) {
    super(props);
  }
  get editor(): CreatorPresetEditor {
    return this.props.editor;
  }
  protected getStateElement(): Base {
    return this.editor;
  }
  renderElement() {
    const navigation = <SurveyActionBar model={this.editor.navigationBar} handleClick={true} />;
    const context = this.renderContext();
    return <>
      {navigation}
      {context}
    </>;
  }
  private renderContext() {
    const tab = this.editor.activeTab;
    if (tab === "creator") {
      return <SurveyCreatorComponent creator={this.editor.creator as SurveyCreator} />;
    }
    if (tab === "results") return this.renderResults();
    return <Survey model={this.editor.model}></Survey>;
  }
  private renderResults() {
    const json = this.editor.json;
    const els = [];
    this.renderJSON(els, undefined, json, 0);
    return <>{els}</>;
  }
  private renderJSON(els: Array<JSX.Element>, key: string, json: any, indent: number, hasComma?: boolean): void {
    els.push(this.renderJSONElementCore(this.getJSONKey(key) + "{", indent, els.length));
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      const elKey = keys[i];
      const val = json[elKey];
      this.renderJSONElement(els, elKey, val, indent + 1, i < keys.length - 1);
    }
    els.push(this.renderJSONElementCore("}" + (hasComma ? "," : ""), indent, els.length));
  }
  private renderJSONArray(els: Array<JSX.Element>, key: string, val: Array<any>, indent: number, hasComma?: boolean): void {
    els.push(this.renderJSONElementCore(this.getJSONKey(key) + "[", indent, els.length));
    for (let i = 0; i < val.length; i++) {
      this.renderJSONElement(els, undefined, val[i], indent + 1, i < val.length - 1);
    }
    els.push(this.renderJSONElementCore("]" + (hasComma ? "," : ""), indent, els.length));
  }
  private renderJSONElement(els: Array<JSX.Element>, key: string, val: any, indent: number, hasComma?: boolean): void {
    const comma = hasComma ? "," : "";
    if (Array.isArray(val)) {
      this.renderJSONArray(els, key, val, indent + 1, hasComma);
    } else {
      if (typeof val === "object") {
        this.renderJSON(els, key, val, indent + 1, hasComma);
      } else {
        const str = !!key ? this.getJSONElementText(key, val) : this.getJSONElementVal(val);
        els.push(this.renderJSONElementCore(str + comma, indent + 1, els.length));
      }
    }
  }
  private renderJSONElementCore(str: string, indent: number, index: number): JSX.Element {
    const key = "i" + index + 1;
    const style = { marginLeft: this.getIndentMargin(indent) };
    return <div key={key} style={style}>{str}</div>;
  }
  private getIndentMargin(indent: number): string {
    return (indent * 6) + "px";
  }
  private getJSONKey(key: string): string {
    return !!key ? "\"" + key + "\": " : "";
  }
  private getJSONElementText(key: string, val: any): string {
    return this.getJSONKey(key) + this.getJSONElementVal(val);
  }
  private getJSONElementVal(val: any): string {
    if (val === undefined) return "undefined";
    if (val === null) return "null";
    if (typeof val === "string") return "\"" + val + "\"";
    return val.toString();
  }
}

import React from "react";
import { Base } from "survey-core";
import { SurveyActionBar, SurveyElementBase, Survey } from "survey-react-ui";
import { ICreatorOptions, SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { CreatorPresetEditorModel } from "creator-presets-core";

export class CreatorPresetEditor extends CreatorPresetEditorModel {
  public createCreator(options: ICreatorOptions): SurveyCreatorModel {
    return new SurveyCreator(options);
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
    const text = JSON.stringify(this.editor.json, null, 2);
    const style = { width: "100%", height: "100%" };
    return <textarea readOnly={true} style={style}>{text}</textarea>;
  }
}

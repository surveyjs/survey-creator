import * as React from "react";
import { Base } from "survey-core";
import { SurveyElementBase, Survey, SvgBundleComponent } from "survey-react-ui";
import { ICreatorOptions, SurveyCreatorModel } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { CreatorPresetEditorModel } from "creator-presets-core";
import { PresetsHeaderComponent } from "./Header";

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
    const header = <PresetsHeaderComponent editor={this.editor}></PresetsHeaderComponent>;
    const context = this.renderContext();
    return <>
      <SvgBundleComponent></SvgBundleComponent>
      {header}
      {context}
    </>;
  }
  private renderContext() {
    const tab = this.editor.activeTab;
    if (tab === "creator") return <SurveyCreatorComponent creator={this.editor.creator as SurveyCreator} />;
    if (tab === "results") return <Survey model={this.editor.resultModel}></Survey>;
    return <Survey model={this.editor.model}></Survey>;
  }
}

import * as React from "react";
import { Base } from "survey-core";
import { SurveyActionBar, SurveyElementBase, Survey, SvgBundleComponent } from "survey-react-ui";
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
    if (tab === "creator") {
      return <SurveyCreatorComponent creator={this.editor.creator as SurveyCreator} />;
    }
    if (tab === "results") return this.renderResults();
    return <Survey model={this.editor.model}></Survey>;
  }
  private renderResults() {
    const text = JSON.stringify(this.editor.json, null, 2);
    const style = { width: "100%", height: "100%" };
    const textStyle = { padding: "7px" };
    const codeText = `import { CreatorPreset } from "survey-creator-core";

const preset = new CreatorPreset(yourPresetJSON_you_found_it_bellow);
preset.apply(creator);
`;
    return <>
      <div style={textStyle}>Please use the following code to apply your preset:
        <div>
          <pre><code>{codeText}</code></pre>
        </div>
      </div>
      <textarea readOnly={true} style={style}>{text}</textarea>
    </>;
  }
}

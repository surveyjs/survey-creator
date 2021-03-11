import React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { TabJsonEditorAcePlugin, AceJsonEditorModel } from "@survey/creator";

interface ITabJsonEditorAceComponentProps {
  data: TabJsonEditorAcePlugin;
}

export class TabJsonEditorAceComponent extends SurveyElementBase<ITabJsonEditorAceComponentProps, any> {
  private model: AceJsonEditorModel;
  private aceEditorrRef: React.RefObject<HTMLDivElement>;
  constructor(props: ITabJsonEditorAceComponentProps) {
    super(props);
    this.model = props.data.model;
    this.aceEditorrRef = React.createRef();
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    this.model.init(ace.edit(this.aceEditorrRef.current as HTMLElement));
  }
  render(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <div
            className="svc-json-editor-tab__ace-editor"
            ref={this.aceEditorrRef}
          ></div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-json-editor-ace",
  (props: ITabJsonEditorAceComponentProps) => {
    return React.createElement(TabJsonEditorAceComponent, props);
  }
);
import React from "react";
import { Base, ReactElementFactory, SurveyElementBase } from "survey-react";
import { TabJsonEditorBasePlugin, AceJsonEditorModel } from "@survey/creator";

interface ITabJsonEditorAceComponentProps {
  data: TabJsonEditorBasePlugin<AceJsonEditorModel>
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
    return this.model as any;
  }
  componentDidMount() {
    this.model.init(ace.edit(this.aceEditorrRef.current as HTMLElement));
  }
  render(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <div className="svc-json-editor-tab__ace-editor" ref={this.aceEditorrRef}></div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-json-editor-ace", (props) => {
  return React.createElement(TabJsonEditorAceComponent, props);
});
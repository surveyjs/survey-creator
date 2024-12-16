import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { AceJsonEditorModel } from "survey-creator-core";
import { TabJsonEditorErrorsComponent } from "./JsonEditorTextarea";

interface ITabJsonEditorAceComponentProps {
  data: AceJsonEditorModel;
}

export class TabJsonEditorAceComponent extends SurveyElementBase<
  ITabJsonEditorAceComponentProps,
  any
> {
  private aceEditorrRef: React.RefObject<HTMLDivElement>;
  constructor(props: ITabJsonEditorAceComponentProps) {
    super(props);
    this.aceEditorrRef = React.createRef();
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private get model(): AceJsonEditorModel {
    return this.props.data;
  }
  componentDidMount() {
    this.model.init(ace.edit(this.aceEditorrRef.current as HTMLElement));
  }
  renderElement(): React.JSX.Element {
    const errors = <TabJsonEditorErrorsComponent data={this.model} />;
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <div
            className="svc-json-editor-tab__ace-editor"
            ref={this.aceEditorrRef}
          ></div>
          {errors}
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-json-editor-ace",
  (props: ITabJsonEditorAceComponentProps) => {
    return React.createElement(TabJsonEditorAceComponent, props);
  }
);

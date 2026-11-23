import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { MonacoJsonEditorModel } from "survey-creator-core";
import { TabJsonEditorErrorsComponent } from "./JsonEditorTextarea";

interface ITabJsonEditorMonacoComponentProps {
  data: MonacoJsonEditorModel;
}

export class TabJsonEditorMonacoComponent extends SurveyElementBase<
  ITabJsonEditorMonacoComponentProps,
  any
> {
  private monacoEditorRef: React.RefObject<HTMLDivElement>;
  constructor(props: ITabJsonEditorMonacoComponentProps) {
    super(props);
    this.monacoEditorRef = React.createRef();
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private get model(): MonacoJsonEditorModel {
    return this.props.data;
  }
  componentDidMount() {
    super.componentDidMount();
    this.model.init(this.monacoEditorRef.current as HTMLElement);
  }
  renderElement(): React.JSX.Element {
    const errors = <TabJsonEditorErrorsComponent data={this.model} />;
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-json-editor-tab__content">
          <div
            className="svc-json-editor-tab__monaco-editor"
            ref={this.monacoEditorRef}
          ></div>
          {errors}
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-json-editor-monaco",
  (props: ITabJsonEditorMonacoComponentProps) => {
    return React.createElement(TabJsonEditorMonacoComponent, props);
  }
);

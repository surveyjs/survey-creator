import * as React from "react";
import { VariablesViewerModel } from "survey-creator-core";
import { ReactElementFactory } from "survey-react-ui";

interface IVariablesViewerProps {
  model: VariablesViewerModel;
}

export class VariablesViewerComponent extends React.Component<IVariablesViewerProps, any> {
  render(): React.JSX.Element {
    const model = this.props.model;
    return (
      <div className="svc-variables-viewer">
        <textarea
          className="svc-variables-viewer__text"
          value={model.text}
          readOnly={true}
          spellCheck={false}
          aria-label={model.ariaLabel}
        ></textarea>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-variables-viewer", (props: IVariablesViewerProps) => {
  return React.createElement(VariablesViewerComponent, props);
});

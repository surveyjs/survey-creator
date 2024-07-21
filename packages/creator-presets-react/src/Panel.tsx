import React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { PanelAdornerComponent, QuestionAdornerComponentProps } from "survey-creator-react";
import { SurveyLocStringEditor } from "survey-creator-react";

export class PanelPresetAdornerComponent extends PanelAdornerComponent {
  protected renderElementContent(): JSX.Element {
    const locName = this.model.element.getLocalizableString("categoryName");
    const categoryName = locName ? <SurveyLocStringEditor locStr={locName} /> : <b>{this.model.element.name}</b>;
    const info = <div>
      <span>Category name: {categoryName}</span>
    </div>;
    return <React.Fragment>
      {super.renderElementContent()}
      {info}
    </React.Fragment>;
  }
}

ReactElementFactory.Instance.registerElement("svc-preset-panel", (props: QuestionAdornerComponentProps) => {
  return React.createElement(PanelPresetAdornerComponent, props);
});
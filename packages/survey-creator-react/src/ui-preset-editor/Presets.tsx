import * as React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  Survey,
  SurveyElementBase,
} from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
interface ITabPresetsComponentProps {
  data: any;
  creator: SurveyCreatorModel;
}

export class TabPresetsComponent extends SurveyElementBase<ITabPresetsComponentProps, any> {
  private get model(): SurveyModel {
    return this.props.data.model;
  }
  protected get creator(): SurveyCreatorModel {
    return this.props.creator;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): React.JSX.Element {
    const presetsTabClassName = "svc-tab-designer ";

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {this.creator.showToolbox ? ReactElementFactory.Instance.createElement("svc-toolbox", { model: this.creator }) : null}
        </div>
        <div className={presetsTabClassName}>
          <Survey model={this.model} />
        </div>
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-presets", (props) => {
  return React.createElement(
    TabPresetsComponent,
    props as ITabPresetsComponentProps
  );
});

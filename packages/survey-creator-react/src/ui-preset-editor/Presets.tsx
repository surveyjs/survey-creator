import * as React from "react";
import { ActionContainer, Base, SurveyModel } from "survey-core";
import {
  ReactElementFactory,
  Scroll,
  Survey,
  SurveyActionBar,
  SurveyElementBase,
} from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
interface ITabPresetsComponentProps {
  data: any;
  creator: SurveyCreatorModel;
}

export class TabPresetsComponent extends SurveyElementBase<ITabPresetsComponentProps, any> {
  private get navigationBar(): ActionContainer {
    return this.props.data.navigationBar;
  }
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
    const presetsTabClassName = "svc-tab-designer svc-tab-designer--presets";

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {this.creator.showToolbox ? ReactElementFactory.Instance.createElement("svc-toolbox", { model: this.creator }) : null}
        </div>
        <div className={presetsTabClassName}>
          <Scroll>
            <SurveyActionBar model={this.navigationBar}></SurveyActionBar>
            <Survey model={this.model} />
          </Scroll>
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

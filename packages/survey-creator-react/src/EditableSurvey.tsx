import * as React from "react";
import { ITheme, SurveyModel } from "survey-core";
import { PopupModal, Survey, SvgBundleComponent } from "survey-react-ui";
import { TabDesignerPlugin } from "survey-creator-core";
import { SurveyCreator } from "./SurveyCreator";
import { DesignerSurface } from "./tabs/Designer";

interface IEditableSurveyProps {
  survey: SurveyModel;
  theme?: ITheme;
}

interface IEditableSurveyState {
  mode: "view" | "edit";
  surfaceVersion: number;
}

export class EditableSurvey extends React.Component<IEditableSurveyProps, IEditableSurveyState> {
  private creator: SurveyCreator;

  constructor(props: IEditableSurveyProps) {
    super(props);
    this.creator = new SurveyCreator({
      showTabs: false,
      showToolbar: false,
      showSidebar: false,
      showToolbox: false
    });
    this.creator.getPlugin<TabDesignerPlugin>("designer").wysiwygMode = true;
    this.state = { mode: "view", surfaceVersion: 0 };
    if (props.theme) {
      props.survey.applyTheme(props.theme);
    }
  }

  componentDidUpdate(prevProps: IEditableSurveyProps): void {
    if (this.props.theme === prevProps.theme) return;
    if (this.props.theme) {
      this.props.survey.applyTheme(this.props.theme);
    }
    if (this.state.mode === "edit") {
      this.setState((state) => ({ surfaceVersion: state.surfaceVersion + 1 }));
    }
  }

  componentWillUnmount(): void {
    this.creator.dispose();
  }

  private showEditor = () => {
    this.creator.JSON = this.props.survey.toJSON();
    this.setState((state) => ({ mode: "edit", surfaceVersion: state.surfaceVersion + 1 }));
  };

  private showSurvey = () => {
    this.props.survey.fromJSON(this.creator.JSON);
    if (this.props.theme) {
      this.props.survey.applyTheme(this.props.theme);
    }
    this.setState({ mode: "view" });
  };

  render(): React.JSX.Element {
    const editing = this.state.mode === "edit";
    return (
      <div className="svc-editable-survey-host">
        <button type="button" className="svc-editable-survey__mode" onClick={editing ? this.showSurvey : this.showEditor}>
          {editing ? "View" : "Edit"}
        </button>
        {editing
          ? <EditableSurveyDesigner key={this.state.surfaceVersion} creator={this.creator} theme={this.props.theme} />
          : <Survey model={this.props.survey} />}
      </div>
    );
  }
}

class EditableSurveyDesigner extends React.Component<{ creator: SurveyCreator; theme?: ITheme }, { ready: boolean }> {
  private rootNode: React.RefObject<HTMLDivElement> = React.createRef();
  state = { ready: false };

  componentDidMount(): void {
    if (this.props.theme) {
      this.props.creator.applySurfaceTheme(this.props.theme);
    }
    if (this.rootNode.current) {
      this.props.creator.setRootElement(this.rootNode.current);
    }
    this.setState({ ready: true });
  }

  componentWillUnmount(): void {
    this.props.creator.unsubscribeRootElement();
  }

  render(): React.JSX.Element {
    const designer = this.props.creator.getPlugin<TabDesignerPlugin>("designer", false);
    const model = this.state.ready && designer && designer.model;
    const className = "svc-editable-survey" + (model ? " " + model.getRootCss() : "");
    return (
      <div className={className} ref={this.rootNode}>
        <SvgBundleComponent />
        <PopupModal />
        {model ? <DesignerSurface data={model} /> : null}
      </div>
    );
  }
}

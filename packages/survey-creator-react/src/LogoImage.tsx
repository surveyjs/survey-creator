import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, LogoImage, SvgIcon, attachKey2click, LoadingIndicatorComponent, SurveyActionBar } from "survey-react-ui";
import { SurveyCreatorModel, LogoImageViewModel } from "survey-creator-core";
import { CreatorModelElement } from "./ModelElement";

interface ILogoImageComponentProps {
  data: SurveyCreatorModel;
}

export class LogoImageComponent extends CreatorModelElement<ILogoImageComponentProps, any> {
  private model: LogoImageViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;
  constructor(props: ILogoImageComponentProps) {
    super(props);
    this.rootRef = React.createRef();
  }
  protected createModel(props: any): void {
    let prevRoot: HTMLDivElement = null;
    if (!!this.model) {
      prevRoot = this.model.root;
    }
    this.model = new LogoImageViewModel(props.data, prevRoot);
  }
  protected getUpdatedModelProps(): string[] {
    return ["data"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    this.model.root = this.rootRef.current;
  }
  renderButtons() {
    return <SurveyActionBar model={this.model.actionsContainer} />;
  }
  renderImage() {
    return <div className={this.model.containerCss}>
      {this.renderButtons()}
      <LogoImage data={this.props.data.survey}></LogoImage>
    </div>;
  }
  renderPlaceHolder() {
    return this.model.allowEdit && !this.model.isUploading ? attachKey2click(<div className="svc-logo-image-placeholder" onClick={() => this.model.chooseFile(this.model)}><svg><use xlinkHref="#icon-image-48x48"></use></svg></div>) : null;
  }
  renderInput() {
    return <input aria-hidden="true" type="file" tabIndex={-1} accept={this.model.acceptedTypes} className="svc-choose-file-input" />;
  }
  renderLoadingIndicator() {
    return <div className="svc-logo-image__loading"><LoadingIndicatorComponent></LoadingIndicatorComponent></div>;
  }
  render(): React.JSX.Element {
    let content: React.JSX.Element = null;
    if (this.model.survey.locLogo.renderedHtml && !this.model.isUploading) {
      content = this.renderImage();
    } else if (this.model.isUploading) {
      content = this.renderLoadingIndicator();
    } else {
      content = this.renderPlaceHolder();
    }
    return (
      <div ref={this.rootRef} className="svc-logo-image">
        {this.renderInput()}
        {content}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-logo-image",
  (props: ILogoImageComponentProps) => {
    return React.createElement(LogoImageComponent, props);
  }
);
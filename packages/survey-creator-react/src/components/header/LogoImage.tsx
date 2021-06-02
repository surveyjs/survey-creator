import React from "react";
import { Base, SurveyModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase, LogoImage, SvgIcon } from "survey-react-ui";
import { CreatorBase, LogoImageViewModel } from "@survey/creator";

interface ILogoImageComponentProps {
  data: CreatorBase<SurveyModel>;
}

export class LogoImageComponent extends SurveyElementBase<ILogoImageComponentProps, any> {
  private model: LogoImageViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;
  constructor(props: ILogoImageComponentProps) {
    super(props);
    this.model = new LogoImageViewModel(props.data, null);
    this.rootRef = React.createRef();
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    this.model.root = this.rootRef.current;
  }
  render(): JSX.Element {
    let content: JSX.Element = null;
    if (this.model.isLogoImageChoosen) {
      content = <>
        <LogoImage data={this.props.data.survey}></LogoImage>
        <div className="svc-image-item-value-controls">
          <SvgIcon className="svc-image-item-value-controls__button svc-image-item-value-controls__choose-file" size={24} iconName={'icon-file'} onClick={() => this.model.chooseFile(this.model)}></SvgIcon>
          <SvgIcon className="svc-image-item-value-controls__button svc-image-item-value-controls__remove" size={24} iconName={'icon-delete'} onClick={() => this.model.remove(this.model)}></SvgIcon>
        </div>
      </>;
    }
    else {
      content = <div className="svc-logo-image-placeholder" onClick={() => this.model.chooseFile(this.model)}>[LOGO]</div>;
    }
    return (
      <div ref={this.rootRef} className="svc-logo-image">
        <input type="file" accept="image/*" className="svc-choose-file-input"/>
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
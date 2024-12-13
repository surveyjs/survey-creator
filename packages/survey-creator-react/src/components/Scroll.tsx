import * as React from "react";
import { Base, settings } from "survey-core";
import { ScrollViewModel } from "survey-creator-core";
import { ReactElementFactory, SurveyActionBar, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface IScrollComponentProps {
  children: React.ReactNode;
}
export class ScrollComponent extends React.Component<IScrollComponentProps, any> {
  private model: ScrollViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.rootRef = React.createRef();
    this.model = new ScrollViewModel();
  }
  componentDidMount() {
    const container = this.rootRef.current;
    if (!container) return;
    this.model.setRootElement(container);
  }
  componentWillUnmount() {
    this.model.unsubscribeRootElement();
    this.model.setRootElement(undefined);
  }

  render(): React.JSX.Element {
    return <div ref={this.rootRef} className="svc-scroll__wrapper">
      <div className="svc-scroll__scroller sv-drag-target-skipped" onScroll={() => this.model.onScrollContainer()}>
        <div className="svc-scroll__container">
          {this.props.children}
        </div>
      </div>
      <div className="svc-scroll__scrollbar" onScroll={() => this.model.onScrollScrollbar()}>
        <div className="svc-scroll__scrollbar-sizer">
        </div>
      </div>
    </div>;
  }
}

ReactElementFactory.Instance.registerElement("svc-scroll", (props) => {
  return React.createElement(
    ScrollComponent,
    props as IScrollComponentProps
  );
});

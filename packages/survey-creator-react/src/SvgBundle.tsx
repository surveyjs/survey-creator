
import React from "react";
import { SvgRegistry } from "survey-core";
import { svgBundle } from "survey-creator-core";
import { ReactElementFactory } from "survey-react-ui";

export class SvgBundleComponent extends React.Component {
  private containerRef: React.RefObject<SVGSVGElement>;

  constructor(props: any) {
    super(props);
    this.containerRef = React.createRef();
  }
  componentDidMount() {
    if (!!this.containerRef.current) {
      this.containerRef.current.innerHTML = SvgRegistry.iconsRenderedHtml();
    }
  }
  render() {
    const svgStyle = {
      display: "none"
    };
    return <svg style={svgStyle} id="sv-icon-holder-global-container" ref={this.containerRef}></svg>;
  }
}

ReactElementFactory.Instance.registerElement("svc-svg-bundle", (props) => {
  return React.createElement(SvgBundleComponent, props);
});
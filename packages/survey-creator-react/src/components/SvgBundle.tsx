import React from "react";
import { svgBundle } from "@survey/creator";
import { ReactElementFactory } from "survey-react-ui";


export class SvgBundleComponent extends React.Component {
  private containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.containerRef.current.innerHTML = svgBundle;
  }

  componentWillUnmount() {
    
  }
 
  render() {
    return <div ref={this.containerRef}></div>
  }
}

ReactElementFactory.Instance.registerElement("svc-svg-bundle", (props) => {
  return React.createElement(SvgBundleComponent, props);
});
import * as React from "react";
import { ReactElementFactory } from "survey-react-ui";

export class TranslationLineSkeleton extends React.Component<any, any> {
  render() {
    return (
      <div className="sd-translation-line-skeleton">
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("sd-translation-line-skeleton", (props: any) => {
  return React.createElement(TranslationLineSkeleton, props);
});

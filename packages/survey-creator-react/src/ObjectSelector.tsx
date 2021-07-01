import React from "react";
import { ObjectSelectorModel } from "@survey/creator";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, List } from "survey-react-ui";

interface IObjectSelectorComponentProps {
  model: ObjectSelectorModel;
}
class ObjectSelectorComponent extends SurveyElementBase<
  IObjectSelectorComponentProps,
  any
> {
  constructor(props: IObjectSelectorComponentProps) {
    super(props);
  }
  protected get model(): ObjectSelectorModel {
    return this.props.model;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  renderElement(): JSX.Element {
    if (!this.model.isVisible) return null;
    const onChange = (e: any) => {
      if (e.target === document.activeElement) {
        this.model.filteredText = e.target.value;
      }
    };

    return (
      <div className="svc-object-selector">
        <input
          type="text"
          className="spg-input"
          placeholder={this.model.filteredTextPlaceholder}
          onChange={onChange}
        ></input>
        <List model={this.model.list}></List>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-object-selector", (props) => {
  return React.createElement(
    ObjectSelectorComponent,
    props as IObjectSelectorComponentProps
  );
});

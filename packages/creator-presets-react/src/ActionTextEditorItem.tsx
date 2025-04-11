import * as React from "react";
import { Base, Action } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { SurveyLocStringEditor } from "survey-creator-react";

interface IActionBarItemProps {
  item: Action;
}

export class SurveyTextEditorAction extends SurveyElementBase<IActionBarItemProps, any> {
  get item(): Action {
    return this.props.item;
  }
  protected getStateElement(): Base {
    return this.item;
  }

  renderElement() {
    const text = this.renderText();
    const editor = this.renderTextEditor();
    return (
      <>
        {text}
        {editor}
      </>
    );
  }
  renderText() {
    return this.renderTextCore(this.item.innerItem.title);
  }
  renderTextEditor() {
    const locTitle: any = this.item.innerItem.locTitle;
    if (!locTitle || !locTitle.locStr || !locTitle.creator) return;
    if (this.item.enabled) return <SurveyLocStringEditor locStr={locTitle} />;
    return this.renderTextCore(this.item.locTitle.text);
  }
  private renderTextCore(text: string | undefined) {
    if (!text) return null;
    const titleClass = this.item.getActionBarItemTitleCss();
    return <span className={titleClass}>{text}</span>;
  }
}

ReactElementFactory.Instance.registerElement("sv-action-texteditor-item", (props) => {
  return React.createElement(SurveyTextEditorAction, props);
});

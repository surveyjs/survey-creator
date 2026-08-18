import * as React from "react";
// Type-only: the models live in the separate "survey-creator-core/collaboration"
// bundle, and this import is erased at build - the view carries no runtime
// dependency on it and stays in the main renderer bundle.
import type { CollabBarModel, CollabParticipantAction } from "survey-creator-core/collaboration";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyActionBar, SurveyElementBase, SvgIcon, attachKey2click } from "survey-react-ui";

interface ICollabBarComponentProps {
  model: CollabBarModel;
}

export class CollabBarComponent extends SurveyElementBase<ICollabBarComponentProps, any> {
  get model(): CollabBarModel {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  renderElement() {
    const model = this.model;
    // The connection plate is markup rather than an action: an action-bar item
    // is always a button, and a status is not clickable.
    const status = model.statusVisible ? (
      <div className={model.getStatusCss()} role="status">
        <SvgIcon iconName={model.statusIconName} size={16}></SvgIcon>
        <span className="svc-collab-bar__status-text">{model.statusText}</span>
      </div>
    ) : null;

    // The Version History window is the bar's own; it is position:fixed, so
    // rendering it here keeps it inside the themed root without affecting
    // layout - the creator needs no floating-window host of its own.
    const panel = model.historyPanel
      ? ReactElementFactory.Instance.createElement("svc-floating-panel", { model: model.historyPanel })
      : null;

    return (
      <div className="svc-collab-bar">
        <div className="svc-collab-bar__left">
          <SurveyActionBar model={model.actions}></SurveyActionBar>
          {status}
        </div>
        <div className="svc-collab-bar__right">
          <SurveyActionBar model={model.participantActions}></SurveyActionBar>
          <SurveyActionBar model={model.toolActions}></SurveyActionBar>
        </div>
        {panel}
      </div>
    );
  }
}

interface ICollabBarAvatarProps {
  item: CollabParticipantAction;
}

// One participant. Rendered as a clickable chip in the strip and as a plain
// marker inside the roster popup, where the surrounding list item owns the
// click - nesting a button inside a menuitem would be invalid.
export class CollabBarAvatarComponent extends SurveyElementBase<ICollabBarAvatarProps, any> {
  get item(): CollabParticipantAction {
    return this.props.item;
  }

  protected getStateElement(): Base {
    return this.item;
  }

  renderElement() {
    const item = this.item;
    const avatar = <span className={item.getAvatarCss()}>{item.initials}</span>;
    if (item.isListItem) {
      return (
        <div className="svc-collab-bar__roster-item">
          {avatar}
          <span className="svc-collab-bar__roster-name">{item.title}</span>
        </div>
      );
    }
    return attachKey2click(
      <button
        className={item.getActionBarItemCss()}
        type="button"
        title={item.tooltip || item.title}
        onClick={(args) => item.action(item, item.getIsTrusted(args))}
      >
        {avatar}
      </button>, item, { processEsc: false });
  }
}

export default CollabBarComponent;

ReactElementFactory.Instance.registerElement("svc-collab-bar", (props) => {
  return React.createElement(CollabBarComponent, props);
});
ReactElementFactory.Instance.registerElement("svc-collab-bar-avatar", (props) => {
  return React.createElement(CollabBarAvatarComponent, props);
});

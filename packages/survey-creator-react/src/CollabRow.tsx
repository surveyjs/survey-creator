import * as React from "react";
// Type-only: the models live in the separate "survey-creator-core/collaboration"
// bundle, and this import is erased at build - the view carries no runtime
// dependency on it and stays in the main renderer bundle.
import type { CollabRowAction } from "survey-creator-core/collaboration";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface ICollabRowProps {
  item: CollabRowAction;
}

// The collaboration feature's only row renderer: a leading marker (avatar circle
// or icon), a title and an optional subtitle. Shared by the connection plate, a
// roster entry, a Version History row and the floating panel's title.
//
// Presentation only - it binds NO events. Interaction belongs to whatever wraps
// the row (the <li> of sv-list, the <button> of sv-action-bar) or to nothing at
// all, as for the connection plate. See CollabRowAction.
export class CollabRowComponent extends SurveyElementBase<ICollabRowProps, any> {
  get item(): CollabRowAction {
    return this.props.item;
  }

  protected getStateElement(): Base {
    return this.item;
  }

  protected canRender(): boolean {
    return !!this.item && this.item.visible && super.canRender();
  }

  private renderMarker(): JSX.Element {
    const item = this.item;
    if (item.hasMarkerText) {
      return <span className={item.markerCss}>{item.markerText}</span>;
    }
    if (item.hasMarkerIcon) {
      return (
        <span className="svc-collab-row__icon">
          <SvgIcon iconName={item.markerIconName} size={item.markerIconSize}></SvgIcon>
        </span>
      );
    }
    return null;
  }

  renderElement() {
    const item = this.item;
    return (
      <div
        className={item.rowCss}
        role={item.rowRole || undefined}
        aria-expanded={item.ariaExpanded}
      >
        {this.renderMarker()}
        <span className="svc-collab-row__title">{item.title}</span>
        {item.hasSubtitle ? <span className="svc-collab-row__subtitle">{item.subtitle}</span> : null}
      </div>
    );
  }
}

export default CollabRowComponent;

ReactElementFactory.Instance.registerElement("svc-collab-row", (props) => {
  return React.createElement(CollabRowComponent, props);
});

import { Action, property } from "survey-core";

import "./collab-row.scss";

// One row of collaboration UI: a leading marker (an avatar circle with initials
// or an icon), a primary text and an optional secondary text.
//
// Four places share exactly this shape - the connection plate, a roster entry, a
// Version History row and the floating panel's title - so they share one
// renderer ("svc-collab-row") instead of a component per framework each.
//
// The renderer is presentation ONLY: it binds no events. Interaction comes from
// whatever wraps the row - the <li> of sv-list, the <button> of sv-action-bar -
// so the same action works in a list, in an action bar and as bare markup.
//
// Instances are NEVER shared between two containers: ActionContainer.setItems
// and ListModel.setItems rewrite cssClasses and owner on the actions they
// receive, so a shared instance would be corrupted by whichever container
// touched it last.
export class CollabRowAction extends Action {
  // Initials shown in the avatar circle; "" renders no circle.
  @property({ defaultValue: "" }) markerText: string;
  // Class of the avatar circle - carries the theme's user-color slot.
  @property({ defaultValue: "" }) markerCss: string;
  // The icon shown instead of the circle comes from Action's own
  // `markerIconName` - not redeclared here, so the property is registered once.
  // survey-core's default list item draws it trailing; this row draws it
  // leading, which is fine because the row replaces that renderer outright.
  @property({ defaultValue: 16 }) markerIconSize: number;
  // Class of the row's root element. Callers recompute it whenever state
  // changes - the Version History rebuilds its rows on expand, the status plate
  // rebuilds on connect - so it needs no dynamic part here.
  @property({ defaultValue: "" }) rowCss: string;
  // Secondary text, e.g. a version timestamp; "" renders nothing.
  @property({ defaultValue: "" }) subtitle: string;
  // ARIA role of the row's root; "" leaves the attribute off. The connection
  // plate uses "status" so a screen reader announces reconnects.
  @property({ defaultValue: "" }) rowRole: string;
  // Expansion is reported through Action's own `ariaExpanded`, which stays
  // undefined - and so keeps the attribute off - on rows where expanding means
  // nothing. Only the Version History group headers set it.

  public get hasMarkerText(): boolean {
    return !!this.markerText;
  }
  public get hasMarkerIcon(): boolean {
    return !!this.markerIconName;
  }
  public get hasSubtitle(): boolean {
    return !!this.subtitle;
  }
}

import { Action, CssClassBuilder, property } from "survey-core";

// One remote participant, rendered by "svc-collab-bar-avatar" both as a chip in
// the bar strip and as a row in the overflow roster (the list item renderer
// honors item.component too, so a single view covers both). `isListItem` picks
// the layout.
//
// Instances are NEVER shared between the strip container and the roster list:
// ActionContainer.setItems rewrites cssClasses and owner on the actions it
// receives, so a shared instance would be corrupted by whichever container
// touched it last.
export class CollabParticipantAction extends Action {
  // Theme user-color slot, 1..9 or 0 - see presenceColorSlot.
  @property({ defaultValue: 0 }) colorIndex: number;
  @property() initials: string;
  @property({ defaultValue: false }) isListItem: boolean;

  public getAvatarCss(): string {
    return new CssClassBuilder()
      .append("svc-collab-bar__avatar")
      .append("svc-collab-bar__avatar--color-" + this.colorIndex)
      .append("svc-collab-bar__avatar--list", this.isListItem)
      .toString();
  }

  public getActionBarItemCss(): string {
    return "svc-collab-bar__participant " + super.getActionBarItemCss();
  }
}

import * as React from "react";
// Type-only - see CollabBar.tsx.
import type { IVersionHistoryRow, VersionHistoryModel } from "survey-creator-core/collaboration";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface IVersionHistoryProps {
  model: VersionHistoryModel;
}

export class VersionHistoryComponent extends SurveyElementBase<IVersionHistoryProps, any> {
  get model(): VersionHistoryModel {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  private renderRow(row: IVersionHistoryRow): JSX.Element {
    const title = <span className="svc-version-history__title">{row.title}</span>;
    const time = row.time
      ? <span className="svc-version-history__time">{row.time}</span>
      : null;
    // The group header is the only interactive row.
    if (row.kind === "group") {
      return (
        <button
          key={row.id}
          type="button"
          className={row.css}
          aria-expanded={row.expanded}
          onClick={() => this.model.toggleGroup(row.groupKey)}
        >
          <span className="svc-version-history__icon">
            <SvgIcon
              iconName={row.expanded ? "icon-chevrondown-16x16" : "icon-chevronright-16x16"}
              size={16}
            ></SvgIcon>
          </span>
          {title}
        </button>
      );
    }
    return (
      <div key={row.id} className={row.css}>
        {title}
        {time}
      </div>
    );
  }

  renderElement() {
    return (
      <div className="svc-version-history">
        {this.model.rows.map((row) => this.renderRow(row))}
      </div>
    );
  }
}

export default VersionHistoryComponent;

ReactElementFactory.Instance.registerElement("svc-version-history", (props) => {
  return React.createElement(VersionHistoryComponent, props);
});

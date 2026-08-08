import * as React from "react";
import { ItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { getTranslationLocaleProgress, translationLocaleItemComponentName } from "survey-creator-core";

// An item of the target language dropdown: the language name and, at the right edge, how much of
// the survey is already translated into it. The counts are precomputed on the choices themselves
// (see updateTargetLocaleChoices) - a language with no translations carries none.
export class TranslationLocaleItemComponent extends SurveyElementBase<{ item: ItemValue }, any> {
  private get item(): any {
    return this.props.item;
  }
  protected getStateElement(): ItemValue {
    return this.item;
  }
  renderElement(): React.JSX.Element {
    const item = this.item;
    if (!item) return null;
    const progress = getTranslationLocaleProgress(item);
    return (
      <div className="svc-translation-locale-item">
        <span className="svc-translation-locale-item__name">
          {this.renderLocString(item.locTitle, undefined, "locString")}
        </span>
        {!!progress ? <span className="svc-translation-locale-item__progress">{progress}</span> : null}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  translationLocaleItemComponentName,
  (props) => {
    return React.createElement(TranslationLocaleItemComponent, props);
  }
);

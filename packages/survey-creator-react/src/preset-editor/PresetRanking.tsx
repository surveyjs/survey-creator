import { ItemValue, QuestionRankingModel, SurveyModel, LocalizableString } from "survey-core";
import { ReactQuestionFactory, SurveyQuestionRanking,
  SurveyQuestionRankingItem, ReactSurveyElementsWrapper } from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
import * as React from "react";
import { SurveyLocStringEditor } from "../StringEditor";

export class PresetLocStringEditor extends SurveyLocStringEditor {
  protected get locString(): LocalizableString {
    return this.props.locStr;
  }
  protected get creator(): SurveyCreatorModel {
    return undefined;
  }
}

export class SurveyQuestionPresetRanking extends SurveyQuestionRanking {
  protected renderItem(
    item: ItemValue,
    i: number,
    handleKeydown: (event: any) => void,
    handlePointerDown: (event: PointerEvent) => void,
    handlePointerUp: (event: PointerEvent) => void,
    cssClasses: any,
    itemClass: string,
    question: QuestionRankingModel,
    unrankedItem?: boolean
  ): JSX.Element {
    const key: string = "id-" + item.renderedId;
    const text: JSX.Element = this.renderLocString(item.locText);
    const index = i;
    const indexText: string = this.question.getNumberByIndex(index);
    const tabIndex: number = this.question.getItemTabIndex(item);
    const renderedItem = (
      <SurveyQuestionPresetRankingItem
        key={item.value}
        text={text}
        index={index}
        indexText={indexText}
        itemTabIndex={tabIndex}
        handleKeydown={handleKeydown}
        handlePointerDown={handlePointerDown}
        handlePointerUp={handlePointerUp}
        cssClasses={cssClasses}
        itemClass={itemClass}
        question={question}
        unrankedItem={unrankedItem}
        item={item}
      />
    );
    const survey = this.question.survey as SurveyModel;
    let wrappedItem: JSX.Element | null = null;
    if (!!survey) {
      wrappedItem = ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
    }
    return wrappedItem ?? renderedItem;
  }
}

export class SurveyQuestionPresetRankingItem extends SurveyQuestionRankingItem {
  private svStringEditorRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.svStringEditorRef = React.createRef();
  }
  protected renderElement(): JSX.Element {
    return (
      <div
        tabIndex={this.itemTabIndex}
        className={this.itemClass}
        onKeyDown={this.handleKeydown}
        onPointerDown={this.handlePointerDown}
        onPointerUp={this.handlePointerUp}
        data-sv-drop-target-ranking-item={this.index}
      >
        <div tabIndex={-1} style={{ outline: "none" }}>
          <div className={this.cssClasses.itemGhostNode} />
          <div className={this.cssClasses.itemContent}>
            <div className={this.cssClasses.itemIconContainer}>
              <svg
                className={this.question.getIconHoverCss()}
              >
                <use xlinkHref={this.question.dragDropSvgIcon}></use>
              </svg>
              <svg
                className={this.question.getIconFocusCss()}
              >
                <use xlinkHref={this.question.arrowsSvgIcon}></use>
              </svg>
            </div>

            <div className={this.question.getItemIndexClasses(this.item)}>
              {(!this.unrankedItem && this.indexText) ? this.indexText : this.renderEmptyIcon()}
            </div>
            {this.renderText()}
          </div>
        </div>
      </div>
    );
  }

  protected renderText(): JSX.Element {
    return <PresetLocStringEditor locStr={this.item.locText} />;
  }
}

ReactQuestionFactory.Instance.registerQuestion("presetranking", (props) => {
  return React.createElement(SurveyQuestionPresetRanking, props);
});

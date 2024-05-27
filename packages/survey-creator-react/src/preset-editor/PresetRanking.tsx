import { ItemValue, QuestionRankingModel, SurveyModel } from "survey-core";
import { ReactQuestionFactory, SurveyQuestionRanking,
  SurveyQuestionRankingItem, ReactSurveyElementsWrapper } from "survey-react-ui";
import * as React from "react";

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
  private onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    event.stopPropagation();
  };
  private onKeyUp = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    event.stopPropagation();
  };
  private onMouseUp = (event: React.MouseEvent<HTMLSpanElement>): boolean => {
    event.stopPropagation();
    return true;
  };
  private onMouseDown = (event: React.MouseEvent<HTMLSpanElement>): boolean => {
    event.stopPropagation();
    return true;
  };
  private handleTextPointerDown = (event: React.PointerEvent<HTMLSpanElement>) => {
    event.stopPropagation();
  }
  private handleTextPointerUp = (event: React.PointerEvent<HTMLSpanElement>) => {
    event.stopPropagation();
  }
  private edit = (event: any) => {
    this.svStringEditorRef.current.focus();
  }
  protected renderText(): JSX.Element {
    /*
    <span
    role="textbox"
    //ref={this.svStringEditorRef}
    className="sv-string-editor"
    contentEditable={true}
    spellCheck={false}
    //aria-placeholder={this.placeholder}
    //aria-label={this.placeholder || "content editable"}
    suppressContentEditableWarning={true}
    /*
    onBlur={this.onBlur}
    onInput={this.onInput}
    onPaste={this.onPaste}
    onFocus={this.onFocus}
    onClick={this.edit}
    */
    const className = "sv-string-editor";
    return (<span
      role="textbox"
      ref={this.svStringEditorRef}
      className= {className}
      contentEditable={true}
      spellCheck={false}
      suppressContentEditableWarning={true}
      onKeyDown={this.onKeyDown}
      onKeyUp={this.onKeyUp}
      onMouseUp={this.onMouseUp}
      onMouseDown={this.onMouseDown}
      onClick={this.edit}
      onPointerDown={this.handleTextPointerDown}
      onPointerUp={this.handleTextPointerUp}
    >
      {this.text}
    </span>);
  }
}

ReactQuestionFactory.Instance.registerQuestion("ranking", (props) => {
  return React.createElement(SurveyQuestionPresetRanking, props);
});

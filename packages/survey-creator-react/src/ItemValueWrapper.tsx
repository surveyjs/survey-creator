import { ItemValueWrapperViewModel, SurveyCreatorModel } from "survey-creator-core";
import * as React from "react";
import { QuestionSelectBase, Base, ItemValue, PanelModel, SurveyModel, Action } from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SurveyPanel,
  SvgIcon
} from "survey-react-ui";
import { CreatorModelElement } from "./ModelElement";

interface ItemValueAdornerComponentProps {
  element: React.JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  item: ItemValue;
}

export class ItemValueAdornerComponent extends CreatorModelElement<
  ItemValueAdornerComponentProps,
  any
> {
  model: ItemValueWrapperViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }
  protected createModel(props: any): void {
    this.model = new ItemValueWrapperViewModel(
      props.componentData.creator,
      props.question,
      props.item
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "item"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private onBlur = (event: any) => {
    this.model.onFocusOut(event.nativeEvent);
  };

  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    this.props.item.setRootElement(this.rootRef.current);
    if (prevProps.item !== this.props.item && prevProps.item) {
      prevProps.item.setRootElement(undefined);
    }
  }

  componentDidMount(): void {
    super.componentDidMount();
    this.props.item.setRootElement(this.rootRef.current);
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.props.item.setRootElement(undefined);
  }

  renderButton(action: Action) {
    return ReactElementFactory.Instance.createElement("sv-action-bar-item", {
      item: action,
    });
  }

  render(): React.JSX.Element {
    this.model.item = this.props.item;
    const button = this.model.allowAdd ? (
      this.renderButton(this.model.addAction)
    ) : (
      <>
        {" "}
        {this.model.isDraggable ? (
          <span
            className="svc-item-value-controls__drag"
          >
            <SvgIcon className="svc-item-value-controls__drag-icon" size={"auto"} iconName={"icon-drag-24x24"} title={this.model.dragTooltip}></SvgIcon>
          </span>
        ) : null}
        {this.model.allowRemove ? this.renderButton(this.model.removeAction) : null}
      </>
    );

    const itemkey = this.props.element.key + (this.model.allowAdd ? "_new" : "");

    return (
      <>
        <div
          ref={this.rootRef}
          className={
            "svc-item-value-wrapper" +
          (this.model.allowAdd ? " svc-item-value--new" : "") +
          (this.model.isDragging ? " svc-item-value--dragging" : "") +
          (this.model.isDragDropGhost ? " svc-item-value--ghost" : "") +
          (this.model.isDragDropMoveDown ? " svc-item-value--movedown" : "") +
          (this.model.isDragDropMoveUp ? " svc-item-value--moveup" : "")
          }
          key={itemkey}
          data-sv-drop-target-item-value={
            this.model.isDraggable ? this.model.item.value : undefined
          }
          onPointerDown={(event: any) => this.model.onPointerDown(event)}
        >
          <div className="svc-item-value__ghost"></div>

          <div className="svc-item-value-controls" onBlur={this.onBlur}>{button}</div>

          <div className={"svc-item-value__item"} onClick={(event) => this.model.select(this.model, event.nativeEvent)}>{this.props.element}</div>
          {this.renderPanelAction()}
        </div>
        {this.renderPanel()}
      </>
    );
  }
  private renderPanelAction(): React.JSX.Element | null {
    if (!this.model.canShowPanel()) return null;
    const btn = this.renderButton(this.model.expandPanelAction);
    return <div className="svc-item-value-controls svc-choice-elements-button-container">{btn}</div>;
  }
  private renderPanel(): React.JSX.Element | null {
    if (!this.model.renderedShowPanel) return null;
    const creator = this.model.creator;
    const survey = creator.survey;
    return <ChoiceItemPanel element={this.model.item.panel} survey={survey} creator={creator} css={survey.getCss()}></ChoiceItemPanel>;
  }
}

const ChoiceItemPanel = React.memo(({ element, survey, creator, css }: {
  element: PanelModel,
  survey: SurveyModel,
  creator: SurveyCreatorModel,
  css: any,
}) => {
  return <SurveyPanel element={element} survey={survey} creator={creator} cssClasses={css} />;
});
ChoiceItemPanel.displayName = "ChoiceItemPanel";

ReactElementFactory.Instance.registerElement(
  "svc-item-value",
  (props: ItemValueAdornerComponentProps) => {
    return React.createElement(ItemValueAdornerComponent, props);
  }
);

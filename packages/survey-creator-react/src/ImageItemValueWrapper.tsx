import { ImageItemValueWrapperViewModel } from "survey-creator-core";
import * as React from "react";
import { QuestionSelectBase, Base, ImageItemValue, QuestionImagePickerModel, Action } from "survey-core";
import { LoadingIndicatorComponent, ReactElementFactory, SvgIcon, SurveyActionBar, SurveyElementBase } from "survey-react-ui";
import {
  attachKey2click,
} from "survey-react-ui";
import { CreatorModelElement } from "./ModelElement";

interface ImageItemValueAdornerComponentProps {
  element: React.JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  item: ImageItemValue;
}

export class ImageItemValueAdornerComponent extends CreatorModelElement<
  ImageItemValueAdornerComponentProps,
  any
> {
  model: ImageItemValueWrapperViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ImageItemValueAdornerComponentProps) {
    super(props);
    this.rootRef = React.createRef();
  }
  protected createModel(props: any): void {
    this.model = new ImageItemValueWrapperViewModel(
      props.componentData.creator,
      props.question,
      props.item,
      null,
      null
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "item"];
  }
  protected getStateElement(): Base {
    return this.model;
  }

  protected get question(): QuestionImagePickerModel {
    return this.props.question as QuestionImagePickerModel;
  }

  componentDidMount() {
    super.componentDidMount();
    this.model.itemsRoot = this.rootRef.current;
  }

  componentDidUpdate(prevProps, prevState) {
    super.componentDidUpdate(prevProps, prevState);
    this.model.itemsRoot = this.rootRef.current;
  }

  preventDragHandler = (e) => {
    e.preventDefault();
  };
  renderLoadingIndicator() {
    return <div className="svc-image-item-value__loading"><LoadingIndicatorComponent></LoadingIndicatorComponent></div>;
  }

  renderNewItemControls() {
    const controls = <SurveyActionBar model={this.model.actionsContainer}></SurveyActionBar>;
    const placeholder = this.model.showPlaceholder ? <span className="svc-image-item-value__placeholder">{this.model.placeholderText}</span> : null;
    return <>
      {placeholder}
      {controls}
    </>;
  }

  render(): React.JSX.Element {
    this.model.item = this.props.item;
    const isNew = !this.props.question.isItemInList(this.props.item);
    this.model.isNew = isNew;
    const imageStyle = !this.model.getIsNewItemSingle() ? { width: this.question.renderedImageWidth, height: this.question.renderedImageHeight } : null;

    let content = null;
    if (isNew || this.model.isUploading) {
      content = (<>
        <div className="svc-image-item-value__item">
          <div className="sd-imagepicker__item sd-imagepicker__item--inline">
            <label className="sd-imagepicker__label">
              <div style={imageStyle} className="sd-imagepicker__image">
                {this.model.isUploading ? this.renderLoadingIndicator() : null}
              </div>
            </label>
          </div>
        </div>

        {this.model.allowAdd && !this.model.isUploading ?
          <div className="svc-image-item-value-controls">
            {this.renderNewItemControls()}
          </div>
          : null}
      </>);
    } else {
      content = (
        <>
          <div className={"svc-image-item-value__item"}>
            {this.props.element}
          </div>
          { this.model.canRenderControls ? <SurveyActionBar model={this.model.topActionsContainer}></SurveyActionBar> : null }
        </>
      );
    }

    return (
      <div
        ref={this.rootRef}
        className={this.model.getRootCss()}
        key={this.props.element.key}
        data-sv-drop-target-item-value={
          this.model.isDraggable ? this.model.item.value : undefined
        }
        onPointerDown={(event: any) => this.model.onPointerDown(event)}
        onDragStart={this.preventDragHandler}
        onDrop={this.model.onDrop}
        onDragEnter={this.model.onDragEnter}
        onDragOver={this.model.onDragOver}
        onDragLeave={this.model.onDragLeave}
      >
        <div className={"svc-image-item-value-wrapper__ghost"} style={imageStyle}></div>
        <div className={"svc-image-item-value-wrapper__content"}>
          <input
            type="file"
            aria-hidden="true"
            tabIndex={-1}
            accept={this.model.acceptedTypes}
            className="svc-choose-file-input"
            style={{
              position: "absolute",
              opacity: 0,
              width: "1px",
              height: "1px",
              overflow: "hidden"
            }}
          />
          {content}
        </div>
      </div>
    );
  }
}

class ImageItemDragAction extends SurveyElementBase<{ item: Action }, any> {
  renderElement() {
    return <span className={this.props.item.getActionBarItemCss()}
      onPointerDown={(event: any) => this.props.item.data.model.onPointerDown(event)}
    >
      <SvgIcon size={"auto"} iconName={this.props.item.iconName} className={this.props.item.cssClasses.itemIcon}></SvgIcon>
    </span>;
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-image-item-drag-action",
  (props: { item: Action }) => {
    return React.createElement(ImageItemDragAction, props);
  }
);

ReactElementFactory.Instance.registerElement(
  "svc-image-item-value",
  (props: ImageItemValueAdornerComponentProps) => {
    return React.createElement(ImageItemValueAdornerComponent, props);
  }
);

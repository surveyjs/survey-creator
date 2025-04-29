import { ImageItemValueWrapperViewModel } from "survey-creator-core";
import * as React from "react";
import { QuestionSelectBase, Base, ImageItemValue, QuestionImagePickerModel } from "survey-core";
import { LoadingIndicatorComponent, ReactElementFactory, SvgIcon } from "survey-react-ui";
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
    const addButton = attachKey2click(
      <span className={this.model.addButtonCss}
        onClick={() => this.model.chooseNewFile(this.model)}>
        {this.model.showChooseButtonAsIcon ?
          <SvgIcon size={"auto"} iconName={"icon-add-lg"}
            title={this.model.addFileTitle}></SvgIcon> :
          <span>{this.model.chooseImageText}</span>
        }
      </span>);
    const placeholder = this.model.showPlaceholder ? <span className="svc-image-item-value__placeholder">{this.model.placeholderText}</span> : null;
    return <>
      {placeholder}
      {addButton}
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

          {
            this.model.isDraggable && this.model.canRenderControls ?
              <span className="svc-context-button svc-image-item-value-controls__drag-area-indicator"
                onPointerDown={(event: any) => this.model.onPointerDown(event)}
              >
                <SvgIcon size={"auto"} iconName={"icon-drag-24x24"}></SvgIcon>
              </span>
              : null
          }

          {
            this.model.canRenderControls ?
              <div className="svc-context-container svc-image-item-value-controls">
                {this.model.allowRemove && !this.model.isUploading ? attachKey2click(<span
                  className="svc-context-button"
                  onClick={() => this.model.chooseFile(this.model)}
                >
                  <SvgIcon role="button" size={"auto"} iconName={"icon-choosefile"} title={this.model.selectFileTitle}></SvgIcon>
                </span>) : null}
                {this.model.allowRemove && !this.model.isUploading ? attachKey2click(<span
                  className="svc-context-button svc-context-button--danger"
                  onClick={() => this.model.remove(this.model)}
                >
                  <SvgIcon role="button" size={"auto"} iconName={"icon-delete"} title={this.model.removeFileTitle}></SvgIcon>
                </span>) : null}
              </div>
              : null
          }
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

ReactElementFactory.Instance.registerElement(
  "svc-image-item-value",
  (props: ImageItemValueAdornerComponentProps) => {
    return React.createElement(ImageItemValueAdornerComponent, props);
  }
);

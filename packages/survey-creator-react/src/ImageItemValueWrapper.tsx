import { ImageItemValueWrapperViewModel } from "survey-creator-core";
import React from "react";
import { QuestionSelectBase, Base, ImageItemValue, QuestionImagePickerModel } from "survey-core";
import { ReactElementFactory, SvgIcon } from "survey-react-ui";
import {
  attachKey2click,
} from "survey-react-ui";
import { CreatorModelElement } from "./ModelElement";

interface ImageItemValueAdornerComponentProps {
  element: JSX.Element;
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
  protected createModel(): void {
    this.model = new ImageItemValueWrapperViewModel(
      this.props.componentData.creator,
      this.props.question,
      this.props.item,
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
  }

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }
    this.model.item = this.props.item;
    const isNew = !this.props.question.isItemInList(this.props.item);
    this.model.isNew = isNew;
    const imageStyle = !this.model.getIsNewItemSingle() ? { width: this.question.renderedImageWidth, height: this.question.renderedImageHeight } : null;

    let content = null;
    if (isNew) {
      content = (<>
        <div className="svc-image-item-value__item"
          onDrop={this.model.onDrop} onDragOver={this.model.onDragOver} onDragLeave={this.model.onDragLeave}>
          <div className="sd-imagepicker__item sd-imagepicker__item--inline">
            <label className="sd-imagepicker__label">
              <div style={imageStyle} className="sd-imagepicker__image">
              </div>
            </label>
          </div>
        </div>

        <div className="svc-image-item-value-controls">
          {this.model.allowAdd && !this.model.isUploading ? attachKey2click(<span className="svc-context-button svc-image-item-value-controls__add" onClick={() => this.model.chooseNewFile(this.model)}>
            <SvgIcon size={24} iconName={"icon-add-lg"}></SvgIcon>
          </span>) : null}
        </div>
      </>);
    } else {
      content = (
        <>
          <div className={"svc-image-item-value__item"}>
            {this.props.element}
          </div>

          {
            this.model.isDraggable ?
              <span className="svc-context-button svc-image-item-value-controls__drag-area-indicator"
                onPointerDown={(event: any) => this.model.onPointerDown(event)}
              >
                <SvgIcon size={24} iconName={"icon-drag-area-indicator"}></SvgIcon>
              </span>
              : null
          }

          <div className="svc-context-container svc-image-item-value-controls">
            {this.model.allowRemove && !this.model.isUploading ? attachKey2click(<span
              className="svc-context-button"
              onClick={() => this.model.chooseFile(this.model)}
            >
              <SvgIcon size={24} iconName={"icon-file"}></SvgIcon>
            </span>) : null}
            {this.model.allowRemove && !this.model.isUploading ? attachKey2click(<span
              className="svc-context-button svc-context-button--danger"
              onClick={() => this.model.remove(this.model)}
            >
              <SvgIcon size={24} iconName={"icon-delete"}></SvgIcon>
            </span>) : null}
          </div>
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

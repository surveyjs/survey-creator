import { ImageItemValueWrapperViewModel } from "@survey/creator";
import React from "react";
import { QuestionSelectBase, Base, ImageItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import {
  attachKey2click,
} from "survey-react-ui";

interface ImageItemValueAdornerComponentProps {
  element: JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  item: ImageItemValue;
}

export class ImageItemValueAdornerComponent extends SurveyElementBase<
  ImageItemValueAdornerComponentProps,
  any
> {
  model: ImageItemValueWrapperViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ImageItemValueAdornerComponentProps) {
    super(props);
    this.model = new ImageItemValueWrapperViewModel(
      this.props.componentData.creator,
      this.props.question,
      this.props.item,
      null,
      null
    );
    this.rootRef = React.createRef();
  }
  protected getStateElement(): Base {
    return this.model;
  }

  componentDidMount() {
    super.componentDidMount();
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
    const imageWidth = (this.props.question as any).imageWidth;
    const imageHeight = (this.props.question as any).imageHeight;

    let content = null;
    if (isNew) {
      content = (<>
        <div className="svc-image-item-value__item">
          <div className="sd-imagepicker__item sd-imagepicker__item--inline">
            <label className="sd-imagepicker__label">
              <div style={{ width: imageWidth ? imageWidth + "px" : undefined, height: imageHeight ? imageHeight + "px" : undefined }} className="sd-imagepicker__image">
              </div>
            </label>
          </div>
        </div>

        <div className="svc-image-item-value-controls">
          {this.model.allowAdd ? attachKey2click(<span className="svc-image-item-value-controls__button svc-image-item-value-controls__add" onClick={() => this.model.chooseNewFile(this.model)}>
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

          <span className="svc-image-item-value-controls__button svc-image-item-value-controls__drag-area-indicator"
            onPointerDown={(event: any) => this.model.onPointerDown(event)}
          >
            <SvgIcon size={24} iconName={"icon-drag-area-indicator"}></SvgIcon>
          </span>

          <div className="svc-image-item-value-controls">
            {this.model.allowRemove ? attachKey2click(<span
              className="svc-image-item-value-controls__button svc-image-item-value-controls__choose-file"
              onClick={() => this.model.chooseFile(this.model)}
            >
              <SvgIcon size={24} iconName={"icon-file"}></SvgIcon>
            </span>) : null}
            {this.model.allowRemove ? attachKey2click(<span
              className="svc-image-item-value-controls__button svc-image-item-value-controls__remove"
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
        className={
          "svc-image-item-value-wrapper" +
          (isNew ? " svc-image-item-value--new" : "") +
          (this.model.isDragDropGhost ? " svc-image-item-value-wrapper--ghost" : "")
        }
        key={this.props.element.key}
        data-sv-drop-target-item-value={
          this.model.isDraggable ? this.model.item.value : undefined
        }
        onPointerDown={(event: any) => this.model.onPointerDown(event)}
        onDragStart={this.preventDragHandler}
      >
        <div className={"svc-image-item-value-wrapper__ghost"}></div>
        <div className={"svc-image-item-value-wrapper__content"}>
          <input
            type="file"
            aria-hidden="true"
            tabIndex={-1}
            accept="image/*"
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

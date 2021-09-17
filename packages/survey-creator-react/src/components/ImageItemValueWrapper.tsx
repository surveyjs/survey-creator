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

  private getDragDropGhost(topOrBottom: string) {
    if (this.model.ghostPosition === topOrBottom) {
      let className = "sv-drag-drop-ghost";
      if (topOrBottom === "bottom")
        className += " sv-drag-drop-ghost--item-value-bottom";
      return <div className={className}></div>;
    }
    return null;
  }

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }
    this.model.item = this.props.item;
    const isNew = !this.props.question.isItemInList(this.props.item);

    let content = null;
    if (isNew) {
      content = (<>
        <div className="svc-image-item-value__item">
          <div className="sv-imagepicker__item sv-imagepicker__item--inline">
            <label className="sv-imagepicker__label">
              <div style={{ width: this.props.question.imageWidth ? this.props.question.imageWidth + "px" : undefined, height: this.props.question.imageHeight ? this.props.question.imageHeight + "px" : undefined }} className="sv-imagepicker__image">
              </div>
            </label>
          </div>
        </div>

        <div className="svc-image-item-value-controls">
          {this.model.allowAdd ? attachKey2click(<span className="svc-image-item-value-controls__button svc-image-item-value-controls__add" onClick={() => this.model.chooseNewFile(this.model)}>
            <SvgIcon size={24} iconName={"icon-add-item-value"}></SvgIcon>
          </span>) : null}
        </div>
      </>);
    } else {
      content = (
        <>
          {this.getDragDropGhost("top")}

          <div className={"svc-image-item-value__item"}>
            {this.props.element}
          </div>

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

          {this.getDragDropGhost("bottom")}
        </>
      );
    }

    return (
      <div
        ref={this.rootRef}
        className={
          "svc-image-item-value-wrapper" +
          (isNew ? " svc-image-item-value--new" : "")
        }
        key={this.props.element.key}
        data-sv-drop-target-item-value={
          this.model.isDraggable ? this.model.item.value : undefined
        }
        onPointerDown={isNew ? undefined : (event: any) => this.model.startDragItemValue(event)}
      >
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
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-image-item-value",
  (props: ImageItemValueAdornerComponentProps) => {
    return React.createElement(ImageItemValueAdornerComponent, props);
  }
);

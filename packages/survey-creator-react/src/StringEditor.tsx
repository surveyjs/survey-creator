import React from "react";
import { LocalizableString, Serializer, JsonObjectProperty, Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { CreatorBase, StringEditorViewModelBase, editableStringRendererName } from "survey-creator-core";

export class SurveyLocStringEditor extends SurveyElementBase<any, any> {
  private baseModel: StringEditorViewModelBase;
  private svStringEditorRef: React.RefObject<HTMLDivElement>;
  private blurredByEscape: boolean = false;
  constructor(props: any) {
    super(props);
    this.state = { changed: 0 };
    this.baseModel = new StringEditorViewModelBase(this.locString, this.creator);
    this.svStringEditorRef = React.createRef();
    this.baseModel.blurEditor = () => {
      this.svStringEditorRef.current.blur();
      this.svStringEditorRef.current.spellcheck = false;
    };
  }
  private get locString(): LocalizableString {
    return this.props.locStr.locStr;
  }
  private get creator(): CreatorBase {
    return this.props.locStr.creator;
  }
  private get style(): any {
    return this.props.style;
  }

  protected getStateElement(): Base {
    return this.baseModel;
  }

  public get errorText(): string {
    return this.baseModel.errorText;
  }

  public componentDidMount() {
    super.componentDidMount();
    if (!this.locString) return;
    const self: SurveyLocStringEditor = this;
    this.locString.onChanged = function () {
      self.setState({ changed: self.state.changed + 1 });
    };
    if (this.locString["__isEditing"]) {
      this.svStringEditorRef.current.focus();
      // document.execCommand('selectAll', false, null);
    }
  }
  public componentWillUnmount() {
    super.componentWillUnmount();
    if (!this.locString) return;
    this.locString.onChanged = function () { };
  }
  private get placeholder(): string {
    return this.baseModel.placeholder;
  }
  private get contentEditable(): boolean {
    return this.baseModel.contentEditable;
  }
  private onBlur = (event: any) => {
    this.svStringEditorRef.current.spellcheck = false;
    this.locString["__isEditing"] = false;
    this.justFocused = false;
    this.baseModel.onInput(event.nativeEvent);
    return this.baseModel.errorText;
  };
  private justFocused = false;
  private onFocus = (event: any) => {
    this.baseModel.onFocus(event.nativeEvent);
    this.justFocused = true;
  };
  private onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    return this.baseModel.onKeyDown(event.nativeEvent);
  };
  private onMouseUp = (event: React.MouseEvent<HTMLSpanElement>): boolean => {
    return this.baseModel.onMouseUp(event.nativeEvent);
  };
  private done = (event: any) => {
    this.baseModel.done(event);
    this.locString["__isEditing"] = false;
  };
  private edit = (event: any) => {
    this.svStringEditorRef.current.focus();
    // document.execCommand('selectAll', false, null);
    this.locString["__isEditing"] = true;
    this.baseModel.onClick(event);
  };
  private get className() {
    return this.baseModel.className(this.locString.renderedHtml);
  }
  public render(): JSX.Element {
    if (!this.locString) {
      return null;
    }
    else {
      this.baseModel.setLocString(this.locString);
    }
    let control = null;
    if (this.locString.hasHtml) {
      const htmlValue = { __html: this.baseModel.focused && this.locString.text || this.locString.renderedHtml };
      control = (
        <span
          ref={this.svStringEditorRef}
          className="sv-string-editor"
          contentEditable={this.contentEditable}
          spellCheck={false}
          aria-placeholder={this.placeholder}
          suppressContentEditableWarning={true}
          // style={this.style}
          dangerouslySetInnerHTML={htmlValue}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
          onMouseUp={this.onMouseUp}
          onClick={this.edit}
        />
      );
    } else {
      control = (
        <span
          ref={this.svStringEditorRef}
          className="sv-string-editor"
          contentEditable={this.contentEditable}
          spellCheck={false}
          aria-placeholder={this.placeholder}
          suppressContentEditableWarning={true}
          // style={this.style}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
          onMouseUp={this.onMouseUp}
          onClick={this.edit}
        >
          {this.locString.renderedHtml}
        </span>
      );
    }
    return (
      <span className={this.className}>
        <span className="svc-string-editor__content">
          <div className="svc-string-editor__border"
            onClick={this.edit}
          >
            <SvgIcon
              className="svc-string-editor__button svc-string-editor__button--edit"
              size={16}
              iconName={"icon-edit"}
            ></SvgIcon>

          </div>
          {control}
          <div className="svc-string-editor__controls"
            onClick={this.edit}>
          </div>
        </span>
        {this.errorText ? <span className="svc-string-editor__error">{this.errorText}</span> : ""}
      </span>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  editableStringRendererName,
  (props) => {
    return React.createElement(SurveyLocStringEditor, props);
  }
);

import React from "react";
import { LocalizableString, Serializer, JsonObjectProperty } from "survey-core";
import { ReactElementFactory, SvgIcon } from "survey-react-ui";
import { StringEditorViewModelBase } from "@survey/creator";

export class SurveyLocStringEditor extends React.Component<any, any> {
  private baseModel: StringEditorViewModelBase;
  private svStringEditorRef: React.RefObject<HTMLDivElement>;
  private blurredByEscape:boolean = false;
  constructor(props: any) {
    super(props);
    this.state = { changed: 0 };
    this.baseModel = new StringEditorViewModelBase(this.locString);
    this.svStringEditorRef = React.createRef();
    this.baseModel.blurEditor = ()=>{
      this.svStringEditorRef.current.blur();
    };
  }
  private get locString(): LocalizableString {
    return this.props.locStr;
  }
  private get style(): any {
    return this.props.style;
  }
  public componentDidMount() {
    if (!this.locString) return;
    const self: SurveyLocStringEditor = this;
    this.locString.onChanged = function () {
      self.setState({ changed: self.state.changed + 1 });
    };
    if(this.locString["__isEditing"]) {
      this.svStringEditorRef.current.focus();
      // document.execCommand('selectAll', false, null);
    }
  }
  public componentWillUnmount() {
    if (!this.locString) return;
    this.locString.onChanged = function () {};
  }
  private get placeholder(): string {
    return this.baseModel.placeholder;
  }
  private onInput = (event: any) => {
    this.baseModel.onInput(event.nativeEvent);
  };
  private onFocus = (event: any) => {
    this.baseModel.onFocus(event.nativeEvent);
  };
  private onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    return this.baseModel.onKeyDown(event.nativeEvent);
  };
  private done = (event: any) => {
    this.baseModel.done(event);
    this.locString["__isEditing"] = false;
  };
  private edit = () => {
    this.svStringEditorRef.current.focus();
    // document.execCommand('selectAll', false, null);
    this.locString["__isEditing"] = true;
  };
  public render(): JSX.Element {
    if (!this.locString) {
      return null;
    }
    let control = null;
    if (this.locString.hasHtml) {
      const htmlValue = { __html: this.locString.renderedHtml };
      control = (
        <span
          ref={this.svStringEditorRef}
          className="sv-string-editor"
          contentEditable="true"
          aria-placeholder={this.placeholder}
          suppressContentEditableWarning={true}
          // style={this.style}
          dangerouslySetInnerHTML={htmlValue}
          onBlur={this.onInput}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
          onClick={this.edit}
        />
      );
    } else {
      control = (
        <span
          ref={this.svStringEditorRef}
          className="sv-string-editor"
          contentEditable="true"
          aria-placeholder={this.placeholder}
          suppressContentEditableWarning={true}
          // style={this.style}
          onBlur={this.onInput}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
          onClick={this.edit}
        >
          {this.locString.renderedHtml}
        </span>
      );
    }
    return (
      <span className={this.baseModel.className}>
        <span className="svc-string-editor__content">
          <div className="svc-string-editor__border"
            onClick={this.edit}
          >
            <SvgIcon
              className="svc-string-editor__button svc-string-editor__button--edit"
              size={16}
              iconName={"icon-pencil"}
            ></SvgIcon>

          </div>
          {control}
          <div className="svc-string-editor__controls"
            onClick={this.edit}>
          </div>
        </span>
      </span>
    );
  }
}

export const editableStringRendererName = "svc-string-editor";
ReactElementFactory.Instance.registerElement(
  editableStringRendererName,
  (props) => {
    return React.createElement(SurveyLocStringEditor, props);
  }
);

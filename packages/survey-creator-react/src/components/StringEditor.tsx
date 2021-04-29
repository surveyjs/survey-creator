import React from 'react';
import { LocalizableString } from 'survey-core';
import { ReactElementFactory, SvgIcon } from 'survey-react-ui';

export class SurveyLocStringEditor extends React.Component<any, any> {
  private svStringEditorRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.state = { changed: 0 };
    this.svStringEditorRef = React.createRef();
  }
  private get locStr(): LocalizableString {
    return this.props.locStr;
  }
  private get style(): any {
    return this.props.style;
  }
  componentDidMount() {
    if (!this.locStr) return;
    var self = this;
    this.locStr.onChanged = function () {
      self.setState({ changed: self.state.changed + 1 });
    };
  }
  componentWillUnmount() {
    if (!this.locStr) return;
    this.locStr.onChanged = function () {};
  }
  onInput = (event: any) => {
    this.locStr.text = event.target.innerText;
  };
  onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.keyCode === 13) {
      this.svStringEditorRef.current.blur();
      this.done(event);
    }
    if (event.keyCode === 27) {
      this.svStringEditorRef.current.blur();
      this.done(event);
    }
    return true;
  };
  done = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
  edit = (event: MouseEvent) => {
    this.svStringEditorRef.current.focus();
    this.done(event);
  };
  render(): JSX.Element {
    if (!this.locStr) {
      return null;
    }
    let control = null;
    if (this.locStr.hasHtml) {
      const htmlValue = { __html: this.locStr.renderedHtml };
      control = (
        <span
          ref={this.svStringEditorRef}
          className='sv-string-editor'
          contentEditable='true'
          suppressContentEditableWarning={true}
          style={this.style}
          dangerouslySetInnerHTML={htmlValue}
          onBlur={this.onInput}
          onKeyDown={this.onKeyDown}
          onClick={this.done}
        />
      );
    }
    else {
      control = (
        <span
          ref={this.svStringEditorRef}
          className='sv-string-editor'
          contentEditable='true'
          suppressContentEditableWarning={true}
          style={this.style}
          onBlur={this.onInput}
          onKeyDown={this.onKeyDown}
          onClick={this.done}
        >
          {this.locStr.renderedHtml}
        </span>
      );
    }
    return (
      <span className='svc-string-editor' onClick={this.done}>
        <span className='svc-string-editor__content'>
          <div className='svc-string-editor__border'>
          </div>
          {control}
          <div className='svc-string-editor__controls'>
            <SvgIcon className='svc-string-editor__button svc-string-editor__button--edit' onClick={this.edit} size={16} iconName={'icon-pencil'}></SvgIcon>
            <SvgIcon className='svc-string-editor__button svc-string-editor__button--done' onClick={this.done} size={22} iconName={'icon-check'}></SvgIcon>
          </div>
        </span>
      </span>
    );
  }
}

export const editableStringRendererName = 'svc-string-editor';
ReactElementFactory.Instance.registerElement(
  editableStringRendererName,
  (props) => {
    return React.createElement(SurveyLocStringEditor, props);
  }
);

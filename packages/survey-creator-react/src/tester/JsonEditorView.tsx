import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import type { TesterJsonModel } from "survey-creator-core/tester";
import { useModelUpdates } from "./useModel";

// A plain text area over the suite document. Nothing here parses, colours or completes the JSON: the
// validator already says what is wrong with it, in words, under the editor, and an editor that also had
// an opinion would be a second answer to the same question. What a person types is what is stored.
//
// It is deliberately humble for a second reason as well: the widget ships from survey-creator-core and
// must not drag ace or monaco into that bundle. A <textarea> is a fine bench.
//
// Two things happen here that a model cannot do, and they are the whole of this file: a caret that has
// to be put back after the component itself edited the text, and a reveal - "scroll to this offset" -
// which is a scrollTop on a real element.

// Two spaces, which is what every document this widget writes is formatted with.
const INDENT = "  ";

export function JsonEditorView(props: { model: TesterJsonModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  const areaRef = useRef<HTMLTextAreaElement | null>(null);
  // Where the caret has to go once React has written the new value back. A text area resets its
  // selection to the end of the document whenever its value is replaced from outside, so an edit this
  // component makes itself - the Tab key - has to put the caret back afterwards.
  const caretRef = useRef<number | undefined>(undefined);
  // Tab indents rather than leaving the box, which is what a person editing JSON means by it - but a
  // box that swallows Tab is a keyboard trap. Escape unlocks it: the Tab straight after one moves on,
  // the way it would anywhere else. Escape itself is left alone, so a handler on the window still sees
  // it.
  const escapedRef = useRef(false);
  // The nonce of the last reveal that was acted on. The model raises "go to this offset" as an offset
  // plus a nonce, because the same offset asked for twice is two requests.
  const revealedRef = useRef(0);

  useLayoutEffect(() => {
    const area = areaRef.current;
    if (!area || caretRef.current === undefined) return;
    area.setSelectionRange(caretRef.current, caretRef.current);
    caretRef.current = undefined;
  }, [model.text]);

  useLayoutEffect(() => {
    const area = areaRef.current;
    if (!area || model.revealNonce === revealedRef.current) return;
    revealedRef.current = model.revealNonce;
    const offset = Math.max(0, Math.min(model.revealOffset, area.value.length));
    area.focus();
    area.setSelectionRange(offset, offset);
    // A text area does not scroll to a caret that was moved by code, so the line is counted out and put
    // in the middle of the box. Every line is one line high: the editor does not wrap.
    const line = area.value.slice(0, offset).split("\n").length - 1;
    const lineHeight = parseFloat(window.getComputedStyle(area).lineHeight) || 18;
    area.scrollTop = Math.max(0, line * lineHeight - area.clientHeight / 2);
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === "Escape") {
      escapedRef.current = true;
      return;
    }
    if (event.key !== "Tab") {
      escapedRef.current = false;
      return;
    }
    if (escapedRef.current || event.shiftKey || event.ctrlKey || event.metaKey || event.altKey) return;
    const area = event.currentTarget;
    const start = area.selectionStart;
    const end = area.selectionEnd;
    event.preventDefault();
    caretRef.current = start + INDENT.length;
    model.setText(area.value.slice(0, start) + INDENT + area.value.slice(end));
  };

  return (
    <div className="svt-editor__host">
      <textarea
        ref={areaRef}
        className="svt-editor__area"
        aria-label={model.ariaLabel}
        value={model.text}
        onChange={event => model.setText(event.target.value)}
        onKeyDown={onKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        wrap="off"
      />
    </div>
  );
}

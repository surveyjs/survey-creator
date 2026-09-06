import { useLayoutEffect, useRef, useState } from "react";
import type { Base } from "survey-core";

// The two lines of React that stand between a survey-core model and a repaint, and the one that stands
// between a model this bundle owns and being thrown away too early.
//
// Everything else in src/tester/ is markup. These two are here because they are the only pieces of the
// widget that are about React itself rather than about the Tests widget, and because both of them are
// pinned by strictMode.test.tsx - which is the reason this bundle declares React >= 18.1 rather than
// inheriting the main bundle's 16.5 floor.

// Repaint when the model changes.
//
// Input changes must schedule their repaint inside the event handler. Deferring it lets React restore
// the previous controlled value first, so the later replacement moves a text input's caret to the end.
// The adorners opt into deferral: their registry changes during survey render events, and they draw
// buttons rather than editable text. Several such writes collapse into one repaint.
//
// The subscription is made in a layout effect rather than a passive one so that it is in place before
// the browser paints the first frame of the component that made it.
export function useModelUpdates(model: Base | undefined, deferred = false): void {
  const [, bump] = useState(0);
  useLayoutEffect(() => {
    if (!model) return undefined;
    let alive = true;
    let pending = false;
    const onChanged = (): void => {
      if (!alive) return;
      if (!deferred) {
        bump(count => count + 1);
        return;
      }
      if (pending) return;
      pending = true;
      queueMicrotask(() => {
        pending = false;
        if (alive) bump(count => count + 1);
      });
    };
    model.onPropertyChanged.add(onChanged);
    return () => {
      alive = false;
      model.onPropertyChanged.remove(onChanged);
    };
  }, [model, deferred]);
}

// Dispose a model the component owns when the component goes - and only then.
//
// The disposal waits for the end of the task, and that is not a flourish. React 18's StrictMode mounts
// every component, tears it down and mounts it again, in one commit, in development, to prove that a
// component survives it. What useMemo and useState hold survives that rehearsal: the model handed in
// here is the same object before and after. So a model disposed in the teardown comes back from the
// rehearsal dead, and the remount then draws it - which is not a quiet failure. survey-react-ui's
// dropdown reads question.dropdownListModel in componentDidMount, a disposed question has none, and the
// settings form throws before it can paint.
//
// Waiting a task fixes it exactly: the rehearsal's remount happens inside the same one, so it cancels a
// disposal that was never a real unmount. A real unmount has nothing to cancel it, and the model is
// disposed a tick later, which is soon enough for an AbortController and a scheduled frame.
export function useOwnedModel<T extends Base>(model: T | undefined): T | undefined {
  // Cancel only a disposal for the instance being remounted. Replacing A with B must still dispose A.
  const pending = useRef(new Map<T, ReturnType<typeof setTimeout>>());
  useLayoutEffect(() => {
    if (!model) return undefined;
    const timer = pending.current.get(model);
    if (timer !== undefined) {
      clearTimeout(timer);
      pending.current.delete(model);
    }
    return () => {
      pending.current.set(model, setTimeout(() => {
        pending.current.delete(model);
        model.dispose();
      }, 0));
    };
  }, [model]);
  return model;
}

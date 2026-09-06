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
// The update is scheduled out of the current task rather than applied inside it. A model property is
// written from two places: an event handler, where a synchronous setState is exactly right, and a
// render event of survey-core - the element registry feeds the adorner list from onAfterRenderQuestion,
// which fires inside a commit. A setState raised from inside another component's render is the one
// thing React asks not to do, and deferring by a microtask makes both cases the ordinary case. Several
// writes in one task collapse into one repaint, which is also what the runner's own batching wants.
//
// The subscription is made in a layout effect rather than a passive one so that it is in place before
// the browser paints the first frame of the component that made it.
export function useModelUpdates(model: Base | undefined): void {
  const [, bump] = useState(0);
  const pending = useRef(false);
  const alive = useRef(true);
  useLayoutEffect(() => {
    alive.current = true;
    if (!model) return undefined;
    const onChanged = (): void => {
      if (pending.current || !alive.current) return;
      pending.current = true;
      queueMicrotask(() => {
        pending.current = false;
        if (alive.current) bump(count => count + 1);
      });
    };
    model.onPropertyChanged.add(onChanged);
    return () => {
      alive.current = false;
      model.onPropertyChanged.remove(onChanged);
    };
  }, [model]);
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
  const pending = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useLayoutEffect(() => {
    if (pending.current !== undefined) {
      clearTimeout(pending.current);
      pending.current = undefined;
    }
    if (!model) return undefined;
    return () => {
      pending.current = setTimeout(() => {
        pending.current = undefined;
        model.dispose();
      }, 0);
    };
  }, [model]);
  return model;
}

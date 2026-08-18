import { expect, test } from "vitest";
import {
  clampToViewport, dragPosition, grabOffset, restoreHeight, undockBox
} from "../src/plugins/collaboration/bar/floating-panel/floating-panel-geometry";
import { FloatingPanelModel } from "../src/plugins/collaboration/bar/floating-panel/floating-panel-model";

const VIEWPORT = { width: 1024, height: 768 };
const SIZE = { width: 360, height: 600 };

// --- geometry (no DOM at all) -----------------------------------------------

test("floating-panel geometry: clampToViewport leaves an in-bounds box alone", () => {
  expect(clampToViewport({ x: 100, y: 50 }, SIZE, VIEWPORT, 12)).toEqual({ x: 100, y: 50 });
});

test("floating-panel geometry: clampToViewport pins each edge", () => {
  expect(clampToViewport({ x: -500, y: -500 }, SIZE, VIEWPORT, 12)).toEqual({ x: 12, y: 12 });
  expect(clampToViewport({ x: 5000, y: 5000 }, SIZE, VIEWPORT, 12))
    .toEqual({ x: 1024 - 360 - 12, y: 768 - 600 - 12 });
});

test("floating-panel geometry: a box larger than the viewport pins to the gap, never negative", () => {
  const huge = { width: 2000, height: 2000 };
  // The lower bound is applied last on purpose - otherwise the panel would
  // slide off to a negative coordinate and become unreachable.
  expect(clampToViewport({ x: 300, y: 300 }, huge, VIEWPORT, 12)).toEqual({ x: 12, y: 12 });
});

test("floating-panel geometry: clampToViewport honors a zero gap", () => {
  expect(clampToViewport({ x: -10, y: -10 }, SIZE, VIEWPORT, 0)).toEqual({ x: 0, y: 0 });
});

test("floating-panel geometry: grabOffset records where the pointer took hold", () => {
  expect(grabOffset({ x: 130, y: 60 }, { left: 100, top: 50, width: 360, height: 600 }))
    .toEqual({ x: 30, y: 10 });
  expect(grabOffset({ x: 100, y: 50 }, { left: 100, top: 50, width: 360, height: 600 }))
    .toEqual({ x: 0, y: 0 });
});

test("floating-panel geometry: dragPosition preserves the grab offset and clamps", () => {
  // x: 200 - 30 = 170, well inside. y: 200 - 10 = 190, but a 600px panel in a
  // 768px viewport can only reach 768 - 600 - 12 = 156.
  expect(dragPosition({ x: 200, y: 200 }, { x: 30, y: 10 }, SIZE, VIEWPORT, 12))
    .toEqual({ x: 170, y: 156 });
  const short = { width: 360, height: 200 };
  expect(dragPosition({ x: 200, y: 200 }, { x: 30, y: 10 }, short, VIEWPORT, 12))
    .toEqual({ x: 170, y: 190 });
  // Dragging past the left edge stops at the gap, offset or not.
  expect(dragPosition({ x: 0, y: 200 }, { x: 30, y: 10 }, SIZE, VIEWPORT, 12).x).toEqual(12);
});

test("floating-panel geometry: restoreHeight keeps the top when the panel still fits", () => {
  expect(restoreHeight(50, 400, 768, 12)).toEqual({ top: 50, height: 400 });
});

test("floating-panel geometry: restoreHeight pulls the top up when there is no room below", () => {
  const res = restoreHeight(700, 400, 768, 12);
  expect(res.height).toEqual(400);
  expect(res.top).toEqual(768 - 12 - 400);
});

test("floating-panel geometry: restoreHeight caps at the available height", () => {
  expect(restoreHeight(50, 5000, 768, 12)).toEqual({ top: 12, height: 768 - 24 });
});

test("floating-panel geometry: restoreHeight treats a zero expanded height as unknown", () => {
  expect(restoreHeight(50, 0, 768, 12)).toEqual({ top: 12, height: 768 - 24 });
});

test("floating-panel geometry: undockBox keeps an on-screen box and clamps an off-screen one", () => {
  const onScreen = { left: 100, top: 50, width: 360, height: 600 };
  expect(undockBox(onScreen, VIEWPORT, 12)).toEqual(onScreen);
  expect(undockBox({ left: -80, top: -40, width: 360, height: 600 }, VIEWPORT, 12))
    .toEqual({ left: 12, top: 12, width: 360, height: 600 });
});

// --- model ------------------------------------------------------------------

function makePanel(options: any = {}): FloatingPanelModel {
  const panel = new FloatingPanelModel(Object.assign({ title: "Version History" }, options));
  panel.updateViewport(VIEWPORT);
  return panel;
}

const DOCKED_RECT = { left: 652, top: 12, width: 360, height: 744 };

test("floating-panel: sensible defaults", () => {
  const panel = makePanel();
  expect(panel.visible).toBeFalsy();
  expect(panel.isDocked).toBeTruthy();
  expect(panel.isMinimized).toBeFalsy();
  expect(panel.isDragging).toBeFalsy();
  expect(panel.width).toEqual(360);
  expect(panel.gap).toEqual(12);
  expect(panel.titleText).toEqual("Version History");
  expect(panel.rootCss).toContain("svc-floating-panel--docked");
});

test("floating-panel: show and hide fire once and report through onClose", () => {
  const panel = makePanel();
  let closed = 0;
  panel.onClose.add(() => closed++);
  panel.show();
  expect(panel.visible).toBeTruthy();
  panel.hide();
  expect(panel.visible).toBeFalsy();
  expect(closed).toEqual(1);
  // A second hide is a no-op.
  panel.hide();
  expect(closed).toEqual(1);
});

test("floating-panel: the last shown panel stacks on top, bringToFront wins it back", () => {
  const first = makePanel();
  const second = makePanel();
  first.show();
  second.show();
  expect(second.zIndex).toBeGreaterThan(first.zIndex);
  first.bringToFront();
  expect(first.zIndex).toBeGreaterThan(second.zIndex);
  expect(first.zIndex).toBeGreaterThanOrEqual(FloatingPanelModel.baseZIndex);
});

test("floating-panel: dragging the header undocks and then moves the panel", () => {
  const panel = makePanel();
  panel.show();
  panel.startDrag({ x: 700, y: 30 }, DOCKED_RECT);
  expect(panel.isDocked).toBeFalsy();
  expect(panel.isDragging).toBeTruthy();
  expect(panel.rootCss).toContain("svc-floating-panel--floating");
  expect(panel.rootCss).toContain("svc-floating-panel--dragging");
  expect(panel.left).toEqual(652);

  panel.drag({ x: 500, y: 100 });
  // The grab offset (48, 18) is preserved horizontally: 500 - 48 = 452.
  expect(panel.left).toEqual(452);
  // Vertically it cannot move: a 744px-tall panel in a 768px viewport with a
  // 12px gap has exactly one legal top.
  expect(panel.top).toEqual(12);

  panel.endDrag();
  expect(panel.isDragging).toBeFalsy();
});

test("floating-panel: a drag after endDrag does nothing", () => {
  const panel = makePanel();
  panel.show();
  panel.startDrag({ x: 700, y: 30 }, DOCKED_RECT);
  panel.drag({ x: 500, y: 100 });
  panel.endDrag();
  const left = panel.left;
  const top = panel.top;
  panel.drag({ x: 100, y: 400 });
  expect(panel.left).toEqual(left);
  expect(panel.top).toEqual(top);
});

test("floating-panel: startDrag is ignored when dragging is disallowed", () => {
  const panel = makePanel({ allowDrag: false });
  panel.show();
  panel.startDrag({ x: 700, y: 30 }, DOCKED_RECT);
  expect(panel.isDragging).toBeFalsy();
  expect(panel.isDocked).toBeTruthy();
});

test("floating-panel: minimize collapses and restore brings the height back", () => {
  const panel = makePanel();
  panel.show();
  panel.toggleMinimize();
  expect(panel.isMinimized).toBeTruthy();
  expect(panel.rootCss).toContain("svc-floating-panel--minimized");
  // Docked minimize is a stylesheet concern; the box stays docked.
  expect(panel.isDocked).toBeTruthy();
  panel.toggleMinimize();
  expect(panel.isMinimized).toBeFalsy();
  expect(panel.rootCss).not.toContain("svc-floating-panel--minimized");
});

test("floating-panel: a floating panel reports auto height while minimized", () => {
  const panel = makePanel();
  panel.show();
  panel.startDrag({ x: 700, y: 30 }, DOCKED_RECT);
  panel.endDrag();
  panel.minimize();
  expect(panel.style.height).toEqual("auto");
  panel.restore();
  // Restored to the height measured before minimizing, capped to the viewport.
  expect(panel.style.height).toEqual((768 - 24) + "px");
});

test("floating-panel: the header toolbar swaps the minimize action for restore", () => {
  const panel = makePanel();
  const action = panel.headerToolbar.getActionById("minimize");
  expect(panel.headerToolbar.actions.map((a) => a.id)).toEqual(["minimize", "close"]);
  expect(action.title).toEqual("Minimize");
  action.action(action);
  expect(panel.isMinimized).toBeTruthy();
  expect(action.title).toEqual("Restore");
  expect(action.iconName).toEqual("icon-restoredown-16x16");
});

test("floating-panel: the close action hides the panel", () => {
  const panel = makePanel();
  panel.show();
  const action = panel.headerToolbar.getActionById("close");
  action.action(action);
  expect(panel.visible).toBeFalsy();
});

test("floating-panel: disallowed chrome hides its actions", () => {
  const panel = makePanel({ allowMinimize: false, allowClose: false });
  expect(panel.headerToolbar.getActionById("minimize").visible).toBeFalsy();
  expect(panel.headerToolbar.getActionById("close").visible).toBeFalsy();
});

test("floating-panel: a viewport shrink re-clamps a floating panel", () => {
  const panel = makePanel();
  panel.show();
  panel.startDrag({ x: 700, y: 30 }, DOCKED_RECT);
  panel.drag({ x: 900, y: 400 });
  panel.endDrag();
  panel.updateViewport({ width: 400, height: 300 });
  expect(panel.left).toBeLessThanOrEqual(400 - 12);
  expect(panel.top).toBeGreaterThanOrEqual(12);
  expect(panel.height).toBeLessThanOrEqual(300 - 24);
});

test("floating-panel: Escape closes it, other keys do not", () => {
  const panel = makePanel();
  panel.show();
  panel.onKeyDown({ key: "Tab" });
  expect(panel.visible).toBeTruthy();
  // Non-modal: focus is never trapped, so Tab must pass through.
  panel.onKeyDown({ key: "Escape" });
  expect(panel.visible).toBeFalsy();

  panel.show();
  panel.onKeyDown({ keyCode: 27 });
  expect(panel.visible).toBeFalsy();
});

test("floating-panel: redock drops the explicit box", () => {
  const panel = makePanel();
  panel.show();
  panel.startDrag({ x: 700, y: 30 }, DOCKED_RECT);
  panel.drag({ x: 400, y: 200 });
  panel.endDrag();
  expect(panel.style.left).toBeDefined();
  panel.redock();
  expect(panel.isDocked).toBeTruthy();
  expect(panel.style.left).toBeUndefined();
  expect(panel.style.top).toBeUndefined();
  expect(panel.style.height).toBeUndefined();
});

test("floating-panel: style carries the docked parameters and the stacking order", () => {
  const panel = makePanel();
  panel.show();
  const style = panel.style;
  expect(style["--svc-floating-panel-gap"]).toEqual("12px");
  expect(style["--svc-floating-panel-width"]).toEqual("360px");
  expect(parseInt(style.zIndex)).toBeGreaterThanOrEqual(FloatingPanelModel.baseZIndex);
});

test("floating-panel: a panel without a title renders an empty header caption", () => {
  const panel = new FloatingPanelModel();
  expect(panel.titleText).toEqual("");
});

// The panel registers itself nowhere: its owner (the collaboration bar) holds
// the instance and renders it. Ownership is covered by bar.tests.ts.

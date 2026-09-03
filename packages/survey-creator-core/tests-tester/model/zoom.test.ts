// The range and the step, which is the whole of what the zoom decides. The scaling itself is a calc in
// the stylesheet against the theme's six base units, exactly as the Survey Creator's designer zoom
// scales them; what is checked here is that a press can never leave the range and never lands between
// two steps.
import { describe, expect, it } from "vitest";
import {
  canZoomIn, canZoomOut, clampZoom, zoomBy, ZOOM_DEFAULT, ZOOM_MAX, ZOOM_MIN, ZOOM_STEP,
} from "../../src/tester/model/zoom";

describe("the zoom", () => {
  it("starts at the theme's own scale", () => {
    expect(ZOOM_DEFAULT).toBe(100);
    expect(ZOOM_MIN).toBe(20);
    expect(ZOOM_MAX).toBe(200);
    expect(ZOOM_STEP).toBe(10);
  });

  it("moves one step at a time", () => {
    expect(zoomBy(100, 1)).toBe(110);
    expect(zoomBy(100, -1)).toBe(90);
    expect(zoomBy(zoomBy(100, 1), -1)).toBe(100);
  });

  it("stops at both ends", () => {
    expect(zoomBy(ZOOM_MAX, 1)).toBe(ZOOM_MAX);
    expect(zoomBy(ZOOM_MIN, -1)).toBe(ZOOM_MIN);
    expect(canZoomIn(ZOOM_MAX)).toBe(false);
    expect(canZoomIn(ZOOM_MAX - ZOOM_STEP)).toBe(true);
    expect(canZoomOut(ZOOM_MIN)).toBe(false);
    expect(canZoomOut(ZOOM_MIN + ZOOM_STEP)).toBe(true);
  });

  // Every position the buttons can reach, walked from one end of the range to the other and back.
  it("reaches every step of the range and no other value", () => {
    const up: Array<number> = [];
    let at = ZOOM_MIN;
    while(canZoomIn(at)) { at = zoomBy(at, 1); up.push(at); }
    expect(up[up.length - 1]).toBe(ZOOM_MAX);
    expect(up.length).toBe((ZOOM_MAX - ZOOM_MIN) / ZOOM_STEP);
    expect(up.indexOf(ZOOM_DEFAULT)).toBeGreaterThan(-1);
    up.forEach(value => expect(value % ZOOM_STEP).toBe(0));

    while(canZoomOut(at)) at = zoomBy(at, -1);
    expect(at).toBe(ZOOM_MIN);
  });

  // A value that came from somewhere else - a stored one, a hand-typed one - lands where the buttons
  // can reach it rather than at a position no press can leave.
  it("brings any value onto the range and onto a step", () => {
    expect(clampZoom(0)).toBe(ZOOM_MIN);
    expect(clampZoom(-40)).toBe(ZOOM_MIN);
    expect(clampZoom(1000)).toBe(ZOOM_MAX);
    expect(clampZoom(103)).toBe(100);
    expect(clampZoom(106)).toBe(110);
    expect(clampZoom(NaN)).toBe(ZOOM_DEFAULT);
  });
});

// The zoom of the recorded form, as three numbers and one rule.
//
// It is the Survey Creator's designer zoom, in the same terms: a percentage, moved a step at a time
// between a floor and a ceiling, and applied by scaling the theme's base units by it (this package's
// own src/components/tabs/designer.ts - `unitDictionary` and `scaleSurface`). The scaling itself is a
// calc in the stylesheet rather than six numbers computed here, because the units have to land on the
// survey's own root element to beat the theme's declarations; the `svt-form` block of the recorder's
// SCSS is where that lands (prompt 06). What this file owns is the arithmetic: what a step is, where
// it stops, and what a value that came from somewhere else is worth.
//
// The Creator's ceiling is 100 - a designer surface only ever shrinks, to fit more of a form on the
// screen. Here it is 200: this form is being read as much as used, and a matrix cell at 12px is worth
// enlarging.

export const ZOOM_MIN = 20;
export const ZOOM_MAX = 200;
export const ZOOM_STEP = 10;
export const ZOOM_DEFAULT = 100;

// One step in either direction, and nothing outside the range. A press at the end of the range is
// declined rather than clamped to where it already is - the button is disabled there, and this is the
// same answer given twice.
export function zoomBy(percent: number, steps: number): number {
  return clampZoom(percent + steps * ZOOM_STEP);
}

export function clampZoom(percent: number): number {
  if (!isFinite(percent)) return ZOOM_DEFAULT;
  // To the step, so a value that arrived from anywhere else lands where the buttons can reach it.
  const stepped = Math.round(percent / ZOOM_STEP) * ZOOM_STEP;
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, stepped));
}

export function canZoomIn(percent: number): boolean {
  return percent < ZOOM_MAX;
}

export function canZoomOut(percent: number): boolean {
  return percent > ZOOM_MIN;
}

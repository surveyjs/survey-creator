// Pure geometry of a floating panel: pointer deltas and viewport sizes in,
// positions out. No DOM access, so every rule here is unit-testable without a
// browser (the same split `mapOffset` uses in the presence plugin).

export interface IPanelSize {
  width: number;
  height: number;
}
export interface IPanelPoint {
  x: number;
  y: number;
}
export interface IPanelBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

// Keep a box of `size` inside `viewport`, `gap` px away from every edge.
// The lower bound is applied LAST on purpose: a panel larger than the viewport
// pins to the top-left gap instead of sliding out to a negative coordinate.
export function clampToViewport(pos: IPanelPoint, size: IPanelSize, viewport: IPanelSize, gap: number): IPanelPoint {
  return {
    x: Math.max(gap, Math.min(pos.x, viewport.width - size.width - gap)),
    y: Math.max(gap, Math.min(pos.y, viewport.height - size.height - gap))
  };
}

// Where inside the panel the pointer grabbed it. Kept for the whole drag so the
// panel does not jump to the cursor on the first move.
export function grabOffset(pointer: IPanelPoint, box: IPanelBox): IPanelPoint {
  return { x: pointer.x - box.left, y: pointer.y - box.top };
}

export function dragPosition(pointer: IPanelPoint, grab: IPanelPoint, size: IPanelSize, viewport: IPanelSize, gap: number): IPanelPoint {
  return clampToViewport({ x: pointer.x - grab.x, y: pointer.y - grab.y }, size, viewport, gap);
}

// Height (and possibly a corrected top) when a floating panel is restored from
// the minimized state. `expandedHeight <= 0` means "never measured" - fall back
// to the whole available height. The top is pulled up when the restored panel
// no longer fits below its current position.
export function restoreHeight(top: number, expandedHeight: number, viewportHeight: number, gap: number): { top: number, height: number } {
  const available = viewportHeight - 2 * gap;
  const height = Math.min(expandedHeight > 0 ? expandedHeight : available, available);
  return {
    top: Math.max(gap, Math.min(top, viewportHeight - gap - height)),
    height: height
  };
}

// Turn the docked (top/right/bottom) anchoring into an explicit box at the
// position the panel currently occupies, so dragging can continue from there.
export function undockBox(rect: IPanelBox, viewport: IPanelSize, gap: number): IPanelBox {
  const size = { width: rect.width, height: rect.height };
  const pos = clampToViewport({ x: rect.left, y: rect.top }, size, viewport, gap);
  return { left: pos.x, top: pos.y, width: rect.width, height: rect.height };
}

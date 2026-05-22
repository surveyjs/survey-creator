import { Base, Serializer, SurveyModel } from "survey-core";

// Minimal structural view of an UndoRedoAction to avoid a circular import
// between this file and undo-redo-manager.ts.
export interface IUndoRedoActionLike {
  getChanges(isUndo?: boolean): { object: any, propertyName: string, oldValue: any, newValue: any };
  getIndex(): number;
}

// --- Public message format -------------------------------------------------
// All messages produced by the serializer are plain JSON values: they are
// safe to send through WebSocket / SignalR / postMessage / fetch, store in a
// database, log, etc. There are no class instances, no functions, no cycles.

// A locator is a path of segments from the survey root to a Base node.
// Each segment names an array property on the parent and identifies the
// child by `name` (when available) or by positional `index` as a fallback.
// An empty path refers to the survey itself. Adding new container types
// (matrix rows, choice items, ...) requires no changes here.
export interface ISyncSegment {
  prop: string;
  name?: string;
  index?: number;
}
export type ISyncLocator = ISyncSegment[];

export interface ISyncSerializedBase {
  __syncType: string;
  __syncJson: any;
}

export type ISyncValue = number | string | boolean | null | ISyncSerializedBase | ISyncValue[];

export interface ISyncPropertyAction {
  kind: "property";
  locator: ISyncLocator;
  propertyName: string;
  newValue: ISyncValue;
}

export interface ISyncArrayAction {
  kind: "array";
  locator: ISyncLocator;
  propertyName: string;
  index: number;
  deleteCount: number;
  itemsToAdd: ISyncValue[];
}

export type ISyncAction = ISyncPropertyAction | ISyncArrayAction;

export interface ISyncMessage {
  kind: "transaction";
  actions: ISyncAction[];
}

// --- Helpers ---------------------------------------------------------------

function isBaseLike(value: any): boolean {
  return !!value && typeof value === "object" &&
    typeof value.getType === "function" && typeof value.toJSON === "function";
}

function serializeValue(value: any): ISyncValue {
  if (Array.isArray(value)) return value.map(serializeValue);
  if (isBaseLike(value)) {
    return { __syncType: value.getType(), __syncJson: value.toJSON() };
  }
  return value;
}

function isSerializedBase(value: any): value is ISyncSerializedBase {
  return !!value && typeof value === "object" &&
    typeof value.__syncType === "string" && "__syncJson" in value;
}

function deserializeValue(value: ISyncValue): any {
  if (Array.isArray(value)) return value.map(deserializeValue);
  if (isSerializedBase(value)) {
    const obj: any = Serializer.createClass(value.__syncType);
    if (!!obj && typeof obj.fromJSON === "function") {
      obj.fromJSON(value.__syncJson);
      return obj;
    }
    return value.__syncJson;
  }
  return value;
}

// Universal parent lookup for any Base node in the survey tree.
// SurveyElement-based nodes (page, panel, question) expose `parent`; other
// nodes (matrix columns, pages relative to survey, ...) fall back to the
// `getOwner()` API. Survey itself returns null and is the root.
function getParentBase(node: any): any {
  if (!node) return null;
  const direct = node.parent;
  if (!!direct) return direct;
  if (typeof node.getOwner === "function") {
    const owner = node.getOwner();
    if (!!owner) return owner;
  }
  return null;
}

// Find the array property on `parent` that contains `child` and return a
// segment that identifies the child by name (preferred) or by index.
function segmentFor(parent: any, child: any): ISyncSegment | null {
  const props: any[] = Serializer.getPropertiesByObj(parent);
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (!p || !p.isArray) continue;
    const arr = parent[p.name];
    if (!Array.isArray(arr)) continue;
    const idx = arr.indexOf(child);
    if (idx < 0) continue;
    const name = (child as any).name;
    if (typeof name === "string" && name.length > 0) {
      return { prop: p.name, name };
    }
    return { prop: p.name, index: idx };
  }
  return null;
}

function locatorOf(sender: Base): ISyncLocator | null {
  if (!sender) return null;
  if (sender.getType() === "survey") return [];
  const segments: ISyncSegment[] = [];
  let current: any = sender;
  while(true) {
    const parent = getParentBase(current);
    if (!parent) return null;
    const seg = segmentFor(parent, current);
    if (!seg) return null;
    segments.unshift(seg);
    if (typeof parent.getType === "function" && parent.getType() === "survey") {
      return segments;
    }
    current = parent;
  }
}

function resolveLocator(survey: any, locator: ISyncLocator): any {
  if (!Array.isArray(locator)) return null;
  let current: any = survey;
  for (let i = 0; i < locator.length; i++) {
    if (!current) return null;
    const seg = locator[i];
    const arr = current[seg.prop];
    if (!Array.isArray(arr)) return null;
    if (typeof seg.name === "string" && seg.name.length > 0) {
      current = arr.find((x: any) => !!x && x.name === seg.name) || null;
    } else if (typeof seg.index === "number") {
      current = arr[seg.index] || null;
    } else {
      return null;
    }
  }
  return current;
}

export function serializeAction(action: IUndoRedoActionLike, isUndo: boolean): ISyncAction | null {
  const changes = action.getChanges(isUndo);
  const locator = locatorOf(changes.object);
  if (!locator) return null;
  // Renaming the `name` property changes the very identifier used by the
  // locator. By the time we serialize, the rename has already been applied,
  // so the leaf segment carries the NEW name but the peer still knows
  // this node by its OLD name. Rewrite the leaf segment to the old name so
  // resolveLocator on the peer succeeds.
  if (changes.propertyName === "name" && locator.length > 0) {
    const leaf = locator[locator.length - 1];
    if (typeof leaf.name === "string" && typeof changes.oldValue === "string" &&
        changes.oldValue.length > 0) {
      locator[locator.length - 1] = { ...leaf, name: changes.oldValue };
    }
  }
  // Array actions report a non-negative index; property actions return -1.
  const index = action.getIndex();
  if (index >= 0) {
    const deletedItems = Array.isArray(changes.oldValue) ? changes.oldValue : [];
    const itemsToAdd = Array.isArray(changes.newValue) ? changes.newValue : [];
    return {
      kind: "array",
      locator,
      propertyName: changes.propertyName,
      index,
      deleteCount: deletedItems.length,
      itemsToAdd: itemsToAdd.map(serializeValue)
    };
  }
  return {
    kind: "property",
    locator,
    propertyName: changes.propertyName,
    newValue: serializeValue(changes.newValue)
  };
}

export function applyAction(survey: SurveyModel, action: ISyncAction): void {
  const sender = resolveLocator(survey, action.locator);
  if (!sender) return;
  if (action.kind === "array") {
    const array = sender[action.propertyName];
    if (!Array.isArray(array)) return;
    const itemsToAdd = action.itemsToAdd.map(deserializeValue);

    // Pure removal: delegate to each item's delete() so survey-core can
    // run its own cleanup (questionHashes, parent unwiring, etc.). Doing a
    // raw splice would leave stale entries in survey.questionHashes and
    // questions would remain findable by name.
    if (action.deleteCount > 0 && itemsToAdd.length === 0) {
      const toRemove = array.slice(action.index, action.index + action.deleteCount);
      for (let i = 0; i < toRemove.length; i++) {
        const item = toRemove[i];
        if (!!item && typeof item.delete === "function") {
          item.delete(false);
        }
      }
      // Safety net: if any item lacked delete(), make sure they are gone.
      if (array.length > action.index && array[action.index] === toRemove[0]) {
        array.splice(action.index, action.deleteCount);
      }
      return;
    }

    // Pure insert: drop items that are already present in the target array
    // by `name`. A transaction can contain redundant nested inserts because
    // adding a parent (e.g. a page) emits both `pages.splice` (whose payload
    // already includes the page's full subtree) and the child arrays'
    // splices (e.g. `elements.splice`) that fired while the parent was
    // being initialized. Applying both verbatim would duplicate the
    // children. Names are unique within a parent collection in survey-core,
    // so name-based dedup is safe here.
    if (action.deleteCount === 0 && itemsToAdd.length > 0) {
      const filtered: any[] = [];
      for (let i = 0; i < itemsToAdd.length; i++) {
        const item = itemsToAdd[i];
        const name = !!item && typeof item === "object" ? (item as any).name : undefined;
        if (typeof name === "string" && name.length > 0 &&
          array.some((x: any) => !!x && x.name === name)) {
          continue;
        }
        filtered.push(item);
      }
      if (filtered.length === 0) return;
      array.splice(action.index, 0, ...filtered);
      return;
    }
    array.splice(action.index, action.deleteCount, ...itemsToAdd);
    return;
  }
  sender[action.propertyName] = deserializeValue(action.newValue);
}

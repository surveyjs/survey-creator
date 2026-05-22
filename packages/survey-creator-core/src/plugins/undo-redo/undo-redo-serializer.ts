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
//
// The `locator` is a JSON-Pointer-like string that addresses a property or
// an array slot inside the survey tree, e.g.:
//   "/pages/0/elements/0/title"            scalar property change
//   "/pages/0/elements/0/title/en"         per-locale change on a
//                                          localizable property; the
//                                          literal segment "default"
//                                          stands for the default locale
//   "/pages/0/elements/1"                  insert/delete at index 1 of
//                                          pages[0].elements
// Segments are pure numeric indexes (resolved through the parent at
// serialization time) interleaved with array-property names. An empty
// locator "" addresses the survey root itself.

export interface ISyncSerializedBase {
  __syncType: string;
  __syncJson: any;
}

export type ISyncValue = number | string | boolean | null | ISyncSerializedBase | ISyncValue[];

export interface ISyncPropertyAction {
  kind: "property";
  // Full path including the property name as the last segment, and the
  // locale as an extra trailing segment when applicable (default locale
  // encoded as the literal "default").
  locator: string;
  value: ISyncValue;
}

export interface ISyncArrayAction {
  kind: "array";
  // Path ending with `<arrayPropName>/<index>`. Pure insert sends `value`
  // as the array of items to insert; pure delete sends `value: null` and
  // removes exactly one item at `index`. A general splice (delete N AND
  // insert M) is split into N+1 actions: N single-item deletes followed
  // by one insert.
  locator: string;
  value: ISyncValue[] | null;
}

export type ISyncAction = ISyncPropertyAction | ISyncArrayAction;

export interface ISyncMessage {
  kind: "transaction";
  actions: ISyncAction[];
}

const DEFAULT_LOCALE_TOKEN = "default";

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

// The template panel of a paneldynamic question has no `parent`/`getOwner`
// link back to its host. It is reachable from the host only through the
// `parentQuestion` back-pointer, and its serializable shape is exposed on
// the host as `templateElements` / `templateTitle` / ... rather than as a
// nested `template` property. We therefore treat the template panel as a
// transparent passthrough: walking up from it yields the paneldynamic, and
// property names on the template are rewritten to the host-side names.
function isPanelDynamicTemplate(node: any): boolean {
  if (!node || typeof node !== "object") return false;
  const host = node.parentQuestion;
  if (!host) return false;
  return host.template === node;
}

const TEMPLATE_PROPERTY_REMAP: { [key: string]: string } = {
  elements: "templateElements",
  title: "templateTitle",
  description: "templateDescription",
  visibleIf: "templateVisibleIf"
};

function remapTemplateProperty(name: string): string {
  const mapped = TEMPLATE_PROPERTY_REMAP[name];
  return typeof mapped === "string" ? mapped : name;
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
  if (isPanelDynamicTemplate(node)) return node.parentQuestion;
  return null;
}

// Find the array property on `parent` that contains `child` and return
// the pair `[arrayPropName, index]` identifying `child` positionally.
function segmentFor(parent: any, child: any): [string, number] | null {
  const props: any[] = Serializer.getPropertiesByObj(parent);
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (!p || !p.isArray) continue;
    const arr = parent[p.name];
    if (!Array.isArray(arr)) continue;
    const idx = arr.indexOf(child);
    if (idx < 0) continue;
    return [p.name, idx];
  }
  return null;
}

// Build the base locator (without any trailing property or array index)
// for a Base node: a `/`-prefixed path of `<arrayProp>/<index>` pairs
// walked from the survey root down to `sender`. Returns "" for the survey
// itself and null if any segment cannot be resolved.
function baseLocatorOf(sender: Base): string | null {
  if (!sender) return null;
  if (sender.getType() === "survey") return "";
  const parts: string[] = [];
  let current: any = sender;
  while(true) {
    let parent = getParentBase(current);
    if (!parent) return null;
    let seg = segmentFor(parent, current);
    // The template panel of a paneldynamic is not itself addressable from
    // the survey root. When it appears as the parent of a child element,
    // skip it and address the child through the host's templateElements
    // array instead.
    if (!!seg && isPanelDynamicTemplate(parent)) {
      seg = [remapTemplateProperty(seg[0]), seg[1]];
      parent = parent.parentQuestion;
    }
    if (!seg) return null;
    parts.unshift(seg[0] + "/" + seg[1]);
    if (typeof parent.getType === "function" && parent.getType() === "survey") {
      return "/" + parts.join("/");
    }
    current = parent;
  }
}

function joinLocator(base: string, ...tail: (string | number)[]): string {
  let res = base;
  for (let i = 0; i < tail.length; i++) {
    res += "/" + tail[i];
  }
  return res;
}

function splitLocator(locator: string): string[] {
  if (typeof locator !== "string" || locator.length === 0) return [];
  const trimmed = locator.charAt(0) === "/" ? locator.substring(1) : locator;
  if (trimmed.length === 0) return [];
  return trimmed.split("/");
}

// Walk the survey tree through pairs of `(arrayPropName, index)` segments
// and return the node reached after consuming `pairCount` pairs (i.e.
// `pairCount * 2` raw segments). Returns null if any segment is missing
// or malformed.
function walkPairs(survey: any, segments: string[], pairCount: number): any {
  let current: any = survey;
  for (let i = 0; i < pairCount; i++) {
    if (!current) return null;
    const propName = segments[i * 2];
    const indexRaw = segments[i * 2 + 1];
    if (typeof propName !== "string" || typeof indexRaw !== "string") return null;
    const arr = current[propName];
    if (!Array.isArray(arr)) return null;
    const idx = parseInt(indexRaw, 10);
    if (!Number.isFinite(idx)) return null;
    current = arr[idx];
  }
  return current;
}

// Localizable properties (title, description, ...) keep a value per locale.
// survey-core notifies property changes for such properties with `newValue`
// equal to the text of the currently-active locale, regardless of which
// locale was actually edited. Sending that scalar would corrupt the peer:
// editing the English text while the active locale is Spanish would
// overwrite the Spanish slot on the peer with the Spanish text and the
// English edit would be lost. Instead, snapshot the full per-locale JSON
// from the LocalizableString on the sender and let the peer apply it via
// setJson, which preserves every locale and writes the edited text into
// the correct slot.
function isLocalizableProperty(sender: any, propertyName: string): boolean {
  if (!sender || typeof sender.getType !== "function") return false;
  const prop: any = Serializer.findProperty(sender.getType(), propertyName);
  return !!prop && prop.isLocalizable === true;
}

function getLocStr(sender: any, propertyName: string): any {
  if (!sender || typeof sender.getLocalizableString !== "function") return null;
  return sender.getLocalizableString(propertyName) || null;
}

export function serializeAction(action: IUndoRedoActionLike, isUndo: boolean): ISyncAction | ISyncAction[] | null {
  const changes = action.getChanges(isUndo);
  // The template panel of a paneldynamic is not addressable on its own;
  // route changes on it through the host paneldynamic with the property
  // name rewritten to its host-side counterpart (elements ->
  // templateElements, title -> templateTitle, ...).
  let target: any = changes.object;
  let propertyName: string = changes.propertyName;
  if (isPanelDynamicTemplate(target)) {
    propertyName = remapTemplateProperty(propertyName);
    target = target.parentQuestion;
  }
  const base = baseLocatorOf(target);
  if (base === null) return null;

  // Array actions report a non-negative index; property actions return -1.
  const index = action.getIndex();
  if (index >= 0) {
    const deletedItems = Array.isArray(changes.oldValue) ? changes.oldValue : [];
    const itemsToAdd = Array.isArray(changes.newValue) ? changes.newValue : [];
    const locator = joinLocator(base, propertyName, index);
    const out: ISyncAction[] = [];
    // Multi-item delete: emit one single-item delete per slot. The array
    // shrinks as deletions are applied so the index stays the same.
    for (let i = 0; i < deletedItems.length; i++) {
      out.push({ kind: "array", locator, value: null });
    }
    if (itemsToAdd.length > 0) {
      out.push({ kind: "array", locator, value: itemsToAdd.map(serializeValue) });
    }
    if (out.length === 0) return null;
    if (out.length === 1) return out[0];
    return out;
  }

  if (isLocalizableProperty(target, propertyName)) {
    const locStr = getLocStr(target, propertyName);
    // `lastChangedLoc` is the locale that the LocalizableString just wrote
    // into. By transmitting only (locale, scalar) we (a) avoid sending the
    // active-locale text when an unrelated locale was edited, and (b) keep
    // the wire payload minimal so concurrent edits to other locales on the
    // peer are not clobbered.
    if (!!locStr && typeof locStr.lastChangedLoc === "string") {
      const loc: string = locStr.lastChangedLoc;
      const localeSeg = loc.length === 0 ? DEFAULT_LOCALE_TOKEN : loc;
      return {
        kind: "property",
        locator: joinLocator(base, propertyName, localeSeg),
        value: locStr.getLocaleText(loc) || ""
      };
    }
    // Delegating properties (e.g. matrixdropdowncolumn.title) leave the
    // column's own LocalizableString empty; in that case we keep the
    // scalar path and let the regular setter route through the delegate.
  }

  return {
    kind: "property",
    locator: joinLocator(base, propertyName),
    value: serializeValue(changes.newValue)
  };
}

export function applyAction(survey: SurveyModel, action: ISyncAction): void {
  const segments = splitLocator(action.locator);
  if (action.kind === "array") {
    // Array action layout: <pair>* <arrayProp> <index>
    // i.e. an even number of leading pair segments plus two trailing
    // segments. The minimum valid case is `<arrayProp>/<index>` directly
    // off the survey (pairCount == 0).
    if (segments.length < 2 || (segments.length - 2) % 2 !== 0) return;
    const pairCount = (segments.length - 2) / 2;
    const parent: any = walkPairs(survey, segments, pairCount);
    if (!parent) return;
    const arrayProp = segments[segments.length - 2];
    const index = parseInt(segments[segments.length - 1], 10);
    if (!Number.isFinite(index)) return;
    const array = parent[arrayProp];
    if (!Array.isArray(array)) return;

    // Single-item delete: delegate to the item's delete() so survey-core
    // can run its own cleanup (questionHashes, parent unwiring, etc.). A
    // raw splice would leave stale entries in survey.questionHashes and
    // questions would remain findable by name.
    if (action.value === null) {
      const item = array[index];
      if (!!item && typeof item.delete === "function") {
        item.delete(false);
      }
      // Safety net: if the item lacked delete() or didn't unwire itself.
      if (array.length > index && array[index] === item) {
        array.splice(index, 1);
      }
      return;
    }

    if (!Array.isArray(action.value) || action.value.length === 0) return;

    // Insert. Drop items that are already present in the target array by
    // `name`. A transaction can contain redundant nested inserts because
    // adding a parent (e.g. a page) emits both `pages.splice` (whose
    // payload already includes the page's full subtree) and the child
    // arrays' splices (e.g. `elements.splice`) that fired while the
    // parent was being initialized. Applying both verbatim would
    // duplicate the children. Names are unique within a parent
    // collection in survey-core, so name-based dedup is safe here.
    const itemsToAdd = action.value.map(deserializeValue);
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
    array.splice(index, 0, ...filtered);
    return;
  }

  // Property action layout: <pair>* <propertyName> [<locale>]
  // The trailing locale segment is only present when the property is
  // localizable. With k leading pairs that gives either 2k+1 segments
  // (no locale) or 2k+2 segments (with locale). Disambiguate by parity.
  const total = segments.length;
  let parent: any = null;
  let propertyName: string | null = null;
  let locale: string | null = null;
  if (total === 0) return;
  if (total % 2 === 1) {
    const pairCount = (total - 1) / 2;
    parent = walkPairs(survey, segments, pairCount);
    propertyName = segments[total - 1];
  } else {
    const pairCount = (total - 2) / 2;
    parent = walkPairs(survey, segments, pairCount);
    propertyName = segments[total - 2];
    locale = segments[total - 1];
  }
  if (!parent || propertyName === null) return;

  if (locale !== null) {
    if (isLocalizableProperty(parent, propertyName)) {
      const locStr = getLocStr(parent, propertyName);
      if (!!locStr && typeof locStr.setLocaleText === "function") {
        const realLocale = locale === DEFAULT_LOCALE_TOKEN ? "" : locale;
        const text = action.value;
        locStr.setLocaleText(realLocale,
          typeof text === "string" ? text : (text == null ? "" : String(text)));
        return;
      }
    }
    // Not localizable / no own LocalizableString: fall through to the
    // regular setter and ignore the trailing segment.
  }

  parent[propertyName] = deserializeValue(action.value);
}

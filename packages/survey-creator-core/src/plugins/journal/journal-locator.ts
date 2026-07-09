import { Base, Serializer, SurveyModel } from "survey-core";
import { ISerializedSurveyObj, JournalLocator } from "./journal-record";

function isSurveyObj(obj: any, survey: SurveyModel): boolean {
  return obj === survey || (!!obj && !!obj.getType && obj.getType() === "survey");
}

// RFC 6901 segment escaping: "~" -> "~0", "/" -> "~1".
export function escapeSegment(segment: string): string {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
export function unescapeSegment(segment: string): string {
  return segment.replace(/~1/g, "/").replace(/~0/g, "~");
}
/** Appends a property/identity segment to a JSON Pointer path. */
export function appendSegment(path: string, segment: string): string {
  return path + "/" + escapeSegment(String(segment));
}
/** Splits a path into the container path and its last (unescaped) segment. */
export function splitPointer(path: string): { container: string, key: string } {
  const slash = path.lastIndexOf("/");
  return { container: path.substring(0, slash), key: unescapeSegment(path.substring(slash + 1)) };
}

export function getOwner(obj: any): any {
  // The same owner pointers EditableObject.getSurvey relies on
  if (!!obj.colOwner) return obj.colOwner;
  if (!!obj.errorOwner) return obj.errorOwner;
  if (!!obj.locOwner) return obj.locOwner;
  if (!!obj.owner) return obj.owner;
  if (!!obj.parent) return obj.parent;
  if (!!obj.parentQuestion) return obj.parentQuestion;
  if (obj.isPage === true && typeof obj.getSurvey === "function") return obj.getSurvey();
  return null;
}

export function getItemIdentity(item: any): string | number {
  if (!item) return undefined;
  if (!!item.getType && Serializer.isDescendantOf(item.getType(), "itemvalue")) return item.value;
  if (item["name"] !== undefined && item["name"] !== null && item["name"] !== "") return item["name"];
  return undefined;
}

export function findStep(owner: any, child: any): { property: string, index: number, key?: string | number } {
  const props = Serializer.getPropertiesByObj(owner);
  for (let i = 0; i < props.length; i++) {
    const propName = props[i].name;
    let value: any;
    try {
      value = owner[propName];
    } catch(e) {
      continue;
    }
    if (value === child) return { property: propName, index: -1 };
    if (Array.isArray(value)) {
      const index = value.indexOf(child);
      if (index > -1) {
        const key = getItemIdentity(child);
        const step: any = { property: propName, index: index };
        if (key !== undefined) step.key = key;
        return step;
      }
    }
  }
  // Runtime-only containers that are not serializable properties: the template
  // panel of a paneldynamic question lives in `template` while its content is
  // serialized as `templateElements`.
  if (owner["template"] === child) return { property: "template", index: -1 };
  return null;
}

/**
 * Builds a JSON-Pointer-style path (RFC 6901 syntax) for a survey object, or
 * returns `null` when the object cannot be addressed (the caller should
 * degrade to a whole-property value or a full snapshot).
 *
 * Array segments hold the element's identity (question/page/panel `name`,
 * item value) rather than its index, so paths stay valid when element order
 * differs: `/pages/page1/elements/q2/choices/item1`. The empty string
 * addresses the survey itself. Elements without an identity are addressed by
 * index.
 */
export function buildLocator(obj: any, survey: SurveyModel): JournalLocator {
  if (!obj || !survey) return null;
  if (isSurveyObj(obj, survey)) return "";
  // Pages always live in survey.pages, so their path needs no owner walk.
  // This also keeps the path buildable when the page has just been detached
  // (creator drops an emptied page while undoing the add of its only question,
  // and the change is captured after the fact).
  if (obj.isPage === true && !!obj["name"]) return "/pages/" + escapeSegment(String(obj["name"]));
  const segments: Array<string> = [];
  let current = obj;
  for (let guard = 0; guard < 20; guard++) {
    const owner = getOwner(current);
    if (!owner) return null;
    const step = findStep(owner, current);
    if (!step) return null;
    if (step.index === -1) {
      segments.unshift(escapeSegment(step.property));
    } else {
      const identity = step.key !== undefined ? String(step.key) : String(step.index);
      segments.unshift(escapeSegment(identity));
      segments.unshift(escapeSegment(step.property));
    }
    if (isSurveyObj(owner, survey)) return "/" + segments.join("/");
    current = owner;
  }
  return null;
}

/**
 * Resolves a locator path against the given survey. Walks segment by segment:
 * a segment after an array-valued property selects the element by identity
 * (with a numeric-index fallback), any other segment is a property access.
 * Returns `null` when the referenced object no longer exists.
 */
export function resolveLocator(locator: JournalLocator, survey: SurveyModel): any {
  if (typeof locator !== "string" || !survey) return null;
  if (locator === "") return survey;
  if (locator[0] !== "/") return null;
  const segments = locator.substring(1).split("/").map(unescapeSegment);
  let obj: any = survey;
  for (let i = 0; i < segments.length; i++) {
    if (!obj) return null;
    obj = Array.isArray(obj) ? selectFromArray(obj, segments[i]) : obj[segments[i]];
  }
  return obj || null;
}

function selectFromArray(array: Array<any>, segment: string): any {
  for (let i = 0; i < array.length; i++) {
    const identity = getItemIdentity(array[i]);
    if (identity !== undefined && String(identity) === segment) return array[i];
  }
  if (/^\d+$/.test(segment)) return array[parseInt(segment)];
  return undefined;
}

export function findItemByIdentity(array: Array<any>, key: string | number): any {
  for (let i = 0; i < array.length; i++) {
    if (getItemIdentity(array[i]) === key) return array[i];
  }
  return undefined;
}

function isBaseObj(value: any): boolean {
  return !!value && typeof value === "object" && typeof value.getType === "function" && typeof value.toJSON === "function";
}

export function isSerializedSurveyObj(value: any): value is ISerializedSurveyObj {
  return !!value && typeof value === "object" && typeof value.type === "string" && value.json !== undefined;
}

/**
 * Converts a captured property value into a pure JSON form: survey-core objects
 * become `{ type, json }`, plain objects/arrays are deep-cloned, primitives
 * pass through.
 */
export function serializeValue(value: any): any {
  if (value === undefined) return null;
  if (value === null || typeof value !== "object") return value;
  if (isBaseObj(value)) {
    return { type: value.getType(), json: value.toJSON() };
  }
  if (Array.isArray(value)) {
    return value.map(item => serializeValue(item));
  }
  try {
    return JSON.parse(JSON.stringify(value));
  } catch(e) {
    return null;
  }
}

export function deserializeValue(value: any): any {
  if (value === null || value === undefined || typeof value !== "object") return value;
  if (isSerializedSurveyObj(value)) {
    const obj = Serializer.createClass(value.type);
    if (!obj) return value.json;
    obj.fromJSON(value.json);
    return obj;
  }
  if (Array.isArray(value)) {
    return value.map(item => deserializeValue(item));
  }
  return value;
}

export function serializeElement(el: Base): ISerializedSurveyObj {
  return { type: el.getType(), json: el.toJSON() };
}

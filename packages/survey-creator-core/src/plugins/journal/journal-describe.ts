import { Serializer } from "survey-core";
import { editorLocalization } from "../../editorLocalization";
import { JournalOp } from "./journal-record";
import { splitPointer } from "./journal-locator";

/**
 * Produces a short human-readable description of a journal record for
 * history/timeline UIs, e.g. `Question "question2" added`,
 * `Property "title" changed on "q1"`, `Question "q1" changed to Radio Button
 * Group`. The parameter is structural (`op` + `payload`) so both
 * `IJournalRecord` and transport mirrors of it (e.g. the collab bar's
 * `ICollabChange`) can be passed directly.
 *
 * Known approximations (the payload carries no more detail):
 * - a non-default-locale edit (`.../title/de`) reads the locale code as the
 *   property name;
 * - `ElementRemoved` payloads carry no element type, so a removed panel is
 *   described as a question.
 *
 * Never throws: unknown ops and malformed payloads degrade to `"Edited"`.
 */
export function describeRecord(change: { op: number, payload?: any }): string {
  try {
    return describeCore(change.op, change.payload);
  } catch(e) {
    return "Edited";
  }
}

function describeCore(op: number, payload: any): string {
  if (op === JournalOp.FullSnapshot) {
    const label = payload && payload.label;
    return typeof label === "string" && label !== "" ? label : "Survey edited";
  }
  if (!payload) return "Edited";
  switch(op) {
    case JournalOp.PropertyChanged: {
      const [owner, prop] = tailSegments(payload.target, 2);
      if (!prop) return "Edited";
      return propertyChanged(prop, owner);
    }
    case JournalOp.ArrayChanged: {
      const [owner, arrayProp] = tailSegments(payload.target, 2);
      if (!arrayProp) return "Edited";
      const added = Array.isArray(payload.added) ? payload.added : [];
      const removed = Array.isArray(payload.removed) ? payload.removed : [];
      if (!payload.fullValue && added.length === 1 && removed.length === 0) {
        const item = added[0] && added[0].item;
        return withName(elementNoun(arrayProp, item && item.type), itemName(item), "added");
      }
      if (!payload.fullValue && added.length === 0 && removed.length === 1) {
        const key = removed[0] && removed[0].key;
        const name = key !== undefined && key !== null ? String(key) : "";
        return withName(elementNoun(arrayProp), name, "removed");
      }
      return propertyChanged(arrayProp, owner);
    }
    case JournalOp.ElementRemoved: {
      const [arrayProp, name] = tailSegments(payload.target, 2);
      if (!name) return "Edited";
      return withName(elementNoun(arrayProp), name, "removed");
    }
    case JournalOp.ElementReordered: {
      const [, arrayProp] = tailSegments(payload.target, 2);
      const key = payload.key;
      if (key === undefined || key === null) return "Items reordered";
      return withName(elementNoun(arrayProp), String(key), "reordered");
    }
    case JournalOp.ElementConverted: {
      const [, name] = tailSegments(payload.target, 2);
      const type = payload.element && payload.element.type;
      const to = type ? " to " + typeDisplayName(String(type)) : "";
      return withName("Question", name, "changed" + to);
    }
    case JournalOp.ElementMoved: {
      const key = payload.key;
      const name = key !== undefined && key !== null ? String(key) : "";
      const [toOwner, toProp] = tailSegments(payload.to, 2);
      const to = toOwner ? ` moved to "${toOwner}"` : " moved";
      const noun = elementNoun(toProp || tailSegments(payload.from, 2)[1]);
      return (name ? `${noun} "${name}"` : noun) + to;
    }
    default:
      return "Edited";
  }
}

/** The last `count` unescaped segments of a locator path, left-padded with "". */
function tailSegments(path: any, count: number): Array<string> {
  const res: Array<string> = [];
  let rest = typeof path === "string" ? path : "";
  while(res.length < count && rest !== "") {
    const { container, key } = splitPointer(rest);
    res.unshift(key);
    rest = container;
  }
  while(res.length < count) res.unshift("");
  return res;
}

/** `Property "title" changed on "q1"`; an empty owner means the survey itself. */
function propertyChanged(prop: string, owner: string): string {
  return owner ? `Property "${prop}" changed on "${owner}"` : `Survey property "${prop}" changed`;
}

function withName(noun: string, name: string, verb: string): string {
  return name ? `${noun} "${name}" ${verb}` : `${noun} ${verb}`;
}

/** Noun for an item of the given array property, e.g. `elements` -> Question. */
function elementNoun(arrayProp: string, itemType?: string): string {
  switch(arrayProp) {
    case "pages": return "Page";
    case "elements":
    case "templateElements":
      return itemType && isPanelType(itemType) ? "Panel" : "Question";
    case "choices": return "Choice";
    case "columns": return "Column";
    case "rows": return "Row";
    case "rateValues": return "Rate value";
    case "triggers": return "Trigger";
    case "validators": return "Validator";
    case "calculatedValues": return "Calculated value";
    default: return "Item";
  }
}

function isPanelType(type: string): boolean {
  try {
    return Serializer.isDescendantOf(type, "panelbase");
  } catch(e) {
    return false;
  }
}

/** Identity of an added array item: element name, itemvalue value, or "". */
function itemName(item: any): string {
  if (item === null || item === undefined) return "";
  if (typeof item !== "object") return String(item);
  const json = item.json;
  if (json && typeof json === "object") {
    if (json.name !== undefined && json.name !== null && json.name !== "") return String(json.name);
    if (json.value !== undefined && json.value !== null) return String(json.value);
    return "";
  }
  if (typeof json === "string" || typeof json === "number") return String(json);
  return "";
}

/** Friendly question type name ("radiogroup" -> "Radio Button Group"). */
function typeDisplayName(type: string): string {
  // getString falls back to the last path segment, i.e. the raw type name.
  return editorLocalization.getString("qt." + type);
}

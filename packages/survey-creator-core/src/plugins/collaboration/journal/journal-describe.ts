import { Serializer, settings, surveyLocalization } from "survey-core";
import { editorLocalization } from "survey-creator-core";
import { getCollabString } from "../collaboration-strings";
import { JournalOp } from "./journal-record";
import { splitPointer } from "./journal-locator";

// Produces a short human-readable description of a journal record for
// history/timeline UIs, e.g. `Question "question2" added`,
// `Question "Question1" renamed to "userName"`,
// `Title of "userName" changed to "User Name"`. The parameter is structural
// (`op` + `payload`) so both `IJournalRecord` and transport mirrors of it
// (e.g. the collab bar's `ICollabChange`) can be passed directly.
//
// A property change names the property the way the property grid does
// ("Title", "Required"), its owner by name and the new value IN FULL - never
// truncated, the timeline wraps instead. Booleans read "turned on/off", an empty
// value "cleared", and a value too complex for a sentence (an object, an array)
// or file content (a `data:` URL) just "changed". Payloads carry no old value,
// so only a rename - whose old name is the locator's owner segment - says what
// something changed from.
//
// Known approximations (the payload carries no more detail):
// - neither `ElementRemoved` payloads nor property locators carry an element
//   type, so a panel is described as a question;
// - the sentences are whole frames with the element noun substituted into them
//   (`{0} "{1}" added`). Verb-by-verb concatenation would not survive
//   translation into inflected languages once these strings are localized, and
//   a frame per noun/verb pair would be ~44 keys - this is the compromise.
//
// Never throws: unknown ops and malformed payloads degrade to `"Edited"`.
export function describeRecord(change: { op: number, payload?: any }): string {
  try {
    return describeCore(change.op, change.payload);
  } catch(e) {
    return fmt("journalEdited");
  }
}

function fmt(key: string, ...args: Array<string>): string {
  return getCollabString.apply(null, [key].concat(args));
}

function describeCore(op: number, payload: any): string {
  if (op === JournalOp.FullSnapshot) {
    const label = payload && payload.label;
    return typeof label === "string" && label !== "" ? label : fmt("journalSurveyEdited");
  }
  if (!payload) return fmt("journalEdited");
  switch(op) {
    case JournalOp.PropertyChanged:
      return describePropertyChanged(payload.target, payload.value);
    case JournalOp.ArrayChanged: {
      const [owner, arrayProp] = tailSegments(payload.target, 2);
      if (!arrayProp) return fmt("journalEdited");
      const added = Array.isArray(payload.added) ? payload.added : [];
      const removed = Array.isArray(payload.removed) ? payload.removed : [];
      if (!payload.fullValue && added.length === 1 && removed.length === 0) {
        const item = added[0] && added[0].item;
        return withName(elementNoun(arrayProp, item && item.type), itemName(item), "Added");
      }
      if (!payload.fullValue && added.length === 0 && removed.length === 1) {
        const key = removed[0] && removed[0].key;
        const name = key !== undefined && key !== null ? String(key) : "";
        return withName(elementNoun(arrayProp), name, "Removed");
      }
      return propertySentence("Changed", propertyLabel(arrayProp), owner);
    }
    case JournalOp.ElementRemoved: {
      const [arrayProp, name] = tailSegments(payload.target, 2);
      if (!name) return fmt("journalEdited");
      return withName(elementNoun(arrayProp), name, "Removed");
    }
    case JournalOp.ElementReordered: {
      const [, arrayProp] = tailSegments(payload.target, 2);
      const key = payload.key;
      if (key === undefined || key === null) return fmt("journalItemsReordered");
      return withName(elementNoun(arrayProp), String(key), "Reordered");
    }
    case JournalOp.ElementConverted: {
      const [, name] = tailSegments(payload.target, 2);
      const type = payload.element && payload.element.type;
      return type
        ? fmt("journalElementConverted", name, typeDisplayName(String(type)))
        : fmt("journalElementConvertedNoType", name);
    }
    case JournalOp.ElementMoved: {
      const key = payload.key;
      const name = key !== undefined && key !== null ? String(key) : "";
      const [toOwner, toProp] = tailSegments(payload.to, 2);
      const noun = elementNoun(toProp || tailSegments(payload.from, 2)[1]);
      if (!toOwner) return name ? fmt("journalElementMovedNoTarget", noun, name) : fmt("journalElementMovedBare", noun);
      return name ? fmt("journalElementMoved", noun, name, toOwner) : fmt("journalElementMovedNoName", noun, toOwner);
    }
    default:
      return fmt("journalEdited");
  }
}

// Arrays whose items carry a renamable identity: element and page `name`,
// item `value`, column `name`.
const RENAMABLE_CONTAINERS = ["pages", "elements", "templateElements", "choices", "columns", "rows", "rateValues", "calculatedValues"];

function describePropertyChanged(target: any, value: any): string {
  const segments = tailSegments(target, 4);
  if (!segments[3]) return fmt("journalEdited");
  // `.../title/de`: one locale of a localizable property. `.../title/default`
  // is the default text written per locale - how the Translation tab commits
  // its default column - and is the same edit as the designer's `.../title`,
  // so it reads the same, without a language.
  if (isLocaleOf(segments[2], segments[3]) && isLocaleText(value)) {
    const label = isDefaultLocaleKey(segments[3])
      ? propertyLabel(segments[2])
      : fmt("journalPropertyLocale", propertyLabel(segments[2]), editorLocalization.getLocaleName(segments[3]));
    return describeValue(label, segments[1], value);
  }
  const [, container, owner, prop] = segments;
  // The recorder addresses a renamed object by its OLD identity (see
  // JournalRecorder.useOldIdentityInLocator): the owner segment is the old
  // name and `value` the new one.
  if (isRename(container, owner, prop, value)) {
    return fmt("journalElementRenamed", elementNoun(container), owner, String(value));
  }
  return describeValue(propertyLabel(prop), owner, value);
}

function isRename(container: string, owner: string, prop: string, value: any): boolean {
  if (prop !== "name" && prop !== "value") return false;
  if (RENAMABLE_CONTAINERS.indexOf(container) < 0) return false;
  if (typeof value !== "string" && typeof value !== "number") return false;
  const name = String(value);
  // An equal owner means the recorder fell back to the new identity: there is
  // no old name to report.
  return name !== "" && name !== owner;
}

// Both halves are required, so a question named "title" whose property happens
// to look like a locale code is not misread as a translation.
function isLocaleOf(prop: string, loc: string): boolean {
  if (!prop || !loc) return false;
  if (!isDefaultLocaleKey(loc) && !surveyLocalization.localeNames[loc] && !surveyLocalization.locales[loc]) return false;
  return Serializer.getAllPropertiesByName(prop).some((p) => p.isLocalizable);
}

// The key a localizable string keeps its default text under ("default").
function isDefaultLocaleKey(loc: string): boolean {
  return loc === settings.localization.defaultLocaleName;
}

function isLocaleText(value: any): boolean {
  return typeof value === "string" || value === null || value === undefined;
}

// `Title of "q1" changed to "x"` and its on / off / cleared / changed variants.
function describeValue(label: string, owner: string, value: any): string {
  const shown = displayValue(value);
  if (shown === null) return propertySentence("Changed", label, owner);
  if (shown === true) return propertySentence("On", label, owner);
  if (shown === false) return propertySentence("Off", label, owner);
  if (shown === "") return propertySentence("Cleared", label, owner);
  return propertySentence("Set", label, owner, shown);
}

// The value as a sentence shows it, in full: whitespace runs (line breaks
// included) become one space. A localizable value written as a whole
// dictionary reads as its default-locale text. null: too complex to quote.
function displayValue(value: any): string | boolean | null {
  if (value === null || value === undefined) return "";
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return isFinite(value) ? String(value) : null;
  // A data: URL is a file, not text - an uploaded logo or image is stored as one,
  // often hundreds of KB of base64 (survey-library's history skips file content
  // for the same reason). A plain URL is short and says something, so it stays.
  if (typeof value === "string" && /^\s*data:/i.test(value)) return null;
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  if (typeof value === "object" && !Array.isArray(value) && typeof value.default === "string") return displayValue(value.default);
  return null;
}

// An empty owner means the survey itself.
function propertySentence(kind: string, label: string, owner: string, value: string = ""): string {
  return owner
    ? fmt("journalProperty" + kind, label, owner, value)
    : fmt("journalSurveyProperty" + kind, label, value);
}

// The property's name as the property grid shows it ("isRequired" -> "Required").
function propertyLabel(prop: string): string {
  const label: any = editorLocalization.getPropertyNameInEditor("", prop);
  return typeof label === "string" && label !== "" ? label : prop;
}

// The last `count` unescaped segments of a locator path, left-padded with "".
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

// `verb` is the capitalized key suffix ("Added" -> journalElementAdded /
// journalElementAddedNoName), so the whole sentence stays one translatable
// frame instead of a glued-together verb.
function withName(noun: string, name: string, verb: string): string {
  return name
    ? fmt("journalElement" + verb, noun, name)
    : fmt("journalElement" + verb + "NoName", noun);
}

// Noun for an item of the given array property, e.g. `elements` -> Question.
function elementNoun(arrayProp: string, itemType?: string): string {
  switch(arrayProp) {
    case "pages": return fmt("journalNounPage");
    case "elements":
    case "templateElements":
      return itemType && isPanelType(itemType) ? fmt("journalNounPanel") : fmt("journalNounQuestion");
    case "choices": return fmt("journalNounChoice");
    case "columns": return fmt("journalNounColumn");
    case "rows": return fmt("journalNounRow");
    case "rateValues": return fmt("journalNounRateValue");
    case "triggers": return fmt("journalNounTrigger");
    case "validators": return fmt("journalNounValidator");
    case "calculatedValues": return fmt("journalNounCalculatedValue");
    default: return fmt("journalNounItem");
  }
}

function isPanelType(type: string): boolean {
  try {
    return Serializer.isDescendantOf(type, "panelbase");
  } catch(e) {
    return false;
  }
}

// Identity of an added array item: element name, itemvalue value, or "".
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

// Friendly question type name ("radiogroup" -> "Radio Button Group").
function typeDisplayName(type: string): string {
  // getString falls back to the last path segment, i.e. the raw type name.
  return editorLocalization.getString("qt." + type);
}

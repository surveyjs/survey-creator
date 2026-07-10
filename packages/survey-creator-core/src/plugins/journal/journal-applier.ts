import { Helpers, JsonObject, Serializer, SurveyModel, settings } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import {
  IJournalApplyResult,
  IJournalArrayChangedPayload,
  IJournalArrayItemRemoved,
  IJournalElementConvertedPayload,
  IJournalElementMovedPayload,
  IJournalElementRemovedPayload,
  IJournalElementReorderedPayload,
  IJournalFullSnapshotPayload,
  IJournalPropertyChangedPayload,
  IJournalRecord,
  JournalOp,
  JournalSyncError
} from "./journal-record";
import { deserializeValue, findItemByIdentity, isSerializedSurveyObj, resolveLocator, splitPointer } from "./journal-locator";
import { JournalRecorder } from "./journal-recorder";

export interface IJournalApplyOptions {
  /**
   * When `true`, `apply` throws on the first failed record instead of
   * collecting per-record errors. Default is `false`.
   */
  strict?: boolean;
}

/**
 * Applies journal records produced by a `JournalRecorder` of another creator
 * instance to this creator's survey. Application is idempotent. Applied
 * changes go through the regular undo-redo pipeline (when the undoredo plugin
 * is present), so they enter the local undo stack as if made locally and can
 * be undone here; the undo then travels back to peers as a regular inverse
 * record. Echo into the journal itself is suppressed via `recorder.isApplying`.
 */
export class JournalApplier {
  constructor(private creator: SurveyCreatorModel, private recorder: JournalRecorder) { }

  public apply(input: IJournalRecord | Array<IJournalRecord> | string, options: IJournalApplyOptions = {}): Array<IJournalApplyResult> {
    const records = this.normalizeInput(input);
    const results: Array<IJournalApplyResult> = [];
    this.recorder.isApplying = true;
    try {
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        try {
          this.applyRecord(record);
          results.push({ seq: record.seq, success: true });
        } catch(e) {
          if (options.strict) throw e;
          const result: IJournalApplyResult = { seq: record.seq, success: false, error: !!e && e.message ? e.message : "" + e };
          if (!!e && !!e.name) result.errorName = e.name;
          results.push(result);
        }
      }
    } finally {
      this.recorder.isApplying = false;
    }
    return results;
  }

  public normalizeInput(input: IJournalRecord | Array<IJournalRecord> | string): Array<IJournalRecord> {
    if (typeof input === "string") {
      const parsed = JSON.parse(input);
      return Array.isArray(parsed) ? parsed : [parsed];
    }
    return Array.isArray(input) ? input : [input];
  }
  private get survey(): SurveyModel {
    return this.creator.survey;
  }
  private applyRecord(record: IJournalRecord): void {
    // Multi-mutation operations run inside one undo transaction so that a
    // single local undo reverts the whole record (and the undo-redo pipeline
    // recognizes the remove+insert pairs as move/convert). A propertyChanged
    // record is a single mutation: it is auto-wrapped by the pipeline and
    // consecutive re-sends of a coalesced typing record merge natively into
    // one transaction. A fullSnapshot resets the undo history by design.
    switch(record.op) {
      case JournalOp.PropertyChanged:
        this.applyPropertyChanged(<IJournalPropertyChangedPayload>record.payload);
        break;
      case JournalOp.ArrayChanged:
        this.runInTransaction(() => this.applyArrayChanged(<IJournalArrayChangedPayload>record.payload));
        break;
      case JournalOp.ElementRemoved:
        this.runInTransaction(() => this.applyElementRemoved(<IJournalElementRemovedPayload>record.payload));
        break;
      case JournalOp.ElementReordered:
        this.runInTransaction(() => this.applyElementReordered(<IJournalElementReorderedPayload>record.payload));
        break;
      case JournalOp.ElementConverted:
        this.runInTransaction(() => this.applyElementConverted(<IJournalElementConvertedPayload>record.payload));
        break;
      case JournalOp.ElementMoved:
        this.runInTransaction(() => this.applyElementMoved(<IJournalElementMovedPayload>record.payload));
        break;
      case JournalOp.FullSnapshot:
        this.creator.JSON = (<IJournalFullSnapshotPayload>record.payload).json;
        break;
      default:
        throw new Error("Unknown journal operation: " + (<any>record).op);
    }
  }
  private runInTransaction(fn: () => void): void {
    const ctrl = this.creator.undoRedoController;
    if (!!ctrl) ctrl.startTransaction("journal apply");
    try {
      fn();
    } finally {
      if (!!ctrl) ctrl.stopTransaction();
    }
  }

  private applyPropertyChanged(payload: IJournalPropertyChangedPayload): void {
    const value = deserializeValue(payload.value);
    // Per-locale localizable target ".../<locProp>/<locale>": set just that
    // locale (localizable properties are leaf strings, so a segment past one
    // can only be a locale). Resolve the owner two segments up.
    const outer = splitPointer(payload.target);
    const inner = splitPointer(outer.container);
    const locOwner: any = resolveLocator(inner.container, this.survey);
    if (!!locOwner && typeof locOwner.getType === "function") {
      const locProp = Serializer.getOriginalProperty(locOwner, inner.key);
      if (!!locProp && locProp.isLocalizable && !!locProp.serializationProperty && !!locOwner[locProp.serializationProperty]) {
        locOwner[locProp.serializationProperty].setLocaleText(outer.key, value);
        return;
      }
    }
    const obj = resolveLocator(outer.container, this.survey);
    if (!obj) throw new Error("Cannot resolve target: " + JSON.stringify(payload.target));
    const prop = Serializer.getOriginalProperty(obj, outer.key);
    // Whole-dictionary change of a localizable property: apply as a per-locale
    // diff via setLocaleText. locStr.setJson would replace the values silently
    // (no change notifications), making the change invisible to the undo stack.
    if (!!prop && prop.isLocalizable && !!prop.serializationProperty && !!obj[prop.serializationProperty]) {
      this.runInTransaction(() => this.applyLocalizableValue(obj[prop.serializationProperty], value));
      return;
    }
    if (!!prop) {
      prop.setValue(obj, value, new JsonObject());
    } else {
      obj[outer.key] = value;
    }
  }
  private applyLocalizableValue(locStr: any, value: any): void {
    const dict: any = {};
    if (value !== null && value !== undefined) {
      if (typeof value === "object" && !Array.isArray(value)) {
        for (const loc in value) {
          dict[loc] = value[loc];
        }
      } else {
        dict[settings.localization.defaultLocaleName] = value;
      }
    }
    const existing: Array<string> = locStr.getLocales();
    for (let i = 0; i < existing.length; i++) {
      if (dict[existing[i]] === undefined) locStr.setLocaleText(existing[i], undefined);
    }
    for (const loc in dict) {
      const text = Array.isArray(dict[loc]) ? dict[loc].join("\n") : dict[loc];
      if (locStr.getLocaleText(loc) !== text) locStr.setLocaleText(loc, text);
    }
  }
  private applyArrayChanged(payload: IJournalArrayChangedPayload): void {
    const array: any = resolveLocator(payload.target, this.survey);
    if (!Array.isArray(array)) throw new Error("Cannot resolve array: " + JSON.stringify(payload.target));
    if (Array.isArray(payload.fullValue)) {
      const items = payload.fullValue.map(item => deserializeValue(item));
      array.splice.apply(array, (<Array<any>>[0, array.length]).concat(items));
      return;
    }
    for (let i = 0; i < payload.removed.length; i++) {
      const index = this.findRemovedIndex(array, payload.removed[i]);
      if (index > -1)this.removeArrayItem(array, index);
    }
    for (let i = 0; i < payload.added.length; i++) {
      const added = payload.added[i];
      if (this.isItemPresent(array, added.item)) continue;
      const index = added.index >= 0 ? Math.min(added.index, array.length) : array.length;
      if (this.tryMoveExistingElement(payload.target, array, added.item, index)) continue;
      const item = deserializeValue(added.item);
      array.splice(index, 0, item);
    }
  }
  private applyElementMoved(payload: IJournalElementMovedPayload): void {
    const array: any = resolveLocator(payload.to, this.survey);
    if (!Array.isArray(array)) {
      throw new JournalSyncError("Cannot apply element move: destination array not found: " + JSON.stringify(payload.to));
    }
    if (!!findItemByIdentity(array, payload.key)) return; // already moved - no-op for idempotency
    const existing: any = this.survey.getQuestionByName(String(payload.key)) || this.survey.getPanelByName(String(payload.key));
    if (!existing) {
      throw new JournalSyncError("Cannot apply element move: \"" + payload.key + "\" not found (from " + JSON.stringify(payload.from) + " to " + JSON.stringify(payload.to) + ")");
    }
    const dest: any = resolveLocator(splitPointer(payload.to).container, this.survey);
    if (!dest || typeof dest.addElement !== "function") {
      throw new JournalSyncError("Cannot apply element move: destination container not found: " + JSON.stringify(payload.to));
    }
    this.relocateElement(existing, dest, payload.index, array.length);
  }
  private tryMoveExistingElement(target: string, array: Array<any>, serializedItem: any, index: number): boolean {
    // A cross-container move normally travels as a single elementMoved record,
    // but programmatic moves outside an undo transaction (e.g. `q.page = otherPage`
    // in user code - two single-action changes) still produce an "add here" +
    // "remove there" pair of array records. Applying such an add by
    // deserializing a copy would duplicate the element's name while the
    // original still lives in the old container (the creator renames the
    // duplicate on insert) - relocate the existing instance instead, so the
    // receiver reproduces a true move and the element keeps its state.
    if (!isSerializedSurveyObj(serializedItem) || !serializedItem.json) return false;
    const name = serializedItem.json.name;
    if (!name) return false;
    const existing: any = this.survey.getQuestionByName(name) || this.survey.getPanelByName(name);
    if (!existing) return false;
    const parent: any = existing.parent;
    if (!parent || typeof parent.removeElement !== "function" || parent.elements === array) return false;
    const dest: any = resolveLocator(splitPointer(target).container, this.survey);
    if (!dest || typeof dest.addElement !== "function") return false;
    this.relocateElement(existing, dest, index, array.length);
    return true;
  }
  private relocateElement(existing: any, dest: any, index: number, arrayLength: number): void {
    // The same move primitives the creator's drag&drop uses (doDrop):
    // isMovingQuestion suppresses onQuestionAdded, so the receiver does not
    // treat the relocation as adding a new question (no unique-name pass, no
    // creator.onQuestionAdded for subscribers).
    const parent: any = existing.parent;
    this.survey.startMovingQuestion();
    try {
      if (!!parent && typeof parent.removeElement === "function") parent.removeElement(existing);
      dest.addElement(existing, Math.min(index, arrayLength));
    } finally {
      this.survey.stopMovingQuestion();
    }
  }
  private findRemovedIndex(array: Array<any>, removed: IJournalArrayItemRemoved): number {
    if (removed.key !== undefined) {
      const item = findItemByIdentity(array, removed.key);
      return array.indexOf(item);
    }
    if (removed.matchJSON !== undefined) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const json = !!item && typeof item.toJSON === "function" ? { type: item.getType(), json: item.toJSON() } : item;
        if (Helpers.isTwoValueEquals(json, removed.matchJSON)) return i;
      }
    }
    return -1;
  }
  private isItemPresent(array: Array<any>, serializedItem: any): boolean {
    if (isSerializedSurveyObj(serializedItem)) {
      const key = serializedItem.json && (serializedItem.json.name !== undefined ? serializedItem.json.name : serializedItem.json.value);
      if (key !== undefined) return !!findItemByIdentity(array, key);
      return false;
    }
    return array.indexOf(serializedItem) > -1;
  }
  private removeArrayItem(array: Array<any>, index: number): void {
    const item = array[index];
    // Survey elements clean up after themselves (unregister nested questions
    // from the survey, detach from the parent) in delete() - a bare splice
    // would leave stale name registrations behind. This is the same call
    // the creator's own deleteObjectCore uses.
    if (!!item && (item.isPage === true || item.isPanel === true || item.isQuestion === true) && typeof item.delete === "function") {
      item.delete(false);
      const rest = array.indexOf(item);
      if (rest > -1) array.splice(rest, 1);
      return;
    }
    array.splice(index, 1);
  }
  private applyElementRemoved(payload: IJournalElementRemovedPayload): void {
    const element: any = resolveLocator(payload.target, this.survey);
    if (!element) return; // already removed - no-op for idempotency
    if (typeof element.delete === "function") {
      element.delete(false);
      return;
    }
    const parent = element.parent;
    if (!!parent && typeof parent.removeElement === "function") {
      parent.removeElement(element);
    }
  }
  private applyElementReordered(payload: IJournalElementReorderedPayload): void {
    const array: any = resolveLocator(payload.target, this.survey);
    if (!Array.isArray(array)) throw new Error("Cannot resolve array: " + JSON.stringify(payload.target));
    let element = payload.key !== undefined ? findItemByIdentity(array, payload.key) : array[payload.indexFrom];
    if (!element) element = array[payload.indexFrom];
    if (!element) return;
    const from = array.indexOf(element);
    if (from < 0) return;
    array.splice(from, 1);
    array.splice(Math.min(payload.indexTo, array.length), 0, element);
  }
  private applyElementConverted(payload: IJournalElementConvertedPayload): void {
    const existing: any = resolveLocator(payload.target, this.survey);
    // Idempotency: skip only if the element already matches the record exactly.
    // Same type alone is not enough a subtype conversion (e.g. text -> text
    // with a different inputType) keeps the type but changes the JSON.
    if (!!existing && existing.getType() === payload.element.type &&
      JSON.stringify(existing.toJSON()) === JSON.stringify(payload.element.json)) return;
    const newElement: any = deserializeValue(payload.element);
    if (!newElement || typeof newElement.getType !== "function") {
      throw new Error("Cannot rehydrate converted element: " + JSON.stringify(payload.target));
    }
    if (!!existing && !!existing.parent && Array.isArray(existing.parent.elements)) {
      const array = existing.parent.elements;
      const index = array.indexOf(existing);
      array.splice(index, 1);
      array.splice(index, 0, newElement);
      return;
    }
    // The element is gone: insert into the array named by the target's container.
    const { container } = splitPointer(payload.target);
    const array: any = resolveLocator(container, this.survey);
    if (!Array.isArray(array)) {
      throw new Error("Cannot resolve array for converted element: " + JSON.stringify(payload.target));
    }
    const index = payload.index >= 0 ? Math.min(payload.index, array.length) : array.length;
    array.splice(index, 0, newElement);
  }
}

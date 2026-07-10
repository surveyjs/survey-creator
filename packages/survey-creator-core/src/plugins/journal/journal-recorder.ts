import { EventBase, Serializer, SurveyModel, surveyLocalization } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ModifiedEvent } from "../../creator-events-api";
import { EditableObject } from "../../editable-object";
import {
  IJournalArrayChangedPayload,
  IJournalArrayItemAdded,
  IJournalOptions,
  IJournalRecord,
  JOURNAL_VERSION,
  JournalOp,
  JournalPayload
} from "./journal-record";
import { appendSegment, buildLocator, escapeSegment, findStep, getItemIdentity, getOwner, isSerializedSurveyObj, serializeElement, serializeValue } from "./journal-locator";

interface IAddedElementEntry {
  record: IJournalRecord;
  added: IJournalArrayItemAdded;
}

/**
 * Records survey modifications reported by `creator.onModified` as serializable
 * journal records. See `JournalPlugin` for the public facade.
 *
 * Requires the creator's undo-redo plugin: its controller is the creator's
 * only subscriber to survey-core mutations (`survey.onPropertyValueChangedCallback`)
 * and the source of the `onModified` notifications this recorder consumes.
 * The plugin is registered unconditionally by the creator today; the constructor
 * check exists so that a future opt-out fails loudly instead of silently
 * recording nothing.
 */
export class JournalRecorder {
  public onRecordAdded: EventBase<JournalRecorder, { record: IJournalRecord }> = new EventBase<JournalRecorder, { record: IJournalRecord }>();
  public onRecordChanged: EventBase<JournalRecorder, { record: IJournalRecord }> = new EventBase<JournalRecorder, { record: IJournalRecord }>();
  /**
   * Set by `JournalApplier` while remote records are being applied so that
   * they are not recorded again (echo suppression).
   */
  public isApplying: boolean = false;

  public coalesceInterval: number;

  private recordsValue: Array<IJournalRecord> = [];
  private seqCounter: number = 0;
  private isRecordingValue: boolean = true;
  private addedElements: WeakMap<any, IAddedElementEntry> = new WeakMap();
  private modifiedHandler: (sender: SurveyCreatorModel, options: ModifiedEvent) => void;

  constructor(private creator: SurveyCreatorModel, options: IJournalOptions = {}) {
    if (!creator.undoRedoController) {
      throw new Error("JournalRecorder requires the creator's undo-redo plugin: " +
        "its controller is the source of the onModified change notifications the journal records. " +
        "Without it survey modifications would be lost silently.");
    }
    this.coalesceInterval = typeof options.coalesceInterval === "number" ? options.coalesceInterval : 1000;
    this.modifiedHandler = (sender: SurveyCreatorModel, opts: ModifiedEvent) => this.onCreatorModified(opts);
    this.creator.onModified.add(this.modifiedHandler);
  }
  public dispose(): void {
    this.creator.onModified.remove(this.modifiedHandler);
  }

  public get records(): Array<IJournalRecord> {
    return this.recordsValue;
  }
  public get isRecording(): boolean {
    return this.isRecordingValue;
  }
  public startRecording(): void {
    this.isRecordingValue = true;
  }
  public stopRecording(): void {
    this.isRecordingValue = false;
  }
  public clear(): void {
    this.recordsValue = [];
    this.addedElements = new WeakMap();
  }
  public toJSON(): Array<IJournalRecord> {
    return this.recordsValue;
  }
  public toText(): string {
    return JSON.stringify(this.recordsValue);
  }
  /**
   * Manually records a full-survey snapshot. Call it to bootstrap a receiver or
   * after a programmatic `creator.JSON = ...` / `creator.changeText()`, which do
   * not fire `onModified`.
   */
  public snapshot(): IJournalRecord {
    return this.pushRecord(JournalOp.FullSnapshot, { json: this.creator.JSON });
  }

  private get survey(): SurveyModel {
    return this.creator.survey;
  }
  private onCreatorModified(options: ModifiedEvent): void {
    if (!this.isRecordingValue || this.isApplying) return;
    switch(options.type) {
      case "PROPERTY_CHANGED":
        this.recordPropertyChanged(options);
        break;
      case "ADDED_FROM_TOOLBOX":
      case "ADDED_FROM_PAGEBUTTON":
      case "ELEMENT_COPIED":
        this.reconcileAddedElement(options.question || options.newValue);
        break;
      case "PAGE_ADDED":
        this.reconcileAddedElement(options.newValue);
        break;
      case "OBJECT_DELETED":
        this.recordObjectDeleted(options);
        break;
      case "ELEMENT_REORDERED":
        this.recordElementReordered(options);
        break;
      case "QUESTION_CONVERTED":
        this.recordQuestionConverted(options);
        break;
      case "JSON_EDITOR":
        this.snapshot();
        break;
    }
  }

  private recordPropertyChanged(options: ModifiedEvent): void {
    const target: any = options.target;
    const name = options.name;
    if (!target || !name || EditableObject.isCopyObject(target)) return;
    const liveValue = target[name];
    const isArrayChange = Array.isArray(liveValue) && liveValue !== options.newValue &&
      (Array.isArray(options.newValue) || Array.isArray(options.oldValue));
    if (isArrayChange) {
      this.recordArrayChanged(target, name, options.newValue || [], options.oldValue || []);
    } else {
      this.recordScalarChanged(target, name, options.oldValue);
    }
  }
  private recordScalarChanged(target: any, name: string, oldValue: any): void {
    let objLocator = buildLocator(target, this.survey);
    if (objLocator === null) {
      this.recordDegraded(target);
      return;
    }
    objLocator = this.useOldIdentityInLocator(objLocator, target, name, oldValue);
    const prop = Serializer.getOriginalProperty(target, name);
    // Localizable property, non-default locale: record only the changed locale
    // (path `.../title/<locale>`, value = that locale's string) so that
    // concurrent edits of different languages of the same string converge
    // instead of clobbering each other via a whole-dictionary replace.
    if (!!prop && prop.isLocalizable && !!prop.serializationProperty) {
      const locStr = target[prop.serializationProperty];
      const loc = !!locStr ? locStr.lastChangedLoc : undefined;
      if (!!loc && loc !== surveyLocalization.defaultLocale) {
        const locTarget = appendSegment(appendSegment(objLocator, name), loc);
        const locValue = locStr.getLocaleText(loc);
        if (this.tryCoalesce(locTarget, locValue)) return;
        this.pushRecord(JournalOp.PropertyChanged, { target: locTarget, value: locValue });
        return;
      }
    }
    // Scalar or default-locale (source text) change: record the whole property.
    // The default locale keeps whole-property semantics so that source-text
    // edits which clear translations (clearTranslationsOnSourceTextChange)
    // propagate the cleared dictionary intact.
    const locator = appendSegment(objLocator, name);
    const value = this.captureLiveValue(target, name);
    if (this.tryCoalesce(locator, value)) return;
    this.pushRecord(JournalOp.PropertyChanged, {
      target: locator,
      value: value
    });
  }
  private useOldIdentityInLocator(locator: string, target: any, name: string, oldValue: any): string {
    // The locator is built AFTER the change. When the changed property is the
    // element's own identity (question/page/panel name, item value), the path's
    // last segment carries the NEW identity while the receiver still holds the
    // OLD one - address the object by the old identity.
    if (name !== "name" && name !== "value") return locator;
    if (oldValue === undefined || oldValue === null || oldValue === "" || typeof oldValue === "object") return locator;
    const slash = locator.lastIndexOf("/");
    if (slash < 0) return locator;
    const identity = getItemIdentity(target);
    if (identity === undefined || locator.substring(slash + 1) !== escapeSegment(String(identity))) return locator;
    return locator.substring(0, slash + 1) + escapeSegment(String(oldValue));
  }
  private captureLiveValue(target: any, name: string): any {
    // Read the current live state instead of options.newValue: this captures
    // the full locale dictionary of localizable properties and side effects
    // that ran before setModified.
    const prop = Serializer.getOriginalProperty(target, name);
    return serializeValue(prop ? prop.getValue(target) : target[name]);
  }
  private tryCoalesce(locator: string, value: any): boolean {
    if (this.coalesceInterval <= 0 || locator.endsWith("/name")) return false;
    const last = this.recordsValue[this.recordsValue.length - 1];
    if (!last || last.op !== JournalOp.PropertyChanged) return false;
    const payload: any = last.payload;
    if (payload.target !== locator) return false;
    if (new Date().getTime() - last.timestamp > this.coalesceInterval) return false;
    payload.value = value;
    last.timestamp = new Date().getTime();
    this.onRecordChanged.fire(this, { record: last });
    return true;
  }
  private recordArrayChanged(target: any, name: string, addedItems: Array<any>, removedItems: Array<any>): void {
    const objLocator = buildLocator(target, this.survey);
    if (objLocator === null) {
      this.recordDegraded(target);
      return;
    }
    const liveArray: Array<any> = target[name];
    const payload: IJournalArrayChangedPayload = { target: appendSegment(objLocator, name), added: [], removed: [] };
    for (let i = 0; i < addedItems.length; i++) {
      const item = addedItems[i];
      const added: IJournalArrayItemAdded = {
        index: liveArray.indexOf(item),
        item: serializeValue(item)
      };
      payload.added.push(added);
    }
    for (let i = 0; i < removedItems.length; i++) {
      const item = removedItems[i];
      const key = getItemIdentity(item);
      payload.removed.push(key !== undefined ? { key: key } : { matchJSON: this.serializeSafe(item) });
    }
    if (this.tryMergeMoveRecord(payload, removedItems)) return;
    const record = this.pushRecord(JournalOp.ArrayChanged, payload);
    for (let i = 0; i < addedItems.length; i++) {
      const item = addedItems[i];
      if (!!item && typeof item === "object") {
        this.addedElements.set(item, { record: record, added: payload.added[i] });
      }
    }
  }
  private tryMergeMoveRecord(payload: IJournalArrayChangedPayload, removedItems: Array<any>): boolean {
    // A cross-container drag&drop reaches onModified as an "add to the new
    // array" PROPERTY_CHANGED followed by a "remove from the old array" one
    // (the undo-redo controller notifies the transaction's actions in reverse
    // order). The pair is one operation: rewrite the already-recorded add into
    // a single atomic elementMoved record IN PLACE - like typing coalescing,
    // live subscribers get onRecordChanged and re-apply idempotently - and
    // drop the remove record.
    // The reverse order (remove first, then add: an undo of a move or a
    // programmatic move outside a transaction) is NOT merged: the remove
    // record has already been emitted and live peers have deleted the element,
    // so a rewritten elementMoved could no longer be applied there. Such pairs
    // keep traveling as two arrayChanged records.
    // A same-name add+remove pair across two different arrays cannot be two
    // unrelated operations - element names are unique per survey - so no
    // extra time-window guard is needed.
    if (payload.added.length !== 0 || payload.removed.length !== 1) return false;
    const key = payload.removed[0].key;
    if (key === undefined) return false;
    const last = this.recordsValue[this.recordsValue.length - 1];
    if (!last || last.op !== JournalOp.ArrayChanged) return false;
    const lastPayload = <IJournalArrayChangedPayload>last.payload;
    if (lastPayload.target === payload.target || Array.isArray(lastPayload.fullValue)) return false;
    if (lastPayload.added.length !== 1 || lastPayload.removed.length !== 0) return false;
    const item = lastPayload.added[0].item;
    if (!isSerializedSurveyObj(item) || !item.json || item.json.name !== key) return false;
    last.op = JournalOp.ElementMoved;
    last.payload = {
      from: payload.target,
      to: lastPayload.target,
      index: lastPayload.added[0].index,
      key: key
    };
    last.timestamp = new Date().getTime();
    const movedElement = removedItems[0];
    if (!!movedElement && typeof movedElement === "object")this.addedElements.delete(movedElement);
    this.onRecordChanged.fire(this, { record: last });
    return true;
  }
  private reconcileAddedElement(element: any): void {
    // Semantic add events (ADDED_FROM_TOOLBOX, PAGE_ADDED, ...) duplicate the
    // array PROPERTY_CHANGED that actually carries the change. When the array
    // record was already created (toolbox click order), refresh the serialized
    // element in it; otherwise (page add order) the upcoming arrayChanged
    // record captures the final state by itself.
    if (!element) return;
    const entry = this.addedElements.get(element);
    if (!entry) {
      // During undo/redo the manager compensates for missing containers
      // silently (e.g. UndoRedoArrayAction.getSenderElement re-creates the
      // dropped page before re-inserting its question) - no array
      // PROPERTY_CHANGED follows, the semantic add event is the only trace.
      // Synthesize the record so receivers re-create the container too.
      if (this.creator.isProcessingUndoRedo)this.synthesizeAddRecord(element);
      return;
    }
    entry.added.item = serializeValue(element);
    if (!!element.parent && Array.isArray(element.parent.elements)) {
      const index = element.parent.elements.indexOf(element);
      if (index > -1) entry.added.index = index;
    }
    this.onRecordChanged.fire(this, { record: entry.record });
  }
  private synthesizeAddRecord(element: any): void {
    const owner = getOwner(element);
    if (!owner) return;
    const ownerLocator = buildLocator(owner, this.survey);
    if (ownerLocator === null) return;
    const step = findStep(owner, element);
    if (!step || !Array.isArray(owner[step.property])) return;
    this.pushRecord(JournalOp.ArrayChanged, {
      target: appendSegment(ownerLocator, step.property),
      added: [{ index: step.index, item: serializeValue(element) }],
      removed: []
    });
  }
  private recordObjectDeleted(options: ModifiedEvent): void {
    const target: any = options.target;
    if (!target) return;
    if (target.isPage !== true && target.isPanel !== true && target.isQuestion !== true) return;
    // The locator may be unbuildable here: the object is already detached from
    // the survey. That is fine - the paired array PROPERTY_CHANGED record
    // carries the same removal.
    const locator = buildLocator(target, this.survey);
    if (locator === null || locator === "") return;
    this.pushRecord(JournalOp.ElementRemoved, { target: locator });
  }
  private recordElementReordered(options: ModifiedEvent): void {
    const objLocator = buildLocator(options.parent, this.survey);
    if (objLocator === null) return;
    const key = getItemIdentity(options.element);
    const payload: any = {
      target: appendSegment(objLocator, options.arrayName),
      indexFrom: options.indexFrom,
      indexTo: options.indexTo
    };
    if (key !== undefined) payload.key = key;
    this.pushRecord(JournalOp.ElementReordered, payload);
  }
  private recordQuestionConverted(options: ModifiedEvent): void {
    const newElement: any = options.newValue;
    if (!newElement) return;
    const parent = newElement.parent;
    const locator = buildLocator(newElement, this.survey);
    if (locator === null) {
      this.snapshot();
      return;
    }
    this.pushRecord(JournalOp.ElementConverted, {
      target: locator,
      element: serializeElement(newElement),
      index: Array.isArray(parent.elements) ? parent.elements.indexOf(newElement) : -1
    });
  }
  private recordDegraded(target: any): void {
    // The object cannot be addressed: fall back to rewriting the whole
    // ancestor property that contains it, or to a full snapshot as the last resort.
    let child: any = target;
    for (let guard = 0; guard < 10; guard++) {
      const owner = getOwner(child);
      if (!owner) break;
      const locator = buildLocator(owner, this.survey);
      if (locator !== null) {
        const step = findStep(owner, child);
        if (!!step && Array.isArray(owner[step.property])) {
          this.pushRecord(JournalOp.ArrayChanged, {
            target: appendSegment(locator, step.property),
            added: [],
            removed: [],
            fullValue: serializeValue(owner[step.property])
          });
          return;
        }
      }
      child = owner;
    }
    this.snapshot();
  }
  private serializeSafe(value: any): any {
    try {
      return serializeValue(value);
    } catch(e) {
      return null;
    }
  }
  private pushRecord(op: JournalOp, payload: JournalPayload): IJournalRecord {
    const record: IJournalRecord = {
      v: JOURNAL_VERSION,
      seq: ++this.seqCounter,
      timestamp: new Date().getTime(),
      op: op,
      payload: payload
    };
    this.recordsValue.push(record);
    this.onRecordAdded.fire(this, { record: record });
    return record;
  }
}

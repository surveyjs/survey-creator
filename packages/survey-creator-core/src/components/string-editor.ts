import { Base, LocalizableString, Serializer, JsonObjectProperty, property, ItemValue, ComputedUpdater, sanitizeEditableContent, Event as SurveyEvent, Question, QuestionMultipleTextModel, MultipleTextItemModel, QuestionMatrixBaseModel, QuestionMatrixModel, QuestionMatrixDropdownModel, MatrixDropdownColumn, QuestionMatrixDynamicModel, QuestionSelectBase, QuestionImagePickerModel, EventBase, CharacterCounter, CssClassBuilder } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { editorLocalization } from "../editorLocalization";
import { clearNewLines } from "../utils/utils";
import { getNextItemValue, getNextValue } from "../utils/creator-utils";
import { select } from "../utils/html-element-utils";
import { ItemValueWrapperViewModel } from "./item-value";
import { QuestionAdornerViewModel } from "./question";
import { QuestionRatingAdornerViewModel } from "./question-rating";

export abstract class StringItemsNavigatorBase {
  constructor(protected question: any) { }
  protected abstract getItemLocString(items: any, item: any): LocalizableString;
  protected abstract getItemSets(): Array<any>;
  protected abstract addNewItem(creator: SurveyCreatorModel, items: any, text?: string): void;
  protected abstract getItemsPropertyName(items: any): string;
  private static createItemsNavigator(question: any): StringItemsNavigatorBase {
    if (question instanceof QuestionImagePickerModel) return null;
    if (question instanceof QuestionMultipleTextModel) return new StringItemsNavigatorMultipleText(question);
    if (question instanceof QuestionMatrixDropdownModel) return new StringItemsNavigatorMatrixDropdown(question);
    if (question instanceof QuestionMatrixDynamicModel) return new StringItemsNavigatorMatrixDynamic(question);
    if (question instanceof QuestionMatrixModel) return new StringItemsNavigatorMatrix(question);
    if (question instanceof QuestionSelectBase) return new StringItemsNavigatorSelectBase(question);
    return null;
  }

  protected addNewItems(creator: SurveyCreatorModel, items: any, startIndex: number, itemsToAdd: string[]) {
    let newItems = items.slice();
    const createNewItem = (text: any): ItemValue => {
      const val = creator.inplaceEditChoiceValues ? text : getNextItemValue(creator.getChoicesItemBaseTitle(), newItems);
      if (this.question.createItemValue) return this.question.createItemValue(val, text);
      return new ItemValue(val, text);
    };

    newItems.splice(startIndex, 1);
    itemsToAdd.forEach((item, offset) => {
      if (creator.maxChoices <= 0 || newItems.length < creator.maxChoices) {
        newItems.splice(startIndex + offset, 0, createNewItem(item));
      }
    });
    this.question[this.getItemsPropertyName(items)] = newItems;
  }
  private setEventsForItem(creator: SurveyCreatorModel, items: any[], item: any) {
    const connector = StringEditorConnector.get(this.getItemLocString(items, item));
    connector.allowLineBreaksOnEdit = true;
    connector.onEditComplete.clear();
    connector.onEditComplete.add(() => {
      const itemIndex = items.indexOf(item);
      if (itemIndex >= 0 && itemIndex < items.length - 1) {
        StringEditorConnector.get(this.getItemLocString(items, items[itemIndex + 1])).activateEditor();
      }
      if (itemIndex == items.length - 1) {
        this.addNewItem(creator, items);
        StringEditorConnector.get(this.getItemLocString(items, items[items.length - 1])).setAutoFocus();
        StringEditorConnector.get(this.getItemLocString(items, items[items.length - 1])).activateEditor();
      }
    });

    connector.onBackspaceEmptyString.clear();
    connector.onBackspaceEmptyString.add(() => {
      const itemIndex = items.indexOf(item);
      let itemToFocus: MultipleTextItemModel = null;
      if (itemIndex !== -1) {
        if (itemIndex == 0 && items.length >= 2) itemToFocus = items[1];
        if (itemIndex > 0) itemToFocus = items[itemIndex - 1];
        if (itemToFocus) {
          const connector = StringEditorConnector.get(this.getItemLocString(items, itemToFocus));
          connector.setAutoFocus();
          connector.activateEditor();
        }
        items.splice(itemIndex, 1);
      }
    });

    connector.onTextChanging.clear();
    connector.onTextChanging.add((sender, options) => {
      let lines = options.value.split(/\r?\n/).map(line => (line || "").trim()).filter(line => !!line);
      if (lines.length <= 1) return;
      options.cancel = true;
      const itemIndex = items.indexOf(item);
      this.addNewItems(creator, items, itemIndex, lines);
      let focusedItemIndex = itemIndex + lines.length;
      if (focusedItemIndex >= items.length) focusedItemIndex = items.length - 1;
      StringEditorConnector.get(this.getItemLocString(items, items[focusedItemIndex])).setAutoFocus();
      StringEditorConnector.get(this.getItemLocString(items, items[focusedItemIndex])).activateEditor();
    });
  }

  public static setQuestion(questionAdorner: QuestionAdornerViewModel): boolean {
    const question = questionAdorner.element as Question;
    const navigator = StringItemsNavigatorBase.createItemsNavigator(question);
    if (navigator) {
      const creator = questionAdorner.creator;
      const titleConnector: StringEditorConnector = StringEditorConnector.get(question.locTitle);
      let allItemSets = navigator.getItemSets();
      let activeChoices = allItemSets[0];
      if (!titleConnector.hasEditCompleteHandler) {
        titleConnector.onEditComplete.add(() => {
          if (activeChoices.length) StringEditorConnector.get(navigator.getItemLocString(activeChoices, activeChoices[0])).activateEditor();
        });
        titleConnector.hasEditCompleteHandler = true;
      }
      allItemSets.forEach((activeChoices) => {
        activeChoices.forEach(item => {
          navigator.setEventsForItem(creator, activeChoices, item);
        });
        const itemsPropertyName = navigator.getItemsPropertyName(activeChoices);
        question.onPropertyChanged.add((sender: any, options: any) => {
          if (options.name == itemsPropertyName) {
            activeChoices.forEach(item => {
              navigator.setEventsForItem(creator, activeChoices, item);
            });
          }
        });
      });
    }
    return !!navigator;
  }
}

class StringItemsNavigatorSelectBase extends StringItemsNavigatorBase {
  protected getItemLocString(items: any, item: any) {
    return item.locText;
  }
  protected getItemSets() {
    return [this.question.choices];
  }
  protected addNewItem(creator: SurveyCreatorModel, items: any, text: string = null) {
    if (creator.maxChoices && items.length >= creator.maxChoices) return;
    const itemValue = creator.createNewItemValue(this.question);
    if (!!text) itemValue.value = text;
  }
  protected getItemsPropertyName(items: any) {
    return "choices";
  }
}

class StringItemsNavigatorMultipleText extends StringItemsNavigatorBase {
  protected getItemLocString(items: any, item: any) {
    return item.locTitle;
  }
  protected getItemSets() {
    return [this.question.items];
  }
  protected addNewItem(creator: SurveyCreatorModel, items: any, text: string = null) {
    this.question.addItem(text || getNextValue("text", items.map(i => i.name)) as string);
  }
  protected getItemsPropertyName(items: any) {
    return "items";
  }
  protected addNewItems(creator: SurveyCreatorModel, items: any, startIndex: number, itemsToAdd: string[]) {
    let newItems = items.slice(0, startIndex).concat(itemsToAdd.map(text => new MultipleTextItemModel(text))).concat(items.slice(startIndex + 1));
    this.question[this.getItemsPropertyName(items)] = newItems;
  }
}
class StringItemsNavigatorMatrix extends StringItemsNavigatorBase {
  protected getItemLocString(items: any, item: any) {
    return item.locText;
  }
  protected getItemSets() {
    return [this.question.columns, this.question.rows];
  }
  protected addNewItem(creator: SurveyCreatorModel, items: any, text: string = null) {
    let titleBase: string;
    let propertyName: string;
    if (items == this.question.columns) {
      if (creator.maxColumns && items.length >= creator.maxColumns) return;
      titleBase = "Column "; propertyName = "columns";
    }
    if (items == this.question.rows) {
      if (creator.maximumRowsCount && items.length >= creator.maximumRowsCount) return;
      titleBase = "Row "; propertyName = "rows";
    }
    const newItem = new ItemValue(getNextValue(titleBase, items.map(i => i.value)) as string);
    items.push(text || newItem);
    creator.onItemValueAddedCallback(
      this.question,
      propertyName,
      newItem,
      items
    );
  }
  protected getItemsPropertyName(items: any) {
    if (items == this.question.columns) return "columns";
    if (items == this.question.rows) return "rows";
  }
}
class StringItemsNavigatorMatrixDropdown extends StringItemsNavigatorMatrix {
  protected getItemLocString(items: any, item: any) {
    if (items == this.question.columns) return item.locTitle;
    return item.locText;
  }
  protected addNewItem(creator: SurveyCreatorModel, items: any, text: string = null) {
    if (items == this.question.columns) {
      if (creator.maxColumns && items.length >= creator.maxColumns) return;
      var column = new MatrixDropdownColumn(text || getNextValue("Column ", items.map(i => i.value)) as string);
      this.question.columns.push(column);
      creator.onMatrixDropdownColumnAddedCallback(this.question, column, this.question.columns);
    }
    if (items == this.question.rows) super.addNewItem(creator, items, text);
  }
  protected addNewItems(creator: SurveyCreatorModel, items: any, startIndex: number, itemsToAdd: string[]) {
    if (items == this.question.columns) {
      let newItems = items.slice(0, startIndex).concat(itemsToAdd.map(text => new MatrixDropdownColumn(text))).concat(items.slice(startIndex + 1));
      this.question[this.getItemsPropertyName(items)] = newItems;
    } else {
      super.addNewItems(creator, items, startIndex, itemsToAdd);
    }
  }
}
class StringItemsNavigatorMatrixDynamic extends StringItemsNavigatorMatrixDropdown {
  protected getItemSets() {
    return [this.question.columns];
  }
}

export class StringEditorConnector {
  public static get(locString: LocalizableString): StringEditorConnector {
    if (!locString["_stringEditorConnector"]) locString["_stringEditorConnector"] = new StringEditorConnector(locString);
    return locString["_stringEditorConnector"];
  }
  public setAutoFocus() { this.focusOnEditor = true; }

  public hasEditCompleteHandler = false;

  public allowLineBreaksOnEdit = false;

  public focusOnEditor: boolean;
  public activateEditor(): void {
    this.onDoActivate.fire(this.locString, {});
  }
  public onDoActivate: EventBase<LocalizableString, any> = new EventBase<LocalizableString, any>();
  public onTextChanging: EventBase<StringEditorViewModelBase, any> = new EventBase<StringEditorViewModelBase, any>();
  public onEditComplete: EventBase<StringEditorViewModelBase, any> = new EventBase<StringEditorViewModelBase, any>();
  public onBackspaceEmptyString: EventBase<StringEditorViewModelBase, any> = new EventBase<StringEditorViewModelBase, any>();
  constructor(private locString: LocalizableString) {
  }
}
export class StringEditorViewModelBase extends Base {

  private blurredByEscape: boolean = false;
  private focusedProgram: boolean = false;
  private valueBeforeEdit: string;
  private connector: StringEditorConnector;

  public getEditorElement: () => HTMLElement;
  public characterCounter = new CharacterCounter();

  @property() errorText: string;
  @property() focused: boolean;
  @property({ defaultValue: true }) editAsText: boolean;
  compostionInProgress: boolean;

  constructor(private locString: LocalizableString, private creator?: SurveyCreatorModel) {
    super();
    this.locString = locString;
    this.checkMarkdownToTextConversion(this.locString.owner, this.locString.name);
    this.addCreatorEvents();
  }
  private onLocaleChanged = () => {
    this.resetPropertyValue("placeholderValue");
  };
  public afterRender() {
    if (this.connector.focusOnEditor) {
      if (this.activate())this.connector.focusOnEditor = false;
    }
  }

  public detachFromUI() {
    this.removeCreatorEvents();
    this.connector?.onDoActivate.remove(this.activate);
    this.getEditorElement = undefined;
    this.blurEditor = undefined;
  }

  public dispose(): void {
    this.creator?.onLocaleChanded.remove(this.onLocaleChanged);
    super.dispose();
    this.detachFromUI();
  }
  private addCreatorEvents() {
    this.creator?.onLocaleChanded.add(this.onLocaleChanged);
  }
  private removeCreatorEvents() {
    this.creator?.onLocaleChanded.remove(this.onLocaleChanged);
  }
  public activate = () => {
    const element = this.getEditorElement();
    if (element && element.offsetParent != null) {
      element.focus({ preventScroll: true });
      select(element);
      return true;
    }
    return false;
  };

  public setLocString(locString: LocalizableString) {
    this.removeCreatorEvents();
    this.connector?.onDoActivate.remove(this.activate);
    this.locString = locString;
    this.connector = StringEditorConnector.get(locString);
    this.connector.onDoActivate.add(this.activate);
    this.addCreatorEvents();
  }
  public checkConstraints(event: any) {
    if (event.keyCode == 13 && !this.locString.allowLineBreaks) {
      event.preventDefault();
    }

    if (event.ctrlKey || event.metaKey) {
      if ([89, 90, 66, 73].indexOf(event.keyCode) !== -1) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    }
  }

  public blurEditor: () => void;

  public onClick(event: any) {
    event.stopPropagation();
  }

  public onFocus(event: any): void {
    const text = this.locString.hasHtml ? event.target.innerHTML : event.target.innerText;
    if (!this.focusedProgram) {
      this.valueBeforeEdit = text;
      this.focusedProgram = false;
    }
    if (this.maxLength > 0) {
      this.characterCounter.updateRemainingCharacterCounter(text, this.maxLength);
    }
    if (this.creator) {
      this.creator.selectFromStringEditor = true;
    }

    if (this.locString.hasHtml && this.editAsText) {
      event.target.innerText = event.target.textContent = this.locString.calculatedText;
    }

    event.target.parentElement.click();
    event.target.spellcheck = true;
    this.focused = true;
    this.justFocused = true;
  }

  private checkMarkdownToTextConversion(element, name): void {
    if (!this.creator) return;
    const options = {
      element: element,
      text: <any>null,
      name: name,
      html: "",
    };
    this.creator.onHtmlToMarkdown.fire(this.creator, options);
    this.editAsText = (options.text === null);
  }

  public onCompositionStart(event: any): void {
    this.compostionInProgress = true;
  }
  public onBeforeInput(event: any): void {
    if (!this.compostionInProgress && this.maxLength > 0) {
      const currentValue = event.target.innerText;
      const insertedData = event.data || "";
      const selectionLength = window.getSelection().toString().length;
      const newValueLength = currentValue.length + insertedData.length - selectionLength;
      if (newValueLength > this.maxLength) {
        event.preventDefault();
      }
    }
  }
  public onInput(event: any): void {
    if (this.maxLength > 0) {
      var text: string = this.getClearedText(event.target);
      this.characterCounter.updateRemainingCharacterCounter(text, this.maxLength);
    }
    if (this.editAsText && !this.compostionInProgress) {
      const options = { value: event.target?.innerText, cancel: null };
      if (this.connector)this.connector.onTextChanging.fire(this, options);
      if (options.cancel) return;
      if (this.maxLength >= 0 && event.target.innerText.length > this.maxLength) {
        event.target.innerText = event.target.innerText.substring(0, this.maxLength);
      }
    }
  }
  public onCompositionEnd(event: any): void {
    this.compostionInProgress = false;
    this.onInput(event);
  }

  public onBlur(event: any): void {
    if (this.blurredByEscape) {
      this.blurredByEscape = false;
      if (this.locString.hasHtml) {
        event.target.innerHTML = this.valueBeforeEdit;
      } else {
        event.target.innerText = this.valueBeforeEdit;
      }
      this.errorText = null;
      this.focused = false;
      window?.getSelection().removeAllRanges();
      return;
    }

    let clearedText = this.getClearedText(event.target);
    this.errorText = this.getErrorTextOnChanged(clearedText);

    if (this.locString.text != clearedText &&
      !(!this.locString.text && clearedText == this.locString.calculatedText)) {
      if (!this.errorText) {
        this.setValueIntoLocStr(clearedText, event?.target);
      } else {
        this.creator?.notify(this.errorText, "error");
        this.focusedProgram = true;
        event.target.innerText = clearedText;
        event.target.focus();
        return;
      }
    } else {
      if (this.locString.hasHtml) {
        event.target.innerHTML = this.locString.renderedHtml;
      } else {
        event.target.innerText = this.locString.renderedHtml;
      }
      this.locString.strChanged();
    }
    this.focused = false;
    window?.getSelection().removeAllRanges();
  }

  private getClearedText(target: HTMLElement): string {
    let html = target.innerHTML;
    let text = target.innerText;
    let mdText = null;
    if (this.creator && this.creator.trimValues && this.isInplaceForEditValues) {
      html = html.trim();
      text = text.trim();
    }
    if (!this.editAsText && this.creator) {
      const options = {
        element: <Base><any>this.locString.owner,
        text: <any>null,
        name: this.locString.name,
        html: html
      };
      this.creator.onHtmlToMarkdown.fire(this.creator, options);
      mdText = options.text;
    }
    let clearedText;
    if (mdText) {
      clearedText = mdText;
    } else {
      clearedText = this.locString.hasHtml && !this.editAsText ? html : text;
      const txt = clearNewLines(clearedText);
      if (!this.locString.allowLineBreaks || !txt) {
        clearedText = txt;
      }
    }
    const owner = this.locString.owner as any;

    const changingOptions = {
      obj: owner,
      propertyName: this.locString.name,
      value: this.locString.text,
      newValue: clearedText,
      doValidation: false
    };
    if (this.creator)this.creator.onValueChangingCallback(changingOptions);
    return changingOptions.newValue;
  }
  private getErrorTextOnChanged(clearedText: string): string {
    if (!this.creator) return "";
    const owner = this.locString.owner as any;
    let res = this.creator.onGetErrorTextOnValidationCallback(this.locString.name, owner, clearedText);
    if (!!res || !!clearedText) return res;
    const propJSON = owner.getPropertyByName && owner.getPropertyByName(this.locString.name);
    if (propJSON && propJSON.isRequired) return editorLocalization.getString("pe.propertyIsEmpty");
    return "";
  }
  private get isInplaceForEditValues(): boolean {
    return !!this.creator && this.creator.inplaceEditChoiceValues &&
      this.locString.owner instanceof ItemValue &&
      this.creator.inplaceEditChoiceValues &&
      ["noneText", "otherText", "selectAllText"].indexOf(this.locString.name) === -1;
  }
  private setValueIntoLocStr(clearedText: any, target: HTMLElement): void {
    if (this.isInplaceForEditValues) {
      const itemValue = <ItemValue>this.locString.owner;
      if (itemValue.value !== clearedText) {
        if (!!itemValue.locOwner && !!itemValue.ownerPropertyName) {
          const choices = itemValue.locOwner[itemValue.ownerPropertyName];
          if (Array.isArray(choices) && !!ItemValue.getItemByValue(choices, clearedText)) {
            clearedText = getNextItemValue(clearedText, choices);
            if (!!target) {
              target.innerText = clearedText;
            }
          }
        }
        itemValue.value = clearedText;
      }
    } else {
      const oldStoreDefaultText = this.locString.storeDefaultText;
      this.locString.storeDefaultText = false;
      this.locString.text = clearedText;
      this.locString.storeDefaultText = oldStoreDefaultText;
    }
  }
  public done(event: Event): void {
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  public onPaste(event: ClipboardEvent): void {
    if (this.editAsText) {
      event.preventDefault();
      // get text representation of clipboard
      let text = event.clipboardData.getData("text/plain");
      if (!this.locString.allowLineBreaks && !this.connector?.allowLineBreaksOnEdit) text = clearNewLines(text);
      // insert text manually
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      selection.deleteFromDocument();
      selection.getRangeAt(0).insertNode(document.createTextNode(text));
      selection.collapseToEnd();
      this.getEditorElement().dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
  public onKeyDown(event: KeyboardEvent): boolean {
    if (event.keyCode === 13 && !event.shiftKey) {
      this.blurEditor();
      if (!event.ctrlKey && !event.metaKey) {
        this.connector.onEditComplete.fire(this, {});
      }
      this.done(event);
    }
    if (event.keyCode === 27) {
      this.blurredByEscape = true;
      this.blurEditor();
      this.done(event);
    }
    if (event.keyCode === 8 && !clearNewLines((event.target as any).innerText)) {
      this.done(event);
      this.connector.onBackspaceEmptyString.fire(this, {});
    }
    this.checkConstraints(event);
    return true;
  }
  public onKeyUp(event: KeyboardEvent): boolean {
    if (event.keyCode === 9 && event.target === document.activeElement) {
      select(event.target);
    }
    return true;
  }
  private justFocused = false;
  public onMouseUp(event: MouseEvent): boolean {
    if (this.justFocused) {
      this.justFocused = false;
      if (!window) return false;
      if (window.getSelection().focusNode && (window.getSelection().focusNode.parentElement !== event.target) || window.getSelection().toString().length == 0) {
        select(event.target);
      }
      return false;
    }
    return true;
  }
  public findProperty() {
    if (!(<any>this.locString.owner).getType) return undefined;
    const ownerType: string = (<any>this.locString.owner).getType();
    if (!this.locString.name) return undefined;
    const property: JsonObjectProperty = Serializer.findProperty(ownerType, this.locString.name);
    return property;
  }
  public get maxLength(): number {
    const property: JsonObjectProperty = this.findProperty();
    if (!property || property.maxLength <= 0) return -1;
    return property.maxLength;
  }
  @property() placeholderValue: string;
  public get placeholder(): string {
    if (this.placeholderValue !== undefined) return this.placeholderValue;
    const propPlaceholder = this.findProperty()?.placeholder;
    if (!!propPlaceholder) {
      (<any>this.locString).placeholder = propPlaceholder;
    }
    if (!(<any>this.locString).placeholder) {
      this.placeholderValue = "";
      return "";
    }
    var re = /\{([^}]+)\}/g;
    this.placeholderValue = <any>new ComputedUpdater<string>(() => {
      let locPlaceholder: any = (<any>this.locString).placeholder;
      if (typeof locPlaceholder === "function") {
        locPlaceholder = locPlaceholder();
      }
      let result = editorLocalization.getString(locPlaceholder);
      let match = re.exec(result);
      while(match != null) {
        result = result.replace(re, propertyName => {
          const propertyValue = this.locString.owner && this.locString.owner[match[1]];
          return "" + propertyValue;
        });
        match = re.exec(result);
      }
      return result;
    });
    return this.placeholderValue;
  }
  public get contentEditable(): boolean {
    if (!this.creator) return true;
    return this.creator.isCanModifyProperty(<any>this.locString.owner, this.locString.name);
  }
  public get tabIndex(): number {
    return this.contentEditable ? 0 : null;
  }
  public get showCharacterCounter(): boolean {
    return this.maxLength !== -1;
  }
  public get getCharacterCounterClass(): string {
    return "svc-remaining-character-counter";
  }

  public className(text: any): string {
    return new CssClassBuilder()
      .append("svc-string-editor")
      .append("svc-string-editor--hidden", text == "" && this.placeholder == "")
      .append("svc-string-editor--readonly", !this.contentEditable)
      .append("svc-string-editor--error", !!this.errorText)
      .append("svc-string-editor--multiline", !!this.locString.allowLineBreaks)
      .toString();
  }
}

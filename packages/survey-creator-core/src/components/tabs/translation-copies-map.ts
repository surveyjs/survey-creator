import { ILocalizableString, LocalizableString } from "survey-core";
import { TranslationGroup, TranslationItem } from "./translation-base";

// Pairs the localizable strings of a survey with their counterparts in copies of that survey
// (the side-by-side panes render two copies built from the survey JSON). A copy carries no link
// back to the original, so both sides are enumerated as translation trees and paired by the
// structural path of every string - the group full name plus the item name. The path is only the
// join key: what the map keeps is keyed by object identity, so no path is computed afterwards.
//
// The first copy is the editable one: its strings are the ones a UI forwards back to the survey,
// so they are the only ones mapped in the copy -> item direction.
export class TranslationCopiesMap {
  private byEditableCopy = new Map<ILocalizableString, TranslationItem>();
  private byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();

  public build(realRoot: TranslationGroup, editableCopyRoot: TranslationGroup, ...copyRoots: Array<TranslationGroup>): void {
    this.clear();
    if (!realRoot) return;
    const realItems = TranslationCopiesMap.collectItems(realRoot);
    const copyItems = [editableCopyRoot].concat(copyRoots)
      .filter(root => !!root)
      .map(root => TranslationCopiesMap.collectItems(root));
    realItems.forEach((item: TranslationItem, key: string) => {
      const copies = new Array<ILocalizableString>();
      copyItems.forEach((items: Map<string, TranslationItem>, index: number) => {
        const copyItem = items.get(key);
        if (!copyItem) return;
        if (index === 0 && editableCopyRoot) {
          this.byEditableCopy.set(copyItem.locString, item);
        }
        copies.push(copyItem.locString);
      });
      if (copies.length > 0) {
        this.byRealLocStr.set(item.locString, copies);
      }
    });
  }
  public clear(): void {
    this.byEditableCopy = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
  }
  // The translation item of the survey behind a string of the editable copy.
  public getItemByEditableCopy(copyLocStr: ILocalizableString): TranslationItem {
    return !!copyLocStr ? this.byEditableCopy.get(copyLocStr) : undefined;
  }
  public getCopies(realLocStr: ILocalizableString): Array<ILocalizableString> {
    return !!realLocStr ? this.byRealLocStr.get(realLocStr) : undefined;
  }
  public getEditableCopy(realLocStr: ILocalizableString): ILocalizableString {
    const copies = this.getCopies(realLocStr);
    return !!copies ? copies.filter(copy => this.byEditableCopy.has(copy))[0] : undefined;
  }
  // A string the map does not know is a sign that the trees drifted apart (an element was added
  // or removed) - the caller rebuilds the copies then.
  public hasReal(realLocStr: ILocalizableString): boolean {
    return !!this.getCopies(realLocStr);
  }
  // Pushes the survey string's whole JSON (every locale) into its copies. Returns false when the
  // string is not mapped, so a caller can use it as the drift check as well.
  public mirrorIntoCopies(realLocStr: ILocalizableString): boolean {
    const copies = this.getCopies(realLocStr);
    if (!copies) return false;
    const json = (<LocalizableString>realLocStr).getJson();
    copies.forEach(copy => {
      (<LocalizableString>copy).setJson(json);
      (<LocalizableString>copy).strChanged();
    });
    return true;
  }
  private static collectItems(group: TranslationGroup, items?: Map<string, TranslationItem>): Map<string, TranslationItem> {
    const res = items || new Map<string, TranslationItem>();
    group.locItems.forEach(item => res.set(group.fullName + "." + item.name, item));
    group.groups.forEach(child => TranslationCopiesMap.collectItems(child, res));
    return res;
  }
}

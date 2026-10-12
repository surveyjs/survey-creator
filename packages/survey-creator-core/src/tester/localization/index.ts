import { enTesterStrings } from "./english";

// The widget's own localization, shaped like editorLocalization and sharing not one line with it.
//
// The shape is deliberate: dotted paths, a current locale, an english fallback and a registry of
// locales, so that the day a translated bundle arrives it is mechanical - a file per locale calling
// registerTesterLocale, and nothing in the widget's source changes. Self-contained is equally
// deliberate: overview section 3.1 forbids src/tester from importing anything of src/ outside it, and
// editorLocalization is the creator's table for the creator's strings.
//
// What is different from editorLocalization, and it is the whole difference: a leaf may be a function.
// Almost every string this widget says has a number or a name in it, and a table of fragments a caller
// glues together is a table no translator can use. So the sentence lives in the table whole, and the
// call site hands it its values.

export type TesterStringValue = string | ((...args: Array<any>) => string);
export interface ITesterStrings { [key: string]: TesterStringValue | ITesterStrings }

export class TesterLocalization {
  // "" means "whatever the host asked for has not been set", which is english.
  public currentLocale = "";
  public defaultLocale = "en";
  public locales: { [locale: string]: ITesterStrings } = { en: enTesterStrings as ITesterStrings };

  public getLocale(): string {
    return !!this.currentLocale ? this.currentLocale : this.defaultLocale;
  }

  public getStrings(locale?: string): ITesterStrings {
    const wanted = locale === undefined ? this.getLocale() : locale;
    return this.locales[wanted] || this.locales[this.defaultLocale];
  }

  // A path that resolves to nothing comes back as itself. That is on purpose: a missing string shows up
  // in the UI as the path that is missing rather than as an empty box, and localization.test.ts uses
  // the same walk to prove there are none.
  public getString(path: string, ...args: Array<any>): string {
    const found = this.find(this.getStrings(), path);
    const resolved = found !== undefined ? found : this.find(this.getStrings(this.defaultLocale), path);
    if (typeof resolved === "function") return (resolved as (...rest: Array<any>) => string)(...args);
    return typeof resolved === "string" ? resolved : path;
  }

  public hasString(path: string): boolean {
    const found = this.find(this.getStrings(this.defaultLocale), path);
    return typeof found === "string" || typeof found === "function";
  }

  private find(table: ITesterStrings, path: string): TesterStringValue | ITesterStrings | undefined {
    let node: any = table;
    const segments = path.split(".");
    for (let i = 0; i < segments.length; i++) {
      if (!node || typeof node !== "object") return undefined;
      node = node[segments[i]];
    }
    return node;
  }
}

export const testerLocalization = new TesterLocalization();

export function registerTesterLocale(locale: string, strings: ITesterStrings): void {
  testerLocalization.locales[locale] = strings;
}

// The one accessor the widget calls, everywhere, and it is short because it is called a couple of
// hundred times. The path is written as a literal at every call site so that localization.test.ts can
// grep for it; the handful of places that key a path by a closed enum (a run mode, a status) are
// covered by that test enumerating the enum instead.
export function testerText(path: string, ...args: Array<any>): string {
  return testerLocalization.getString(path, ...args);
}

export { enTesterStrings };

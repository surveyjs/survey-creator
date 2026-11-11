import { editorLocalization } from "../src/editorLocalization";

// Puts `strings` into editorLocalization.locales[name] for one test. The returned function puts back what was there
// before: the real locale (when the file imports it), another test's strings, or no key at all.
export function setEditorLocaleStrings(name: string, strings: any): () => void {
  const locales: { [index: string]: any } = editorLocalization.locales;
  const hadKey = Object.prototype.hasOwnProperty.call(locales, name);
  const saved = locales[name];
  locales[name] = strings;
  return () => {
    if (hadKey) {
      locales[name] = saved;
    } else {
      delete locales[name];
    }
  };
}

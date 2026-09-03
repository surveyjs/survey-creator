// The half of the layering rule an import restriction cannot express, and the half a person is most
// likely to break by accident. Ported from the prototype's scripts/check-layers.mjs; it is a test
// helper here rather than a build script because this package already runs its fences from vitest -
// see fences.test.ts, which is the same idea pointed at the other direction of overview section 3.
//
// .eslintrc.js stops src/tester/model importing react, vue, @angular/* or the creator. This stops it
// *naming* one. "svt-test-row", "svt-step-row", "svt-check-menu" and "svt-check-row" are the whole of
// the widget's per-framework surface: they are strings the model hands out, and what draws them is
// each renderer's business. A model that mentioned a component name outside this list, or a framework
// by name, would have started deciding which of the three frameworks is asking - which is the one
// thing the model layer exists not to do.
//
// The list grows only where a survey-core model is given markup of ours to draw: three lists with a
// row component each - the tests, the steps of one, and the checks an adorner offers - and the popup
// that last list is opened in, whose content is the menu around it.
import { readdirSync, readFileSync, statSync } from "fs";
import { join, resolve } from "path";

const packageRoot = resolve(__dirname, "..");

// The strings of overview section 3.3, and the only component names layer 1 may hold.
//
// It lists what this layer actually draws today and not what it will draw eventually. Prompt 05 added
// the last two, in the commit that added the model that hands them out: "svt-check-menu" is what the
// adorner's popup renders as its content, and "svt-check-row" is one row of the list inside it.
export const ALLOWED_COMPONENTS = [
  "svt-test-row", "svt-step-row", "svt-settings", "svt-check-menu", "svt-check-row",
];

// A component name is a string the model puts in a component slot - what an Action or a ListModel
// hands to whichever element factory is asking. Those slots are the whole surface, so they are what is
// matched: a CSS class or a getType() of the same shape is not one, and never reaches a factory.
const COMPONENT_SLOT = /\b(?:component|itemComponent|componentName|contentComponentName)\s*[:=]\s*"([^"]*)"/g;
// PopupModel takes its content component as the first positional argument rather than as a named slot,
// so the pattern above cannot see it. The settings popup of prompt 03 is the first of those, and a
// second one written the same way has to be caught the same way.
const POSITIONAL_COMPONENT = /new\s+PopupModel(?:<[^>]*>)?\s*\(\s*"([^"]*)"/g;
// The prototype spelled the Angular decorator "@Component" inside this alternation, where the leading
// \b made it unmatchable; it is a separate pattern here so the check it intended actually runs.
const FRAMEWORK_WORDS =
  /\b(useState|useEffect|useMemo|ReactElementFactory|ComponentFactory|AngularComponentFactory|defineComponent)\b/;
const FRAMEWORK_DECORATOR = /@(Component|Injectable|NgModule|Directive)\b/;

function walk(dir: string): Array<string> {
  const found: Array<string> = [];
  readdirSync(dir).forEach(entry => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...walk(path));
    else if (path.endsWith(".ts") && !path.endsWith(".test.ts")) found.push(path);
  });
  return found;
}

export function findLayerViolations(dir = "src/tester/model"): Array<string> {
  const problems: Array<string> = [];
  walk(resolve(packageRoot, dir)).forEach(path => {
    const text = readFileSync(path, "utf8");
    // Comments are prose about the design and name plenty of things the code may not: the check is
    // about what the code says, so they come out first.
    //
    // The carriage returns go first, and they have to: these files are checked out with CRLF, and a
    // "//.*$" applied line by line then never matches - "$" sits after the "\r" that "." will not
    // cross - so every comment would be read as code.
    const code = text.replace(/\r/g, "").replace(/\/\*[\s\S]*?\*\//g, "").split("\n")
      .map(line => line.replace(/(^|[^:])\/\/.*$/, "$1")).join("\n");
    const relative = path.substring(packageRoot.length + 1).replace(/\\/g, "/");
    [COMPONENT_SLOT, POSITIONAL_COMPONENT].forEach(pattern => {
      pattern.lastIndex = 0;
      for (const match of code.matchAll(pattern)) {
        const name = match[1];
        if (ALLOWED_COMPONENTS.indexOf(name) < 0) {
          problems.push(relative + ": names the component \"" + name + "\". Layer 1 may name only " +
            ALLOWED_COMPONENTS.map(one => "\"" + one + "\"").join(" and ") + ".");
        }
      }
    });
    const framework = FRAMEWORK_WORDS.exec(code) || FRAMEWORK_DECORATOR.exec(code);
    if (!!framework) {
      problems.push(relative + ": mentions " + framework[0] + ". Layer 1 is framework-free.");
    }
  });
  return problems;
}

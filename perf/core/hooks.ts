import * as fs from "node:fs";
import * as path from "node:path";
import * as nodeModule from "node:module";
import { pathToFileURL, fileURLToPath } from "node:url";

// The resolve hook of the core suite (C06). The creator-core ESM build imports the bare "survey-core"; without a hook
// Node would resolve it through the creator package's node_modules, which with another PERF_CORE_DIR is a second
// survey-core instance. The hook maps "survey-core" to <PERF_CORE_DIR>/fesm/survey-core.mjs and "survey-core/<sub>"
// through that build's package.json "exports" ("import" condition). Any other bare specifier imported from a target
// build is an error that names it: the builds must not reach the runner's node_modules.
export interface HookTargets {
  coreDir: string;
  creatorCoreDir: string;
}

export interface InstalledHooks {
  // The URL every import of "survey-core" resolves to.
  coreUrl: string;
  resolveCore(specifier: string): string;
}

const isBare = (specifier: string): boolean => !/^(\.{0,2}\/|[a-zA-Z]:[\\/]|\\\\|file:|data:|node:)/.test(specifier) && !nodeModule.isBuiltin(specifier);

function normalize(dir: string): string {
  const res = path.resolve(dir) + path.sep;
  return process.platform === "win32" ? res.toLowerCase() : res;
}

// The "import" target of a package.json "exports" entry: a string, or the "import" / "default" condition.
function exportTarget(entry: any): string | undefined {
  if (typeof entry === "string") return entry;
  if (entry && typeof entry === "object") return exportTarget(entry.import) || exportTarget(entry.default);
  return undefined;
}

export function resolveExport(exportsField: any, subpath: string): string | undefined {
  if (!exportsField || typeof exportsField !== "object") return undefined;
  if (subpath in exportsField) return exportTarget(exportsField[subpath]);
  // The longest matching "<prefix>*<suffix>" pattern, as Node picks it.
  let best: { key: string, star: string } | undefined;
  for (const key of Object.keys(exportsField)) {
    const star = key.indexOf("*");
    if (star < 0) continue;
    const prefix = key.substring(0, star);
    const suffix = key.substring(star + 1);
    if (subpath.indexOf(prefix) !== 0 || subpath.length < key.length - 1 || !subpath.endsWith(suffix)) continue;
    if (!best || prefix.length > best.key.indexOf("*")) best = { key: key, star: subpath.substring(prefix.length, subpath.length - suffix.length) };
  }
  if (!best) return undefined;
  const target = exportTarget(exportsField[best.key]);
  return target ? target.split("*").join(best.star) : undefined;
}

export function installHooks(targets: HookTargets): InstalledHooks {
  if (typeof (nodeModule as any).registerHooks !== "function") throw new Error("module.registerHooks is missing: the core suite needs Node >= 22.18");
  const coreDir = path.resolve(targets.coreDir);
  const pkgFile = path.join(coreDir, "package.json");
  if (!fs.existsSync(pkgFile)) throw new Error("No package.json in PERF_CORE_DIR " + coreDir);
  const exportsField = JSON.parse(fs.readFileSync(pkgFile, "utf8")).exports;
  const mainFile = path.join(coreDir, "fesm", "survey-core.mjs");
  if (!fs.existsSync(mainFile)) throw new Error("Missing build file " + mainFile);
  const coreUrl = pathToFileURL(mainFile).href;
  // Node realpaths the modules it loads, so a parentURL is under the realpath of a folder given through a junction or
  // symlink: both spellings count as the target.
  const real = (dir: string): string => {
    try {
      return fs.realpathSync.native(dir);
    } catch(e) {
      return dir;
    }
  };
  const targetDirs = [coreDir, targets.creatorCoreDir].flatMap((dir: string) => [normalize(dir), normalize(real(dir))]);
  const resolveCore = (specifier: string): string => {
    if (specifier === "survey-core") return coreUrl;
    const target = resolveExport(exportsField, "." + specifier.substring("survey-core".length));
    if (!target) throw new Error("The survey-core build at " + coreDir + " does not export " + specifier);
    const file = path.join(coreDir, target);
    if (!fs.existsSync(file)) throw new Error(specifier + " resolves to " + file + ", which does not exist");
    return pathToFileURL(file).href;
  };
  const fromTarget = (parentURL: string | undefined): boolean => {
    if (!parentURL || parentURL.indexOf("file:") !== 0) return false;
    const file = normalize(fileURLToPath(parentURL));
    return targetDirs.some((dir: string) => file.indexOf(dir) === 0);
  };
  (nodeModule as any).registerHooks({
    resolve: (specifier: string, context: any, nextResolve: any): any => {
      if (specifier === "survey-core" || specifier.indexOf("survey-core/") === 0) {
        return { url: resolveCore(specifier), shortCircuit: true };
      }
      if (isBare(specifier) && fromTarget(context.parentURL)) {
        throw new Error("A target build imports the bare specifier \"" + specifier + "\" (from " + context.parentURL + "); the core suite resolves only survey-core");
      }
      return nextResolve(specifier, context);
    }
  });
  return { coreUrl: coreUrl, resolveCore: resolveCore };
}

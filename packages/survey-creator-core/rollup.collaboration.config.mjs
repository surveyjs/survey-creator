import fg from "fast-glob";
import fs from "fs";
import svgLoader from "svg-inline-loader";
import { basename, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

// The feature's icons live in its own folder instead of the creator's shared
// images-v1/images-v2 sets, and are inlined into a virtual module the same way
// rollup.config.mjs builds "iconsV1"/"iconsV2" for the creator. Consumed by
// src/plugins/collaboration/svgbundle.ts.
const iconsPattern = fg.convertPathToPattern(resolve(__dirname, "./src/plugins/collaboration/images")) + "/*.svg";
const icons = {};
for (const iconPath of await fg.glob(iconsPattern)) {
  icons[basename(iconPath).replace(/\.svg$/, "").toLocaleLowerCase()] = svgLoader.getExtractedSVG(fs.readFileSync(iconPath).toString());
}
const virtualModules = { "collaborationIcons": `export default ${JSON.stringify(icons)}` };

// Consumers compiled with "moduleResolution": "node" (survey-creator-react,
// survey-creator-js) never read the package "exports" map: they resolve
// "survey-creator-core/collaboration" as a directory lookup, which requires an
// index.d.ts at the folder root - the same contract themes/ and ui-presets/
// satisfy. The declarations below are generated from src/entries/collaboration.ts
// and keep the source layout (entries/, plugins/), so the root stub is written
// by hand here.
const typingsPath = resolve(buildPath, "collaboration");
fs.mkdirSync(typingsPath, { recursive: true });
fs.writeFileSync(resolve(typingsPath, "index.d.ts"), "export * from \"./entries/collaboration\";\n", "utf8");

// Collaboration is bundled apart from the main entry so a creator that does not
// use it ships neither its JS nor its CSS. `survey-creator-core` is external:
// the plugin must share the creator's class identities (the journal's stack
// guard does `instanceof UndoRedoArrayAction`), so it must never be inlined.
export default () => {
  return [
    createEsmConfig({
      input: { "collaboration": resolve(__dirname, "./src/entries/collaboration.ts") },
      dir: resolve(buildPath, "fesm"),
      external: ["survey-core", "survey-creator-core"],
      tsconfig: resolve(__dirname, "tsconfig.collaboration.json"),
      virtualModules: virtualModules,
      version: pkg.version
    }),
    createUmdConfig({
      input: { "collaboration": resolve(__dirname, "./src/entries/collaboration.ts") },
      tsconfig: resolve(__dirname, "tsconfig.collaboration.json"),
      external: ["survey-core", "survey-creator-core"],
      dir: resolve(buildPath),
      declarationDir: resolve(buildPath, "collaboration"),
      globals: { "survey-core": "Survey", "survey-creator-core": "SurveyCreatorCore" },
      globalName: "SurveyCreatorCollaboration",
      virtualModules: virtualModules,
      emitCss: true,
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    })
  ];
};

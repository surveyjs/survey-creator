import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import bannerPlugin from "rollup-plugin-license";
import commonjs from "@rollup/plugin-commonjs";
import pluginVirtual from "@rollup/plugin-virtual";
import pluginAlias from "@rollup/plugin-alias";

import rollupPostcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import postcssBanner from "postcss-banner";
import postcssDiscardComments from "postcss-discard-comments";

import { resolve, parse, format, basename } from "node:path";
import rollupEsbuild from "rollup-plugin-esbuild";

import postcss from "postcss";
import cssnano from "cssnano";
import { minify } from "terser";

// Raster images are referenced as files instead of being inlined as data: URIs: a
// `data:` background is refused under `img-src 'self'`. The creator itself ships no
// fonts - the Open Sans subsets and their @font-face rules come from survey-core, whose
// stylesheet always accompanies the creator's own - but the woff2 rule stays as a guard:
// an inlined font is refused under `font-src 'self'` just the same.
// The url is rewritten by hand rather than with postcss-url's "copy" mode, which
// silently skips assets whose url escapes the stylesheet folder with "../". The files
// themselves are copied by the package's rollup config (see copyStyleAssets).
// Filters are regexps, not globs, for the same "../" reason.
const rewriteAssetUrl = (folder) => (asset) => folder + "/" + basename(asset.pathname || asset.url);

const postcssUrlRules = [
  { filter: /\.woff2(\?.*)?$/, url: rewriteAssetUrl("fonts") },
  { filter: /\.png(\?.*)?$/, url: rewriteAssetUrl("images") },
  { url: "inline" },
];

// `notices` is for a bundle that inlines a third-party dependency whose own header comment does not
// survive minification. Terser keeps a comment that opens with "!" or names a licence and drops the
// rest, which is why papaparse's header is still in survey-creator-core.min.js and why jsonc-parser's
// would not be in tester.min.js - it opens with a rule of dashes. A bundle that inlines such a
// dependency passes its notice here and it rides along in the banner, which is emitted as an
// "ignored" comment and is therefore kept by both outputs.
function getOwnBanner(version, notices) {
  const lines = [
    "SurveyJS Creator v" + version,
    "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    "Github: https://github.com/surveyjs/survey-creator",
    "License: https://surveyjs.io/Licenses#SurveyCreator",
  ];
  if (!!notices && notices.length > 0) {
    lines.push("");
    notices.forEach(notice => lines.push(notice));
  }
  return lines.join("\n");
}

async function minifyCSS(code) {
  const result = await postcss([
    cssnano(),
    postcssDiscardComments({ removeAllButFirst: true })
  ]).process(code, { from: undefined });
  return result.css;
}

async function minifyJS(code) {
  const result = await minify(code, {
    compress: true,
  });
  return result.code;
}

function pluginOmit(fn) {
  return {
    generateBundle(_, bundle) {
      for (const file of Object.keys(bundle)) {
        if (fn(file)) {
          delete bundle[file];
        }
      }
    }
  };
}

function pluginMinify() {
  return {
    async generateBundle(_, bundle) {
      for await (const e of Object.keys(bundle)) {

        const item = bundle[e];
        const { dir, name } = parse(e);

        if (e.endsWith(".css")) {
          this.emitFile({
            type: "asset",
            fileName: format({ dir, name, ext: ".min.css" }),
            source: await minifyCSS(item.source)
          });
        }

        if (e.endsWith(".js")) {
          this.emitFile({
            type: "asset",
            fileName: format({ dir, name, ext: ".min.js" }),
            source: await minifyJS(item.code)
          });
        }
      }
    }
  };
}

function pluginIgnoreStyles() {
  return {
    name: "ignore-styles",
    load: (id) => {
      if (id.endsWith(".css") || id.endsWith(".scss")) {
        return "";
      }
    }
  };
}

// rollup-plugin-esbuild searches upward for a tsconfig file name, so callers below pass basename()
// instead of an absolute path. Keep the decorator semantics explicit as well: survey-core's
// @property/@propertyArray use legacy TypeScript decorators, and define semantics on a class field
// would overwrite the prototype accessor they install.
const esbuildTsconfigRaw = {
  compilerOptions: { experimentalDecorators: true, useDefineForClassFields: false },
};

export function createUmdConfig(options) {

  const { input, globalName, external, globals, dir, tsconfig, declarationDir = null, emitMinified, exports, useEsbuild, version, emitCss, onCloseBundle, virtualModules, aliases, resolve, sourceMap = true, noEmitOnError = true, notices } = options;

  if (Object.keys(input).length > 1) throw Error("umd config accepts only one input");

  return {
    context: "this",
    input,
    external,
    plugins: [
      pluginVirtual(virtualModules || {}),
      pluginAlias({ entries: aliases || {} }),
      nodeResolve(resolve ? resolve : { browser: true }),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(version),
        }
      }),
      useEsbuild
        ? rollupEsbuild({ tsconfig: tsconfig ? basename(tsconfig) : undefined, tsconfigRaw: esbuildTsconfigRaw, charset: "utf8", sourceMap: sourceMap })
        : typescript({
          noEmitOnError: noEmitOnError,
          tsconfig: tsconfig,
          filterRoot: false,
          compilerOptions: {
            inlineSources: sourceMap,
            sourceMap: sourceMap,
            declaration: !!declarationDir,
            declarationDir: declarationDir
          }
        }),
      emitCss
        ? rollupPostcss({
          extract: emitCss,
          minimize: false,
          sourceMap: sourceMap,
          // postcss-url resolves "copy" destinations against `to`; without it the
          // assets would be copied next to the source scss, not into the build folder.
          to: typeof emitCss === "string" ? emitCss : undefined,
          use: {
            sass: {
              api: "modern",
              silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
            }
          },
          plugins: [
            postcssUrl(postcssUrlRules),
            postcssBanner({ banner: getOwnBanner(version), important: true }),
          ],
        })
        : pluginIgnoreStyles(),
      bannerPlugin({
        banner: {
          content: getOwnBanner(version, notices),
          commentStyle: "ignored",
        }
      }),
      emitMinified && pluginMinify(),
      onCloseBundle && {
        closeBundle: onCloseBundle,
      },
    ],
    output: [
      {
        dir: dir,
        format: "umd",
        exports: exports || "named",
        name: globalName,
        globals: globals,
        entryFileNames: "[name].js",
        sourcemap: sourceMap,
      }
    ],
  };
}

export function createEsmConfig(options) {

  const { input, external, dir, tsconfig, sharedFileName, useEsbuild, version, emitCss, virtualModules, aliases, resolve, sourceMap = true, noEmitOnError = true, notices } = options;

  return {
    context: "this",
    input,
    plugins: [
      pluginVirtual(virtualModules || {}),
      pluginAlias({ entries: aliases || {} }),
      nodeResolve(resolve ? resolve : { browser: true }),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(version),
        }
      }),
      useEsbuild
        ? rollupEsbuild({ tsconfig: tsconfig ? basename(tsconfig) : undefined, tsconfigRaw: esbuildTsconfigRaw, charset: "utf8", sourceMap: sourceMap })
        : typescript({
          noEmitOnError: noEmitOnError,
          tsconfig: tsconfig,
          filterRoot: false,
          compilerOptions: {
            inlineSources: sourceMap,
            sourceMap: sourceMap,
            declaration: false,
            declarationDir: null,
            target: "ES2019"
          }
        }),
      emitCss
        ? rollupPostcss({
          extract: emitCss,
          minimize: false,
          sourceMap: sourceMap,
          // postcss-url resolves "copy" destinations against `to`; without it the
          // assets would be copied next to the source scss, not into the build folder.
          to: typeof emitCss === "string" ? emitCss : undefined,
          use: {
            sass: {
              api: "modern",
              silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
            }
          },
          plugins: [
            postcssUrl(postcssUrlRules),
            postcssBanner({ banner: getOwnBanner(version), important: true }),
          ],
        })
        : pluginIgnoreStyles(),
      bannerPlugin({
        banner: {
          content: getOwnBanner(version, notices),
          commentStyle: "ignored",
        }
      })
    ],
    external,
    output: [
      {
        dir,
        entryFileNames: "[name].mjs",
        format: "esm",
        exports: "named",
        sourcemap: sourceMap,
        chunkFileNames: (chunkInfo) => {
          if (!chunkInfo.isEntry) {
            return sharedFileName;
          }
        },
      }
    ],
  };
}

export function createCssConfig(options) {

  const { input, dir, emitMinified, version, onCloseBundle, watchFiles } = options;

  if (Object.keys(input).length > 1) throw Error("css config accepts only one input");

  const [name, value] = Object.entries(input)[0];

  return {
    input: value,
    output: [{ file: resolve(dir, `${name}.omitted`) }],
    plugins: [
      watchFiles && {
        name: "watch-extra-files",
        buildStart() {
          for (const file of watchFiles) {
            this.addWatchFile(file);
          }
        }
      },
      rollupPostcss({
        extract: true,
        minimize: false,
        sourceMap: true,
        // postcss-url resolves "copy" destinations against `to`; without it the assets
        // would be copied next to the source scss instead of into the build folder.
        to: resolve(dir, `${name}.css`),
        use: {
          sass: {
            api: "modern",
            silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
          }
        },
        plugins: [
          postcssUrl(postcssUrlRules),
          postcssBanner({ banner: getOwnBanner(version), important: true }),
        ],
      }),
      pluginOmit(e => e.endsWith(".omitted")),
      emitMinified && pluginMinify(),
      onCloseBundle && {
        closeBundle: onCloseBundle,
      }
    ]
  };
}

import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import bannerPlugin from "rollup-plugin-license";
import commonjs from "@rollup/plugin-commonjs";
import pluginVirtual from "@rollup/plugin-virtual";

import rollupPostcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import postcssBanner from "postcss-banner";
import postcssDiscardComments from "postcss-discard-comments";

import { resolve, parse, format } from "node:path";
import rollupEsbuild from "rollup-plugin-esbuild";

import postcss from "postcss";
import cssnano from "cssnano";
import { minify } from "terser";

function getOwnBanner(version) {
  return [
    "SurveyJS Creator v" + version,
    "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    "Github: https://github.com/surveyjs/survey-creator",
    "License: https://surveyjs.io/Licenses#SurveyCreator",
  ].join("\n");
}

async function minifyCSS(code) {
  const result = await postcss([
    cssnano(),
    postcssDiscardComments({ removeAllButFirst: true })
  ]).process(code, { from: undefined });
  return result.css;
}

async function minifyJS(code) {

  const comments = [];

  const result = await minify(code, {
    compress: false,
    format: {
      comments: (_, { value }) => {
        if (value.includes("@license") || value.includes("License")) {
          comments.push(value);
        }
        return false;
      }
    }
  });

  return { code: result.code, comments: comments };
}

function wrapBanner(e) {
  return `/*!\n${e.split("\n").map(str => " * " + str).join("\n")}\n */`;
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
        const { dir, name, ext } = parse(e);

        if (e.endsWith(".css")) {
          this.emitFile({
            type: "asset",
            fileName: format({ dir, name, ext: ".min.css" }),
            source: await minifyCSS(item.source)
          });
        }

        if (e.endsWith(".js")) {

          const { code, comments } = await minifyJS(item.code);

          this.emitFile({
            type: "asset",
            fileName: format({ dir, name, ext: ".min.js" }),
            source: `/*! For license information please see ${name}.min.js.LICENSE.txt */\n${code}`
          });

          this.emitFile({
            type: "asset",
            fileName: format({ dir, name, ext: ".min.js.LICENSE.txt" }),
            source: comments.map(comment => wrapBanner(comment)).join("\n\n")
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

export function createUmdConfig(options) {

  const { input, globalName, external, globals, dir, tsconfig, declarationDir, emitMinified, exports, useEsbuild, version, emitCss, virtualModules } = options;

  if (Object.keys(input).length > 1) throw Error("umd config accepts only one input");

  return {
    context: "this",
    input,
    external,
    plugins: [
      pluginVirtual(virtualModules || {}),
      nodeResolve({ browser: true }),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(version),
        }
      }),
      useEsbuild
        ? rollupEsbuild({ tsconfig: tsconfig, charset: "utf8" })
        : typescript({
          tsconfig: tsconfig,
          compilerOptions: declarationDir ? {
            inlineSources: true,
            sourceMap: true,
            declaration: true,
            declarationDir: declarationDir
          } : {}
        }),
      emitCss ? rollupPostcss({
        extract: emitCss,
        minimize: false,
        sourceMap: true,
        use: {
          sass: {
            api: "modern",
            silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
          }
        },
        plugins: [
          postcssUrl({ url: "inline" }),
          postcssBanner({ banner: getOwnBanner(version), important: true }),
        ],
      }) : pluginIgnoreStyles(),
      bannerPlugin({
        banner: {
          content: getOwnBanner(version),
          commentStyle: "ignored",
        }
      }),
      emitMinified && pluginMinify(),
    ],
    output: [
      {
        dir: dir,
        format: "umd",
        exports: exports || "named",
        name: globalName,
        globals: globals,
        entryFileNames: "[name].js",
        sourcemap: true
      }
    ],
  };
}

export function createEsmConfig(options) {

  const { input, external, dir, tsconfig, sharedFileName, useEsbuild, version, emitCss, virtualModules } = options;

  return {
    context: "this",
    input,
    plugins: [
      pluginVirtual(virtualModules || {}),
      nodeResolve({ browser: true }),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(version),
        }
      }),
      useEsbuild
        ? rollupEsbuild({ tsconfig: tsconfig, charset: "utf8" })
        : typescript({
          tsconfig: tsconfig,
          compilerOptions: {
            declaration: false,
            declarationDir: null,
            target: "ES6"
          }
        }),
      emitCss ? rollupPostcss({
        extract: emitCss,
        minimize: false,
        sourceMap: true,
        use: {
          sass: {
            api: "modern",
            silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
          }
        },
        plugins: [
          postcssUrl({ url: "inline" }),
          postcssBanner({ banner: getOwnBanner(version), important: true }),
        ],
      }) : pluginIgnoreStyles(),
      bannerPlugin({
        banner: {
          content: getOwnBanner(version),
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
        sourcemap: true,
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

  const { input, dir, emitMinified, version, onCloseBundle } = options;

  if (Object.keys(input).length > 1) throw Error("css config accepts only one input");

  const [name, value] = Object.entries(input)[0];

  return {
    input: value,
    output: [{ file: resolve(dir, `${name}.omitted`) }],
    plugins: [
      rollupPostcss({
        extract: true,
        minimize: false,
        sourceMap: true,
        use: {
          sass: {
            api: "modern",
            silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
          }
        },
        plugins: [
          postcssUrl({ url: "inline" }),
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
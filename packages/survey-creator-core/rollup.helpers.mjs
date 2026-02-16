import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import bannerPlugin from "rollup-plugin-license";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-polyfill-node";
import pluginVirtual from "@rollup/plugin-virtual";
import rollupCopy from "rollup-plugin-copy";

import path, { resolve, basename, format } from "node:path";
import { readFileSync } from "fs";
import rollupEsbuild from "rollup-plugin-esbuild";
import rollupPostcss from "rollup-plugin-postcss";
import postcss from "postcss";
import cssnano from "cssnano";
import { minify } from "terser";

import svgLoader from "svg-inline-loader";
import fg from "fast-glob";
import { plugin } from "postcss";

function getOwnBanner(version) {
  return [
    "SurveyJS Creator v" + version,
    "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    "Github: https://github.com/surveyjs/survey-creator",
    "License: https://surveyjs.io/Licenses#SurveyCreator",
  ].join("\n");
}

export async function minifyCSS(code) {
  return (await postcss([cssnano]).process(code, { from: undefined })).css;
}

function wrapBanner(e) {
  return `/*!\n${e.split("\n").map(str => " * " + str).join("\n")}\n */`;
}

function omit(fn) {
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

function pluginAddBanner(fn, text) {
  return {
    generateBundle(_, bundle) {
      for (const file of Object.keys(bundle)) {
        if (fn(file)) {
          bundle[file].source = text + "\n" + bundle[file].source;
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
        const { dir, name, ext } = path.parse(e);

        if (e.endsWith(".css")) {
          this.emitFile({
            type: "asset",
            fileName: `${dir}${name}.min${ext}`,
            source: await minifyCSS(item.source)
          });
        }

        if (e.endsWith(".js")) {
          this.emitFile({
            type: "asset",
            fileName: `${dir}${name}.min${ext}`,
            source: (await minify(item.code)).code
          });
        }
      }
    }
  };
}

export function createUmdConfig(options) {

  const { input, globalName, external, globals, dir, tsconfig, declarationDir, emitMinified, exports, useEsbuild, version, emitCss, virtualModules, onGenerateBundle } = options;

  if (Object.keys(input).length > 1) throw Error("umd config accepts only one input");

  return {
    context: "this",
    input,
    external,
    plugins: [
      pluginVirtual(virtualModules || {}),
      nodePolyfills(),
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(version),
        }
      }),
      useEsbuild
        ? rollupEsbuild({ tsconfig: tsconfig })
        : typescript({
          tsconfig: tsconfig,
          compilerOptions: declarationDir ? {
            inlineSources: true,
            sourceMap: true,
            declaration: true,
            declarationDir: declarationDir
          } : {}
        }),
      rollupPostcss({
        extract: emitCss || "",
        minimize: false,
        sourceMap: true,
        use: {
          sass: {
            api: "modern",
            silenceDeprecations: ["legacy-js-api"], // https://github.com/egoist/rollup-plugin-postcss/issues/463
          }
        }
      }),
      // pluginAddBanner(e => e.endsWith(".css"), wrapBanner(getOwnBanner(version))),
      emitMinified && pluginMinify(),
      // bannerPlugin({
      //   banner: {
      //     content: getOwnBanner(version),
      //     commentStyle: "ignored",
      //   }
      // }),
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
      },
      // emitMinified && {
      //   ...commonOutput,
      //   entryFileNames: "[name].min.js",
      //   sourcemap: false,
      //   plugins: [
      //     rollupEsbuildMinify(),
      //     bannerPlugin({
      //       banner: {
      //         content: `For license information please see ${Object.keys(input)[0]}.min.js.LICENSE.txt`,
      //         commentStyle: "ignored",
      //       },
      //       thirdParty: {
      //         output: {
      //           file: resolve(dir, `${Object.keys(input)[0]}.min.js.LICENSE.txt`),
      //           template: (dependencies) => {
      //             return wrapBanner(getOwnBanner(version)) + "\n\n" + dependencies.map(e => {
      //               return wrapBanner([
      //                 `${ e.name } v${e.version } | ${ e.homepage }`,
      //                 `(c) ${ e.author.name } | Released under the ${ e.license } license`
      //               ].join("\n"));
      //             }).join("\n\n");
      //           }
      //         }
      //       }
      //     }),
      //   ],
      // }
    ],
  };
}

export function createEsmConfig(options) {

  const { input, external, dir, tsconfig, sharedFileName, version } = options;

  return {
    context: "this",
    input,
    plugins: [
      nodeResolve(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(version),
        }
      }),
      typescript({
        tsconfig: tsconfig,
        compilerOptions: {
          declaration: false,
          declarationDir: null,
          "target": "ES6"
        }
      }),
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
        }
      }),
      omit(e => e.endsWith(".omitted")),
      emitMinified && pluginMinify(),
      pluginAddBanner(e => e.endsWith(".css"), wrapBanner(getOwnBanner(version))),
      onCloseBundle && {
        closeBundle: onCloseBundle,
      }
    ]
  };
}
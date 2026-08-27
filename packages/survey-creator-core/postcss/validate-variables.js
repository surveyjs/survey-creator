"use strict";

const fs = require("fs");
const path = require("path");

// Custom PostCSS plugin: validates var(...) references.
//
// Checks two things:
//   1. Syntax: a var() reference must use a name starting with `--`
//      (e.g. `var(-foo)` is reported as invalid).
//   2. Existence: every referenced custom property must be defined either
//      in the processed CSS itself or in one of the `extraFiles` passed
//      via options. Useful for catching typos like
//      `var(--sjs2-color-bg-prymary)` instead of `--sjs2-color-bg-primary`.
//
// Options:
//   extraFiles: string[] additional CSS files that contribute custom
//                           property definitions (e.g. survey-core.css).
//   allow:      string[] explicit allowlist of custom property names
//                           that may be referenced even if not defined
//                           anywhere (e.g. user-provided theme overrides).

// Captures the variable name AND the next non-space character so we can
// tell whether a fallback value is provided (comma) or not (closing paren).
const VAR_CALL_RE = /var\(\s*(-{1,2}[a-zA-Z0-9_-]+)\s*([,)])/g;
const DEFINE_RE = /(--[a-zA-Z0-9_-]+)\s*:/g;

function collectDefinitionsFromText(text, into) {
  let m;
  DEFINE_RE.lastIndex = 0;
  while((m = DEFINE_RE.exec(text)) !== null) {
    into.add(m[1]);
  }
}

function collectDefinitionsFromRoot(root, into) {
  root.walkDecls(decl => {
    if (decl.prop && decl.prop.startsWith("--")) {
      into.add(decl.prop);
    }
  });
}

module.exports = (opts = {}) => {
  const extraFiles = Array.isArray(opts.extraFiles) ? opts.extraFiles : [];
  const allow = new Set(Array.isArray(opts.allow) ? opts.allow : []);

  // Pre-load definitions from extra files once at plugin construction.
  const extraDefs = new Set();
  for (const file of extraFiles) {
    const absPath = path.isAbsolute(file)
      ? file
      : path.resolve(process.cwd(), file);
    try {
      const text = fs.readFileSync(absPath, "utf8");
      collectDefinitionsFromText(text, extraDefs);
    } catch(err) {
      throw new Error(
        `postcss-validate-var: cannot read extraFiles entry "${file}": ${err.message}`
      );
    }
  }

  return {
    postcssPlugin: "postcss-validate-var",
    Once(root, { result }) {
      const localDefs = new Set();
      collectDefinitionsFromRoot(root, localDefs);

      const isDefined = name =>
        localDefs.has(name) || extraDefs.has(name) || allow.has(name);

      root.walkDecls(decl => {
        const value = decl.value;
        if (!value || value.indexOf("var(") === -1) return;
        let match;
        VAR_CALL_RE.lastIndex = 0;
        while((match = VAR_CALL_RE.exec(value)) !== null) {
          const name = match[1];
          const hasFallback = match[2] === ",";
          if (!name.startsWith("--")) {
            decl.warn(
              result,
              `Invalid CSS variable reference "var(${name})" in "${decl.prop}". ` +
                "Custom property names must start with '--'."
            );
            continue;
          }
          // Skip existence check when a fallback is supplied the author
          // explicitly acknowledged the variable may be undefined.
          if (hasFallback) continue;
          if (!isDefined(name)) {
            decl.warn(
              result,
              `Unknown CSS variable "${name}" referenced in "${decl.prop}" without a fallback. ` +
                "Define it, add the source file to extraFiles, add it to the allow list, or supply a fallback."
            );
          }
        }
      });
    }
  };
};

module.exports.postcss = true;

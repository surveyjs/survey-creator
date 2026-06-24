"use strict";
/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

// Resolve paths relative to the package root (postcss-cli runs with that as cwd).
const packageRoot = path.resolve(__dirname, "..");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("./validate-variables")({
      extraFiles: [
        path.join(packageRoot, "node_modules/survey-core/survey-core.css")
      ],
      // Custom properties that are set at runtime via JS (element.style.setProperty)
      // and therefore never appear as `--name:` declarations in any CSS file.
      allow: [
        "--animation-width",
      ]
    }),
    require("postcss-calc"),
    require("autoprefixer"),
    require("postcss-fail-on-warn")
  ]
};

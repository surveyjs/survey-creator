"use strict";
/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-calc"),
    require("autoprefixer"),
    require("./postcss-validate-var")({
      extraFiles: [
        "node_modules/survey-core/survey-core.css"
      ],
      // Custom properties that are set at runtime via JS (element.style.setProperty)
      // and therefore never appear as `--name:` declarations in any CSS file.
      allow: [
        "--animation-width",
      ]
    }),
    require("postcss-fail-on-warn")
  ]
};

// The fences of the Tests widget (src/tester). See promts/creator-tester-00-overview.md section 3:
// the widget ships as a bundle of its own from this package and depends on no creator code at all, so
// the arrow between src/tester and the rest of src/ has to stay one-way in both directions.
//
// ESLint replaces a rule's options per override rather than merging them, so the two "escapes"
// overrides below repeat the framework/creator bans instead of layering on top of them. These
// constants are why that repetition cannot drift.
const TESTER_RESTRICTED_PATHS = [
  {
    name: "survey-creator-core",
    message: "The Tests widget must not import the creator: it is a bundle of its own, and the future " +
      "plugin tab is a thin adapter over it. See promts/creator-tester-00-overview.md section 3.",
  },
  { name: "react", message: "src/tester is framework-free. The React surface lives in survey-creator-react." },
  { name: "react-dom", message: "src/tester is framework-free. The React surface lives in survey-creator-react." },
  { name: "knockout", message: "src/tester is framework-free." },
  { name: "vue", message: "src/tester is framework-free." },
];

const TESTER_RESTRICTED_PATTERNS = [
  {
    group: ["survey-creator-core/*", "react-*", "react/*", "react-dom/*", "@angular/*", "vue/*", "knockout/*"],
    message: "src/tester is framework-free and creator-free. See promts/creator-tester-00-overview.md section 3.",
  },
  {
    // The named escapes of overview section 3.1, at whatever depth they are written from.
    group: ["**/creator-base", "**/editorLocalization", "**/src/utils/*", "**/svgbundle"],
    message: "src/tester must not reach into src/: copy what it needs, or write the need into " +
      "promts/creator-tester-notes.md.",
  },
];

// The relative half of rule 3.1, and it is depth-aware because it has to be. A file that sits `depth`
// directories below src/tester escapes the widget with `depth + 1` steps of "../" and no fewer:
// from src/tester/core/x.ts, "../recorder/y" is a sibling layer and legal while "../../creator-base"
// is src/; one directory deeper the same two spellings are "../../recorder/y" and
// "../../../creator-base". Blocking one prefix at every depth would forbid the legal half at the
// deeper ones, so each depth gets its own override, and the trailing "**" of its prefix covers every
// escape longer than the shortest one.
const TESTER_MAX_DEPTH = 5;

function escapePrefix(depth) {
  return new Array(depth + 1).fill("..").join("/");
}

function testerImportRule(depth) {
  const prefix = escapePrefix(depth);
  return [
    "error",
    {
      paths: TESTER_RESTRICTED_PATHS,
      patterns: TESTER_RESTRICTED_PATTERNS.concat([{
        group: [prefix + "/*", prefix + "/**"],
        message: "src/tester must not reach into src/: copy what it needs, or write the need into " +
          "promts/creator-tester-notes.md. See promts/creator-tester-00-overview.md section 3.1.",
      }]),
    },
  ];
}

// One override per depth: src/tester/*.ts, src/tester/*/*.ts, and so on.
function testerOverrides() {
  const res = [];
  for (let depth = 0; depth <= TESTER_MAX_DEPTH; depth++) {
    const dirs = new Array(depth).fill("*").join("/");
    res.push({
      "files": ["src/tester/" + (!!dirs ? dirs + "/" : "") + "*.ts"],
      "rules": { "no-restricted-imports": testerImportRule(depth) },
    });
  }
  return res;
}

module.exports = {
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "overrides": [
    {
      "files": [
        "src/**/*.ts"
      ],
      "rules": {
        "surveyjs/no-unguarded-dom-helper": 2,
        "no-restricted-properties": [
          "error",
          {
            "object": "window",
            "property": "document"
          }
        ],
        "no-restricted-globals": [
          "error",
          {
            "name": "document",
            "message": "Do not use document into survey-core. Use methods from DomDocumentHelper"
          },
          {
            "name": "window",
            "message": "Do not use window into survey-core. Use method from DomWindowHelper"
          }
        ]
      }
    },
    {
      // Rule 3.2: the main creator bundle must not grow by a byte because the widget exists. The
      // future plugin tab imports the *built* survey-creator-core/tester, the way presets-plugin.ts
      // imports survey-creator-core. tests-tester/fences.test.ts asserts the same over the whole
      // import graph of src/entries/index.ts, so the guard survives a reorganised lint config.
      //
      // Nothing in src/ outside the widget matches these patterns today: src/components/tabs/
      // test-plugin.ts is the Preview tab (legacy name "test") and imports no tester path at all.
      "files": [
        "src/**/*.ts"
      ],
      "excludedFiles": [
        "src/tester/**/*.ts"
      ],
      "rules": {
        "no-restricted-imports": [
          "error",
          {
            "paths": [
              {
                "name": "jsonc-parser",
                "message": "jsonc-parser is bundled into the Tests widget only. It must never be imported " +
                  "outside src/tester. See promts/creator-tester-00-overview.md section 3."
              }
            ],
            "patterns": [
              {
                // Only relative spellings, because the one thing this must NOT block is the public
                // package entry: the future plugin tab imports the built "survey-creator-core/tester",
                // and a bare specifier can never name a file of this src/ tree. Anything deeper than
                // that entry is still refused below - it would be reaching past the public surface.
                "group": [
                  "jsonc-parser/*",
                  "./tester", "./tester/*", "./tester/**",
                  "../tester", "../tester/*", "../tester/**",
                  "../../tester", "../../tester/*", "../../tester/**",
                  "../../../tester", "../../../tester/*", "../../../tester/**",
                  "../../../../tester", "../../../../tester/*", "../../../../tester/**",
                  "**/src/tester", "**/src/tester/*", "**/src/tester/**",
                  "survey-creator-core/tester/*", "survey-creator-core/tester/**"
                ],
                "message": "The main creator bundle must not import the Tests widget's sources. Import " +
                  "the built \"survey-creator-core/tester\" entry instead, the way presets-plugin.ts " +
                  "imports survey-creator-core. See promts/creator-tester-00-overview.md section 3.2."
              }
            ]
          }
        ]
      }
    }
  ].concat(testerOverrides())
};

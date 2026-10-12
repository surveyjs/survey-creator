// The fences of the Tests widget's React rendering (src/tester), the same two the model layer has one
// package up, adapted to this one. See promts/creator-tester-07-react.md section 1 and
// promts/creator-tester-00-overview.md section 3.
//
// The arrow between src/tester and the rest of src/ is one-way in both directions:
//
//   * src/tester draws the widget and nothing else. It must not import the creator's own components -
//     the widget is a bundle of its own, and the future plugin tab will be a thin adapter over it, so
//     an import of SurveyCreatorComponent here would put the whole designer into a bundle that exists
//     to avoid it.
//   * src/ outside src/tester must not import src/tester. The main survey-creator-react bundle does not
//     grow by a byte because the widget exists; a host that wants the widget imports the published
//     "survey-creator-react/tester" entry.
const TESTER_MESSAGE =
  "src/tester draws the Tests widget over survey-creator-core/tester and imports no creator " +
  "component. See promts/creator-tester-07-react.md section 1.";

const MAIN_MESSAGE =
  "The main survey-creator-react bundle must not import the Tests widget's sources. Import the built " +
  "\"survey-creator-react/tester\" entry instead. See promts/creator-tester-07-react.md section 1.";

// A file `depth` directories below src/tester escapes the widget with `depth + 1` steps of "../" and no
// fewer, so each depth gets its own override - blocking one prefix at every depth would forbid the
// legal sibling imports at the deeper ones. This is the same shape survey-creator-core uses, and it is
// shallower only because this tree is.
const TESTER_MAX_DEPTH = 3;

function escapePrefix(depth) {
  return new Array(depth + 1).fill("..").join("/");
}

function testerOverrides() {
  const res = [];
  for (let depth = 0; depth <= TESTER_MAX_DEPTH; depth++) {
    const dirs = new Array(depth).fill("*").join("/");
    const prefix = escapePrefix(depth);
    res.push({
      "files": ["src/tester/" + (!!dirs ? dirs + "/" : "") + "*.{ts,tsx}"],
      "rules": {
        "no-restricted-imports": [
          "error",
          {
            "patterns": [
              { "group": [prefix + "/*", prefix + "/**"], "message": TESTER_MESSAGE },
              // The widget's model layer is the published entry and nothing deeper: reaching past it
              // would bind this bundle to a file path of another package's src tree.
              {
                "group": ["survey-creator-core/tester/*", "survey-creator-core/tester/**"],
                "message": TESTER_MESSAGE,
              },
            ],
          },
        ],
      },
    });
  }
  return res;
}

module.exports = {
  "extends": [
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  "overrides": [
    {
      "files": ["src/**/*.{ts,tsx}"],
      "excludedFiles": ["src/tester/**/*.{ts,tsx}", "src/entries/tester.ts"],
      "rules": {
        "no-restricted-imports": [
          "error",
          {
            "patterns": [
              {
                "group": [
                  "./tester", "./tester/*", "./tester/**",
                  "../tester", "../tester/*", "../tester/**",
                  "../../tester", "../../tester/*", "../../tester/**",
                  "**/src/tester", "**/src/tester/*", "**/src/tester/**",
                  "survey-creator-react/tester/*", "survey-creator-react/tester/**",
                ],
                "message": MAIN_MESSAGE,
              },
            ],
          },
        ],
      },
    },
  ].concat(testerOverrides()),
};

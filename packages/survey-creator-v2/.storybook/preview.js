import * as ko from "knockout";

import { withTests } from "@storybook/addon-jest";
// import results from "../.jest-test-results.json";

export const parameters = {
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  knockout: {
    instance: ko,
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: "200px",
  },
};

window.ko = ko;

// export const decorators = [withTests({ results })];

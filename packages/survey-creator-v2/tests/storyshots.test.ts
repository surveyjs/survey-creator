import initStoryshots from "@storybook/addon-storyshots";

export * from "../src/entries";

jest.mock("../src/svgbundle.html", () => {}, { virtual: true });

initStoryshots({
  framework: "knockout",
});

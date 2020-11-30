import initStoryshots from "@storybook/addon-storyshots";

jest.mock("../src/svgbundle.html", () => {}, { virtual: true });

initStoryshots({
  framework: "knockout",
});

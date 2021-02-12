import { ButtonViewModel } from "../src/components/button";

beforeEach(() => {});

test("default title", () => {
  const button = new ButtonViewModel();
  expect(button.title()).toEqual("Button");
});

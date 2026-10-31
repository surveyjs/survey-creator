import { Serializer } from "survey-core";

// A file of its own: the check needs a module graph in which matrices.ts has not run yet.
test("itemvalue.icon: registered after the class lists were filled", async () => {
  expect(Serializer.findProperty("ratingitem", "icon")).toBeFalsy();
  await import("../../src/property-grid/matrices");
  expect(Serializer.findProperty("ratingitem", "icon")).toBeTruthy();
});

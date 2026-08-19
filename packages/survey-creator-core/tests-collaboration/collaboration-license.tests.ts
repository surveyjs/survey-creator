import { MockedFunction, expect, test, vi } from "vitest";
import { hasLicense } from "survey-core";
import { CreatorTester } from "../tests/creator-tester";
import { CollaborationPlugin } from "../src/plugins/collaboration";
import { getCollabString } from "../src/plugins/collaboration/collaboration-strings";

// Module-level mock: kept in a dedicated file so it does not leak into
// collaboration.tests.ts.
vi.mock("survey-core", async () => {
  const originalModule = await vi.importActual<typeof import("survey-core")>("survey-core");
  return {
    ...originalModule,
    hasLicense: vi.fn(() => false),
  };
});

test("collaboration license: hasLicense(9) === true means no banner", () => {
  const creator = new CreatorTester();
  const collab = new CollaborationPlugin(creator);
  const hasLicenseMock = hasLicense as MockedFunction<typeof hasLicense>;

  hasLicenseMock.mockReturnValue(true);
  expect(collab.getLicenseText(true, "")).toEqual("");
  expect(collab.getLicenseText(false, "03/05/2023")).toEqual("");
  expect(hasLicenseMock).toHaveBeenCalledWith(9);

  hasLicenseMock.mockClear();
  collab.dispose();
});

test("collaboration license: hasLicense(9) === false yields the single generic banner", () => {
  const creator = new CreatorTester();
  const collab = new CollaborationPlugin(creator);
  const hasLicenseMock = hasLicense as MockedFunction<typeof hasLicense>;
  const expected = getCollabString("collabLicense");

  hasLicenseMock.mockReturnValue(false);
  // Same text regardless of the creator's own license state - product 9 is
  // sold independently.
  expect(collab.getLicenseText(true, "")).toEqual(expected);
  expect(collab.getLicenseText(false, "")).toEqual(expected);
  expect(collab.getLicenseText(false, "03/05/2023")).toEqual(expected);
  expect(hasLicenseMock).toHaveBeenCalledWith(9);

  hasLicenseMock.mockClear();
  collab.dispose();
});

test("collaboration license: addPlugin stores the banner in pluginLicenseTexts", () => {
  const creator = new CreatorTester();
  const collab = new CollaborationPlugin(creator);
  const hasLicenseMock = hasLicense as MockedFunction<typeof hasLicense>;

  hasLicenseMock.mockReturnValue(false);
  creator.addPlugin("collaboration", collab);

  expect(creator.pluginLicenseTexts["collaboration"]).toEqual(getCollabString("collabLicense"));
  expect(creator.haveCommercialLicense).toBeFalsy();

  hasLicenseMock.mockClear();
  collab.dispose();
});

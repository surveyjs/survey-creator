import { vi } from "vitest";
import { getRGBaColorTestBridge } from "./survey-core-getRGBA-test-state";

vi.mock("survey-core", async (importOriginal) => {
  const mod = await importOriginal<typeof import("survey-core")>();
  getRGBaColorTestBridge.real = mod.getRGBaColor.bind(mod);
  return {
    ...mod,
    getRGBaColor: (value: any) => getRGBaColorTestBridge.apply(value)
  };
});

// Compatibility shim: jest-canvas-mock references the global `jest` object
// (specifically `vi.fn`). Expose Vitest's `vi` under the `jest` name so
// the package loads under Vitest. Loaded BEFORE `jest-canvas-mock` in
// vitest.config.ts setupFiles.
import { vi } from "vitest";
(globalThis as any).jest = (globalThis as any).jest ?? vi;

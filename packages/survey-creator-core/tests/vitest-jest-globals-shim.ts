import { vi } from "vitest";

(globalThis as any).jest = (globalThis as any).jest ?? vi;

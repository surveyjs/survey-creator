// The Recorder's own settings. Like HostOptions they exist only in this application: the tester has no
// notion of a keystroke, an adorner or a cursor, and none of this travels with a suite.

export interface RecorderOptions {
  // Consecutive edits of the same question collapse into one step. Without it, every keystroke is a step.
  coalesceSets: boolean;
  coalesceIdleMs: number;
  // "set" steps on different targets become one step with several keys. Equivalent - the targets run in
  // key order - but harder to rewind into, which is why it is off.
  mergeAdjacentSets: boolean;
  // Follows every recorded command with an "expect" of the value it changed. Off, because a case that
  // asserts everything asserts nothing.
  autoCheckAfterCommand: boolean;
}

// Every recorded step is named after what it does: "set-hasInsurance", "expect-q1", "nextPage-survey".
// It is not an option, because a nameless grid of thirty steps is unreadable and the name is metadata the
// tester never reads - it can only help. Renaming a step by hand in the grid overwrites it.
export function autoStepName(command: string, target: string): string {
  return command + "-" + target;
}

export const defaultRecorderOptions: RecorderOptions = {
  coalesceSets: true,
  coalesceIdleMs: 700,
  mergeAdjacentSets: false,
  autoCheckAfterCommand: false,
};

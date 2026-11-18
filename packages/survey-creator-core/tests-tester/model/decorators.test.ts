// The one build fact every model in this folder rests on: survey-core's @property() installs an
// accessor on the prototype, so this application must compile class fields with set semantics
// (tsconfig: useDefineForClassFields false, experimentalDecorators true). If that ever regresses the
// models keep their shape and silently stop notifying, which is the kind of break no other test here
// would report as itself - so it is asserted directly.
import { Base, property, propertyArray } from "survey-core";
import { describe, expect, it } from "vitest";

class Probe extends Base {
  @property({ defaultValue: 0 }) count!: number;
  @propertyArray() names!: Array<string>;
  public getType(): string { return "probe"; }
}

describe("the model layer's reactivity", () => {
  it("notifies on a @property() write", () => {
    const probe = new Probe();
    const seen: Array<string> = [];
    probe.onPropertyChanged.add((_sender, options) => seen.push(options.name));
    expect(probe.count).toBe(0);
    probe.count = 3;
    expect(probe.count).toBe(3);
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    // A write of the same value is not a change, which is what makes the batching of §5 measurable.
    probe.count = 3;
    expect(seen).toEqual(["count"]);
  });

  it("notifies on a @propertyArray() push", () => {
    const probe = new Probe();
    let changes = 0;
    probe.onPropertyChanged.add(() => { changes += 1; });
    probe.names.push("a");
    // slice(), because survey-core stamps its own push/splice hooks onto the array it hands back.
    expect(probe.names.slice()).toEqual(["a"]);
    expect(changes).toBe(1);
  });
});

import * as React from "react";
import { act, StrictMode } from "react";
import { Base } from "survey-core";
import { useOwnedModel } from "../src/tester/useModel";
import { mount, prepareEnvironment, unmount } from "./testerSetup";

beforeAll(() => prepareEnvironment());

function Owner(props: { model?: Base }): React.JSX.Element | null {
  useOwnedModel(props.model);
  return null;
}

async function flushDisposals(): Promise<void> {
  await act(async() => { await new Promise(resolve => setTimeout(resolve, 20)); });
}

it("keeps an owned model through StrictMode and disposes it once on real unmount", async() => {
  const model = new Base();
  const dispose = jest.spyOn(model, "dispose");
  const one = await mount(<StrictMode><Owner model={model} /></StrictMode>);
  try {
    await flushDisposals();
    expect(dispose).not.toHaveBeenCalled();
  } finally {
    await unmount(one);
    await flushDisposals();
  }
  expect(dispose).toHaveBeenCalledTimes(1);
});

it("disposes replaced models, including when the new model is undefined", async() => {
  const first = new Base();
  const second = new Base();
  const disposeFirst = jest.spyOn(first, "dispose");
  const disposeSecond = jest.spyOn(second, "dispose");
  const one = await mount(<Owner model={first} />);
  try {
    await act(async() => { one.root.render(<Owner model={second} />); });
    await flushDisposals();
    expect(disposeFirst).toHaveBeenCalledTimes(1);
    expect(disposeSecond).not.toHaveBeenCalled();
    await act(async() => { one.root.render(<Owner />); });
    await flushDisposals();
    expect(disposeSecond).toHaveBeenCalledTimes(1);
  } finally {
    await unmount(one);
    first.dispose();
    second.dispose();
  }
});

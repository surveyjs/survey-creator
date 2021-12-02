import { ClientFunction } from "testcafe";

export async function changeToolboxLocation(newVal: string) {
  await ClientFunction((newVal) => {
    window["creator"].toolboxLocation = newVal;
  })(newVal);
}
import { ClientFunction } from "testcafe";

export async function changeToolboxLocation(newVal: string) {
  await ClientFunction((newVal) => {
    window["creator"].toolboxLocation = newVal;
  })(newVal);
}
export async function setShowPropertyGrid(newVal: boolean) {
  await ClientFunction((newVal) => {
    window["creator"].showPropertyGrid = newVal;
  })(newVal);
}
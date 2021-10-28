import { CreatorResponsivityManager } from "../src/creator-responsivity-manager";
import { CreatorTester } from "./creator-tester";

class SimpleContainer {
  clientRects = [{ x: 0, y: 0, height: 20, width: 20 }];
  parentElement: any;
  constructor(config: any) {
    (<any>Object).assign(this, config);
    this.parentElement = this;
  }
  offsetWidth = 1920;
  offsetHeight = 920;
  getClientRects() {
    return this.clientRects;
  }
}

test("CreatorResponsivityManager getScreenWidth", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);
  const checkToolboxWidth = (newWidth: number, widthSize: string) => {
    container.offsetWidth = newWidth;
    expect(responsivityManager["getScreenWidth"]()).toEqual(widthSize);
  };
  expect(responsivityManager["getScreenWidth"]()).toEqual("xxl");

  checkToolboxWidth(2000, "xxl");
  checkToolboxWidth(1920, "xxl");

  checkToolboxWidth(1900, "xl");
  checkToolboxWidth(1280, "xl");

  checkToolboxWidth(1270, "l");
  checkToolboxWidth(960, "l");

  checkToolboxWidth(950, "m");
  checkToolboxWidth(768, "m");

  checkToolboxWidth(750, "s");
  checkToolboxWidth(376, "s");

  checkToolboxWidth(360, "xs");
  checkToolboxWidth(200, "xs");
});

test("CreatorResponsivityManager process", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);
  const checkToolbox = (newOffsetWidth: number, visible: boolean, isCompact: boolean) => {
    container.offsetWidth = newOffsetWidth;
    responsivityManager.process();
    expect(creator.toolbox.visible).toEqual(visible);
    expect(creator.toolbox.isCompact).toEqual(isCompact);
  };

  expect(creator.toolbox.visible).toBeTruthy();
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkToolbox(1920, true, false);
  checkToolbox(2000, true, false);

  checkToolbox(1900, true, false);
  checkToolbox(1280, true, false);

  checkToolbox(1270, true, true);
  checkToolbox(960, true, true);

  checkToolbox(950, true, true);
  checkToolbox(768, true, true);

  checkToolbox(750, false, true);
  checkToolbox(376, false, true);

  checkToolbox(360, false, true);
  checkToolbox(200, false, true);
});
import { toolBoxLocationType } from "../src/creator-base";
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
  const checkScreenWidth = (newWidth: number, widthSize: string) => {
    container.offsetWidth = newWidth;
    expect(responsivityManager["getScreenWidth"]()).toEqual(widthSize);
  };
  expect(responsivityManager["getScreenWidth"]()).toEqual("xxl");

  checkScreenWidth(2000, "xxl");
  checkScreenWidth(1920, "xxl");

  checkScreenWidth(1900, "xl");
  checkScreenWidth(1280, "xl");

  checkScreenWidth(1270, "l");
  checkScreenWidth(960, "l");

  checkScreenWidth(950, "m");
  checkScreenWidth(768, "m");

  checkScreenWidth(750, "s");
  checkScreenWidth(376, "s");

  checkScreenWidth(360, "xs");
  checkScreenWidth(200, "xs");
});

test("CreatorResponsivityManager process", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);
  const checkByWidth = (newOffsetWidth: number, toolboxLocation: toolBoxLocationType, toolboxIsCompact: boolean, propertyGridFlyoutMode: boolean, showPageNavigator: boolean) => {
    container.offsetWidth = newOffsetWidth;
    responsivityManager.process();
    expect(creator.toolboxLocation).toEqual(toolboxLocation);
    expect(creator.toolbox.isCompact).toEqual(toolboxIsCompact);
    expect(creator.showPageNavigator).toEqual(showPageNavigator);
    expect(creator.sideBar.flyoutMode).toEqual(propertyGridFlyoutMode);
  };

  expect(creator.toolboxLocation).toEqual("left");
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkByWidth(1920, "left", false, false, true);
  checkByWidth(2000, "left", false, false, true);

  checkByWidth(1900, "left", false, false, true);
  checkByWidth(1280, "left", false, false, true);

  checkByWidth(1270, "left", true, false, true);
  checkByWidth(960, "left", true, false, true);

  checkByWidth(950, "left", true, true, true);
  checkByWidth(768, "left", true, true, true);

  checkByWidth(750, "none", true, true, false);
  checkByWidth(376, "none", true, true, false);

  checkByWidth(360, "none", true, true, false);
  checkByWidth(200, "none", true, true, false);
});
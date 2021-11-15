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
  const checkByWidth = (newOffsetWidth: number, toolboxVisible: boolean, toolboxIsCompact: boolean, propertyGridFlyoutMode: boolean, showPageNavigator: boolean) => {
    container.offsetWidth = newOffsetWidth;
    responsivityManager.process();
    expect(creator.toolbox.visible).toEqual(toolboxVisible);
    expect(creator.toolbox.isCompact).toEqual(toolboxIsCompact);
    expect(creator.showPageNavigator).toEqual(showPageNavigator);
    expect(creator.sideBar.flyoutMode).toEqual(propertyGridFlyoutMode);
  };

  expect(creator.toolbox.visible).toBeTruthy();
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkByWidth(1920, true, false, false, true);
  checkByWidth(2000, true, false, false, true);

  checkByWidth(1900, true, false, false, true);
  checkByWidth(1280, true, false, false, true);

  checkByWidth(1270, true, true, false, true);
  checkByWidth(960, true, true, false, true);

  checkByWidth(950, true, true, true, true);
  checkByWidth(768, true, true, true, true);

  checkByWidth(750, false, true, true, false);
  checkByWidth(376, false, true, true, false);

  checkByWidth(360, false, true, true, false);
  checkByWidth(200, false, true, true, false);
});
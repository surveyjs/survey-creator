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
  checkScreenWidth(1801, "xxl");

  checkScreenWidth(1799, "xl");
  checkScreenWidth(1501, "xl");

  checkScreenWidth(1499, "l");
  checkScreenWidth(1201, "l");

  checkScreenWidth(1199, "m");
  checkScreenWidth(901, "m");

  checkScreenWidth(899, "s");
  checkScreenWidth(601, "s");

  checkScreenWidth(599, "xs");
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
    expect(creator.currentTabPropertyGrid.flyoutMode).toEqual(propertyGridFlyoutMode);
  };

  expect(creator.toolbox.visible).toBeTruthy();
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkByWidth(2000, true, false, false, true);
  checkByWidth(1801, true, false, false, true);

  checkByWidth(1799, true, false, false, true);
  checkByWidth(1501, true, false, false, true);

  checkByWidth(1499, true, true, false, true);
  checkByWidth(1201, true, true, false, true);

  checkByWidth(1199, true, true, true, true);
  checkByWidth(901, true, true, true, true);

  checkByWidth(899, false, true, true, false);
  checkByWidth(601, false, true, true, false);

  checkByWidth(599, false, true, true, false);
  checkByWidth(200, false, true, true, false);
});
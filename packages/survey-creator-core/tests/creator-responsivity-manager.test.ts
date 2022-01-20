import { QuestionAdornerViewModel } from "../src/components/question";
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
  const checkByWidth = (newOffsetWidth: number, toolboxLocation: toolBoxLocationType, toolboxIsCompact: boolean, propertyGridFlyoutMode: boolean, showPageNavigator: boolean) => {
    container.offsetWidth = newOffsetWidth;
    responsivityManager.process();
    expect(creator.toolboxLocation).toEqual(toolboxLocation);
    expect(creator.toolbox.isCompact).toEqual(toolboxIsCompact);
    expect(creator.showPageNavigator).toEqual(showPageNavigator);
    expect(creator.sidebar.flyoutMode).toEqual(propertyGridFlyoutMode);
  };

  expect(creator.toolboxLocation).toEqual("left");
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkByWidth(2000, "left", false, false, true);
  checkByWidth(1801, "left", false, false, true);

  checkByWidth(1799, "left", false, false, true);
  checkByWidth(1501, "left", false, false, true);

  checkByWidth(1499, "left", true, false, true);
  checkByWidth(1201, "left", true, false, true);

  checkByWidth(1199, "left", true, true, true);
  checkByWidth(901, "left", true, true, true);

  checkByWidth(899, "hidden", true, true, false);
  checkByWidth(601, "hidden", true, true, false);

  checkByWidth(599, "hidden", true, true, false);
  checkByWidth(200, "hidden", true, true, false);
});

test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  const checkByWidth = (newOffsetWidth: number, toolboxLocation: toolBoxLocationType, toolboxIsCompact: boolean, propertyGridFlyoutMode: boolean, showPageNavigator: boolean) => {
    container.offsetWidth = newOffsetWidth;
    responsivityManager.process();
    expect(creator.toolboxLocation).toEqual(toolboxLocation);
    expect(creator.toolbox.isCompact).toEqual(toolboxIsCompact);
    expect(creator.showPageNavigator).toEqual(showPageNavigator);
    expect(creator.sidebar.flyoutMode).toEqual(propertyGridFlyoutMode);
  };

  expect(creator.toolbox.isCompact).toBeFalsy();

  checkByWidth(2000, "right", false, false, true);
  checkByWidth(1801, "right", false, false, true);

  checkByWidth(1799, "right", false, false, true);
  checkByWidth(1501, "right", false, false, true);

  checkByWidth(1499, "right", true, false, true);
  checkByWidth(1201, "right", true, false, true);

  checkByWidth(1199, "right", true, true, true);
  checkByWidth(901, "right", true, true, true);

  checkByWidth(899, "hidden", true, true, false);
  checkByWidth(601, "hidden", true, true, false);

  checkByWidth(599, "hidden", true, true, false);
  checkByWidth(200, "hidden", true, true, false);
});

test("CreatorResponsivityManager: Sidebar expand/collapse on width change", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  expect(creator.sidebar.visible).toEqual(true);
  container.offsetWidth = 900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);
  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(true);

  expect(creator.sidebar.visible).toEqual(true);
  container.offsetWidth = 900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);
  creator.sidebar["_expandAction"].action();
  expect(creator.sidebar.visible).toEqual(true);
  creator.sidebar["_collapseAction"].action();
  expect(creator.sidebar.visible).toEqual(false);
  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(true);

  creator.sidebar["_collapseAction"].action();
  expect(creator.sidebar.visible).toEqual(false);
  container.offsetWidth = 900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);
  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);

  container.offsetWidth = 900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);
  creator.sidebar["_expandAction"].action();
  expect(creator.sidebar.visible).toEqual(true);
  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(true);
  container.offsetWidth = 900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);

  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(true);
  creator.sidebar["_collapseAction"].action();
  expect(creator.sidebar.visible).toEqual(false);
  container.offsetWidth = 900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);
  creator.sidebar["_expandAction"].action();
  expect(creator.sidebar.visible).toEqual(true);
  creator.sidebar["_collapseAction"].action();
  expect(creator.sidebar.visible).toEqual(false);
  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(creator.sidebar.visible).toEqual(false);
});

test("CreatorResponsivityManager: Question Settings visibility", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  creator.sidebar.flyoutMode = true;

  const question = creator.survey.getAllQuestions()[0];
  const qModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );

  container.offsetWidth = 1900;
  responsivityManager.process();
  creator.selectElement(question);
  expect(qModel.getActionById("settings").visible).toBeFalsy();

  container.offsetWidth = 900;
  responsivityManager.process();
  expect(qModel.getActionById("settings").visible).toBeTruthy();

  container.offsetWidth = 1900;
  responsivityManager.process();
  expect(qModel.getActionById("settings").visible).toBeFalsy();
});
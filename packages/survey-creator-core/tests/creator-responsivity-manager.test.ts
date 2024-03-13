import { QuestionAdornerViewModel } from "../src/components/question";
import { SurveyCreatorModel, toolboxLocationType as toolboxLocationType } from "../src/creator-base";
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

interface expectedValues {
  showToolbox: boolean;
  toolboxLocation: toolboxLocationType;
  toolboxIsCompact: boolean;
  sidebarFlyoutMode: boolean;
  showPageNavigator: boolean;
}
function checkCreatorLayoutPropertiesByWidth(creator: SurveyCreatorModel, newOffsetWidth: number, options: expectedValues) {
  const container: SimpleContainer = new SimpleContainer({});
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  container.offsetWidth = newOffsetWidth;
  responsivityManager.process();
  expect(creator.showToolbox).toEqual(options.showToolbox);
  expect(creator.toolboxLocation).toEqual(options.toolboxLocation);
  expect(creator.toolbox.isCompact).toEqual(options.toolboxIsCompact);
  expect(creator.showPageNavigator).toEqual(options.showPageNavigator);
  expect(creator.sidebar.flyoutMode).toEqual(options.sidebarFlyoutMode);
}

test("CreatorResponsivityManager process screenWidth is greater xxl ", (): any => {
  const creator = new CreatorTester();
  expect(creator.toolboxLocation).toEqual("left");
  expect(creator.toolbox.isCompact).toBeFalsy();

  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "left", toolboxIsCompact: false, sidebarFlyoutMode: false, showPageNavigator: true };

  checkCreatorLayoutPropertiesByWidth(creator, 2000, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 1801, expectedValues);
});
test("CreatorResponsivityManager process screenWidth is [xl; xxl)", (): any => {
  const creator = new CreatorTester();
  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "left", toolboxIsCompact: false, sidebarFlyoutMode: false, showPageNavigator: true };
  checkCreatorLayoutPropertiesByWidth(creator, 1799, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 1501, expectedValues);
});
test("CreatorResponsivityManager process screenWidth is [l; xl)", (): any => {
  const creator = new CreatorTester();
  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "left", toolboxIsCompact: true, sidebarFlyoutMode: false, showPageNavigator: true };
  checkCreatorLayoutPropertiesByWidth(creator, 1499, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 1201, expectedValues);
});
test("CreatorResponsivityManager process screenWidth is [m; l)", (): any => {
  const creator = new CreatorTester();
  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "left", toolboxIsCompact: true, sidebarFlyoutMode: true, showPageNavigator: true };
  checkCreatorLayoutPropertiesByWidth(creator, 1199, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 901, expectedValues);
});
test("CreatorResponsivityManager process screenWidth is [s; m)", (): any => {
  const creator = new CreatorTester();
  const expectedValues = <expectedValues>{ showToolbox: false, toolboxLocation: "left", toolboxIsCompact: true, sidebarFlyoutMode: true, showPageNavigator: false };
  checkCreatorLayoutPropertiesByWidth(creator, 899, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 601, expectedValues);
});
test("CreatorResponsivityManager process screenWidth is [0; s)", (): any => {
  const creator = new CreatorTester();
  const expectedValues = <expectedValues>{ showToolbox: false, toolboxLocation: "left", toolboxIsCompact: true, sidebarFlyoutMode: true, showPageNavigator: false };
  checkCreatorLayoutPropertiesByWidth(creator, 599, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 200, expectedValues);
});

test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is greater xxl ", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  expect(creator.toolboxLocation).toEqual("right");
  expect(creator.toolbox.isCompact).toBeFalsy();

  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "right", toolboxIsCompact: false, sidebarFlyoutMode: false, showPageNavigator: true };
  checkCreatorLayoutPropertiesByWidth(creator, 2000, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 1801, expectedValues);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [xl; xxl)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "right", toolboxIsCompact: false, sidebarFlyoutMode: false, showPageNavigator: true };
  checkCreatorLayoutPropertiesByWidth(creator, 1799, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 1501, expectedValues);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [l; xl)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  const expectedValues = <expectedValues>{ showToolbox: true, toolboxLocation: "right", toolboxIsCompact: true, sidebarFlyoutMode: false, showPageNavigator: true };
  checkCreatorLayoutPropertiesByWidth(creator, 1499, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 1201, expectedValues);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [m; l)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  const expectedValues = <expectedValues>{
    showToolbox: true, toolboxLocation: "right", toolboxIsCompact: true, sidebarFlyoutMode: true, showPageNavigator: true
  };
  checkCreatorLayoutPropertiesByWidth(creator, 1199, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 901, expectedValues);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [s; m)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  const expectedValues = <expectedValues>{ showToolbox: false, toolboxLocation: "right", toolboxIsCompact: true, sidebarFlyoutMode: true, showPageNavigator: false };
  checkCreatorLayoutPropertiesByWidth(creator, 899, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 601, expectedValues);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [0; s)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  const expectedValues = <expectedValues>{ showToolbox: false, toolboxLocation: "right", toolboxIsCompact: true, sidebarFlyoutMode: true, showPageNavigator: false };
  checkCreatorLayoutPropertiesByWidth(creator, 599, expectedValues);
  checkCreatorLayoutPropertiesByWidth(creator, 200, expectedValues);
});

test("CreatorResponsivityManager process if Sidebar, PageNavigator and Toolbox is hidden", (): any => {
  const creator = new CreatorTester();
  creator.showSidebar = false;
  creator.showPageNavigator = false;
  creator.showToolbox = false;
  creator.toolboxLocation = "right";
  const container: SimpleContainer = new SimpleContainer({});
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  const checkInitialValues = () => {
    expect(creator.showSidebar).toEqual(false);
    expect(creator.sidebar.flyoutMode).toEqual(false);
    expect(creator.showPageNavigator).toEqual(false);
    expect(creator.showToolbox).toEqual(false);
    expect(creator.toolboxLocation).toEqual("right");
  };

  checkInitialValues();

  container.offsetWidth = 200;
  responsivityManager.process();
  expect(creator.showSidebar).toEqual(false);
  expect(creator.showPageNavigator).toEqual(false);
  expect(creator.showToolbox).toEqual(false);
  expect(creator.toolboxLocation).toEqual("right");

  container.offsetWidth = 2000;
  responsivityManager.process();
  checkInitialValues();
});

test("CreatorResponsivityManager: sidebar expand/collapse on width change", (): any => {
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

test("CreatorResponsivityManager: override screenSizeBreakpoints", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  const oldValueScreenSizeBreakpoints = Object.assign({}, CreatorResponsivityManager.screenSizeBreakpoints);
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  CreatorResponsivityManager.screenSizeBreakpoints["xl"] = 1650;
  CreatorResponsivityManager.screenSizeBreakpoints["l"] = 1536;

  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  creator.sidebar.flyoutMode = true;

  const question = creator.survey.getAllQuestions()[0];
  const qModel = new QuestionAdornerViewModel(creator, question, undefined);

  container.offsetWidth = 1700;
  responsivityManager.process();
  creator.selectElement(question);
  expect(qModel.getActionById("settings").visible).toBeFalsy();

  container.offsetWidth = 1500;
  responsivityManager.process();
  expect(qModel.getActionById("settings").visible).toBeTruthy();

  container.offsetWidth = 1200;
  responsivityManager.process();
  expect(qModel.getActionById("settings").visible).toBeTruthy();

  CreatorResponsivityManager.screenSizeBreakpoints = oldValueScreenSizeBreakpoints;
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

test("CreatorResponsivityManager: toolbox visibility works correctly after recreate responsivity manager", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  let responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  container.offsetWidth = 60;
  responsivityManager.process();
  expect(creator.showToolbox).toBe(false);
  responsivityManager.dispose();
  responsivityManager = new CreatorResponsivityManager(<any>container, creator);
  container.offsetWidth = 1920;
  responsivityManager.process();
  expect(creator.showToolbox).toBe(true);
});

test("CreatorResponsivityManager: page navigator visibility works correctly after recreate responsivity manager", (): any => {
  const container: SimpleContainer = new SimpleContainer({});
  const creator = new CreatorTester();
  let responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  creator.JSON = {
    elements: [{ type: "text", name: "question1" }]
  };
  container.offsetWidth = 60;
  responsivityManager.process();
  expect(creator.showPageNavigator).toBe(false);
  responsivityManager.dispose();
  responsivityManager = new CreatorResponsivityManager(<any>container, creator);
  container.offsetWidth = 1920;
  responsivityManager.process();
  expect(creator.showPageNavigator).toBe(true);
});

import { QuestionAdornerViewModel } from "../src/components/question";
import { CreatorBase, toolboxLocationType as toolboxLocationType } from "../src/creator-base";
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

function checkCreatorLayoutPropertiesByWidth(creator: CreatorBase, newOffsetWidth: number, showToolbox: boolean, toolboxLocation: toolboxLocationType, toolboxIsCompact: boolean, sidebarFlyoutMode: boolean, showPageNavigator: boolean) {
  const container: SimpleContainer = new SimpleContainer({});
  const responsivityManager = new CreatorResponsivityManager(<any>container, creator);

  container.offsetWidth = newOffsetWidth;
  responsivityManager.process();
  expect(creator.showToolbox).toEqual(showToolbox);
  expect(creator.toolboxLocation).toEqual(toolboxLocation);
  expect(creator.toolbox.isCompact).toEqual(toolboxIsCompact);
  expect(creator.showPageNavigator).toEqual(showPageNavigator);
  expect(creator.sidebar.flyoutMode).toEqual(sidebarFlyoutMode);
}

test("CreatorResponsivityManager process screenWidth is greater xxl ", (): any => {
  const creator = new CreatorTester();
  expect(creator.toolboxLocation).toEqual("left");
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkCreatorLayoutPropertiesByWidth(creator, 2000, true, "left", false, false, true);
  checkCreatorLayoutPropertiesByWidth(creator, 1801, true, "left", false, false, true);
});
test("CreatorResponsivityManager process screenWidth is [xl; xxl)", (): any => {
  const creator = new CreatorTester();
  checkCreatorLayoutPropertiesByWidth(creator, 1799, true, "left", false, false, true);
  checkCreatorLayoutPropertiesByWidth(creator, 1501, true, "left", false, false, true);
});
test("CreatorResponsivityManager process screenWidth is [l; xl)", (): any => {
  const creator = new CreatorTester();
  checkCreatorLayoutPropertiesByWidth(creator, 1499, true, "left", true, false, true);
  checkCreatorLayoutPropertiesByWidth(creator, 1201, true, "left", true, false, true);
});
test("CreatorResponsivityManager process screenWidth is [m; l)", (): any => {
  const creator = new CreatorTester();
  checkCreatorLayoutPropertiesByWidth(creator, 1199, true, "left", true, true, true);
  checkCreatorLayoutPropertiesByWidth(creator, 901, true, "left", true, true, true);
});
test("CreatorResponsivityManager process screenWidth is [s; m)", (): any => {
  const creator = new CreatorTester();
  checkCreatorLayoutPropertiesByWidth(creator, 899, false, "left", true, true, false);
  checkCreatorLayoutPropertiesByWidth(creator, 601, false, "left", true, true, false);
});
test("CreatorResponsivityManager process screenWidth is [0; s)", (): any => {
  const creator = new CreatorTester();
  checkCreatorLayoutPropertiesByWidth(creator, 599, false, "left", true, true, false);
  checkCreatorLayoutPropertiesByWidth(creator, 200, false, "left", true, true, false);
});

test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is greater xxl ", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  expect(creator.toolboxLocation).toEqual("right");
  expect(creator.toolbox.isCompact).toBeFalsy();

  checkCreatorLayoutPropertiesByWidth(creator, 2000, true, "right", false, false, true);
  checkCreatorLayoutPropertiesByWidth(creator, 1801, true, "right", false, false, true);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [xl; xxl)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  checkCreatorLayoutPropertiesByWidth(creator, 1799, true, "right", false, false, true);
  checkCreatorLayoutPropertiesByWidth(creator, 1501, true, "right", false, false, true);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [l; xl)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  checkCreatorLayoutPropertiesByWidth(creator, 1499, true, "right", true, false, true);
  checkCreatorLayoutPropertiesByWidth(creator, 1201, true, "right", true, false, true);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [m; l)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  checkCreatorLayoutPropertiesByWidth(creator, 1199, true, "right", true, true, true);
  checkCreatorLayoutPropertiesByWidth(creator, 901, true, "right", true, true, true);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [s; m)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  checkCreatorLayoutPropertiesByWidth(creator, 899, false, "right", true, true, false);
  checkCreatorLayoutPropertiesByWidth(creator, 601, false, "right", true, true, false);
});
test("CreatorResponsivityManager toolboxLocation is right and propertygrid is hidden screenWidth is [0; s)", (): any => {
  const creator = new CreatorTester();
  creator.toolboxLocation = "right";
  creator.showSidebar = false;

  checkCreatorLayoutPropertiesByWidth(creator, 599, false, "right", true, true, false);
  checkCreatorLayoutPropertiesByWidth(creator, 200, false, "right", true, true, false);
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
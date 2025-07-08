import { Action, ActionContainer, AdaptiveContainerUpdateOptions, IAction, PopupDropdownViewModel, ResponsivityManager, UpdateResponsivenessMode } from "survey-core";
import { SurveyElementActionContainer } from "../src/components/action-container-view-model";
import { CreatorTester } from "./creator-tester";
import { QuestionAdornerViewModel } from "../src/components/question";

test("SurveyElementActionContainer with subtypes fit", () => {
  const actionContainer = new SurveyElementActionContainer();

  let actions = [
    {
      "id": "convertTo",
      "minDimension": 56,
      "maxDimension": 110,
      "location": "start",
      "iconName": "convertTo"
    },
    {
      "id": "convertInputType",
      "minDimension": 56,
      "maxDimension": 81,
      "location": "start"
    },
    {
      "id": "duplicate",
      "minDimension": 40,
      "maxDimension": 99,
      "iconName": "duplicate"
    },
    {
      "id": "settings",
      "minDimension": 40,
      "maxDimension": 91,
      hidden: true,
      "iconName": "settings"
    },
    {
      "id": "isrequired",
      "minDimension": 40,
      "maxDimension": 97,
      "iconName": "isrequired"
    },
    {
      "id": "delete",
      "minDimension": 40,
      "maxDimension": 82,
      "iconName": "delete"
    }
  ];

  actionContainer.setItems(actions.map(a => {
    const action = new Action({
      id: a.id,
      visible: !a.hidden,
      iconName: a.iconName,
      location: a.location
    });
    action.minDimension = a.minDimension;
    action.maxDimension = a.maxDimension;
    return action;
  }));
  actionContainer.flushUpdates();
  actionContainer.fit({ availableSpace: 564 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("large");
  expect(actionContainer.getActionById("isrequired").mode).toBe("large");
  expect(actionContainer.getActionById("delete").mode).toBe("large");
  expect(actionContainer.dotsItem.visible).toBeFalsy();

  actionContainer.fit({ availableSpace: 432 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit({ availableSpace: 250 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("removed");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit({ availableSpace: 192 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("removed");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit({ availableSpace: 150 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("removed");
  expect(actionContainer.getActionById("duplicate").mode).toBe("popup");
  expect(actionContainer.getActionById("isrequired").mode).toBe("popup");
  expect(actionContainer.getActionById("delete").mode).toBe("popup");
  expect(actionContainer.dotsItem.visible).toBeTruthy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(3);
});

test("SurveyElementActionContainer without subtypes fit", () => {
  const actionContainer = new SurveyElementActionContainer();

  let actions = [
    {
      "id": "convertTo",
      "minDimension": 56,
      "maxDimension": 110,
      "location": "start",
      "iconName": "convertTo"
    },
    {
      "id": "convertInputType",
      "minDimension": 56,
      "maxDimension": 81,
      "location": "start"
    },
    {
      "id": "duplicate",
      "minDimension": 40,
      "maxDimension": 99,
      "iconName": "duplicate"
    },
    {
      "id": "settings",
      "minDimension": 40,
      "maxDimension": 91,
      hidden: true,
      "iconName": "settings"
    },
    {
      "id": "isrequired",
      "minDimension": 40,
      "maxDimension": 97,
      "iconName": "isrequired"
    },
    {
      "id": "delete",
      "minDimension": 40,
      "maxDimension": 82,
      "iconName": "delete"
    }
  ];

  actionContainer.setItems(actions.map(a => {
    const action = new Action({
      id: a.id,
      visible: !a.hidden,
      iconName: a.iconName,
      location: a.location
    });
    action.minDimension = a.minDimension;
    action.maxDimension = a.maxDimension;
    return action;
  }));
  actionContainer.flushUpdates();
  actionContainer.fit({ availableSpace: 564 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("large");
  expect(actionContainer.getActionById("isrequired").mode).toBe("large");
  expect(actionContainer.getActionById("delete").mode).toBe("large");
  expect(actionContainer.dotsItem.visible).toBeFalsy();

  actionContainer.alwaysShrink = true;
  actionContainer.fit({ availableSpace: 564 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();

  actionContainer.alwaysShrink = false;

  actionContainer.fit({ availableSpace: 304 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit({ availableSpace: 192 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit({ availableSpace: 150 - 81 });
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("duplicate").mode).toBe("popup");
  expect(actionContainer.getActionById("isrequired").mode).toBe("popup");
  expect(actionContainer.getActionById("delete").mode).toBe("popup");
  expect(actionContainer.dotsItem.visible).toBeTruthy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(3);
});

test("actions and creator.onPropertyValueChanging", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  let isRequiredNewValue = false;
  creator.onPropertyValueChanging.add((sender, options) => {
    if (options.propertyName === "isRequired") {
      options.newValue = isRequiredNewValue;
    }
    if (options.propertyName === "inputType" && options.newValue === "tel") {
      options.newValue = "date";
    }
  });
  const q1 = creator.survey.getQuestionByName("q1");
  creator.selectElement(q1);
  const q1Adapter = new QuestionAdornerViewModel(creator, q1, <any>undefined);
  q1Adapter.actionContainer.getActionById("isrequired").action();
  expect(q1.isRequired).toBeFalsy();
  isRequiredNewValue = true;
  q1Adapter.actionContainer.getActionById("isrequired").action();
  expect(q1.isRequired).toBeTruthy();
});

class TestSurveyElementActionContainer extends SurveyElementActionContainer {
  updateCallback: (isResetInitialized: boolean) => void;
  protected update(options: AdaptiveContainerUpdateOptions): void {
    if (!!options.updateResponsivenessMode) {
      this.updateCallback && this.updateCallback(options.updateResponsivenessMode == UpdateResponsivenessMode.Hard);
    }
  }
}

class TestQuestionAdornerViewModel extends QuestionAdornerViewModel {
  protected createActionContainer(): TestSurveyElementActionContainer {
    const actionContainer = new TestSurveyElementActionContainer();
    actionContainer.dotsItem.popupModel.horizontalPosition = "center";
    return actionContainer;
  }
}

test("Check actions container responsiveness doesn't run when invisible", () => {
  const creator = new CreatorTester();
  class ResizeObserver {
    constructor(protected callback: () => void) {}
    observe() {
      this.callback();
    }
    disconnect() { }
  }
  const oldResizeObserver = window.ResizeObserver;
  const oldRequestAnimationFrame = window.requestAnimationFrame;
  window.ResizeObserver = <any>ResizeObserver;
  window.requestAnimationFrame = (callback) => { callback(1); return 1; };
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }, { type: "text", name: "q3" }] };
  const q1 = creator.survey.getQuestionByName("q1");
  const q2 = creator.survey.getQuestionByName("q2");
  const q3 = creator.survey.getQuestionByName("q3");
  creator.selectElement(q1);

  const spy = jest.spyOn(ResponsivityManager.prototype as any, "updateItemsDimensions");
  const q1Adapter = new TestQuestionAdornerViewModel(creator, q1, <any>undefined);
  const q2Adapter = new TestQuestionAdornerViewModel(creator, q2, <any>undefined);
  const q3Adapter = new TestQuestionAdornerViewModel(creator, q3, <any>undefined);
  const q1ActionsContainer = q1Adapter.actionContainer as TestSurveyElementActionContainer;
  const q2ActionsContainer = q2Adapter.actionContainer as TestSurveyElementActionContainer;
  const q3ActionsContainer = q3Adapter.actionContainer as TestSurveyElementActionContainer;
  const container = document.createElement("div");
  jest.spyOn(container, "offsetWidth", "get").mockImplementation(() => {
    return 100;
  });
  expect(q1ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  q1ActionsContainer.flushUpdates();
  q1ActionsContainer.initResponsivityManager(container);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(q1ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();

  expect(q2Adapter.actionContainer["isResponsivenessAllowed"]).toBeFalsy();
  q2ActionsContainer.flushUpdates();
  q2ActionsContainer.initResponsivityManager(container);
  expect(spy).toHaveBeenCalledTimes(1);
  let q2Log = "";
  q2ActionsContainer.updateCallback = (isResetInitialized) => {
    q2Log += `->raised:${isResetInitialized}`;
  };
  expect(q2ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeFalsy();

  expect(q3Adapter.actionContainer["isResponsivenessAllowed"]).toBeFalsy();
  q3ActionsContainer.flushUpdates();
  q3ActionsContainer.initResponsivityManager(container);
  expect(spy).toHaveBeenCalledTimes(1);
  let q3Log = "";
  q3ActionsContainer.updateCallback = (isResetInitialized) => {
    q3Log += `->raised:${isResetInitialized}`;
  };
  expect(q3ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeFalsy();

  creator.selectElement(q2);
  q1ActionsContainer.flushUpdates();
  q2ActionsContainer.flushUpdates();
  q3ActionsContainer.flushUpdates();
  expect(q1ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q1ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q2ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q2ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q3ActionsContainer["isResponsivenessAllowed"]).toBeFalsy();
  expect(q3ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeFalsy();
  expect(q2Log).toBe("->raised:true");
  expect(q3Log).toBe("");

  creator.selectElement(q1);
  creator.selectElement(q2);
  q1ActionsContainer.flushUpdates();
  q2ActionsContainer.flushUpdates();
  q3ActionsContainer.flushUpdates();
  expect(q1ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q1ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q2ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q2ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q3ActionsContainer["isResponsivenessAllowed"]).toBeFalsy();
  expect(q3ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeFalsy();
  expect(q2Log).toBe("->raised:true");
  expect(q3Log).toBe("");

  q3Adapter.hover(new Event("") as any, null);
  q1ActionsContainer.flushUpdates();
  q2ActionsContainer.flushUpdates();
  q3ActionsContainer.flushUpdates();
  expect(q1ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q1ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q2ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q2ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q3ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q3ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q2Log).toBe("->raised:true");
  expect(q3Log).toBe("->raised:true");

  q3Adapter.hover(new Event("") as any, null);
  q1ActionsContainer.flushUpdates();
  q2ActionsContainer.flushUpdates();
  q3ActionsContainer.flushUpdates();
  expect(q1ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q1ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q2ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q2ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q3ActionsContainer["isResponsivenessAllowed"]).toBeTruthy();
  expect(q3ActionsContainer["responsivityManager"].shouldProcessResponsiveness()).toBeTruthy();
  expect(q2Log).toBe("->raised:true");
  expect(q3Log).toBe("->raised:true");
  window.ResizeObserver = oldResizeObserver;
  window.requestAnimationFrame = oldRequestAnimationFrame;
  spy.mockRestore();
});


import { Action, IAction, PopupDropdownViewModel } from "survey-core";
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

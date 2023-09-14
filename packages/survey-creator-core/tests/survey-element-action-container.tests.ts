import { Action, IAction } from "survey-core";
import { SurveyElementActionContainer } from "../src/components/action-container-view-model";

test("SurveyElementActionContainer with subtypes fit", () => {
  const actionContainer = new SurveyElementActionContainer();

  let actions = [
    {
      "id": "convertTo",
      "minDimension": 56,
      "maxDimension": 110
    },
    {
      "id": "convertInputType",
      "minDimension": 56,
      "maxDimension": 81
    },
    {
      "id": "duplicate",
      "minDimension": 40,
      "maxDimension": 99
    },
    {
      "id": "settings",
      "minDimension": 40,
      "maxDimension": 91,
      hidden: true
    },
    {
      "id": "isrequired",
      "minDimension": 40,
      "maxDimension": 97
    },
    {
      "id": "delete",
      "minDimension": 40,
      "maxDimension": 82
    }
  ];

  actionContainer.setItems(actions.map(a => {
    const action = new Action({ id: a.id });
    action.minDimension = a.minDimension;
    action.maxDimension = a.maxDimension;
    action.visible = !a.hidden;
    return action;
  }));

  actionContainer.fit(564, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("large");
  expect(actionContainer.getActionById("isrequired").mode).toBe("large");
  expect(actionContainer.getActionById("delete").mode).toBe("large");
  expect(actionContainer.dotsItem.visible).toBeFalsy();

  actionContainer.fit(432, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("removed");
  expect(actionContainer.getActionById("duplicate").mode).toBe("large");
  expect(actionContainer.getActionById("isrequired").mode).toBe("large");
  expect(actionContainer.getActionById("delete").mode).toBe("large");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit(304, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("removed");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit(192, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("convertInputType").mode).toBe("removed");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit(150, 32);
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
      "maxDimension": 110
    },
    {
      "id": "duplicate",
      "minDimension": 40,
      "maxDimension": 99
    },
    {
      "id": "settings",
      "minDimension": 40,
      "maxDimension": 91,
      hidden: true
    },
    {
      "id": "isrequired",
      "minDimension": 40,
      "maxDimension": 97
    },
    {
      "id": "delete",
      "minDimension": 40,
      "maxDimension": 82
    }
  ];

  actionContainer.setItems(actions.map(a => {
    const action = new Action({ id: a.id });
    action.minDimension = a.minDimension;
    action.maxDimension = a.maxDimension;
    action.visible = !a.hidden;
    return action;
  }));

  actionContainer.fit(564, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("large");
  expect(actionContainer.getActionById("isrequired").mode).toBe("large");
  expect(actionContainer.getActionById("delete").mode).toBe("large");
  expect(actionContainer.dotsItem.visible).toBeFalsy();

  actionContainer.fit(432, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("large");
  expect(actionContainer.getActionById("isrequired").mode).toBe("large");
  expect(actionContainer.getActionById("delete").mode).toBe("large");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit(304, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("large");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit(192, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("duplicate").mode).toBe("small");
  expect(actionContainer.getActionById("isrequired").mode).toBe("small");
  expect(actionContainer.getActionById("delete").mode).toBe("small");
  expect(actionContainer.dotsItem.visible).toBeFalsy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(0);

  actionContainer.fit(150 - 81, 32);
  expect(actionContainer.getActionById("convertTo").mode).toBe("small");
  expect(actionContainer.getActionById("duplicate").mode).toBe("popup");
  expect(actionContainer.getActionById("isrequired").mode).toBe("popup");
  expect(actionContainer.getActionById("delete").mode).toBe("popup");
  expect(actionContainer.dotsItem.visible).toBeTruthy();
  expect(actionContainer.hiddenItemsListModel.actions.length).toBe(3);
});

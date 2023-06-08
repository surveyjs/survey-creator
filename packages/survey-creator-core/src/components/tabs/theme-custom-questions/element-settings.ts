import { ComponentCollection } from "survey-core";
import { getLocString } from "../../../editorLocalization";

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "color",
      name: "backcolor",
      title: getLocString("theme.backcolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "color",
      name: "hovercolor",
      title: getLocString("theme.hovercolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "corner",
      title: getLocString("theme.cornerRadius"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      defaultValue: 4,
      min: 0
    },
    {
      type: "expression",
      name: "cornerRadius",
      expression: "{composite.corner}+\"px\"",
      visible: false
    }
  ],
  onInit() {
  },
  onCreated(question) {
  },
  onValueChanged(question, name, newValue) {
  },
});

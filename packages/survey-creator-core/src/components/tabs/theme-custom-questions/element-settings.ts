import { ComponentCollection } from "survey-core";
import { getLocString } from "../../../editorLocalization";

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "colorsettings",
      name: "backcolor",
      title: getLocString("theme.backcolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "colorsettings",
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
      min: 0
    },
    {
      type: "expression",
      name: "cornerRadius",
      expression: "iif({composite.corner} notempty, {composite.corner} + 'px', '')",
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

import { ComponentCollection } from "survey-core";
import { getLocString } from "../../../editorLocalization";

ComponentCollection.Instance.add({
  name: "elementsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "colorsettings",
      name: "backcolor",
      colorTitle: getLocString("theme.backcolor"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
      descriptionLocation: "hidden"
    },
    {
      type: "colorsettings",
      name: "hovercolor",
      colorTitle: getLocString("theme.hovercolor"),
      colorTitleLocation: "left",
      titleLocation: "hidden",
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

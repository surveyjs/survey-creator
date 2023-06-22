import { ComponentCollection } from "survey-core";
import { getLocString } from "../../../editorLocalization";

ComponentCollection.Instance.add({
  name: "fontsettings",
  showInToolbox: false,
  elementsJSON: [
    {
      type: "dropdown",
      name: "family",
      title: getLocString("theme.fontFamily"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      choices: ["Open Sans", "Arial"],
      defaultValue: "Open Sans",
      allowClear: false
    },
    {
      type: "buttongroup",
      name: "weight",
      titleLocation: "hidden",
      descriptionLocation: "hidden",
      choices: [
        { value: "400", text: getLocString("theme.fontWeightRegular") },
        { value: "500", text: getLocString("theme.fontWeightSemiBold") },
        { value: "600", text: getLocString("theme.fontWeightBold") },
        { value: "700", text: getLocString("theme.fontWeightHeavy") },
      ],
      defaultValue: "400"
    },
    {
      type: "color",
      name: "color",
      title: getLocString("theme.color"),
      titleLocation: "left",
      // choices: ["#00FFFF", "#00FFFF"],
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "size",
      title: getLocString("theme.size"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      min: 0,
    }
  ],
  onInit() {
  },
  onCreated(question) {
    const color = question.contentPanel.getQuestionByName("color");
    color.visible = question.name !== "surveyTitle";
  },
  onValueChanged(question, name, newValue) {
  },
});
// import { document } from "global";
import { boolean, text } from "@storybook/addon-knobs";

// We need import something from the component source code in order the component to be registered in KnockoutJS
import { ToolboxViewModel } from "../src/components/toolbox/toolbox";
import { SvgBundleViewModel } from "../src/svgbundle";

export default {
  title: "Toolbox",
  "ko-components": [ToolboxViewModel, SvgBundleViewModel], // Fake component usage in order for component to be actually imported
  parameters: {
    jest: [],
    actions: {},
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=254%3A116",
    },
  },
};

export const Toolbox = () => {
  return {
    template:
      '<svc-toolbox params="categories: toolboxCategories"></svc-toolbox>',
    context: {
      toolboxCategories: [
        {
          items: [
            {
              title: "Radiogroup",
              iconName: "radiogroup",
            },
            {
              title: "Checkbox",
              iconName: "checkbox",
            },
            {
              title: "Dropdown",
              iconName: "dropdown",
            },
            {
              title: "Single Input",
              iconName: "text",
            },
            {
              title: "Rating",
              iconName: "rating",
            },
            {
              title: "Image Picker",
              iconName: "imagepicker",
            },
          ],
        },
        {
          items: [
            {
              title: "Boolean",
              iconName: "boolean",
            },
            {
              title: "Comment",
              iconName: "comment",
            },
            {
              title: "Multiple Text",
              iconName: "multipletext",
            },
            {
              title: "Matrix",
              iconName: "matrix",
            },
            {
              title: "File",
              iconName: "file",
            },
            {
              title: "Signature",
              iconName: "signaturepad",
            },
          ],
        },
        {
          items: [
            {
              title: "HTML",
              iconName: "html",
            },
            {
              title: "Expression",
              iconName: "expression",
            },
            {
              title: "Multiple Matrix",
              iconName: "matrixdropdown",
            },
            {
              title: "Dynamic Matrix",
              iconName: "matrixdynamic",
            },
          ],
        },
        {
          items: [
            {
              title: "Image",
              iconName: "image",
            },
            {
              title: "Panel",
              iconName: "panel",
            },
          ],
        },
      ],
    },
  };
};

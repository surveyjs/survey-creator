// import { document } from "global";
import { text, boolean } from "@storybook/addon-knobs";
// We need import something from the component source code in order the component to be registered in KnockoutJS
import { PropertyPanelItemViewModel } from "../src/components/property-panel/property-panel-item";
// import { PropertyPanelViewModel } from "../src/components/property-panel/property-panel";
import { TextEditorViewModel } from "../src/components/property-editors/text-editor/text-editor";

// export default {
//   title: "Property Panel",
//   "ko-components": [
//     PropertyPanelItemViewModel,
//     PropertyPanelViewModel,
//     TextEditorViewModel,
//   ], // Fake component usage in order for component to be actually imported
//   parameters: {
//     jest: [],
//     actions: {},
//     design: {
//       type: "figma",
//       url:
//         "https://www.figma.com/file/7QOeoDDCaPuqzWAROR0kDY/Creator?node-id=266%3A8092",
//     },
//   },
// };

// export const Ordinary = () => {
//   return {
//     template:
//       '<div style="width:503px"><svc-property-panel params="tabs: tabs, title: title"></svc-property-panel></div>',
//     context: {
//       tabs: [
//         {
//           title: text("Group Caption", "Navigation"),
//           showHeader: true,
//           propertyEditors: [
//             {
//               name: "name",
//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Name",
//               },
//             },
//             {
//               name: "title",

//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Title",
//               },
//             },
//           ],
//         },
//       ],
//       title: text("Header", "Question Properties"),
//     },
//   };
// };

// export const DisabledGroupCaption = () => {
//   return {
//     template:
//       '<div style="width:503px"><svc-property-panel params="tabs: tabs, title: title"></svc-property-panel></div>',
//     context: {
//       title: text("Header", "Question Properties"),
//       tabs: [
//         {
//           title: text("Title", "Navigation"),
//           showHeader: true,
//           disabled: boolean("Disabled", true),
//           propertyEditors: [
//             {
//               name: "name",
//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Name",
//               },
//             },
//             {
//               name: "title",
//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Title",
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };
// };

// export const MultipleGroups = () => {
//   return {
//     template:
//       '<div style="width:503px"><svc-property-panel params="tabs: tabs, title: title"></svc-property-panel></div>',
//     context: {
//       tabs: [
//         {
//           title: "Navigation",
//           showHeader: true,
//           propertyEditors: [
//             {
//               name: "name",
//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Name",
//               },
//             },
//             {
//               name: "title",

//               label: "label",
//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Title",
//               },
//             },
//           ],
//         },
//         {
//           title: "Logic",
//           showHeader: true,
//           propertyEditors: [
//             {
//               name: "name",

//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Name",
//               },
//             },
//             {
//               name: "title",

//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Title",
//               },
//             },
//           ],
//         },
//         {
//           title: "Layout",
//           showHeader: true,
//           propertyEditors: [
//             {
//               name: "name",

//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Name",
//               },
//             },
//             {
//               name: "title",

//               contentTemplateName: "svc-text-editor",
//               editorModel: {
//                 label: "Title",
//               },
//             },
//           ],
//         },
//       ],

//       title: text("Header", "Question Properties"),
//     },
//   };
// };

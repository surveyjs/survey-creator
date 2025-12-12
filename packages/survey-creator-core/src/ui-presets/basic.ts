export const Basic = {
  presetName: "basic",
  json: {
    "tabs": {
      "items": [
        {
          "name": "designer",
          "iconName": "icon-config"
        },
        {
          "name": "preview",
          "iconName": "icon-preview"
        },
        {
          "name": "json",
          "iconName": "icon-codeeditor-24x24"
        }
      ],
      "activeTab": "designer"
    },
  }
} as const;

export default Basic;

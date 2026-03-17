export const Expert = {
  name: "expert",
  json: {
    "tabs": {
      "items": [
        { "name": "designer" },
        { "name": "preview" },
        { "name": "theme" },
        { "name": "logic" },
        { "name": "json" },
        { "name": "translation" }
      ],
      "activeTab": "designer"
    },
    "propertyGrid": { definition: null }
  }
} as const;

export default Expert;

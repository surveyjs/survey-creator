import { getLocaleStrings } from "survey-creator-core";
export const enStrings = {
  languages: {
    title: "Languages",
    navigationTitle: "Languages",
    description: "Select the language of the Survey Creator UI and target\nlanguages for the survey being configured.",
    creatorUI: "Creator UI language",
    surveyLanguages: "Survey languages",
    searchPlaceholder: "Type to search...",
    translateToEnglish: "Translate Survey language names to English"
  },
  tabs: {
    title: "Configure tabs",
    navigationTitle: "Tabs",
    description: "Select the tabs you want to show, reorder them, change their titles,\nand choose the tab that will be active by default.",
    tabs: "Tabs",
    unsortedItems: "Unsorted items",
    defaultTab: "Default tab",
    unsortedDescription: "Drag an item from this column to the left one - it will appear visible in the Tabs panel. You can also move items, using plus (+) and minus (-) buttons.",
    name: "Name",
    titleField: "Title",
    iconName: "Icon name"
  },
  toolbox: {
    title: "Set up the Toolbox",
    navigationTitle: "Toolbox",
    description: "Select the toolbox items you want to show, group them into categories, \nrename them, and change their order if required.",
    toolbox: "Toolbox",
    categories: "Categories",
    unsortedItems: "Unsorted items",
    enableGrouping: "Enable grouping",
    showCategoryTitles: "Show category titles",
    categoryName: "Name",
    categoryTitle: "Title",
    tooltip: "Tooltip",
    iconName: "Icon name",
    jsonObject: "JSON object to apply when users select this toolbox item",
    subcategories: "Subcategories",
    convertToSubcategory: "Convert to subcategory...",
    moveAsSubitem: "Move as a subitem to...",
    moveTo: "Move To...",
    addToToolbox: "Add to Toolbox",
    categories_label: "Categories",
    moveToCategory: "Move to category...",
    moveToNewCategory: "Move to new category",
    deleteCustomItem: "Delete Custom Item",
    removeFrom: "Remove from {0}",
    unsortedDescription: "Drag an item from this column to the left one - it will appear visible in the Toolbox panel. You can also move items, using plus (+) and minus (-) buttons.",
    addCustomCategory: "New Category",
    addCustomItem: "New Item",
    addNewItem: "Add a new item",
    addNewSubitem: "Add a new subitem",
    noRowsText: "There are no items",
    newItem: "New item in",
    newCategory: "New category in",
  },
  propertyGrid: {
    title: "Customize the Property Grid",
    navigationTitle: "Property Grid",
    description: "Select an element to customize its settings available in the Property Grid.",
    selectElement: "Select an element to customize its settings available in the Property Grid",
    propertyGrid: "Property Grid",
    unsortedItems: "Unsorted items",
    categoryName: "Name",
    categoryTitle: "Title",
    iconName: "Icon name",
    name: "Name",
    titleField: "Title",
    descriptionField: "Description",
    unsortedDescription: "Drag an item from this column to the left one - it will appear visible in the Tabs panel. You can also move items, using plus (+) and minus (-) buttons.",
    addCustomCategory: "Add Custom Category"
  },
  editor: {
    title: "Creator Presets",
    presetJson: "Preset JSON:",
    copy: "Copy",
    download: "Download",
    load: "Load",
    saveExit: "Save & Exit",
    back: "Back",
    resetToDefault: "Reset to default",
    resetToDefaults: "All settings restored to default",
    resoredToDefault: "resored to default",
    itemRestoredToDefault: "Item restored to default",
    categoryRestoredToDefault: "Category restored to default",
    edit: "Edit",
    completeText: "Save & Exit",
    pagePrevText: "Back",
    usageExample: `Use the following code to apply the preset:
import { SurveyCreatorModel, CreatorPreset } from "survey-creator-core";
const creator = new SurveyCreatorModel({ ... });

const presetJson = {
  // Copy the JSON object from below
}

const preset = new CreatorPreset(presetJson);
preset.apply(creator);`
  },
  plugin: {
    presetsTab: "Presets",
    creatorPresets: "Ctreator Presets",
    save: "Save & Exit",
    file: "File",
    import: "Import",
    export: "Export",
    edit: "Edit",
    resetLanguages: "Reset Languages to default",
    resetAll: "Reset all changes",
    resetToDefaults: "Reset {0} to defaults"
  }
};
const locale = getLocaleStrings("en");
locale.presets = enStrings;
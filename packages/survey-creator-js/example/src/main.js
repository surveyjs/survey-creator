// Import styles
import "survey-core/survey-core.css"
import "survey-creator-core/survey-creator-core.css"
import "survey-creator-core/ui-preset-editor/index.css"

// Import survey modules
import "survey-core/survey.i18n"
import "survey-creator-core/survey-creator-core.i18n"
import "survey-creator-js/ui-preset-editor"

// Import SurveyCreator and related modules
import { SurveyCreator } from "survey-creator-js"
import { registerSurveyTheme, registerCreatorTheme, registerUIPreset } from "survey-creator-core"
import SurveyThemes from "survey-core/themes"
import SurveyCreatorTheme from "survey-creator-core/themes"
import SurveyCreatorPresets from "survey-creator-core/ui-presets"
import { UIPresetEditor } from "survey-creator-core/ui-preset-editor"

// Register themes
registerSurveyTheme(SurveyThemes)
registerCreatorTheme(SurveyCreatorTheme)
registerUIPreset(SurveyCreatorPresets)

// Create SurveyCreator instance
const creator = new SurveyCreator({
  expandCollapseButtonVisibility: "never",
  showLogicTab: true,
  showTranslationTab: true,
  showJSONEditorTab: false
})

// Apply theme
creator.applyCreatorTheme(SurveyCreatorTheme)

// Store creator instance globally
window.creator = creator

// Initialize UIPresetEditor
new UIPresetEditor(creator)

// Render SurveyCreator
creator.render(document.getElementById("root"))


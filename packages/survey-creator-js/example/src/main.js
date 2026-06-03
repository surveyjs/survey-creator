// Import styles
import "survey-core/survey-core.css"
import "survey-creator-core/survey-creator-core.css"

// Import survey modules
import "survey-core/survey.i18n"
import "survey-creator-core/survey-creator-core.i18n"

// Import SurveyCreator and related modules
import { SurveyCreator } from "survey-creator-js"
import { registerSurveyTheme, registerCreatorTheme } from "survey-creator-core"
import SurveyThemes from "survey-core/themes"
import SurveyCreatorTheme from "survey-creator-core/themes"

// Register themes
registerSurveyTheme(SurveyThemes)
registerCreatorTheme(SurveyCreatorTheme)

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

// Render SurveyCreator
creator.render(document.getElementById("root"))


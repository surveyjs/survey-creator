import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CreatorComponent } from "./creator.component";
import { SurveyAngularModule } from "survey-angular-ui";
import { DesignerTabComponent } from "./tabs/designer.component";
import { SvgBundleComponent } from "./svg-bundle.component";
import { TabbedMenuItemComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu-item.component";
import { TabbledMenuComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu.component";
import { TabbedMenuItemWrapperComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu-item-wrapper.component";
import { SidebarComponent } from "./side-bar/side-bar.component";
import { SidebarTabComponent } from "./side-bar/side-bar-tab.component";
import { ObjectSelectorComponent } from "./property-panel/object-selector.component";
import { PropertyGridComponent } from "./property-panel/property-grid.component";
import { TextareaJsonEditorComponent } from "./tabs/json/json-editor-textarea.component";
import { AceJsonEditorComponent } from "./tabs/json/json-editor-ace.component";
import { LogicTabComponent } from "./tabs/logic/logic.component";
import { LogicAddButtonComponent } from "./tabs/logic/logic-add-btn.component";
import { ActionButtonComponent } from "./components/action-button.component";
import { LinkValueQuestionComponent } from "./questions/question-link-value.component";
import { EmbeddedSurveyQuestionComponent } from "./questions/question-embedded-survey.component";
import { TranslationTabComponent } from "./tabs/translation/translation.component";
import { TranslationSkeletonComponent } from "./tabs/translation/translation-line-skeleton.component";
import { SimulatorComponent } from "./tabs/preview/simulator.component";
import { TestAgainActionComponent } from "./tabs/preview/test-again.component";
import { SurveyResultsComponent } from "./tabs/preview/survey-results.component";
import { SurveyResultsTableRowComponent } from "./tabs/preview/survey-results-row.component";
import { TestTabComponent } from "./tabs/preview/test.component";

@NgModule({
  declarations: [CreatorComponent, DesignerTabComponent, SvgBundleComponent, TabbledMenuComponent, TabbedMenuItemComponent, TabbedMenuItemWrapperComponent, SidebarComponent, SidebarTabComponent, ObjectSelectorComponent, PropertyGridComponent, TextareaJsonEditorComponent, AceJsonEditorComponent, LogicTabComponent, LogicAddButtonComponent, ActionButtonComponent, LinkValueQuestionComponent, EmbeddedSurveyQuestionComponent, TranslationTabComponent, TranslationSkeletonComponent, SimulatorComponent, TestTabComponent, TestAgainActionComponent, SurveyResultsComponent, SurveyResultsTableRowComponent],
  imports: [
    CommonModule, FormsModule, SurveyAngularModule
  ],
  exports: [
    CreatorComponent
  ],
  providers: [],
})
export class SurveyCreatorAngularModule { }

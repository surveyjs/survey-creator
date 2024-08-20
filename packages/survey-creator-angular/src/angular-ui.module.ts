import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CreatorComponent } from "./creator.component";
import { SurveyModule } from "survey-angular-ui";
import { DesignerTabComponent } from "./tabs/designer/designer.component";
import { TabbedMenuItemComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu-item.component";
import { TabbledMenuComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu.component";
import { TabbedMenuItemWrapperComponent } from "./tabbed-menu/tabbed-menu/tabbed-menu-item-wrapper.component";
import { SidebarComponent } from "./side-bar/side-bar.component";
import { SidebarTabComponent } from "./side-bar/side-bar-tab.component";
import { ObjectSelectorComponent } from "./property-panel/object-selector.component";
import { PropertyGridComponent } from "./property-panel/property-grid.component";
import { SearchComponent } from "./property-panel/search.component";
import { TextareaJsonEditorComponent } from "./tabs/json/json-editor-textarea.component";
import { AceJsonEditorComponent } from "./tabs/json/json-editor-ace.component";
import { LogicTabComponent } from "./tabs/logic/logic.component";
import { LogicAddButtonComponent } from "./tabs/logic/logic-add-btn.component";
import { ActionButtonComponent } from "./components/action-button.component";
import { QuestionPgErrorComponent } from "./components/question-error.component";
import { SwitcherComponent } from "./components/switcher.component";
import { LinkValueQuestionComponent } from "./questions/question-link-value.component";
import { EmbeddedSurveyQuestionComponent } from "./questions/question-embedded-survey.component";
import { TranslationTabComponent } from "./tabs/translation/translation.component";
import { TranslationSkeletonComponent } from "./tabs/translation/translation-line-skeleton.component";
import { SimulatorComponent } from "./tabs/preview/simulator.component";
import { TestAgainActionComponent } from "./tabs/preview/test-again.component";
import { SurveyResultsComponent } from "./tabs/preview/survey-results.component";
import { SurveyResultsTableRowComponent } from "./tabs/preview/survey-results-row.component";
import { TestTabComponent } from "./tabs/preview/test.component";
import { ThemeTabComponent } from "./tabs/theme/theme.component";
import { PageDesignerComponent } from "./page.component";
import { AddQuestionButtonComponent } from "./page-add-question.component";
import { QuestionDesignerComponent } from "./question.component";
import { ItemValueDesignerComponent } from "./adorners/item-value.component";
import { ImageItemValueDesignerComponent } from "./adorners/image-item-value.component";
import { QuestionDropdownDesignerComponent, QuestionDropdownAdornerDesignerComponent } from "./adorners/question-dropdown.component";
import { QuestionImageDesignerComponent, QuestionImageAdornerDesignerComponent } from "./adorners/question-image.component";
import { PanelDesignerComponent } from "./panel.component";
import { AdaptiveToolboxComponent } from "./toolbox/adaptive-toolbox.component";
import { ToolboxToolComponent } from "./toolbox/toolbox-tool.component";
import { ToolboxItemComponent } from "./toolbox/toolbox-item.component";
import { ToolboxItemGroupComponent } from "./toolbox/toolbox-item-group.component";
import { ToolboxListComponent } from "./toolbox/toolbox-list.component";
import { ToolboxCategoryComponent } from "./toolbox/toolbox-category.component";
import { StringEditorComponent } from "./string-editor.component";
import { PageNavigatorComponent } from "./page-navigator/page-navigator.component";
import { PageNavigatorItemComponent } from "./page-navigator/page-navigator-item.component";
import { LogicOperatorComponent } from "./questions/logic-operator.component";
import { MatrixCellComponent } from "./adorners/matrix-cell.component";
import { QuestionEditorComponent } from "./question-editor.component";
import { CellQuestionDropdownComponent } from "./adorners/cell-question-dropdown.component";
import { CreatorRowComponent } from "./row.component";
import { DesignerPagesComponent } from "./tabs/designer/designer-pages.component";
import { DesignerSurveyComponent } from "./tabs/designer/designer-survey.component";
import { CellQuestionComponent } from "./adorners/cell-question.component";
import { QuestionWidgetDesignerComponent } from "./question-widget.component";
import { ToolboxComponent } from "./toolbox/toolbox.component";
import { QuestionRatingAdornerDesignerComponent, QuestionRatingDesignerComponent } from "./adorners/question-rating.component";
import { CreatorLogoImageComponent } from "./header/logo-image.component";
import { QuestionSpinEditorComponent } from "./custom-questions/spin-editor.component";
import { ColorItemComponent } from "./custom-questions/color-item.component";
import { QuestionColorComponent } from "./custom-questions/color.component";
import { QuestionFileEditorComponent } from "./custom-questions/file.component";
import { QuestionTextWithResetComponent } from "./custom-questions/text-with-reset.component";
import { QuestionBannerComponent } from "./question-banner.component";
import { JsonErrorItemComponent } from "./tabs/json/json-error-item.component";
import { TranslateFromAction } from "./tabs/translation/translate-from-action.component";

@NgModule({
  declarations: [CreatorComponent, DesignerTabComponent, PageDesignerComponent, QuestionDesignerComponent, PanelDesignerComponent, TabbledMenuComponent, TabbedMenuItemComponent, TabbedMenuItemWrapperComponent, SidebarComponent, SidebarTabComponent, ObjectSelectorComponent, PropertyGridComponent, SearchComponent, TextareaJsonEditorComponent, AceJsonEditorComponent, LogicTabComponent, LogicAddButtonComponent, ActionButtonComponent, QuestionPgErrorComponent, SwitcherComponent, LinkValueQuestionComponent, EmbeddedSurveyQuestionComponent, TranslationTabComponent, TranslationSkeletonComponent, SimulatorComponent, TestTabComponent, TestAgainActionComponent, SurveyResultsComponent, SurveyResultsTableRowComponent, ThemeTabComponent,
    AdaptiveToolboxComponent, ToolboxToolComponent, ToolboxItemComponent, ToolboxItemGroupComponent, ToolboxListComponent, ToolboxCategoryComponent, StringEditorComponent, PageNavigatorComponent, PageNavigatorItemComponent,
    QuestionDropdownDesignerComponent, QuestionDropdownAdornerDesignerComponent, QuestionImageDesignerComponent, QuestionImageAdornerDesignerComponent,
    ItemValueDesignerComponent, ImageItemValueDesignerComponent, LogicOperatorComponent, MatrixCellComponent, QuestionEditorComponent, CellQuestionDropdownComponent, CreatorRowComponent, DesignerPagesComponent, DesignerSurveyComponent, CellQuestionComponent, QuestionWidgetDesignerComponent, ToolboxComponent, CreatorLogoImageComponent,
    QuestionRatingAdornerDesignerComponent, QuestionRatingDesignerComponent, QuestionSpinEditorComponent, ColorItemComponent, QuestionColorComponent, QuestionFileEditorComponent, AddQuestionButtonComponent, QuestionBannerComponent, JsonErrorItemComponent, QuestionTextWithResetComponent, TranslateFromAction],

  imports: [
    CommonModule, FormsModule, SurveyModule
  ],
  exports: [
    CreatorComponent, DesignerTabComponent, PageDesignerComponent, QuestionDesignerComponent, PanelDesignerComponent, TabbledMenuComponent, TabbedMenuItemComponent, TabbedMenuItemWrapperComponent, SidebarComponent, SidebarTabComponent, ObjectSelectorComponent, PropertyGridComponent, SearchComponent, TextareaJsonEditorComponent, AceJsonEditorComponent, LogicTabComponent, LogicAddButtonComponent, ActionButtonComponent, QuestionPgErrorComponent, SwitcherComponent, LinkValueQuestionComponent, EmbeddedSurveyQuestionComponent, TranslationTabComponent, TranslationSkeletonComponent, SimulatorComponent, TestTabComponent, TestAgainActionComponent, SurveyResultsComponent, SurveyResultsTableRowComponent, ThemeTabComponent,
    AdaptiveToolboxComponent, ToolboxToolComponent, ToolboxItemComponent, ToolboxItemGroupComponent, ToolboxListComponent, ToolboxCategoryComponent, StringEditorComponent, PageNavigatorComponent, PageNavigatorItemComponent,
    QuestionDropdownDesignerComponent, QuestionDropdownAdornerDesignerComponent, QuestionImageDesignerComponent, QuestionImageAdornerDesignerComponent,
    ItemValueDesignerComponent, ImageItemValueDesignerComponent, LogicOperatorComponent, MatrixCellComponent, QuestionEditorComponent, CellQuestionDropdownComponent, CreatorRowComponent, DesignerPagesComponent, DesignerSurveyComponent, CellQuestionComponent, QuestionWidgetDesignerComponent, ToolboxComponent, CreatorLogoImageComponent,
    QuestionRatingAdornerDesignerComponent, QuestionRatingDesignerComponent, QuestionSpinEditorComponent, ColorItemComponent, QuestionColorComponent, QuestionFileEditorComponent, AddQuestionButtonComponent, QuestionBannerComponent, JsonErrorItemComponent, QuestionTextWithResetComponent, TranslateFromAction],
  providers: [],
})
export class SurveyCreatorModule { }

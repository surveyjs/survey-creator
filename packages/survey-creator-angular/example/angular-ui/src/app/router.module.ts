import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TestByPageComponent } from "./test/by-page.component";
import { TestCustomWidgetComponent } from "./test/custom-widget.component";
import { TestDefaultComponent } from "./test/default.component";
import { TestDropdownCollapseComponent } from "./test/dropdown-collapse.component";
import { ThemePreviewComponent } from "./test/theme-preview.component";
import { TestThemeSwitcherComponent } from "./test/theme-switcher.component";
import { TestLocalizationComponent } from "./test/localization.component";
import { ThemeTabComponent } from "./test/test-theme-tab.component";
import { NoLicenseComponent } from "./test/test-no-license.component";
import { PresetsComponent } from "./test/presets.component";
import { CreatorThemesComponent } from "./test/creator-themes.component";
import { ExampleComponent } from "./example.component";

const routes = [
  { path: "test-pages/default", component: TestDefaultComponent },
  { path: "test-pages/preview-theme-switcher", component: TestThemeSwitcherComponent },
  { path: "test-pages/theme-for-preview-option", component: ThemePreviewComponent },
  { path: "test-pages/by-page", component: TestByPageComponent },
  { path: "test-pages/widget", component: TestCustomWidgetComponent },
  { path: "test-pages/localized_ui", component: TestLocalizationComponent },
  { path: "test-pages/dropdown-collapse-view", component: TestDropdownCollapseComponent },
  { path: "test-pages/theme-tab", component: ThemeTabComponent },
  { path: "test-pages/no-license", component: NoLicenseComponent },
  { path: "test-pages/presets", component: PresetsComponent },
  { path: "test-pages/creator-themes", component: CreatorThemesComponent }, 
  { path: "", component: ExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
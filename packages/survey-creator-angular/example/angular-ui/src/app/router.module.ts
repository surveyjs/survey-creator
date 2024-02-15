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

const routes = [
  { path: "testCafe/testcafe", component: TestDefaultComponent },
  { path: "testCafe/preview-theme-switcher", component: TestThemeSwitcherComponent },
  { path: "testCafe/theme-for-preview-option", component: ThemePreviewComponent },
  { path: "testCafe/by-page", component: TestByPageComponent },
  { path: "testCafe/testcafe-widget", component: TestCustomWidgetComponent },
  { path: "testCafe/testcafe_localized_ui", component: TestLocalizationComponent },
  { path: "testCafe/dropdown-collapse-view", component: TestDropdownCollapseComponent },
  { path: "testCafe/testcafe-theme-tab", component: ThemeTabComponent },
  { path: "testCafe/testcafe-no-license", component: NoLicenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
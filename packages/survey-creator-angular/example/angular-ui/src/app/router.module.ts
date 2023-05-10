import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TestByPageComponent } from "./test/by-page.component";
import { TestCustomWidgetComponent } from "./test/custom-widget.component";
import { TestDefaultComponent } from "./test/default.component";
import { TestDropdownCollapseComponent } from "./test/dropdown-collapse.component";
import { ThemePreviewComponent } from "./test/theme-preview.component";
import { TestThemeSwitcherComponent } from "./test/theme-switcher.component";
import { TestLocalizationComponent } from "./test/localization.component";

const routes = [
  { path: "testCafe/testcafe.html", component: TestDefaultComponent },
  { path: "testCafe/preview-theme-switcher.html", component: TestThemeSwitcherComponent },
  { path: "testCafe/theme-for-preview-option.html", component: ThemePreviewComponent },
  { path: "testCafe/by-page.html", component: TestByPageComponent },
  { path: "testCafe/testcafe-widget.html", component: TestCustomWidgetComponent },
  { path: "testCafe/testcafe_localized_ui.html", component: TestLocalizationComponent },
  { path: "testCafe/dropdown-collapse-view.html", component: TestDropdownCollapseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TestDefaultComponent } from "./test/default.component";
import { ThemePreviewComponent } from "./test/theme-preview.component";
import { TestThemeSwitcherComponent } from "./test/theme-switcher.component";

const routes = [
  { path: "testCafe/testcafe.html", component: TestDefaultComponent },
  { path: "testCafe/preview-theme-switcher.html", component: TestThemeSwitcherComponent },
  { path: "testCafe/theme-for-preview-option.html", component: ThemePreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
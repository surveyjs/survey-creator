import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SurveyCreatorModule } from "survey-creator-angular";
import { SurveyModule } from "survey-angular-ui";
import { ExampleComponent } from "./example.component";
import { AppRoutingModule } from "./router.module";
import { TestComponent } from "./test/test.component";
import { TestDefaultComponent } from "./test/default.component";
import { TestThemeSwitcherComponent } from "./test/theme-switcher.component";
import { ThemePreviewComponent } from "./test/theme-preview.component";
import { TestByPageComponent } from "./test/by-page.component";
import { TestCustomWidgetComponent } from "./test/custom-widget.component";
import { TestDropdownCollapseComponent } from "./test/dropdown-collapse.component";
import { TestLocalizationComponent } from "./test/localization.component";
import { ThemeTabComponent } from "./test/test-theme-tab.component";
import { NoLicenseComponent } from "./test/test-no-license.component";

@NgModule({
  declarations: [
    AppComponent, ExampleComponent, TestComponent, TestDefaultComponent, TestThemeSwitcherComponent, ThemePreviewComponent, TestByPageComponent, TestCustomWidgetComponent, TestDropdownCollapseComponent, TestLocalizationComponent, ThemeTabComponent, NoLicenseComponent
  ],
  imports: [
    BrowserModule, SurveyCreatorModule, FormsModule, SurveyModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


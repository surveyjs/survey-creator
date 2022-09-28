import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SurveyCreatorAngularModule } from "survey-creator-angular";
import { SurveyAngularModule } from "survey-angular-ui";
import { ExampleComponent } from "./example.component";
import { AppRoutingModule } from "./router.module";
import { TestComponent } from "./test/test.component";
import { TestDefaultComponent } from "./test/default.component";
import { TestThemeSwitcherComponent } from "./test/theme-switcher.component";
import { ThemePreviewComponent } from "./test/theme-preview.component";
import { TestByPageComponent } from "./test/by-page.component";
import { TestCustomWidgetComponent } from "./test/custom-widget.component";

@NgModule({
  declarations: [
    AppComponent, ExampleComponent, TestComponent, TestDefaultComponent, TestThemeSwitcherComponent, ThemePreviewComponent, TestByPageComponent, TestCustomWidgetComponent
  ],
  imports: [
    BrowserModule, SurveyCreatorAngularModule, FormsModule, SurveyAngularModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SurveyCreatorAngularModule } from "survey-creator-angular";
import { SurveyAngularModule } from "survey-angular-ui";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SurveyCreatorAngularModule, FormsModule, SurveyAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


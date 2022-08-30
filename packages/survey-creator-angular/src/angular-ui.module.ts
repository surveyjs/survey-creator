import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CreatorComponent } from "./creator.component";
import { SurveyAngularModule } from "survey-angular-ui";

@NgModule({
  declarations: [CreatorComponent],
  imports: [
    CommonModule, FormsModule, SurveyAngularModule
  ],
  exports: [
    CreatorComponent
  ],
  providers: [],
})
export class SurveyCreatorAngularModule { }

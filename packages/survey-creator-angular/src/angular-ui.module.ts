import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CreatorComponent } from "./creator.component";
import { SurveyAngularModule } from "survey-angular-ui";
import { DesignerTabComponent } from "./tabs/designer.component";

@NgModule({
  declarations: [CreatorComponent, DesignerTabComponent],
  imports: [
    CommonModule, FormsModule, SurveyAngularModule
  ],
  exports: [
    CreatorComponent
  ],
  providers: [],
})
export class SurveyCreatorAngularModule { }

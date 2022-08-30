import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CreatorComponent } from "./creator.component";

@NgModule({
  declarations: [CreatorComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    CreatorComponent
  ],
  providers: [],
})
export class SurveyCreatorAngularModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SurveyModule } from "survey-angular-ui";

// Import presets components
import { TabPresetsComponent } from "./presets.component";
import { PresetsIconItemComponent } from "./presets-icon-item.component";
import { PresetsPropertyGridWrapperComponent } from "./presets-property-grid.component";

@NgModule({
  declarations: [
    TabPresetsComponent,
    PresetsIconItemComponent,
    PresetsPropertyGridWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SurveyModule
  ],
  exports: [
    TabPresetsComponent,
    PresetsIconItemComponent,
    PresetsPropertyGridWrapperComponent
  ]
})
export class PresetsModule { }

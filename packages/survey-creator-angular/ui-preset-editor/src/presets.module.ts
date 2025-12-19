import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    TabPresetsComponent,
    PresetsIconItemComponent,
    PresetsPropertyGridWrapperComponent
  ]
})
export class PresetsModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SurveyModule } from "survey-angular-ui";
import { SurveyCreatorModule } from "survey-creator-angular";
import { TestRichTextComponent } from "./rich-text.component";

@NgModule({
  declarations: [TestRichTextComponent],
  imports: [
    CommonModule,
    SurveyModule,
    SurveyCreatorModule,
    RouterModule.forChild([{ path: "", component: TestRichTextComponent }])
  ]
})
export class RichTextPageModule { }

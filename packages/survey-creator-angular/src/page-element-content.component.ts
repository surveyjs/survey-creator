import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PageModel, SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "svc-page-element-content",
  template: "<page [model]=\"model\" [survey]=\"survey\" [creator]=\"creator\"></page>",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageElementContentComponent {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  @Input() creator!: SurveyCreatorModel;
}
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "svc-page-element-content",
  template: "<ng-template #template><page [model]=\"model\" [survey]=\"survey\"></page></ng-template>",
  styles: [":host { display: none }"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageElementContentComponent extends EmbeddedViewContentComponent {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
}
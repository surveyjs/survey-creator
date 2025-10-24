import { AfterViewInit, Component, DoCheck, Input, OnChanges, SimpleChanges } from "@angular/core";
import { EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";

@Component({
  selector: "svc-page-element-content",
  template: "<ng-template #template><page [model]=\"model\" [survey]=\"survey\"></page></ng-template>",
  styles: [":host { display: none }"]
})
export class PageElementContentComponent extends EmbeddedViewContentComponent implements OnChanges {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  override ngDoCheck() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.embeddedView?.reattach();
  }
}
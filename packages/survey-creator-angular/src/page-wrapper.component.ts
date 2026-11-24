import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from "@angular/core";
import { BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "svc-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styles: [":host { display: none; }"]
})
export class PageWrapperComponent extends BaseAngular implements OnInit, OnChanges, OnDestroy {
  @Input() page?: PageModel;
  @Input() isGhost?: boolean;
  @Input() creator!: SurveyCreatorModel;
  @Input() className!: string;
  protected getModel() { return null as any; }
}

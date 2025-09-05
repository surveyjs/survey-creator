import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from "@angular/core";
import { EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "svc-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styles: [":host { display: none; }"]
})
export class PageWrapperComponent extends EmbeddedViewContentComponent implements OnInit, OnChanges, OnDestroy {
  private static ID = 0;
  private id = `PageWrapperCallback_${++PageWrapperComponent.ID}`;
  @Input() page?: PageModel;
  @Input() isGhost?: boolean;
  @Input() creator!: SurveyCreatorModel;
  @Input() className!: string;
  constructor(viewContainerRef: ViewContainerRef, private changeDetectorRef: ChangeDetectorRef) {
    super(viewContainerRef);
  }
  private setupCallback(page?: PageModel) {
    if (!page) return;
    page.registerFunctionOnPropertyValueChanged("name", () => {
      this.embeddedView ? this.embeddedView.detectChanges() : this.changeDetectorRef.detectChanges();
    }, this.id);
  }
  private clearCallback(page?: PageModel) {
    if (!page) return;
    page.unRegisterFunctionOnPropertyValueChanged("name");
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.page && changes.page.currentValue !== changes.page.previousValue) {
      this.clearCallback(changes.page.previousValue);
      this.setupCallback(changes.page.currentValue);
    }
  }
  ngOnDestroy() {
    this.clearCallback(this.page);
  }
}

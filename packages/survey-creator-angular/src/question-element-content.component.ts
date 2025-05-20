import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-question-element-content",
  template: "<ng-template #template><ng-template [component]=\"{ name: componentName, data: componentData }\"></ng-template></ng-template>",
  styles: [":host { display: none }"]
})
export class QuestionElementContentComponent extends EmbeddedViewContentComponent implements AfterViewInit, OnChanges {
  @Input() componentName!: string;
  @Input() componentData!: any;
  ngAfterViewInit() {
    this.embeddedView?.detach();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.embeddedView?.detectChanges();
  }
}
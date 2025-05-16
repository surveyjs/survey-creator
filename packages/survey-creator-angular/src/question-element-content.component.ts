import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "svc-question-element-content",
  template: "<ng-template [component]=\"{ name: componentName, data: componentData }\"></ng-template>",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionElementContentComponent {
  @Input() componentName!: string;
  @Input() componentData!: any;
}
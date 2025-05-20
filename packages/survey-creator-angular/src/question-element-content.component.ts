import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-question-element-content",
  template: "<ng-template #template><ng-template [component]=\"{ name: componentName, data: componentData }\"></ng-template></ng-template>",
  styles: [":host { display: none }"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionElementContentComponent extends EmbeddedViewContentComponent {
  @Input() componentName!: string;
  @Input() componentData!: any;
}
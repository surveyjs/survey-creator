import { AfterViewInit, Component, ElementRef, Input, OnDestroy } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ComponentContainerModel } from "survey-creator-core";

@Component({
  selector: "svc-component-container",
  templateUrl: "./component-container.component.html",
  styles: [":host { display: none; }"]
})
export class ComponentContainerComponent extends EmbeddedViewContentComponent implements AfterViewInit, OnDestroy {
  @Input() model!: ComponentContainerModel;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    const root = this.elementRef?.nativeElement as HTMLElement;
    if (root) {
      this.model.attachScrollListener(root);
    }
  }

  ngOnDestroy(): void {
    this.model?.detachScrollListener();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-component-container", ComponentContainerComponent);
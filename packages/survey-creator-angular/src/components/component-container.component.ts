import { AfterViewInit, Component, Input, OnDestroy, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ComponentContainerModel } from "survey-creator-core";

@Component({
  selector: "svc-component-container",
  templateUrl: "./component-container.component.html",
  styles: [":host { display: none; }"]
})
export class ComponentContainerComponent extends EmbeddedViewContentComponent implements AfterViewInit, OnDestroy {
  @Input() model!: ComponentContainerModel;

  constructor(viewContainerRef?: ViewContainerRef) {
    super(viewContainerRef);
  }

  private findScrollRoot(): HTMLElement | null {
    const nodes = this.embeddedView?.rootNodes ?? [];
    for (const node of nodes) {
      if (!(node instanceof HTMLElement)) continue;
      if (node.classList?.contains("sv-scroll__scroller")) return node;
      const found = node.querySelector?.(".sv-scroll__scroller") as HTMLElement | null;
      if (found) return node;
    }
    return null;
  }

  ngAfterViewInit(): void {
    const root = this.findScrollRoot();
    if (root) {
      this.model.attachScrollListener(root);
    }
  }

  ngOnDestroy(): void {
    this.model?.detachScrollListener();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-component-container", ComponentContainerComponent);
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

// See the React FloatingPanel for what this renders. Markup only: the root node
// is handed to the model and the header's raw pointerdown is forwarded from the
// template; geometry, listeners, focus and hiding all live in the model.
@Component({
  selector: "svc-floating-panel",
  templateUrl: "./floating-panel.component.html",
  styles: [":host { display: none; }"]
})
export class FloatingPanelComponent extends BaseAngular {
  @Input() model: any;
  @ViewChild("root") root!: ElementRef<HTMLElement>;

  getModel() {
    return this.model;
  }

  ngAfterViewInit(): void {
    if (!!this.root?.nativeElement) {
      this.model.setComponentElement(this.root.nativeElement);
    }
  }
  override ngOnDestroy(): void {
    this.model.resetComponentElement();
    super.ngOnDestroy();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-floating-panel", FloatingPanelComponent);

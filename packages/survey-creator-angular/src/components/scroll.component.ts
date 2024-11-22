import { ScrollViewModel } from "survey-creator-core";
import { Component, ElementRef, OnDestroy, ViewChild, AfterViewInit, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-scroll",
  templateUrl: "./scroll.component.html",
  styles: [":host { display: none; }"]
})
export class ScrollComponent extends EmbeddedViewContentComponent implements AfterViewInit, OnDestroy {
  public model!: ScrollViewModel;
  @ViewChild("container") container!: ElementRef<HTMLElement>
  constructor(viewContainerRef?: ViewContainerRef) {
    super(viewContainerRef);
    this.model = new ScrollViewModel();
  }
  ngAfterViewInit() {
    this.model.setRootElement(this.container?.nativeElement as HTMLDivElement);
  }
  ngOnDestroy(): void {
    this.model.setRootElement(undefined as any);
    this.model.unsubscribeRootElement();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-scroll", ScrollComponent);
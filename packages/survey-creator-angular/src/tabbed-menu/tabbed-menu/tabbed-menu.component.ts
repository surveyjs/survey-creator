import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { TabbedMenuContainer, TabbedMenuItem } from "survey-creator-core";

@Component({
  selector: "svc-tabbed-menu",
  templateUrl: "./tabbed-menu.component.html",
  styles: [":host { display: none; }"]
})
export class TabbledMenuComponent extends BaseAngular<TabbedMenuContainer> implements AfterViewInit {
  @Input() model!: TabbedMenuContainer;
  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
  protected getModel(): TabbedMenuContainer {
    return this.model;
  }
  ngAfterViewInit(): void {
    this.model.initResponsivityManager(this.container.nativeElement);
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.resetResponsivityManager();
  }
  trackItemBy(_: number, item: TabbedMenuItem) {
    return item.renderedId;
  }

}
AngularComponentFactory.Instance.registerComponent("svc-tabbed-menu", TabbledMenuComponent);
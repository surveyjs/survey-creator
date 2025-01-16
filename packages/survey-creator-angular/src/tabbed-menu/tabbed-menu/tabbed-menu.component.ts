import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { ResponsivityManager } from "survey-core";
import { TabbedMenuContainer, TabbedMenuItem } from "survey-creator-core";

@Component({
  selector: "svc-tabbed-menu",
  templateUrl: "./tabbed-menu.component.html",
  styles: [":host { display: none; }"]
})
export class TabbledMenuComponent extends BaseAngular<TabbedMenuContainer> implements AfterViewInit {
  @Input() model!: TabbedMenuContainer;
  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
  private responsivityManager!: ResponsivityManager;
  protected getModel(): TabbedMenuContainer {
    return this.model;
  }
  ngAfterViewInit(): void {
    this.responsivityManager = new ResponsivityManager(
      this.container.nativeElement,
      this.model);
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.responsivityManager.dispose();
  }
  trackItemBy(_: number, item: TabbedMenuItem) {
    return item.renderedId;
  }

}
AngularComponentFactory.Instance.registerComponent("svc-tabbed-menu", TabbledMenuComponent);
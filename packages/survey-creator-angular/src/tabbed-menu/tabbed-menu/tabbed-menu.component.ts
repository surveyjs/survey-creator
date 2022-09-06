import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { ResponsivityManager } from "survey-core";
import { TabbedMenuContainer } from "survey-creator-core";

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
      this.model,
      ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content"
    );
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.responsivityManager.dispose();
  }

}
AngularComponentFactory.Instance.registerComponent("svc-tabbed-menu", TabbledMenuComponent);
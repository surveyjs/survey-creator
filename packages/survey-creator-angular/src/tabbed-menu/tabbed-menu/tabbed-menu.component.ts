import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { TabbedMenuContainer, TabbedMenuItem } from "survey-creator-core";

@Component({
  selector: "svc-tabbed-menu",
  templateUrl: "./tabbed-menu.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class TabbledMenuComponent extends BaseAngular<TabbedMenuContainer> {
  @Input() model!: TabbedMenuContainer;
  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
  protected getModel(): TabbedMenuContainer {
    return this.model;
  }
  private initResponsivityManager() {
    if (this.container?.nativeElement) {
      this.model.initResponsivityManager(this.container.nativeElement);
    }
  }
  protected override afterViewInit(): void {
    this.initResponsivityManager();
  }
  protected override afterUpdate(isSync?: boolean): void {
    super.afterUpdate(isSync);
    this.initResponsivityManager();
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
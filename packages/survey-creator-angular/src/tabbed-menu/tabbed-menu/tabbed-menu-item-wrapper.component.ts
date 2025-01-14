import { Component, Input, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { TabbedMenuItem } from "survey-creator-core";

@Component({
  selector: "svc-tabbed-menu-item-wrapper",
  templateUrl: "./tabbed-menu-item-wrapper.component.html",
  styles: [":host { display: none; }"]
})
export class TabbedMenuItemWrapperComponent extends BaseAngular<TabbedMenuItem> implements AfterViewInit {
  @Input() model!: TabbedMenuItem;
  @ViewChild("container") container!: ElementRef<HTMLElement>;
  protected getModel(): TabbedMenuItem {
    return this.model;
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.updateModeCallback = undefined as any;
  }
  ngAfterViewInit(): void {
    if(this.model) {
      this.model.updateModeCallback = (mode, callback) => {
        this.model.mode = mode;
        queueMicrotask(() => {
          callback(mode, this.container?.nativeElement);
        });
      };
      this.model.afterRender();
    }
  }

}
import { SidebarModel } from "survey-creator-core";
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-side-bar",
  templateUrl: "./side-bar.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarComponent extends BaseAngular<SidebarModel> implements AfterViewInit {
  @Input() model!: SidebarModel;
  @ViewChild("container") container!: ElementRef<HTMLElement>;
  protected getModel(): SidebarModel {
    return this.model;
  }

  override ngOnDestroy(): void {
    this.model.resetResizeManager();
    super.ngOnDestroy();
  }
  ngAfterViewInit(): void {
    this.model.initResizeManager(this.container.nativeElement as HTMLDivElement);
  }
}
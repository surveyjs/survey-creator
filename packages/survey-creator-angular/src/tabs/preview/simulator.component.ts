import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, ViewContainerRef } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { SurveySimulatorModel } from "survey-creator-core";

@Component({
  selector: "survey-simulator",
  templateUrl: "./simulator.component.html",
  styles: [":host { display: none; }"]
})
export class SimulatorComponent extends BaseAngular<SurveySimulatorModel> implements AfterViewInit, OnDestroy {
  @Input() model!: SurveySimulatorModel;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    viewContainerRef: ViewContainerRef
  ) {
    super(changeDetectorRef, viewContainerRef);
  }

  /**
   * `BaseAngular` defers updates while `model.isRendering` is true during `ngDoCheck`, so
   * `popupOverlayHeight` (and frame-driving props) would not refresh the embedded template in time.
   * These properties must run synchronous `detectChanges` so `[style.--sv-popup-overlay-height]` applies.
   */
  protected override getPropertiesToUpdateSync(): Array<string> {
    return ["popupOverlayHeight", "landscape", "device", "survey"];
  }

  ngAfterViewInit(): void {
    this.model.queueSurveyLayoutRefresh();
  }

  override ngOnDestroy(): void {
    this.model.cancelSurveyLayoutRefresh();
    super.ngOnDestroy();
  }

  protected override afterUpdate(isSync: boolean = false): void {
    super.afterUpdate(isSync);
    this.model.queueSurveyLayoutRefresh();
  }

  protected getModel(): SurveySimulatorModel {
    return this.model;
  }
  public get simulatorFrame(): any {
    return this.model.simulatorFrame;
  }
  activateZoom() {
    if (this.model.device !== "desktop") {
      this.model.activateZoom();
    }
  }
  deactivateZoom() {
    if (this.model.device !== "desktop") {
      this.model.deactivateZoom();
    }
  }
}

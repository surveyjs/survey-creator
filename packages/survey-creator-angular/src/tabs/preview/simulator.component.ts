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
  private layoutRafId = 0;
  private simulatorLayoutRefreshDisposed = false;

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
    this.simulatorLayoutRefreshDisposed = false;
    this.queueSurveyLayoutRefresh();
  }

  override ngOnDestroy(): void {
    this.simulatorLayoutRefreshDisposed = true;
    this.cancelLayoutRaf();
    super.ngOnDestroy();
  }

  private cancelLayoutRaf(): void {
    const win = typeof window !== "undefined" ? window : undefined;
    const caf = win?.cancelAnimationFrame?.bind(win);
    if (this.layoutRafId && caf) {
      caf(this.layoutRafId);
    }
    this.layoutRafId = 0;
  }

  /**
   * Survey responsiveness uses root width after the simulator shell layout updates.
   * Defer to the next frame so Angular has applied frame sizes and CSS bindings.
   */
  private queueSurveyLayoutRefresh(): void {
    if (this.simulatorLayoutRefreshDisposed) return;
    const win = typeof window !== "undefined" ? window : undefined;
    const raf = win?.requestAnimationFrame?.bind(win);
    const caf = win?.cancelAnimationFrame?.bind(win);
    if (!raf) {
      this.model?.survey?.forceProcessResponsiveness();
      return;
    }
    if (this.layoutRafId && caf) {
      caf(this.layoutRafId);
    }
    this.layoutRafId = raf(() => {
      this.layoutRafId = 0;
      if (this.simulatorLayoutRefreshDisposed) return;
      this.model?.survey?.forceProcessResponsiveness();
    });
  }

  protected override afterUpdate(isSync: boolean = false): void {
    super.afterUpdate(isSync);
    this.queueSurveyLayoutRefresh();
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

import { AfterViewInit, Component, Input, OnDestroy } from "@angular/core";
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

  private readonly onSimulatorPropertyChanged = (_sender: unknown, options: { name: string }): void => {
    const n = options.name;
    if (n !== "popupOverlayHeight" && n !== "landscape" && n !== "device" && n !== "survey") {
      return;
    }
    this.queueSurveyLayoutRefresh();
  };

  ngAfterViewInit(): void {
    this.simulatorLayoutRefreshDisposed = false;
    this.model.onPropertyChanged.add(this.onSimulatorPropertyChanged);
    this.queueSurveyLayoutRefresh();
  }

  override ngOnDestroy(): void {
    this.simulatorLayoutRefreshDisposed = true;
    this.model?.onPropertyChanged.remove(this.onSimulatorPropertyChanged);
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
   * Run after the current frame (and once more on the next) so Angular has applied [ngStyle] and frame sizes.
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
      raf(() => {
        if (this.simulatorLayoutRefreshDisposed) return;
        this.model?.survey?.forceProcessResponsiveness();
      });
    });
  }

  protected getModel(): SurveySimulatorModel {
    return this.model;
  }
  public get simulatorFrame(): any {
    return this.model.simulatorFrame;
  }
  public get simulatorShellStyle(): { [key: string]: string } | null {
    const h = this.model.popupOverlayHeight;
    return h ? { "--sv-popup-overlay-height": h } : null;
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

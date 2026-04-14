import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SurveySimulatorModel } from "survey-creator-core";

@Component({
  selector: "survey-simulator",
  templateUrl: "./simulator.component.html",
  styles: [":host { display: none; }"]
})
export class SimulatorComponent extends BaseAngular<SurveySimulatorModel> {
  @Input() model!: SurveySimulatorModel;
  private layoutRafId = 0;
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
  public override ngAfterViewChecked(): void {
    super.ngAfterViewChecked();
    const win = typeof window !== "undefined" ? window : undefined;
    const raf = win?.requestAnimationFrame?.bind(win);
    const caf = win?.cancelAnimationFrame?.bind(win);
    if (!raf) {
      this.model.survey?.forceProcessResponsiveness();
      return;
    }
    if (this.layoutRafId && caf) {
      caf(this.layoutRafId);
    }
    this.layoutRafId = raf(() => {
      this.layoutRafId = 0;
      this.model?.survey?.forceProcessResponsiveness();
    });
  }
}
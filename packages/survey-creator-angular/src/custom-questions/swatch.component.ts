import { Component, Input } from "@angular/core";

@Component({
  selector: "svc-swatch",
  templateUrl: "./swatch.component.html",
})
export class SwatchComponent {
  @Input() color!: string;
  @Input() showIcon?: boolean;
  @Input() className?: string;
  @Input() swatchIcon?: string;
  @Input() iconClassName?: string;
  @Input() colorInputClassName?: string;
  @Input() colorInputValue?: string;
  @Input() inputDisabled?: boolean;
  @Input() colorInputChange?: (event: Event) => void;
  @Input() arias?: { [index: string]: any };

  get rootClassName(): string {
    return this.className ?? "sd-color-swatch";
  }
  get rootStyle(): { [index: string]: string } {
    return { backgroundColor: this.color };
  }
  get isPicker(): boolean {
    return !!this.colorInputChange;
  }
  get iconName(): string {
    return this.swatchIcon ?? "icon-dropper-16x16";
  }
  get iconClass(): string {
    return this.iconClassName ?? "sd-color-swatch__icon";
  }
}

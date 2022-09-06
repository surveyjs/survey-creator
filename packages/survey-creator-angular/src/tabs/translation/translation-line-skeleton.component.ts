import { Component } from "@angular/core";
import { AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "sd-translation-line-skeleton",
  templateUrl: "./translation-line-skeleton.component.html",
  styles: [":host { display: none; }"]
})
export class TranslationSkeletonComponent { }
AngularComponentFactory.Instance.registerComponent("sd-translation-line-skeleton", TranslationSkeletonComponent);


import { Component } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "sd-translation-line-skeleton",
  templateUrl: "./translation-line-skeleton.component.html",
  styles: [":host { display: none; }"]
})
export class TranslationSkeletonComponent extends EmbeddedViewContentComponent { }
AngularComponentFactory.Instance.registerComponent("sd-translation-line-skeleton", TranslationSkeletonComponent);


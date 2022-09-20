import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [":host { position: fixed; top: 0; bottom: 0; right: 0; left: 0;}"]
})
export class AppComponent {
  public isTest = !!(<any>window)["%hammerhead%"];
}

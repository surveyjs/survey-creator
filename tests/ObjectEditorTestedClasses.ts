import * as ko from "knockout";
import * as Survey from "survey-knockout";

export class Car {
    public name: string;
    private titleValue: string;
    public getType(): string { return "car"; }
    public get title(): string { return (this.titleValue) ? this.titleValue : this.name; }
    public set title(newValue: string) {   this.titleValue = newValue;  }
}
export class FastCar extends Car {
    public getType(): string { return "fast"; }
}
export class BigCar extends Car {
    public getType(): string { return "big"; }
}
export class SportCar extends FastCar {
    public maxSpeed: number;
    public getType(): string { return "sport"; }
}
export class Truck extends BigCar {
    public maxWeight: number;
    public getType(): string { return "truck"; }
}
export class TruckDefaultValue extends Truck {
    private truckTitleValue: string;
    public isNew: boolean;
    public getType(): string { return "truckDefault"; }
    public get truckTitle(): string {
        return "!" + this.truckTitleValue + "!";
    }
    public set truckTitle(value: string) {
        this.truckTitleValue = value;
    }
}

Survey.JsonObject.metaData.addClass("fast", [], function () { return new FastCar(); }, "car");
Survey.JsonObject.metaData.addClass("big", [], null, "car");
Survey.JsonObject.metaData.addClass("car", ["name", { name: "title:text", onGetValue: function (obj: any) { return obj.titleValue; } }]);
Survey.JsonObject.metaData.addClass("truck", ["maxWeight:number"], function () { return new Truck(); }, "big");
Survey.JsonObject.metaData.addClass("sport", ["!maxSpeed:number"], function () { return new SportCar(); }, "fast");
Survey.JsonObject.metaData.addClass("truckDefault", ["isNew:boolean", { name: "truckTitle:string", onGetValue: function (obj: any) { return obj.truckTitleValue; } }],
    function () { return new TruckDefaultValue(); }, "truck");
import * as Survey from "surveyjs";

export class Car {
    public name: string;
    public getType(): string { return "car"; }
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
    private titleValue: string;
    public isNew: boolean;
    public getType(): string { return "truckDefault"; }
    public get title(): string {
        return "!" + this.titleValue + "!";
    }
    public set title(value: string) {
        this.titleValue = value;
    }
}

Survey.JsonObject.metaData.addClass("fast", [], function () { return new FastCar(); }, "car");
Survey.JsonObject.metaData.addClass("big", [], null, "car");
Survey.JsonObject.metaData.addClass("car", ["name"]);
Survey.JsonObject.metaData.addClass("truck", ["maxWeight:number"], function () { return new Truck(); }, "big");
Survey.JsonObject.metaData.addClass("sport", ["!maxSpeed:number"], function () { return new SportCar(); }, "fast");
Survey.JsonObject.metaData.addClass("truckDefault", ["isNew:boolean", "title:string"], function () { return new TruckDefaultValue(); }, "truck");

//TODO add onGetValue into the line above.
var properties = Survey.JsonObject.metaData.getProperties("truckDefault");

for (var i = 0; i < properties.length; i++) {
    if (properties[i].name == "title") {
        properties[i].onGetValue = function (obj: any) { return obj.titleValue; };
        break;
    }
}

//Survey.JsonObject.metaData.setPropertyValues("truckDefault", "title", null, null, function (obj: any) { return obj.titleValue; });
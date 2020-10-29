import * as ko from "knockout";
import * as Survey from "survey-knockout";

export class Car extends Survey.Base {
  public name: string;
  private titleValue: string;
  public getType(): string {
    return "car";
  }
  public get title(): string {
    return this.titleValue ? this.titleValue : this.name;
  }
  public set title(newValue: string) {
    this.titleValue = newValue;
  }
}
export class FastCar extends Car {
  public getType(): string {
    return "fast";
  }
}
export class BigCar extends Car {
  public getType(): string {
    return "big";
  }
}
export class SportCar extends FastCar {
  public maxSpeed: number;
  public getType(): string {
    return "sport";
  }
}
export class Truck extends BigCar {
  public maxWeight: number;
  public getType(): string {
    return "truck";
  }
}
export class TruckDefaultValue extends Truck {
  private truckTitleValue: string;
  public getType(): string {
    return "truckDefault";
  }
  public get truckTitle(): string {
    return "!" + this.truckTitleValue + "!";
  }
  public set truckTitle(value: string) {
    this.truckTitleValue = value;
  }
  public get isNew(): boolean {
    return this.getPropertyValue("isNew");
  }
  public set isNew(val: boolean) {
    this.setPropertyValue("isNew", val);
  }
}

Survey.Serializer.addClass(
  "fast",
  [],
  function() {
    return new FastCar();
  },
  "car"
);
Survey.Serializer.addClass("big", [], null, "car");
Survey.Serializer.addClass("car", [
  "name",
  {
    name: "title:text",
    onGetValue: function(obj: any) {
      return obj.titleValue;
    }
  }
]);
Survey.Serializer.addClass(
  "truck",
  ["maxWeight:number"],
  function() {
    return new Truck();
  },
  "big"
);
Survey.Serializer.addClass(
  "sport",
  ["!maxSpeed:number"],
  function() {
    return new SportCar();
  },
  "fast"
);
Survey.Serializer.addClass(
  "truckDefault",
  [
    "isNew:boolean",
    {
      name: "truckTitle:string",
      onGetValue: function(obj: any) {
        return obj.truckTitleValue;
      }
    }
  ],
  function() {
    return new TruckDefaultValue();
  },
  "truck"
);


// class diff between ts and js
class Vehicle {

  constructor(public color: string) {

  }

  protected honk() {
    console.log('beep')
  }

}

// ts call the constructor
class MCar extends Vehicle {


  constructor(public wheels: number, color: string) {
    super(color)
  }

  // overide
  private drive(): void {
    console.log('vroom');
  }

  startDriving() {
    this.drive();
    this.honk()
  }
}






const vehicle = new Vehicle('white');
console.log(vehicle.color);

const car2 = new MCar(4, 'red');

// vehicle.drive();
// vehicle.honk(); not able to do it



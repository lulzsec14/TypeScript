class Vechicle {
  // drive(): void {
  //   console.log('dug dug');
  // }

  protected honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vechicle {
  speed(): void {
    console.log('Speed is 165kmph');
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vechicle();
// vehicle.drive();
// vehicle.honk();

const car1 = new Car();
car1.speed();
car1.startDrivingProcess();

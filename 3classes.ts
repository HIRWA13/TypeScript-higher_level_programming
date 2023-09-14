// classes in typescript:
// classes are blueprints of objects.
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');
console.log(accounting)

class Point {
    x = 0;
    y = 0;
  }
   
  const pt = new Point();
  // Prints 0, 0
  console.log(`${pt.x}, ${pt.y}`);


  class GoodGreeter {
    name: string;
   
    constructor() {
      this.name = "hello";
    }
  }

  class Greeter {
    readonly name: string = "world";
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }
   
    err() {
      this.name = "not ok";
    }
  }
  const g = new Greeter();
  g.name = "also not ok";
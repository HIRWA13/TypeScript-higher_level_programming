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
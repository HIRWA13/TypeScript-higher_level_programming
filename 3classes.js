// classes in typescript:
// classes are blueprints of objects.
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var accounting = new Department('Accounting');
console.log(typeof accounting);

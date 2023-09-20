// interface is astructure that defines a contract or templates in your application

// they can be used to define the syntax for classes, objects, functions, etc 

// the typescript compiler does not compile interfaces into javascript instead it uses interfaces for typechecking. this is called `duck typing` or `structural typing`

// we define an interface by using `interface` keyword and we can give it properties and methods that we want our class/object to have.

// example: 

interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (salary:number) => number // arrow function that will return a number
    getManagerName(code:number):number
}

// INTERFACES AS TYPES:

// we can use interfaces to define types of variables

// example: 

interface KeyPair {
    key: number;
    value: string;
}

// each variable with interface type `KeyPair` will be supposed to have a structure of KeyPair, 

let kv1: KeyPair = {key: 1, value: "steven"} // this is okay
let kv2: KeyPair = {key: 2, val: "ange"} // this is not okay because it must match the KeyPair interface.

// OPTIONAL PROPERTIES: 

// sometimes, we may declare an interface with excess propertie but in the end we can end up not using them all and even we may not expect all the objects to define all the properties of the interface but here typescript can yell at us because we are not following the exact structure of an interface.

// so to fix this, typescript introuced a way of declaring optional properties. To make a property optional we add a "?" on it so that Objects of the interface may or may not define these properties

// ecxample: 

interface IEmployee2 {
    empCode: number;
    empName: string;
    empDept?: string;
}

let empObj:IEmployee2 = { // this is ok
    empCode: 1,
    empName: "steve"
}

let empObj2:IEmployee2 = { // this one also is ok
    empCode: 2,
    empName: 'Carla',
    empDept: 'IT'
}

// Typescript READONLY Interface Poperties:

// we can also be able to use interface to make a property readonly this means that once a property is assigned a value, it cannot be changed

// example:

interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen = {SSN: 110555444, name: 'James Bond'}

personObj.name = 'Steve Smith' // this is okay
personObj.SSN = 22222222223 // this is not okay
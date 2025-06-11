"use strict";
class Staff {
}
const staffoneObj = new Staff();
console.log(staffoneObj);
staffoneObj.hasnrc = true;
staffoneObj.hasnrc = false;
console.log(staffoneObj);
const stafftwoObj = new Staff();
console.log(stafftwoObj);
stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.gasgirlfriend = false;
console.log(stafftwoObj);
class People {
    constructor() {
        this.name = "Maung Maung";
        this.email = "mgmg@gmail.com";
    }
}
const peopleObj = new People();
console.log(peopleObj);
peopleObj.address = "Mandalay";
console.log(peopleObj);
console.log(peopleObj.city);
class Employee {
    constructor() {
        this.name = "Yu Yu";
    }
}
const employeeObj = new Employee();
console.log(employeeObj);
employeeObj.hasnrc = true;
employeeObj.hascar = false;
employeeObj.department = "IT Department";
console.log(employeeObj);
console.log(employeeObj.hascar);
console.log(employeeObj.department);

"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayhi() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const personObj = new Person('Aung Aung');
personObj.sayhi();
class MathUtil {
    static square(num) {
        return num * num;
    }
}
console.log(MathUtil.square(2));
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I\'m ${this.name} and I\'m ${this.age} years old.`);
    }
    static isover18(age) {
        return age >= 18;
    }
}
const peopleObj = new People(`Yoon Yoon`, 20);
peopleObj.introduce();
console.log(People.isover18(20));
console.log(People.isover18(15));
class NumCounter {
    static increment() {
        NumCounter.count++;
    }
    static showresult() {
        console.log(`Total Count is = ${NumCounter.count}`);
    }
}
NumCounter.count = 0;
NumCounter.showresult();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
class Staff {
    constructor(name) {
        this.name = name;
        Staff.totalstaff++;
    }
    static showtotal() {
        console.log(`Total staff = ${Staff.totalstaff}`);
    }
}
Staff.totalstaff = 0;
const staffObj1 = new Staff("Su Su");
const staffObj2 = new Staff("Yu Yu");
const staffObj3 = new Staff("Nu Nu");
Staff.showtotal();
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        console.log(`I\'m ${this.name} and I\'m ${this.age} years old.`);
    }
    static agefilter(age) {
        return age >= 18;
    }
}
const employeeObj = new Employee("Hnin Hini", 20);
employeeObj.intro();
console.log(Employee.agefilter(25));
console.log(Employee.agefilter(17));

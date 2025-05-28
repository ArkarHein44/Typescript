"use strict";
class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    content() {
        console.log("Phone, Email are not available.");
    }
}
const studentObj = new Student(1001, "Su Su", 18);
console.log(studentObj);
console.log(typeof studentObj);
console.log(studentObj.id);
console.log(studentObj.name);
console.log(studentObj.age);
studentObj.content();

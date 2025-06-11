"use strict";
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        this._name = newname;
        if (newname.length > 0) {
            this._name = newname;
        }
        else {
            console.log("New Name cannot be empty.");
        }
    }
}
const personObj = new Person("Hsu Hsu");
console.log(personObj);
console.log(personObj.name);
personObj.name = "Su Su";
console.log(personObj.name);
class Student {
    constructor(id, name, age, hasnrc, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this._hasnrc = hasnrc;
        this.phone = phone;
    }
    content() {
        console.log("Email is available.");
    }
    getage() {
        return this.age;
    }
    get hasnrc() {
        return this._hasnrc;
    }
    set hasnrc(value) {
        this._hasnrc = value;
    }
}
const studentObj = new Student(1001, "Kyaw Kyaw", 18, true);
console.log(studentObj);
studentObj.name = "Naw Naw";
console.log(studentObj.name);
studentObj.phone = "09123456";
console.log(studentObj.phone);

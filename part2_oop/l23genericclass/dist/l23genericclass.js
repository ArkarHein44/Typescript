"use strict";
class NumberStore {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
console.log(numberstoreObj.getdatas());
class Store {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const storeObj1 = new Store();
storeObj1.add(10);
storeObj1.add(90);
console.log(storeObj1.getdatas());
const storeObj2 = new Store();
storeObj2.add("ni ni");
storeObj2.add("aye aye");
console.log(storeObj2.getdatas());
const storeObj3 = new Store();
storeObj3.add(true);
storeObj3.add(false);
console.log(storeObj3.getdatas());
class Student {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const studentObj1 = new Student("Nilar", 18, "Yangon");
console.log(storeObj1);
const studentObj2 = new Student("Muyar", "17 years old", "Bago");
console.log(storeObj2);
class Storages {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas(id) {
        return this.datas.find(singledata => singledata.id === id);
    }
}
const storageObj = new Storages();
storageObj.add({ id: 1, name: "Aung Aung" });
storageObj.add({ id: 2, name: "Hla Hla" });
storageObj.add({ id: 3, name: "Kyaw Kyaw" });
console.log(storageObj.getdatas(1));
console.log(storageObj.getdatas(3));

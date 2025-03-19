"use strict";
let colorregarrs = ["red", "green", "blue"];
let numregarrs = [10, 20, 30];
let mixregarrs = [100, 200, 300, "red", "green", "blue"];
let greetregarrs = [["hi"], ["hello", "hay"], ["hifi", "zoho"]];
let evennumsregarrs = [[2, 4], [6, 8], [10, 12]];
let greetregars = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ["hascar", false]];
const productdetails = ["Redbull", 2500];
let numbers = [1, 2, [30, 40]];
let colorgenarrs = ["red", "green", "blue"];
console.log(colorgenarrs);
let numgenarrs = [10, 20, 30];
let boolgenarrs = [true, false];
let mingenarrs = [100, 200, 300, "red", false, "green", "blue", true];
console.log(mingenarrs);
let evengenarrs = [[2, 4], [6, 8], [10, 12],];
console.log(evengenarrs);
let mixgenarrs = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ["hascar", false]];
function mygenfun(arrs) {
    return arrs[0];
}
console.log(mygenfun(["red", "green", "blue"]));
console.log(mygenfun([10, 20, 30]));
function genfunone(value) {
    return value;
}
console.log(genfunone("hello"));
console.log(genfunone(1500));
console.log(genfunone(true));
console.log(genfunone("hello"));
console.log(genfunone(1500));
console.log(genfunone(true));
function genfuntwo(arrs) {
    return arrs[0];
}
console.log(genfuntwo([]));
console.log(genfuntwo([10, 20, 30]));
function genfunthree(val) {
    return val[2];
}
let strresult = genfunthree(["aung aung", "maung maung", "tun tun", "kyaw kyaw"]);
console.log(strresult);
let numresult = genfunthree([10, 20, 30, 40]);
console.log(numresult);
let boolresult = genfunthree([true, false, true, false]);
console.log(boolresult);
function genfunfour(val1, val2) {
    return [val1, val2];
}
console.log(genfunfour("Hsu Hsu", 28));
console.log(genfunfour("has car", false));
function genfunfive(value) {
    return value;
}
console.log(genfunfive(""));
console.log(genfunfive("Hello"));
console.log(genfunfive(100));
console.log(typeof genfunfive(100));
console.log(genfunfive(true));
console.log(typeof genfunfive(true));
const student = {
    name: "su su",
    gender: "female",
    age: 18
};

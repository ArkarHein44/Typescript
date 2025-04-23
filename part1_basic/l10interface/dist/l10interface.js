"use strict";
;
function cvform(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return this.hobbies;
        }
    };
}
const result3 = cvform(1003, "kyaw kyaw", ["football", "travel"]);
console.log(result3);
function getinfo(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return this.hobbies;
        }
    };
}
const result4 = getinfo(1004, "U Ba", ["reading", "travel"]);
console.log(result4);
function personalinfo(id, name, hobbies, tasks) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return result5.hobbies;
        },
        tasks
    };
}
const result5 = personalinfo(1005, "Shwe Zin", ["reading", "travel"], ["printing", "reporting"]);
console.log(result5);
const productinfo = {
    brand: "Redbull",
    price: 2500.78,
    packing: "can",
    stock: 12
};
console.log(productinfo);

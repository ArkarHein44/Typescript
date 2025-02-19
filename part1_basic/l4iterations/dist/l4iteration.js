"use strict";
for (let x = 0; x < 10; x++)
    console.log(x);
let numarrs = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let y = 0; y < numarrs.length; y++) {
    console.log(numarrs[y]);
}
let mixarrs = ["red", "green", 100, 200, 300, "blue"];
for (let p = 0; p < mixarrs.length; p++) {
    console.log(mixarrs[p]);
}
for (let mixarr of mixarrs)
    console.log(mixarr);
for (let mix of mixarrs.entries())
    console.log(mix[0], mix[1]);
for (let [idx, val] of mixarrs.entries())
    console.log(idx, val);
for (let key in mixarrs)
    console.log(mixarrs[key]);
for (let key in mixarrs) {
    console.log(`${+key + 1} . ${mixarrs[key]}`);
}

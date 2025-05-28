"use strict";
var globalVar = "I am a global var";
let globalLet = "I am a global let";
const globalconst = "I am a global const";
function accessglobalscope() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalconst);
}
accessglobalscope();
console.log(globalVar);
console.log(globalLet);
console.log(globalconst);
function accesslocalscope() {
    var localVar = "I am local var";
    let localLet = "I am local let";
    const localConst = "I am local const";
}
accesslocalscope();
function accessblockscope() {
    if (true) {
        var blockVar = "I am block Var";
        let blockLet = "I am block let";
        const blockConst = "I am block const";
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(blockVar);
}
accessblockscope();

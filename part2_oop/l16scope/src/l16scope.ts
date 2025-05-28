// --- Scope ---
// Global Scope 
// Function Scope(var)
// Block Scope(let,const)

// => Global Scope 
var globalVar:string = "I am a global var";
let globalLet:string = "I am a global let";
const globalconst:string = "I am a global const";

function accessglobalscope(){
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalconst);
}

accessglobalscope(); // accessable
console.log(globalVar);
console.log(globalLet);
console.log(globalconst);

// => Local Scope 
function accesslocalscope(){
    var localVar:string = "I am local var";
    let localLet:string = "I am local let"
    const localConst:string = "I am local const";
}

accesslocalscope();
// console.log(localVar);
// console.log(localLet);
// console.log(localConst)

// Block Scope 
function accessblockscope(){
    if(true){
        var blockVar:string = "I am block Var";
        let blockLet:string = "I am block let";
        const blockConst:string = "I am block const";

        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);

    }

    console.log(blockVar);
    // console.log(blockLet);
    // console.log(blockConst);
    
}

accessblockscope()

// 28SC 
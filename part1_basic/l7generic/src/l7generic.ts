// => regular array

let colorregarrs: string[] = ["red", "green", "blue"];
let numregarrs: number[] = [10,20,30];
let mixregarrs: (string|number|boolean)[] = [100, 200, 300, "red", "green", "blue"];

// nested number
let greetregarrs: string[][] = [["hi"], ["hello", "hay"], ["hifi", "zoho"]];

// nested number 
let evennumsregarrs: number[][] = [[2,4], [6,8], [10,12]];

// nested string, number, boolean array
let greetregars: (string|number|boolean)[][] = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ["hascar", false]];

// fixed value
const productdetails:[string, number] = ["Redbull", 2500];

type NestedArray = number| NestedArray[];
// let numbers:NestedArray = [1,2];
let numbers:NestedArray = [1,2,[30,40]];

// ==> Generic Array
// Array Notation =>T[]
// Generic Array Type => Array<T>

let colorgenarrs: Array<string> = ["red", "green", "blue"];
console.log(colorgenarrs);

let numgenarrs:Array<number> = [10,20,30];
let boolgenarrs:Array<boolean> = [true, false]

let mingenarrs: Array<string|number|boolean> = [100, 200, 300, "red",false, "green", "blue", true];
console.log(mingenarrs);

// => nested number type array

let evengenarrs: Array<Array<number>> = [[2,4],[6,8],[10,12],];
console.log(evengenarrs);

// => nested string, number, boolean type array

let mixgenarrs:Array<Array<string|number|boolean>> = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ["hascar", false]];

// => Generic Function for Arrays
// syntax

// function funname<T>(parameter:T):T{
// return parameter;
// }

// <T> is a type parameter that acts as a placeholder
// T is used as the type for the function parameter and return type.
// Following function works for any types, such as number, string or boolean... etc.

function mygenfun<T>(arrs:T[]):T{
    return arrs[0];
}

console.log(mygenfun(["red","green","blue"]));
console.log(mygenfun([10,20,30]));

function genfunone<T>(value:T):T{
    return value;
}

console.log(genfunone("hello"));
console.log(genfunone(1500));
console.log(genfunone(true));

console.log(genfunone<string>("hello"));console.log(genfunone<number>(1500));
console.log(genfunone<boolean>(true));

// exe 2

function genfuntwo<T>(arrs:T[]):T{
    return arrs[0];
}
console.log(genfuntwo([]));
console.log(genfuntwo([10,20,30]));

// exe 2

function genfunthree<T>(val:Array<T>):T{
    return val[2];
}

let strresult = genfunthree<string>(["aung aung", "maung maung", "tun tun", "kyaw kyaw"]);
console.log(strresult);

let numresult = genfunthree<number>([10,20,30,40]);
console.log(numresult);

let boolresult = genfunthree<boolean>([true, false, true, false]);
console.log(boolresult);

// => Function with Two Generic Types
function genfunfour<T1, T2>(val1:T1, val2:T2):[T1,T2]{
    return [val1, val2];
}

console.log(genfunfour<string,number>("Hsu Hsu",28));
console.log(genfunfour<string,boolean>("has car", false));

// => Default type for Generic Function

function genfunfive<T = string>(value:T):T{
    return value;
}

console.log(genfunfive(""));
console.log(genfunfive("Hello"));
console.log(genfunfive(100));
console.log(typeof genfunfive(100));
console.log(genfunfive(true));
console.log(typeof genfunfive(true));

// => Generic Object Type
// syntax
// type ObjectType<T> = {
//     key1:T;
//     key2:T;
// };

// => Generic Object with Multiple Properties

// syntax

// type ObjectType<T1, T2> = {
//     key1:T1;
//     key2:T2;
// };

type Person = {
    name: string;
    gender: string;
    age:number;
}

const student:Person = {
    name:"su su",
    gender:"female",
    age:18
}
// 12GN 

// gmail address
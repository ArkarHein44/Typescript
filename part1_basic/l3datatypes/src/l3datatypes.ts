let fullname:string = "Su Su";
console.log(fullname)

let age:number = 25;
console.log(age);

// this is comment 
let hascar:boolean = true;
console.log(hascar)

hascar = false;
console.log(hascar);

// Any types
let studentid;

studentid = 1001;
studentid = "1002";

// Arry of string
let colorarrs:string[] = ["red", "green", "blue"];
console.log(colorarrs);

// Array of number
let numarrs:number[]= [10, 20, 30, 40, 50];
console.log(numarrs);

// Array of string & number
let mixarrs1:(string|number)[] = [100, "red", "green", "blue", 200, 300];
console.log(mixarrs1);

// Array of string & number & boolean
let mixarrs2:(string|number|boolean)[] = [true, 100, "red", "green", "blue", 200, 300, false];
console.log(mixarrs2);

// Nested array of string
let greetarrs:string[][] = [
    ["hi"],
    ['hello', 'hay'],
    ['hifi', 'zoho']
];
console.log(greetarrs);

// Nested array of number
let evenarrs:number[][] = [
    [2,4],
    [6,8,10],
    [12,14,16]
];
console.log(evenarrs);

// Nested array of number
let infoarrs:(string|number|boolean)[][] = [
    ["aung aung", 1001],
    ["age", 28],
    ["hobby", "sport", "reading"],
    ["hascar", true]
];
console.log(infoarrs);

// Tuple (fixed value or fixed length)
const product:[string,number] = ["Redbull", 2500];
console.log(product);

// 12DT
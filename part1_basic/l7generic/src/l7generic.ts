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

let colorgenarrs: Array<string> = ["red", "green", "blue"];
console.log(colorgenarrs);

let boolgenarrs:Array<boolean> = [true, false]

let mingenarrs: Array<string|number|boolean> = [100, 200, 300, "red",false, "green", "blue", true];
console.log(mingenarrs);

// => nested number type array

let evengenarrs: Array<Array<number>> = [[2,4],[6,8],[10,12],];
console.log(evengenarrs);

// => nested string, number, boolean type array

let mixgenarrs:Array<Array<string|number|boolean>> = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ["hascar", false]];

// 12GN 
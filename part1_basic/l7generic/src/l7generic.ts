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

type Book<T> = {
    title:T;
    content:T;
    price:T;
}

const Article:Book<string> = {
    title:"Article 1",
    content:"This is the story of article 1",
    price:"20 USD"
}

const Post:Book<number> = {
    title:2,
    content:2,
    price:20
}

console.log(Article);

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

type Product<T1,T2> = {
    name:T1;
    price:T2;
}

const item:Product<string,number> = {
    name: "Redbull",
    price:2500
}

console.log(item)

const item2:Product<string,string> = {
    name: "Sponsor",
    price:"FOC"
}

// => Generic Set
let myset = new Set([10, 20, 30, 10,20]);
console.log(myset); // 
console.log(myset.size);

console.log(myset.has(20));
console.log(myset.has(70));

let numberset:Set<number> = new Set([1,2,3,1,3]);
console.log(numberset);

let nameset:Set<string> = new Set(["Aung Aung", "Kyaw Kyaw", "Tun Tun"]);
console.log(nameset);

let mixeddatas:Set<string|number> = new Set([1,"2","Three"]);
console.log(mixeddatas);

// => Common Set Methods with Generics

const numset:Set<number> = new Set();

numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);
numset.add(3);

console.log(numset);
console.log(numset.has(2));

numset.delete(4);
console.log(numset);

numset.clear();

// => Iterating Generic Set 

const colorset:Set<string> = new Set(["Red", "Green", "Blue", "White", "Black"]);

for(let color of colorset){
    console.log(color);
}

colorset.forEach(color => {
    console.log(color);
});

type User = {
    id:number;
    name:string;
    age:number
}

const userset:Set<User> = new  Set([
    {id:1, name:"Hsu Hsu", age:20},
    {id:2, name:"Nu Nu", age:18},
    {id:3, name:"Yu Yu", age:15}
]);

userset.add({id:4,name:"Hla Hla", age:16});
console.log(userset);

// => keyof, extends
type VipUser = {
    id:number;
    name:string;
    emial:string;
}

// type VipClient = typeof VipUser;
type VipCustomer = keyof VipUser; // Extracts keys as a union type: 'id' | 'name' | 'email |

// exercise
const shop = {
    name: "Apple Store",
    city: "Yangon"
}

type Vendor = typeof shop;
type VendorKeys = keyof Vendor; // 'name' | 'city'

let store:Vendor = {
    name: "Cherry Store",
    city: "Mandalay"
}

function getshopinfo<T,K extends keyof T>(obj:T,info:K):T[K]{
    return obj[info];
}

let shopname = getshopinfo(store, "name");
console.log(shopname);

let shopcity = getshopinfo(store, "city");
console.log(shopcity);

// 12GN 
// gmail address
// Unknown Vs Any type

// Feature                 unknown                     any
// Typesafety              SafeA                       Unsafe
// Assign to other types   Not allowed without checks  Allowed

// => unknown type

let sayhi:unknown = "Hello Sir";
let age:unknown = 28;

console.log(typeof age); // number

// let getage:number = age;
// console.log(getage); // can't use unknown to number types 

// exe 1 
let getage:number = typeof age === "number" ? age:20;
console.log(getage); // 28

// exe 2
let phone:unknown = "0912345";
console.log(typeof phone); // string

let getphone:number = typeof phone === "number" ? phone: 119;
console.log(getphone); // 119

// exe 3
let unknownval1:unknown = "hello";
unknownval1 = true;
unknownval1 = 20;

console.log(unknownval1); // true

let getval:number = typeof unknownval1 === "number" ? unknownval1 : 0;
console.log(getval); // 20

// ------------------------------------------

// => any type

// exe 1
let fullname:any = "Kyaw Kyaw";
let nickname:number = fullname;
console.log(nickname); // Kyaw Kyaw

// exe 2 
let firstname:any = "Hsu";
let lastname:unknown = firstname;
console.log(lastname); // Hsu

// exe 3
let anyval:any = "hello";
anyval = true;
anyval = 20;

console.log(anyval);

let getnum:number = anyval;
console.log(getnum); // No Error, even if it's not a number

// ---------------------------------------------

// => any with unknown

// not recommanded 
let brand:unknown = "Redbull";
let price:any = brand;

let fee:number = price; // beware: string is working in number
console.log(fee); // Redbull

// recommanded 
let brandname : any = "Sponsor";
let oridinaryprice: unknown = brandname;
// let sellprice:number = oridinaryprice; // error,  beware: string is not working in number

let sellprice:number = typeof oridinaryprice === "number" ? oridinaryprice : 0;
console.log(sellprice); // 0

// ---------------------------------------------

// => unknown in Union (|) vs Intersection (&) types
// let productname:unknown|string = "Sponsor"; // unknown|string not oki, any|string is ok
// let companyname:string = productname; // error

// let productname:any|number = 1500;// unknown|string not oki, any|string is ok
// let companyname:number = productname;

// let productname:unknown&string = "Sponsor";
// let companyname:string = productname;
// console.log(companyname); // Sponsor

// let productname:unknown&number = 1500;
// let companyname:number = productname;
// console.log(companyname); // 1500

// let productname:unknown&string = 1500;
// let companyname:number = productname;
// console.log(companyname); // error, because opposite type

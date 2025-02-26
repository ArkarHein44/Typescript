//=> Basic Types

// => void Type 
let country:void;
console.log(country); // undefined

let brandname:string = "";

let phone = (brand:string):void=>{
    brandname = brand;
}

console.log(phone("iPhone")); // undefined (because the function is void)
console.log(brandname); // iPhone

let points:number;
function userpoints(cashdown:boolean):number{
    if(cashdown){
        return points = 100;
    }else{
        return points = 0;
    }
}

let user1 = userpoints(true);
let user2 = userpoints(false);
// let user3 = userpoints(null); //"strictNullChecks": false
// let user4 = userpoints(undefined); // "strictNullChecks": false

console.log(user1); // 100
console.log(user2); // 0

// console.log(user3); // 0 // "strictNullChecks": false
// console.log(user4); // 0 // "strictNullChecks": false

let age1:undefined = undefined;
// let age2:undefined = null; // error
// let age3:undefined = 25; // error
// let age4:undefined = "Hay; // error

let age5:undefined | null = null;
let age6:undefined | number = 25;
let age7:undefined | string = "Hay";

console.log(age1); // undefined
console.log(age5); // null
console.log(age6); // 25
console.log(age7); // Hay

// => Type Aliases 
let cashback:number = 1000;
cashback = 500;
console.log(cashback); // 500

type Promotion = number; // Note: this is not value ! it's just type
let cashreturn:Promotion = 2000;
console.log(cashreturn); // 2000

// => literal type
const price:300 | 500 | 700 = 700;
console.log(price); // 700

type FixedPrice = 300 | 500 | 700; // Note: this is not value ! it's just type (we can call literal type)
const itemprice: FixedPrice = 500;
console.log(itemprice); // 500

type DLTClassType = "zoom" | "vdo";
const niewcourse: DLTClassType = "vdo";
console.log(niewcourse); //  vdo

// => type must be object 
type PersonInfo = {
    name: string,
    gender: string,
    age:Number
}

const student:PersonInfo = {
    name: "Aung Aung",
    gender: "male",
    age: 25
}

// student.hascar = false; // error
console.log(student); // { name: 'Aung Aung', gender: 'male', age: 25 }

// 26BT 
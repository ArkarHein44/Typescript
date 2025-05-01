// => Index Signatures
// type Desktop = {
//     brand:string;
// };

// let pc:Desktop = {
//     brand:"Lenovo",
//     madeby:"China" // error
// }

type Desktop = {
    [k:string]:string;
}

let pc:Desktop = {
    brand:"Lenovo",
    madeby:"China" // error
};

console.log(pc);

// exe 2
type PhoneBook = {
    [name:string]:number;
};

const contacts:PhoneBook = {
    mother:123456,
    mylove:987654
}

console.log(contacts.mylove); // 987654

type Systemunit = {
    [k:string]:string;
    // touchscreen:boolean; // error, must be same type
    touchscreen:string;
};

let yourpc:Systemunit = {
    brand:"Lenovo",
    touchscreen: "avao;able",
    madeby:"China"
};

console.log(yourpc);

// => Index Signature with object value
// exe 4(i)
type Minipc = {
    [k:string]:{
        brandname:string;
        price:number;
    }
};

let officepc:Minipc = {
    item1:{
        brandname:"Microsoft",
        price:2000
    },
    item2:{
        brandname:"Acer",
        price:3000
    },
    item3:{
        brandname:"HP",
        price:4000
    }
}

console.log(officepc);

// exe 4 (ii)
type Product = {
    brand:string;
    price:number;
}

type ProductList = {
    [id:string]:Product;
}

const shop:ProductList = {
    pro1: {brand:"redbull", price:2500},
    pro2: {brand:"sponsor", price:1800},
}

console.log(shop);
console.log(shop.pro2.brand);

// exe 5
type Staff = {
    [k:string]:string|number;
};

const employee:Staff = {
    name: "Hla Hla",
    age: 23,
    department:"HR"
};

console.log(employee);

// ==> Index Access Type 
// exe 1
type Mobile = {
    brandname: string;
    price:number;
};

type Brand = Mobile["brandname"]; // .dot notation can't use

const applestore:Brand = "iPhone 17 Pro Max";
console.log(applestore);

// exe 2 
type Car = {
    brand:string;
    year:number;
};

type BrandType = Car["brand"];
type YearType = Car["year"];

const mycarbrand:BrandType = "Toyota";
const mycaryear:YearType = 2025;

console.log(mycarbrand, mycaryear);

type Item = {
    name:string;
    info:{
        price:number;
        hasstock:boolean;
    }
};

type PriceType = Item["info"]["price"];
type StockType = Item["info"]["hasstock"];

const itemprice:PriceType = 3000;
const itemstock:StockType = true;
console.log(itemprice,itemstock);

// ==> Union with index access 
type Book = {
    title:string;
    pages:number;
};

type BookKey = "title"|"pages";
type BookInfo = Book[BookKey]; // string | number

const mybooktitle:BookInfo = "Typescript Guide Book";
const mybookpages:BookInfo = 500;

console.log(mybooktitle, mybookpages);

// att code: 30ID 
// att code: 1OV
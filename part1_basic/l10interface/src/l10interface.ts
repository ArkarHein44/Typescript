// => Interface
// Type
type fullname = string;
type age = number;

type Student = {
    id:number;
    name:string;
    hobbies:string;
}

// Interface
// interface city = string; // can't declare like that

interface Employeee {
    id:number;
    name: string;
    hobbies: string[];
};

// function applicant(id:number,name:string,hobbies:string[]):Employeee{
//     return {
//         id:id,
//         name:name,
//         hobbies:hobbies
//     }
// }

// let result1:Employeee = applicant(1001,"Nu Nu",["reading", "sport"]);

// console.log(result1);

// function application(id:number,name:string,hobbies:string[]):Employeee{
//     return {
//         id:id,
//         name:name,
//         hobbies:hobbies
//     }
// }

// let result2:Employeee = application(1002,"Yu Yu",["sport", "swimming"]);

// console.log(result2); 

// => Interface method
// exe 1
interface Employeee {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function cvform(id:number, name:string, hobbies: string[]):Employeee{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return this.hobbies;
        }
    }
}

const result3:Employeee = cvform(1003,"kyaw kyaw",["football", "travel"]);
console.log(result3);

// exe2
interface Lawyer {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function getinfo(id:number, name:string, hobbies: string[]):Employeee{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return this.hobbies;
        }
    }
}

const result4:Lawyer = getinfo(1004,"U Ba",["reading", "travel"]);
console.log(result4);

// => Extending Interface
interface Task {
    tasks: string[];
}

interface Staff extends Task{
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function personalinfo(id:number,name:string,hobbies:string[],tasks:string[]):Staff{
    return{
        id,
        name,
        hobbies,
        gethobbies(){
            return result5.hobbies;
        },
        tasks
    }
}

const result5:Staff = personalinfo(1005, "Shwe Zin", ["reading", "travel"], ["printing", "reporting"]);

console.log(result5);

// => Argumenting Interface

// type Name = string;
// type Name = string; // can't same name

interface Product{
    brand:string;
    price:number;
}

// const productinfo:Product = {
//     brand: "Redbull",
//     price: 2500.78,
//     packing: "can",
//     stock: 12
// };

interface Product{
    packing: string,
    stock: number;
    price: number; // can contain again but must the same data type
}

const productinfo:Product = {
    brand: "Redbull",
    price: 2500.78,
    packing: "can",
    stock: 12
};

console.log(productinfo);

// att code => 23IN
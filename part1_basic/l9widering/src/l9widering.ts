// => Type Widering

let fullname = "Mar Lar";
fullname = "Kyi Pyar"; // easily overwrite

let age = 25;
age = 30;

// type Person = {
//     name:string;
//     age:number;
// }

type Person = {
    name:"Yu Yu";
    age:number;
}

const student = {
    name: "Yu Yu" as const, // must be same as type Person, must contain "as const"
    age: 20
}

function studentname(student:Person){
    return student.name;
}

studentname(student);

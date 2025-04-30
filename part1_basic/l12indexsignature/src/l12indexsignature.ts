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

// att code: 30ID 
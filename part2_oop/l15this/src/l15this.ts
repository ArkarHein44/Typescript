// --- this keyword ---
// At top-level in the browser : 'this' refers to 'window'
// In strict mode or in modules. it will be 'undefined' (in node or ES6 modules)

console.log(this);

// Object with method using 'this'
const student = {
    info():void{
        console.log(this);
    }
}

student.info(); // { info: [Function: info] }

// class with method using 'this'
class Student{
    content():void{
        console.log(this);
    }
}

const studentObj = new Student();
console.log(studentObj); // Student {}
studentObj.content(); // Student {}

// call(), apply(), bind()
function sayhi(name:string,msg:string):void{
    console.log(this); // "strict": false,                                      
    console.log(`Hay...${name}, ${msg}`);
}

sayhi("Hsu Hsu","How are you!");//

sayhi.call({name:'Yu Yu'});
sayhi.call("Yu Yu","How are you!");
sayhi.call({fullname:"Nu Nu"},"Aye Aye", "How are you!");

sayhi.apply({name:'Yu Yu'});
sayhi.apply({fullname:"Nu Nu"},['kyaw Kyaw','How are you!']);

let bindfun = sayhi.bind({fullname:"Zin Zin"},'Aung Aung','How are you!');
bindfun(); 
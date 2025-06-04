// readonly

class  Student{
    readonly id:number;
    name:string;
    age:number;
    phone?:string;

    constructor(id:number,name:string,age:number,phone?:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    content():void{
        console.log("Email is available");
    }
}

const studentObj = new Student(1001,"Su Su",18);

console.log(studentObj);
console.log(typeof studentObj);
console.log(studentObj.id);
console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.phone);

studentObj.content();

studentObj.phone = "0912345";
console.log(studentObj.phone);

studentObj.name = "Aye Aye";
console.log(studentObj.name);

// studentObj.id = 1401; // can't assign
// console.log(studentObj.id);

const stuObj = new Student(1001,"Tun Tun",20,"09987654");
console.log(stuObj.phone);
// class ClassName{
//     private property:TypeError;

//     get propertyName():Type{
//         return this._property;
//     }

//     set propertyName():Type{
//         this._property = value;
//     }
// }

// Example 

class Person{
    private _name:string;

    constructor(name:string){
        this._name = name;
    }

    // Getter 
    get name():string
    {
        return this._name;
    }

    // Setter 
    set name(newname:string)
    {
        this._name = newname;

        if(newname.length > 0){
            this._name = newname;
        }else{
            console.log("New Name cannot be empty.");
        }
    }
}

const personObj = new Person("Hsu Hsu");
console.log(personObj);

// console.log(personObj._name); // Error
// console.log(personObj.name()); // Error
console.log(personObj.name);  // You can use directly like a property. No need ()

personObj.name = "Su Su";
console.log(personObj.name);

// => Exercise 
class Student
{
    public readonly id: number;
    public name: string;
    private age: number;
    private _hasnrc: boolean;
    phone?:string;

    constructor(id:number, name:string, age:number, hasnrc:boolean, phone?:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this._hasnrc = hasnrc;
        this.phone = phone;
    }

    content():void{
        console.log("Email is available.");
    }

    getage():number{
        return this.age;
    }

    get hasnrc():boolean{
        return this._hasnrc;
    }

    set hasnrc(value:boolean){
        this._hasnrc = value;
    }
}

const studentObj = new Student(1001,"Kyaw Kyaw", 18, true);
console.log(studentObj);

studentObj.name = "Naw Naw";
console.log(studentObj.name);

studentObj.phone = "09123456";
console.log(studentObj.phone);

// studentObj.id = 1002; // error, readonly

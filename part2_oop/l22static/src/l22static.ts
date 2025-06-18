// instance method 
class Person
{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    sayhi():void{
        console.log(`Hello, my name is ${this.name}`);
    }
}


const personObj = new Person('Aung Aung');
personObj.sayhi();

// static method 

class MathUtil
{
    static square(num:number):number{
        return num*num;
    }
}

console.log(MathUtil.square(2)); // 4

// Exercise 
class People 
{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    // instance method 
    introduce():void{
        console.log(`Hi, I\'m ${this.name} and I\'m ${this.age} years old.`);
    }

    // static method 
    static isover18(age:number):boolean{
        return age >= 18;
    }
}

const peopleObj = new People(`Yoon Yoon`, 20);
peopleObj.introduce();

// console.log(peopleObj.isover18(20)); //error 

console.log(People.isover18(20)); // true
console.log(People.isover18(15)); // false

// Exercise 2 
class NumCounter
{
    static count:number = 0;

    static increment():void{
        NumCounter.count++;
    }

    static showresult():void{
        console.log(`Total Count is = ${NumCounter.count}`);
    }
}

NumCounter.showresult();

NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();

// Exercise 3 

class Staff
{
    static totalstaff:number = 0;

    constructor(public name:string){
        Staff.totalstaff++;
    }

    static showtotal():void{
        console.log(`Total staff = ${Staff.totalstaff}`);
    }
}

const staffObj1 = new Staff("Su Su");
const staffObj2 = new Staff("Yu Yu");
const staffObj3 = new Staff("Nu Nu");

Staff.showtotal(); 

// 18ST 
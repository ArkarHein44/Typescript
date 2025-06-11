// Syntax 

// class MyClass
// {
//     [key:string]:string;
// }

// Example 

class Staff
{
    [info:string]:boolean;
}

const staffoneObj = new Staff();
console.log(staffoneObj);

staffoneObj.hasnrc = true;
staffoneObj.hasnrc = false;
console.log(staffoneObj);

const stafftwoObj = new Staff();
console.log(stafftwoObj);

stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.gasgirlfriend = false;
console.log(stafftwoObj);

class People
{
    [key:string]:string;

    name:string = "Maung Maung";
    email:string = "mgmg@gmail.com";

}

const peopleObj = new People();
console.log(peopleObj);

peopleObj.address = "Mandalay";

console.log(peopleObj);
console.log(peopleObj.city);

// Exercise 
class Employee
{
    [key:string]:string|boolean;

    name:string = "Yu Yu";    
}

const employeeObj = new Employee();
console.log(employeeObj);

// add dynamic properties
employeeObj.hasnrc = true;
employeeObj.hascar = false;
employeeObj.department = "IT Department";

console.log(employeeObj);
console.log(employeeObj.hascar);
console.log(employeeObj.department);

// 11ID 
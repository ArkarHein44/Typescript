// => Enum 

// Numeric Enum (default, auto-increment from 0)
// String Enum 

// Reverse Mapping (only works with numeric enums)

// PascalCase 
// camelCase 
// snake_case 

enum ListFruits{
    Apple,
    Orange,
    Banana,
    Mango,
    Tomato
}

console.log(ListFruits);
console.log(ListFruits.Apple);
console.log(ListFruits.Mango);
// if use want to print directly! "const can't use"
// let, var can't use in enum

enum ListNumbers{
    Apple = 10,
    Orange,
    Banana,
    Mango,
    Tomato = 100
}

let fruitnum1:ListNumbers = ListNumbers.Apple;
let fruitnum2:ListNumbers = ListNumbers.Orange;
let fruitnum3:ListNumbers = ListNumbers.Tomato;

console.log(fruitnum1) // 0
console.log(fruitnum2) // 1
console.log(fruitnum3) // 1

enum HttpCode {
    Ok = 200,
    BadRequest = 400,
    Unauthorized = 401
}

console.log(HttpCode.Ok);
console.log(HttpCode.BadRequest);
console.log(HttpCode.Unauthorized);

enum StaffInfo {
    Fullname = "Yamone",
    Position = "Manager"
}

let staffname:StaffInfo = StaffInfo.Fullname;
let staffposition:StaffInfo = StaffInfo.Position;

console.log(staffname, staffposition); // Yamone Manager

enum EmployeeDetails {
    ID = 1001,
    Name = "Yoon",
    Salary = 800000
}

let Employeeid:EmployeeDetails = EmployeeDetails.ID;
let Employeename:EmployeeDetails = EmployeeDetails.Name;
let Employeesalary:EmployeeDetails = EmployeeDetails.Salary;
console.log(Employeeid,Employeename,Employeesalary); // 1001 Yoon 800000

// Reverse Mapping (only works with numeric enums)
enum Color{
    Red = 1,
    Green,
    Blue
}

console.log(Color[1]); // Red

enum Size{
    Small = 10,
    Medium = 13,
    Large = 17
}

console.log(Size[1]); // undefined
console.log(Size[13]); // Medium

// => Enum Mergin , Ambient Enumerator
enum Colour{
    Red = "Red",
    Green = "GREEN"
}

enum Colour{
    Blue = "BLUE",
    Yellow = "Yellow"
}

console.log(Colour); // { Red: 'Red', Green: 'GREEN', Blue: 'BLUE', Yellow: 'Yellow' }
console.log(Colour.Green) // Green
console.log(Colour.Blue) // BLUE

enum Direction{
    Nort,
    South,
    East,
    West
}

function move(direct:Direction){
    console.log("You are moving to : ",direct)
}

move(Direction.East); // You are moving to :  2

enum Role{
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}

function getrole(role:Role){
    console.log(`You are a ${role}`);
}

getrole(Role.User); // You are a USER

enum CarEngine{
    Stopped,
    Startted
}

function isenginerunning(status:CarEngine):boolean{
    return status === CarEngine.Startted;
}

console.log(isenginerunning(CarEngine.Stopped)); // false
console.log(isenginerunning(CarEngine.Startted)); // true

// 14EN 
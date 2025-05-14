"use strict";
var ListFruits;
(function (ListFruits) {
    ListFruits[ListFruits["Apple"] = 0] = "Apple";
    ListFruits[ListFruits["Orange"] = 1] = "Orange";
    ListFruits[ListFruits["Banana"] = 2] = "Banana";
    ListFruits[ListFruits["Mango"] = 3] = "Mango";
    ListFruits[ListFruits["Tomato"] = 4] = "Tomato";
})(ListFruits || (ListFruits = {}));
console.log(ListFruits);
console.log(ListFruits.Apple);
console.log(ListFruits.Mango);
var ListNumbers;
(function (ListNumbers) {
    ListNumbers[ListNumbers["Apple"] = 10] = "Apple";
    ListNumbers[ListNumbers["Orange"] = 11] = "Orange";
    ListNumbers[ListNumbers["Banana"] = 12] = "Banana";
    ListNumbers[ListNumbers["Mango"] = 13] = "Mango";
    ListNumbers[ListNumbers["Tomato"] = 100] = "Tomato";
})(ListNumbers || (ListNumbers = {}));
let fruitnum1 = ListNumbers.Apple;
let fruitnum2 = ListNumbers.Orange;
let fruitnum3 = ListNumbers.Tomato;
console.log(fruitnum1);
console.log(fruitnum2);
console.log(fruitnum3);
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["Ok"] = 200] = "Ok";
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Unauthorized"] = 401] = "Unauthorized";
})(HttpCode || (HttpCode = {}));
console.log(HttpCode.Ok);
console.log(HttpCode.BadRequest);
console.log(HttpCode.Unauthorized);
var StaffInfo;
(function (StaffInfo) {
    StaffInfo["Fullname"] = "Yamone";
    StaffInfo["Position"] = "Manager";
})(StaffInfo || (StaffInfo = {}));
let staffname = StaffInfo.Fullname;
let staffposition = StaffInfo.Position;
console.log(staffname, staffposition);
var EmployeeDetails;
(function (EmployeeDetails) {
    EmployeeDetails[EmployeeDetails["ID"] = 1001] = "ID";
    EmployeeDetails["Name"] = "Yoon";
    EmployeeDetails[EmployeeDetails["Salary"] = 800000] = "Salary";
})(EmployeeDetails || (EmployeeDetails = {}));
let Employeeid = EmployeeDetails.ID;
let Employeename = EmployeeDetails.Name;
let Employeesalary = EmployeeDetails.Salary;
console.log(Employeeid, Employeename, Employeesalary);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 13] = "Medium";
    Size[Size["Large"] = 17] = "Large";
})(Size || (Size = {}));
console.log(Size[1]);
console.log(Size[13]);
var Colour;
(function (Colour) {
    Colour["Red"] = "Red";
    Colour["Green"] = "GREEN";
})(Colour || (Colour = {}));
(function (Colour) {
    Colour["Blue"] = "BLUE";
    Colour["Yellow"] = "Yellow";
})(Colour || (Colour = {}));
console.log(Colour);
console.log(Colour.Green);
console.log(Colour.Blue);
var Direction;
(function (Direction) {
    Direction[Direction["Nort"] = 0] = "Nort";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
function move(direct) {
    console.log("You are moving to : ", direct);
}
move(Direction.East);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Editor"] = "EDITOR";
    Role["User"] = "USER";
})(Role || (Role = {}));
function getrole(role) {
    console.log(`You are a ${role}`);
}
getrole(Role.User);
var CarEngine;
(function (CarEngine) {
    CarEngine[CarEngine["Stopped"] = 0] = "Stopped";
    CarEngine[CarEngine["Startted"] = 1] = "Startted";
})(CarEngine || (CarEngine = {}));
function isenginerunning(status) {
    return status === CarEngine.Startted;
}
console.log(isenginerunning(CarEngine.Stopped));
console.log(isenginerunning(CarEngine.Startted));

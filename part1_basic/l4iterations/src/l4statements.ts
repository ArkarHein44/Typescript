// if statement 
let num1: number = 10;
let num2:number = 20;
let num3:number = 20;

// conditional (ternary operator)

num1 < num2
    ? console.log(`${num1} is less than ${num2}`)
    : console.log(`${num1} is greater than ${num2}`)

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}else{
    console.log(`${num1} is less than ${num2}`)
}
    
if(num1 < num2) console.log(`${num1} is less than ${num2}`);

if(num2 < num3){
    console.log(`${num2} is greater than ${num1}`)
}else if(num2 > num3){
    console.log(`${num2} is less than ${num3}`)
}else{
    console.log(`${num2} is equal with ${num3}`)
}

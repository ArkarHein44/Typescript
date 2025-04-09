// => Narrowing

function myfun(val:string|number){
    if(typeof val === "string"){
        console.log(`string in uppercase : ${val.toLocaleUpperCase()}`);
    }else{
        console.log(`Number value : ${val}`);
    }
}

myfun("hello sir"); // HELLO SIR
myfun(10); // Number Value : 10

// => Conditional Narrowing
type Laptop = {brandname: string};

function getitems(item:Laptop | Laptop[]){
    if(Array.isArray(item)){
        return item.length;
    }else{
        return item.brandname;
    }
}

console.log(getitems({brandname:"HP"})); // HP
console.log(getitems([{brandname:"Dell"}, {brandname:"Lenovo"}])); // 2

// => Object Narrowing
type Article = {
    title: string;
    content: string;
    public: boolean;
    user_id: number
}

let post:Article = {
    title: "New Post One",
    content: "This is new post",
    public: true,
    user_id:1
}

type News = {
    title: string
}

let topic:News = post;
console.log(topic);
console.log(topic.title);
// console.log(topic.content); // error


// 9NW 
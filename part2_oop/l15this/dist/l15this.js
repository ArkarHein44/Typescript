console.log(this);
const student = {
    info() {
        console.log(this);
    }
};
student.info();
class Student {
    content() {
        console.log(this);
    }
}
const studentObj = new Student();
console.log(studentObj);
studentObj.content();
function sayhi(name, msg) {
    console.log(this);
    console.log(`Hay...${name}, ${msg}`);
}
sayhi("Hsu Hsu", "How are you!");
sayhi.call({ name: 'Yu Yu' });
sayhi.call("Yu Yu", "How are you!");
sayhi.call({ fullname: "Nu Nu" }, "Aye Aye", "How are you!");
sayhi.apply({ name: 'Yu Yu' });
sayhi.apply({ fullname: "Nu Nu" }, ['kyaw Kyaw', 'How are you!']);
let bindfun = sayhi.bind({ fullname: "Zin Zin" }, 'Aung Aung', 'How are you!');
bindfun();

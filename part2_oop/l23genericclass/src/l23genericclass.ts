// Basic Class
class NumberStore {
  private datas: number[] = [];

  add(val: number): void {
    this.datas.push(val);
  }

  getdatas(): number[] {
    return this.datas;
  }
}

const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
console.log(numberstoreObj.getdatas());

// Generic Class
class Store<T> {
  private datas: T[] = [];

  add(val: T): void {
    this.datas.push(val);
  }

  getdatas(): T[] {
    return this.datas;
  }
}

const storeObj1 = new Store<number>();
storeObj1.add(10);
storeObj1.add(90);
console.log(storeObj1.getdatas());

const storeObj2 = new Store<string>();
// storeObj2.add(10); // eror
// storeObj2.add(90); // error
storeObj2.add("ni ni");
storeObj2.add("aye aye");
console.log(storeObj2.getdatas());

const storeObj3 = new Store<boolean>();
// storeObj3.add(10); error
// storeObj3.add(90); errror
storeObj3.add(true);
storeObj3.add(false);
console.log(storeObj3.getdatas());

// exercise 1
class Student<T1, T2, T3> {
  constructor(public name: T1, public age: T2, public city: T3) {}
}

const studentObj1 = new Student<string, number, string>("Nilar", 18, "Yangon");
console.log(storeObj1);

const studentObj2 = new Student<string, string, string>(
  "Muyar",
  "17 years old",
  "Bago"
);
console.log(storeObj2);

// exercise 2 with interface

interface SetId {
  id: number;
}

class Storages<T extends SetId> {
  private datas: T[] = [];

  add(val: T): void {
    this.datas.push(val);
  }

  getdatas(id: number): T | undefined {
    return this.datas.find((singledata) => singledata.id === id);
  }
}

const storageObj = new Storages<{ id: number; name: string }>();
storageObj.add({ id: 1, name: "Aung Aung" });
storageObj.add({ id: 2, name: "Hla Hla" });
storageObj.add({ id: 3, name: "Kyaw Kyaw" });
console.log(storageObj.getdatas(1));
console.log(storageObj.getdatas(3));

// 25CD

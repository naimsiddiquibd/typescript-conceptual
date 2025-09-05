class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Naim", 26);

console.log(p1);

// Result:
// Person: {
//   "name": "Naim",
//   "age": 26
// } 
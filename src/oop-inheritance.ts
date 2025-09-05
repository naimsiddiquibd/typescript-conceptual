class Person1{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log("Namex: ", this.name, "and Age:", this.age );
    }
}

class Person2{
    name: string;
    age: number;
    salary: number;
    position: string;

    constructor(name: string, age: number, salary: number, position: string){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
    show(){
        console.log("Namex: ", this.name, "Age: ", this.age, "Salary: ", this.salary, "Position: ", this.position );
    }
}

class Person3 extends Person1 {
    salary: number;
    position: string;

    constructor(name: string, age: number, salary: number, position: string){
        super(name, age);
        this.salary = salary;
        this.position = position;
    }
    show(){
        console.log("Namex: ", this.name, "Age: ", this.age, "Salary: ", this.salary, "Position: ", this.position );
    }
}

const p2 = new Person1("Naim", 26);
const p3 = new Person2("Naim", 26, 280000, "Software Engineer");
const p4 = new Person3("Dr X", 28, 880000, "Engineer");

console.log(p4);
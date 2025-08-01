
// variable aliasing
type HeroIncomeType = number | string;

const heroIncome: HeroIncomeType = 50000;
const hisAge: HeroIncomeType = 30;
const hisName: HeroIncomeType = "Spider-Man";
// const isMarried: heroIncomeType = false; [works only with number or string]

// object aliasing
type HeroType = {
  name: string;
  age: number;
  isStudent: boolean;
};
const hero1: HeroType = {
  name: "Spider-Man",
  age: 30,
  isStudent: false,
};
const hero2: HeroType = {
  name: "Iron Man",
  age: 40,
  isStudent: false,
};

// array aliasing
type HeroArrayType = string[];
const heroArrayOne: HeroArrayType = ["Spider-Man", "Iron Man"];
const heroArrayTwo: HeroArrayType = ["Captain America", "Thor"];

// tuple aliasing
type HeroTupleType = [string, number, boolean];
const heroTuple: HeroTupleType = ["Spider-Man", 30, false];

// function aliasing
type HeroFunctionType = (name: string, age: number) => string;
const heroFunction: HeroFunctionType = (name, age) => {
  return `Hero: ${name}, Age: ${age}`;
};
console.log(heroFunction("Spider-Man", 30)); // Output: Hero: Spider-Man, Age: 30

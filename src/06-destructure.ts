// Array Destructuring
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log(firstFruit); // Output: "Apple"
console.log(secondFruit); // Output: "Banana"
console.log(remainingFruits); // Output: ["Cherry"]

// Object Destructuring
const heroObj = {
  heroName: "Spider-Man",
  age: 25,
  powers: ["Wall-crawling", "Super strength"]
};

const { heroName, age, powers } = heroObj;
console.log(heroName); // Output: "Spider-Man"
console.log(age); // Output: 25
console.log(powers); // Output: ["Wall-crawling", "Super strength"]
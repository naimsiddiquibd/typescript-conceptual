// Type Assertion
const someValue: any = "Hello, TypeScript!";
const strLength: number = (someValue as string).length; // Using 'as'
console.log(`Length of the string is: ${strLength}`); // Output: Length of the string is: 20

// Another way to assert type
const anotherValue: any = 42;
const numValue: number = <number>anotherValue; // Using angle brackets
console.log(`The number is: ${numValue}`); // Output: The number is: 42
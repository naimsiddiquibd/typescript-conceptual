const name: string = "Naim Siddiqui";
const age: number = 24;
const isStudent: boolean = true;
const address: null = null;
const notDefined: undefined = undefined;
const bigNumber: bigint = BigInt(1234567890123456789012345678901234567890);
const symbolValue: symbol = Symbol("uniqueSymbol");
const anyValue: any = "This can be anything";
const unknownValue: unknown = "This can be anything but needs type checking";
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`Address: ${address}, Not Defined: ${notDefined}`);
console.log(`Big Number: ${bigNumber}, Symbol: ${String(symbolValue)}`);
console.log(`Any Value: ${anyValue}, Unknown Value: ${unknownValue}`);
export {};
// This file demonstrates the use of primitive data types in TypeScript.
// It includes examples of string, number, boolean, null, undefined, bigint, symbol,
// any, and unknown types. Each type is declared with a variable and logged to the console.
// The `export {}` at the end ensures that this file is treated as a module, preventing
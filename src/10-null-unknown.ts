// Null
const myText = (text: string | null) => {
    if (text === null) {
        console.log("Text is null");
    } else {
        console.log(`Text is: ${text}`);
    }
}
console.log(myText(null)); // Output: Text is null

// Unknown
const myUnknownText = (text: unknown) => {
    if (typeof text === "string") {
        console.log(`Text is: ${text}`);
    } else {
        console.log("Text is not a string");
    }
}
console.log(myUnknownText("Hello, World!")); // Output: Text is: Hello, World!
console.log(myUnknownText(42)); // Output: Text is not a string
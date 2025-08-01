function heroNormalFunction (a: number, b: number): string {
    const sum = a + b;
    return `Hero's power is ${sum}`;
}

heroNormalFunction(5, 10); // Calling the function to see if it works

const heroArrowFunction = (a: number, b: number): string => {
    const sum = a + b;
    return `Hero's power is ${sum}`;
}
heroArrowFunction(15, 20); // Calling the arrow function to see if it works
// Spread Operator
const heroArray1: string[] = ["Spider-Man", "Iron Man", "Captain America"];
const heroArray2: string[] = ["Thor", "Hulk", "Black Widow"];

heroArray1.push(...heroArray2); // Merging two arrays using spread operator
console.log(heroArray1); // Output: ["Spider-Man", "Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"]

// Rest Operator
const HeorsScores = (...score: number[]) => {
    let sum: number = 0;
    score.map(n => {
        sum = sum + n;
    });
    return `Hero's score is ${sum}`;
};
HeorsScores(10, 20, 30); // Output: Hero's score is 60

// Rest Operator with String and Void
const heroDetails = (...details: string[]): void => {
    details.map(detail => {
        console.log(`Hero details: ${details}`);
    })
}

heroDetails("Spider-Man", "Iron Man", "Captain America");
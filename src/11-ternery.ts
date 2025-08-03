const isHeroAvailable:boolean = true;
if(isHeroAvailable){
    console.log("Hero is available");
} else{
    console.log("Hero is not available");
}

// Ternary Operator
// variable = condition ? valueIfTrue : valueIfFalse
const heroStatus = isHeroAvailable ? "Hero is available" : "Hero is not available";
console.log(heroStatus); // Output: Hero is available
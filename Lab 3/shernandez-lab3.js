// Stephanie Hernandez
// ITMD 541-02 Graduate Student

//Exercise #1
//This part will look at the numbers of the array and analyze them
function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let minValue = Math.min(...numbers);
    let maxValue = Math.max(...numbers);
    let average = numbers.reduce((sum,num) => sum + num, 0) / totalNumbers;


 // It will find the amount of numbers, smallest value, largest value, and average value   
    console.log(
        `Total Numbers: ${totalNumbers}, ` +
        `Min Value: ${minValue}, ` +
        `Max Value: ${maxValue}, ` +
        `Average: ${average}`
    );   

}

//Test Cases

let testArray1 = [2, 5, 23, 6, 9, 4, 30, 1];
let testArray2 = [1, 5, 3, 5, 10, 12, 8, 6];
let testArray3 = [7, 14, 2, 9, 21, 3, 11, 5];

console.log("\nExercise #1");
minMaxAverage(testArray1);
minMaxAverage(testArray2);
minMaxAverage(testArray3);





//Exercise #2
// Finding the count of vowels in a string
function countVowels(word) {
    let vowels = "aeiouAEIOU"; //defining vowels
    let count = 0;

    for (let char of word ){
        if (vowels.includes(char)){
            count++;
        }
    }

    console.log(`${word}: ${count} vowels`);


}

//Test Cases
console.log("\nExercise #2");
countVowels("Winter");
countVowels("January");
countVowels("August");




//Exercise #3 
//Sorting the array

function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b); // Copy the array and sort it
    console.log(`Original Array: [${numbers}]  Output Sorted Array: [${sortedArray}]`);
}

//Test Cases
console.log("\nExercise #3");
sortNumbers([9, 4, 6, 2]);
sortNumbers([7, 1, 5, 9, 2, 8]);  
sortNumbers([-10, 20, 0, -5, 15]);





//Exercise #4 
// Converts Celsius to Fahrenheit 
function celsiusToFahrenheit(celsius) {
    let c = parseFloat(celsius);
    //Check if the converstion resulted in a invalid input
    if (isNaN(c)) return console.log(`Invalid input: "${celsius}" is not a number.`);
    console.log(`${c.toFixed(1)} Celsius = ${(c * 9/5 + 32).toFixed(1)} Fahrenheit`);
}

// Test Cases
console.log("\nExercise #4");
["30", -10, 100, "35", "-5", "abc"].forEach(celsiusToFahrenheit);

//Exercise #5
function sortPeopleByAge(people) {
    return people
        .sort((a, b) => a.age - b.age) // Sort people by age (ascending order)
        .map(person => `${person.name} is ${person.age} and from ${person.city}`); // Format output
}




//Exercise #5

function sortPeopleByAge(people) {
    return people
        .sort((a, b) => a.age - b.age) // Sort people by age in ascending order
        .map(person => `${person.name} is ${person.age} and from ${person.city}`); // Format the output
}

//Test Cases for arrays
//First test array (5 different people)
const people1 = [
    { name: "Joseph", age: 25, city: "Portland" },
    { name: "Emily", age: 21, city: "Chicago" },
    { name: "Charlie", age: 30, city: "New York" },
    { name: "David", age: 35, city: "Los Angeles" },
    { name: "Wendy", age: 27, city: "Philidephia" }
];

// Second test array (5 different people)
const people2 = [
    { name: "Akira", age: 40, city: "Denver" },
    { name: "Samuel", age: 18, city: "San Diego" },
    { name: "Morgan", age: 21, city: "Miami" },
    { name: "Xandra", age: 27, city: "Boston" },
    { name: "Victoria", age: 32, city: "Seattle" }
];

// Third test array (5 different people)
const people3 = [
    { name: "Francis", age: 22, city: "New Orleans" },
    { name: "Carmen", age: 31, city: "Colorado Springs" },
    { name: "Darren", age: 28, city: "Memphis" },
    { name: "Skittles", age: 19, city: "Milwaukee" },
    { name: "Scarlett", age: 17, city: "Orlando" },
];

//Running test cases 
console.log("\nExercise #5");
console.log("Test Case 1:", sortPeopleByAge(people1));
console.log("Test Case 2:", sortPeopleByAge(people2));
console.log("Test Case 3:", sortPeopleByAge(people3));

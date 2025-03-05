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

console.log("// Running Test Cases:");
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
countVowels("Winter");
countVowels("January");
countVowels("August");

//Exercise #3 

//Sorting the array

function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b); // Copy the array and sort it
    console.log(`Original Array: [${numbers}]  Output Sorted Array: [${sortedArray}]`);
}


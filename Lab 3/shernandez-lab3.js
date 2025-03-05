// Stephanie Hernandez
// ITMD 541-02 Graduate Student

//Exercise #1

//This part will look at the numbers of the array and analyze them
function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let minValue = Math.min(...numbers);
    let maxValue = Math.max(...numbers);
    let average = numbers.reduce((sum,num) => sum + num, 0) / totalNumbers;

    console.log('Total Numbers: ${total Numbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}');
 // It will find the amount of numbers, smallest value, largest value, and average value   
}
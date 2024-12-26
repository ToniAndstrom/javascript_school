// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.


let numbers = 0;
let sumOfNumbers = 0;

for( numbers; numbers >=0; numbers++) {
    let inputNumber = Number(prompt("Please enter a number. To stop press zero."));
    sumOfNumbers += inputNumber;
    if (inputNumber === 0) {
        break;
    }
}
console.log(`The average of all input numbers is: ${sumOfNumbers / numbers}`);

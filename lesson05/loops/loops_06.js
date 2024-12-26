// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.
let nowStop ="";
let amountOfNumbers = "";
let sumOfAllNumbers =""
let input =""

while (nowStop !== "n") {
input = Number(prompt("Please type in a number"));
amountOfNumbers ++;
sumOfAllNumbers += input;
 nowStop = (prompt("Do you want to continue giving numbers? (y/n)"));
if (nowStop.toLowerCase == "n") break;
if (nowStop.toLowerCase == "y") continue;
else console.log("Type in either 'y' or 'n'.");
}
    
console.log(`The average of all the numbers you input is ${(sumOfAllNumbers / amountOfNumbers).toFixed(2)}`)
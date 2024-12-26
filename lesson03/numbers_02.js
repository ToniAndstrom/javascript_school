// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

function fahrenheitToCelsius(x) {
  return ((x - 32) * 5) / 9;
}

// Sample usage - do not modify

console.log(fahrenheitToCelsius(21)); // "-6,1"

let number = 6.1111111111;
let limitedNumber = number.toFixed(1);

console.log(limitedNumber);

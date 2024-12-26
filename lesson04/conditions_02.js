/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(celsius) {
  if (celsius < 15) {
    return "You will need a jacket";
  } else {
    return "You won't need a jacket";
  }
}
getTemperature(Number(prompt("What is the current temperature?")));

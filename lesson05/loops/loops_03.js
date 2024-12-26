// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

while (true) {
    let distance = Number(prompt('Distance in kilometers? '));
    
    if (distance === 0){
    console.log("Let/s stop here");
    break;
    }
    
    let time = Number(prompt('Time in hours?'))
      if (time === 0) {
      console.log("Not a valid number")
      continue;
      }
      if (time !==0) {
        let averageSpeed = distance / time;
        console.log(`Your average speed is ${averageSpeed} 
        kilometers per hour`);
      } else {
        console.log("No valid data")
      }
  }
  





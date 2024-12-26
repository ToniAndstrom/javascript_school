// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let howManyNumbers = Number(prompt("How many numbers do you wish to imput?"));
let min = "",
 max = "";

for (let number = 1; number <= howManyNumbers; number++) {
  let inputNumbers = prompt(
    `Please enter number ${number} out of ${howManyNumbers}you just declared.`
  );
  if (min == "" || inputNumbers < min) {
    min = inputNumbers;
  }

  if (max == "" || inputNumbers > max) {
    max = inputNumbers;
  }
}

console.log(
  `Your smallest number was ${min} and your biggest number was ${max}`
);

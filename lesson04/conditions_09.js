// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.



let input = prompt("Ask a yes or no question");

let number = Math.floor(Math.random() * 8);




switch (number) {
  case 1:
    console.log("Looks unlikely");
    break;
  case 2:
    console.log("Go for it");
    break;
  case 3:
    console.log("The odds are in your favor");
    break;
  case 4:
    console.log("Maybe not");
    break;
  case 5:
    console.log("Absolutely not");
    break;
  case 6:
    console.log("Think again");
    break;
  case 7:
    console.log("Definitely yes");
    break;
  case 8:
    console.log("Forget about it");
    break;
}


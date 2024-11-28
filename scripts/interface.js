// User Interface Functionality

const opChoices = /^[+\-*/=]$/;
let selections = [];
let num1 = undefined;
let num2 = undefined;
let op = undefined;
let string1 = '', string2 = '';

// TODO-1: Button Click --> Numbers on screen and added to array

// TODO-2: Operators --> perform calculation and create a new array with just the result so you can continue adding
function operate(num1, num2, op) {
  if (opChoices.test(op)) {
    if (op === "+") {
      return add(num1, num2);
    } else if (op === "-") {
      return subtract(num1, num2);
    } else if (op === "*") {
      return multiply(num1, num2);
    } else if (op === "/") {
      return divide(num1, num2);
    }
  } else {
    console.log("wrong operator");
  }
}
const buttons = document.querySelectorAll(".buttons div");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerText;
    if (opChoices.test(buttonValue)){
      op = buttonValue;
    } else {
      if (op !== undefined){
        string2.append(buttonValue);
      } else {
        string1.append(buttonValue);
      }
    }
    num1 = parseInt(string1);
    num2 = parseInt(string2);
    operate(num1,num2,op);
  });
});

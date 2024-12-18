// State variables
let num1 = '';
let num2 = '';
let operator = '';
let result = '';
const outputScreen = document.querySelector('.output-screen');
outputScreen.textContent = "0";
// Helper function to perform operations
function operate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : 'Error';
    default: return '';
  }
}

// Event delegation for button clicks
document.querySelector('.buttons').addEventListener('click', (e) => {
  const value = e.target.dataset.value;
  if (!value) return; 

  // Handle numbers
  if (!isNaN(value) || value === '.') {
    if (operator) {
      num2 += value;
      outputScreen.textContent = num2;
    } else {
      num1 += value; 
      outputScreen.textContent = num1;
    }
  }

  // Handle operators
  else if ('+-*/'.includes(value)) {
    if (num1 && num2) {
      num1 = operate(num1, num2, operator).toString();
      num2 = '';
    }
    operator = value; 
    outputScreen.textContent = num1;
  }

  //Handle All Clear & Clear Entry
  else if (value === 'AC' || value == 'CE'){
    num2 = '';
    if (value === 'AC') {
      num1 = '';
      op = '';
    }
    outputScreen.textContent = "0";
  }

  // Handle equals
  else if (value === '=') {
    if (num1 && num2 && operator) {
      result = operate(num1, num2, operator);
      outputScreen.textContent = result;
      num1 = result.toString();
      num2 = '';
      operator = '';
    }
  }

  // Handle error case or invalid operations
  else {
    outputScreen.textContent = 'Error';
  }
});

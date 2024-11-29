// Operator Functionality




// ADD +
function add(num1, num2) {
  return num1 + num2;
}

// Subtract -
function subtract(num1, num2) {
  num2 = 0 - num2;
  return add(num1, num2);
}

// Multiply *
function multiply(numArr) {
  let result = 1;
  numArr.forEach((number) => (result *= number));
  return result;
}

// Divide /
function divide(numArr) {
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (i !== 0) {
      result = numArr[i];
    } else {
      result / numArr[i];
    }
  }
}

// CE (Clear Entry)

// AC (All Clear)

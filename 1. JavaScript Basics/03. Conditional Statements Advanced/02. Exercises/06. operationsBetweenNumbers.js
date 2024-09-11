function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];

  let oddOrEven = "";

  let result = 0;
  if (n2 === 0) {
    console.log(`Cannot divide ${n1} by zero`);
    return;
  } 
  else if (operator === "+" || operator === "-" || operator === "*") {
    if (operator === "+") {
      result = n1 + n2;
    } 
    else if (operator === "-") {
      result = n1 - n2;
    } 
    else if (operator === "*") {
      result = n1 * n2;
    }

    if (result % 2 === 0) {
      oddOrEven = "even";
    } 
    else {
      oddOrEven = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${oddOrEven}`);
  } 
  else if (operator === "/") {
    result = n1 / n2;
    console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
  } 
  else if (operator === "%") {
    result = n1 % n2;
    console.log(`${n1} ${operator} ${n2} = ${result}`);
  }
}

// operationsBetweenNumbers(["10", "12", "+"]);
// operationsBetweenNumbers(["10", "1", "-"]);
// operationsBetweenNumbers(["123", "12", "/"]);
// operationsBetweenNumbers(["10", "3", "%"]);
// operationsBetweenNumbers(["112", "0", "/"]);

// operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);

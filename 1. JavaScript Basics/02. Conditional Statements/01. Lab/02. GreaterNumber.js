function greaterNumber(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let max = Math.max(firstNum,secondNum);

    console.log(max);
}

greaterNumber(["5", "7"]);
function sumOfOddNumbers(num){
    let currentNum = -1;
    let sum = 0;
    for (let index = 1; index <= num; index++) {
        currentNum+= 2;
        sum += currentNum;
      console.log(currentNum);
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);


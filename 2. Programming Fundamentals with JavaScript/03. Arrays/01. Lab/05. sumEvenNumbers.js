function sumEvenNumbers(inputArray){
    let sum = 0;
    inputArray.forEach(element => {
        if(Number(element) % 2 === 0){
            sum += Number(element);
        }
    });
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
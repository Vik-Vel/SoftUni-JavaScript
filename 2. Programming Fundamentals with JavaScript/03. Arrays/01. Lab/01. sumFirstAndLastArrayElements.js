function sumFirstAndLastArrayElements(input){
    let firstElement = Number(input[0]);
    let secondElement = Number(input[input.length-1]);

    console.log(firstElement + secondElement);
}

sumFirstAndLastArrayElements([20, 30, 40])
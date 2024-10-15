function evenAndOddSubtraction(inputArray){
    let sumOfEvens = 0;
    let sumOfOdds = 0;

    inputArray.forEach(element => {
        if(Number(element) % 2 === 0){
            sumOfEvens += Number(element);
        }
        else{
            sumOfOdds += Number(element);
        }
    });
    
    console.log(sumOfEvens - sumOfOdds);
}

evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])

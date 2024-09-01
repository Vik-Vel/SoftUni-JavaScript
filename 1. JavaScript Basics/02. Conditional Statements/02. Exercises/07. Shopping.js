function shopping(input){
    let videoCardPricePerOne = 250;

    let budget = Number(input[0]);
    let countVideoCards = Number(input[1]);
    let countProcessors = Number(input[2]);
    let countRam = Number(input[3]);
    
    let processorPricePerOne = (videoCardPricePerOne * countVideoCards) * 0.35;
    let ramPricePerOne = (videoCardPricePerOne * countVideoCards) * 0.1;

    let totalPrice = countVideoCards * videoCardPricePerOne + countProcessors * processorPricePerOne + countRam * ramPricePerOne;

    if(countVideoCards >= countProcessors){
        totalPrice *= 0.85;
    }

    if(totalPrice <= budget){
        console.log(`You have ${Math.abs(budget - totalPrice).toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${Math.abs(totalPrice - budget).toFixed(2)} leva more!`)
    }
}

shopping(["900",
    "2",
    "1",
    "3"])
    
shopping(["920.45",
"3",
"1",
"1"])

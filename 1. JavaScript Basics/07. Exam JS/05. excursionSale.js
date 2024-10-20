function excursionSale(input){
    let seaPrice = 680;
    let mountainPrice = 499;

    let countSea = Number(input[0]);
    let countMountain = Number(input[1]);
    let word = input[2];
    let count = 2;
    let profit= 0; 
    while((countSea > 0 || countMountain > 0 ) && word !== 'Stop'){
        if(word === 'sea' && countSea > 0){
            profit += seaPrice;
            countSea--;
        }
        else  if(word === 'mountain' && countMountain > 0){
            profit += mountainPrice;
            countMountain--;
        }
        count++;
        word = input[count];
    }
    if(countSea === 0 && countMountain === 0){
        console.log(`Good job! Everything is sold.`)
        console.log(`Profit: ${profit} leva.`)
    }
    else{
        console.log(`Profit: ${profit} leva.`)
    }
}

excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])
excursionSale    (["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])
    
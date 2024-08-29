function godzillaVsKong(input){
    let budget = Number(input[0]);
    let numOfStatists = Number(input[1]);
    let priceClothPerStatist = Number(input[2]);
    let decor = budget * 0.1;
    
    

    let price = numOfStatists * priceClothPerStatist;
    if(numOfStatists > 150){
        price *= 0.9;
    }

    price += decor;

    if(price > budget){
        console.log('Not enough money!');
        console.log(`Wingard needs ${((price-budget).toFixed(2))} leva more.`)
    }
    else{
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget-price).toFixed(2)} leva left.`)
    }


}

godzillaVsKong(["20000",
    "120",
    "55.5"])
    godzillaVsKong(["15437.62",
        "186",
        "57.99"])
        
    godzillaVsKong(["9587.88",
        "222",
        "55.68"])
        
    
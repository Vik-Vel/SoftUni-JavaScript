function braceletStand(input){
    let moneyOfTerezaPerDay = Number(input[0]);
    let moneyOfProfitPerDay = Number(input[1]);
    let moneyCostOfTerezaForAllDays = Number(input[2]);
    let priceForGift = Number(input[3]);

    let savedMoney = moneyOfTerezaPerDay * 5;
    let profit = moneyOfProfitPerDay * 5;
    let totalSaved = savedMoney  + profit;

    let total = totalSaved - moneyCostOfTerezaForAllDays;
    
    if(priceForGift > total){
        console.log(`Insufficient money: ${(priceForGift - total).toFixed(2)} BGN.`)
    }
    else  if(priceForGift <= total){
        console.log(`Profit: ${total.toFixed(2)} BGN, the gift has been purchased.`)
    }
}

braceletStand(["5.12",
    "32.05",
    "15",
    "150"]);    
    braceletStand(["2.10",
        "17.50",
        "20.20",
        "148.50"])
    braceletStand(["15.20",
        "200.00",
        "7.30",
        "1500.12"])
        
function toyShop(input){
    let puzzle = 2.60;
    let talkingDoll = 3;
    let bear = 4.10;
    let minion = 8.20;
    let truck = 2;

    let tripPrice = Number(input[0]);
    let countPuzzles = Number(input[1]);
    let countTalkingDolls = Number(input[2]);
    let countBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);

    let countToys = countPuzzles + countTalkingDolls + countMinions + countTrucks + countBears;

    let allToysPrice = countPuzzles * puzzle+ countTalkingDolls * talkingDoll + countMinions * minion + countTrucks * truck + countBears *bear;


    if(countToys >= 50){
        allToysPrice *= 0.75;
    }
    allToysPrice *= 0.9;

    if(allToysPrice >= tripPrice){
        console.log(`Yes! ${(allToysPrice - tripPrice).toFixed(2)} lv left.`)
    }
    else{
        console.log(`Not enough money! ${Math.abs(allToysPrice - tripPrice).toFixed(2)} lv needed.`)
    }

}

toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])
    
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
    
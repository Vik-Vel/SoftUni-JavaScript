function disneyLandJourney(input){
    let cost = Number(input[0]);
    let months = Number(input[1]);
    let savedSum = 0;
    

    for (let i = 1; i <= months; i++) {
       

        if(i % 2 ===  1 && i !== 1){ // for clothes and shoes
        savedSum -= savedSum * 0.16;
        }

        if(i % 4 ===  0){ // bonus from boss
            savedSum += savedSum * 0.25;
        }
        let saveMoneyFromEachMonth = 0.25 * cost;
        savedSum += saveMoneyFromEachMonth;

    }

    if(savedSum >= cost){
        let forSouvenirs =  savedSum - cost;
        console.log(`Bravo! You can go to Disneyland and you will have ${forSouvenirs.toFixed(2)}lv. for souvenirs.`);
    }
    else{
        let more = cost - savedSum;
        console.log(`Sorry. You need ${more.toFixed(2)}lv. more.`);
    }
}


disneyLandJourney(["1000", "4"]);
disneyLandJourney(["3265", "3"]);

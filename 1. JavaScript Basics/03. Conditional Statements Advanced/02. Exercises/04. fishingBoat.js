function fishingBoat(input){
    let budgget = Number(input[0]);
    let season = input[1];
    let countFishermens = Number(input[2]);

    let price = 0;
    let discount = 0;

    if(countFishermens <= 6){
        discount = 0.1;
    }
    else if(countFishermens <= 11){
        discount = 0.15;
    }
    else if( countFishermens >= 12){
        discount = 0.25;
    }

    // if(countFishermens % 2 === 0 && season !== 'Autumn'){
    //     discount += 0.05;
    // }

    if(season === 'Spring'){
        price = 3000 * (1-discount);
    }
    else if(season === 'Summer' || season === 'Autumn' ){
        price = 4200 * (1-discount);
    }
    else if(season === 'Winter'){
        price = 2600 * (1-discount);
    }

    
    if(countFishermens % 2 === 0 && season !== 'Autumn'){
        price *= 0.95;
    }
    

    if(price <= budgget){
       console.log(`Yes! You have ${(budgget - price).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${(price - budgget).toFixed(2)} leva.`);
    }
}
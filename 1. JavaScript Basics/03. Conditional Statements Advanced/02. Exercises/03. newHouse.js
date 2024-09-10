function newHouse(input){
    let rose = 5;
    let dahlia = 3.80;
    let tulip = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50; 

    let typeFlower = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let priceForAll = countFlowers;

    switch(typeFlower){
        case 'Roses':
        priceForAll *= rose;
        break; 
        case 'Dahlias':
        priceForAll *= dahlia;
        break; 
        case 'Tulips':
        priceForAll *= tulip;
        break; 
        case 'Narcissus':
        priceForAll *= narcissus;
        break; 
        case 'Gladiolus':
        priceForAll *= gladiolus;
        break; 
    }

    if(typeFlower === 'Roses' && countFlowers > 80){
        priceForAll *= 0.9;
    }
    else  if(typeFlower === 'Dahlias' && countFlowers > 90){
        priceForAll *= 0.85;
    }
    else  if(typeFlower === 'Tulips' && countFlowers > 80){
        priceForAll *= 0.85;
    }
    else  if(typeFlower === 'Narcissus' && countFlowers < 120){
        priceForAll *= 1.15;
    }
    else  if(typeFlower === 'Gladiolus' && countFlowers < 80){
        priceForAll *= 1.2;
    }

    if(priceForAll <= budget){
       console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${(budget-priceForAll).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money, you need ${(priceForAll - budget).toFixed(2)} leva more.`);
    }
}
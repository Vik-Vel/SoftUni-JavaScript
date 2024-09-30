function vacation(countGroupOfPeople, typeOfTheGroup, dayOfTheWeek){
    pricePerPerson = 0;

    switch(typeOfTheGroup){
        case 'Students':
            if(dayOfTheWeek === 'Friday'){
                pricePerPerson = 8.45;
            }
            else if(dayOfTheWeek === 'Saturday'){
                pricePerPerson = 9.80;
            }
            else if(dayOfTheWeek === 'Sunday'){
                pricePerPerson = 10.46;
            }
        break;
        
        case 'Business':
            if(dayOfTheWeek === 'Friday'){
                pricePerPerson = 10.90;
            }
            else if(dayOfTheWeek === 'Saturday'){
                pricePerPerson = 15.60;
            }
            else if(dayOfTheWeek === 'Sunday'){
                pricePerPerson = 16;
            }
        break;
        
        case 'Regular':
            if(dayOfTheWeek === 'Friday'){
                pricePerPerson = 15;
            }
            else if(dayOfTheWeek === 'Saturday'){
                pricePerPerson = 20;
            }
            else if(dayOfTheWeek === 'Sunday'){
                pricePerPerson = 22.50;
            }
        break;
        
    }

    let price = countGroupOfPeople * pricePerPerson;

    if(countGroupOfPeople >= 30 && typeOfTheGroup === 'Students'){
        price *= 0.85;
    }
    else if(countGroupOfPeople >= 100 && typeOfTheGroup === 'Business'){
     let discount = pricePerPerson * 10;
     price -= discount;
    }
    else if(countGroupOfPeople >= 10 && countGroupOfPeople <= 20 && typeOfTheGroup === 'Regular'){
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(30,
    "Students",
    "Sunday")

vacation(40,
    "Regular",
    "Saturday")
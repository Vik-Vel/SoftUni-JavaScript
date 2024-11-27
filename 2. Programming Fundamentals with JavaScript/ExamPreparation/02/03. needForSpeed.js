function needForSpeed(input){
    let inputCopy = input;
    let numOfCars = input.shift();

    let cars = [];
    let rowCopy = "";

    for (let i = 0; i < numOfCars; i++) {
     rowCopy = inputCopy.shift().split('|');

        let car = {
            model: rowCopy[0],
            mileage: rowCopy[1],
            fuel: rowCopy[2]
        }
        cars.push(car);
    }

    rowCopy = inputCopy.shift().split(' : ');

    while(rowCopy[0] !== 'Stop'){
        let [command, car] = rowCopy;
        let currentCar = cars.find(c=>c.model === car);

        if(command === 'Drive'){
            let distance = Number(rowCopy[2]);
            let fuel = Number(rowCopy[3]);
            
            
            if(Number(currentCar.fuel) < fuel){
                console.log('Not enough fuel to make that ride');
            
            }
            else{
                currentCar.mileage = Number(currentCar.mileage) + distance;
                currentCar.fuel = Number(currentCar.fuel) - fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            }

            if(Number(currentCar.mileage) >= 100000){
                //Remove the full object
                cars.splice(cars.indexOf(currentCar),1);
                console.log(`Time to sell the ${car}!`)
            }
        }
        else if(command === 'Refuel'){
            let fuel = Number(rowCopy[2]);
            if(Number(currentCar.fuel) + fuel > 75){
                fuel = 75 - Number(currentCar.fuel)
                currentCar.fuel = 75;
            }
            else{

                currentCar.fuel = Number(currentCar.fuel) + fuel;
            }
            console.log(`${car} refueled with ${fuel} liters`)
        }
        else if(command === 'Revert'){
            let km = Number(rowCopy[2]);
            currentCar.mileage = Number(currentCar.mileage) - km;
            if(Number(currentCar.mileage) < 10000){
                //the current car mileage (current Car.mileage), reduced by km, ensuring that the mileage does not fall below 10,000.
                currentCar.mileage = Math.max(10000, Number(currentCar.mileage) - km);
            }
            else{
                console.log(`${car} mileage decreased by ${km} kilometers`)
            }
        }
        
        rowCopy = inputCopy.shift().split(' : ');
    }

    cars.forEach(car => {
        console.log(`${car.model} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`)
    });

}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  )
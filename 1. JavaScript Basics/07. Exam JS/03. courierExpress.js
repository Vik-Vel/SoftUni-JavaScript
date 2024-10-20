function courierExpress(input){
    let shipmentWeight = Number(input[0]);
    let typeService = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;
   // let pricePerKm = 0;

    switch(typeService){
        case 'standard':
            if(shipmentWeight < 1){
                pricePerKm = 0.03;
                pricePerKm = pricePerKm * distance;
            }
            else  if(shipmentWeight >= 1 && shipmentWeight < 10){
                pricePerKm = 0.05;
                pricePerKm = pricePerKm * distance;
            }
            else  if(shipmentWeight >= 10 && shipmentWeight < 40){
                pricePerKm = 0.1;
                pricePerKm = pricePerKm * distance;
            }
            else  if(shipmentWeight >= 40 && shipmentWeight < 90){
                pricePerKm = 0.15;
                pricePerKm = pricePerKm * distance;
            }
            else  if(shipmentWeight >= 90 && shipmentWeight < 150){
                pricePerKm = 0.2;
                pricePerKm = pricePerKm * distance;
            }
        break;
        case 'express':
            if(shipmentWeight < 1){
                // pricePerKm = 3;
                pricePerKm = 0.03 * distance;
                 pricePerKm += pricePerKm * 0.8 * shipmentWeight;
            }
            else  if(shipmentWeight >= 1 && shipmentWeight < 10){
                pricePerKm = 0.05* distance;
                pricePerKm += pricePerKm * 0.4 * shipmentWeight;
            }
            else  if(shipmentWeight >= 10 && shipmentWeight < 40){
                pricePerKm = 0.1* distance;
                pricePerKm += pricePerKm * 0.05 * shipmentWeight;
            }
            else  if(shipmentWeight >= 40 && shipmentWeight < 90){
                pricePerKm = 0.15* distance;
                pricePerKm += pricePerKm * 0.02 * shipmentWeight;
            }
            else  if(shipmentWeight >= 90 && shipmentWeight < 150){
                pricePerKm = 0.2* distance;
                pricePerKm += pricePerKm * 0.01 * shipmentWeight;
            }
        break;
    }

    let total = pricePerKm;
    console.log(`The delivery of your shipment with weight of ${shipmentWeight.toFixed(3)} kg. would cost ${total.toFixed(2)} lv.`)
    

}

courierExpress(["1.5",
    "standard",
    "100"]);
    
courierExpress(["87",
    "express",
    "130"]);
    
courierExpress[("20", 
    "standard",
    "349")]
    
    
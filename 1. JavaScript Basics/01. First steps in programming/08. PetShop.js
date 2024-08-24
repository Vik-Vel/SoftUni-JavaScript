function petShop(input){
    let pricePerOneDogFood = 2.50; 
    let pricePerOneCatFood = 4; 

    let totalPrice = Number(input[0]) *  pricePerOneDogFood + Number(input[1]) * pricePerOneCatFood;

    console.log(totalPrice.toFixed(1));
}

petShop(["5 ", "4 "])
function fruitOrVegetable(input){
    let fruitOrVeggie = input[0];
    const arrayFruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    const arrayVegetables = ['tomato', 'cucumber', 'pepper', 'carrot'];

    let result = '';
    if(arrayFruits.includes(fruitOrVeggie)){
        result = 'fruit';
    }
    else if(arrayVegetables.includes(fruitOrVeggie)){
        result = 'vegetable';
    }
    else{
        result = 'unknown';
    }

    console.log(result);

}

fruitOrVegetable(["banana"])
fruitOrVegetable(["apple"])
fruitOrVegetable(["tomato"])
fruitOrVegetable(["water"])
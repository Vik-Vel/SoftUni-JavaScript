function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veggieMenu = 8.15;
    let delivery = 2.50;

    let numOfChickenMenu = Number(input[0]);
    let numOfFishMenu = Number(input[1]);
    let numOfVeggieMenu = Number(input[2]);

    let priceOfAllWithoutDessert = chickenMenu * numOfChickenMenu + fishMenu * numOfFishMenu + veggieMenu * numOfVeggieMenu;

    let dessert = priceOfAllWithoutDessert * 0.2;

    let total = dessert + priceOfAllWithoutDessert + delivery;

    console.log(total);
}

foodDelivery(["2 ",
    "4 ",
    "3 "]
    )
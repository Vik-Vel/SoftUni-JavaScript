function catDiet(input){
    let calFatPerGram = 9;
    let calProteinPerGram = 4;
    let calCarbsPerGram = 4;

    let percentFats = Number(input[0]);
    let percentProteins = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let fat = ((percentFats/100) * totalCalories)/calFatPerGram;
    let proteins = ((percentProteins/100) * totalCalories)/calProteinPerGram;
    let carbs = ((percentCarbs/100) * totalCalories)/calCarbsPerGram;

    let weightOfTheFood = fat + proteins + carbs;
    let caloriesPerOneGramFood = totalCalories/weightOfTheFood;

    let percentWithoutWater = caloriesPerOneGramFood * (1 - percentWater/100);
    
    console.log(percentWithoutWater.toFixed(4));
}

catDiet(["60",
    "25",
    "15",
    "2500",
    "60"]);
catDiet(["40",
    "40",
    "20",
    "3000",
    "40"]);
catDiet(["20",
    "60",
    "20",
    "1800",
    "50"]);

    
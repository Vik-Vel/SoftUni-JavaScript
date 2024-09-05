function animalType(input){
    let animal = input[0];
    let type = '';

    if(animal === 'dog'){
        type = 'mammal'
    }
    else if(animal === 'crocodile' || animal === 'tortoise' || animal === 'snake'){
        type = 'reptile';
    }
    else{
        type = 'unknown';
    }

    console.log(type);
}

animalType(["dog"])
animalType(["snake"])
animalType(["cat"])




function convertToObject(input){
    let stringInput = JSON.parse(input);

    //  Iterate through the object with a for in array (which takes the key) 
    for (const key in stringInput) {
        let value = stringInput[key];
        console.log(`${key}: ${value}`) ;   
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
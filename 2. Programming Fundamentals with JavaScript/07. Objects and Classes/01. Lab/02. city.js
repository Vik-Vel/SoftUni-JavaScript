function city(inputObject){
    for (const key in inputObject) {
        let value = inputObject[key];
        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)
function convertToJSON(nameInput, lastNameInput, hairColorInput){
    let person = {}; //Create empty object

    person.name = nameInput;
    person.lastName = lastNameInput;
    person.hairColor = hairColorInput;

     let converted = JSON.stringify(person); //Convert object to JSON string
    console.log(converted);

}

convertToJSON('George', 'Jones', 'Brown')
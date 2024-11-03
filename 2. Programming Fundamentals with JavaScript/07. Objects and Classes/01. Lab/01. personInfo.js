function personInfo(firstName, lastName, age){

    //Create object
    let person = new Object();

    //Add person properties from input
        person.firstName = firstName;
        person.lastName = lastName;
        person.age = age;
    
    //Iterate through the object with a for in array (which takes the key) 
        // for (const key in person) {
        //     let value = person[key];
        //     console.log(`${key}: ${value}`) ;   
        // }
    
        //Returning object
    return person;
}


personInfo("Peter", "Pan","20")
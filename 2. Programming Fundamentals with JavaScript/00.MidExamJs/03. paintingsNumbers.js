function paintingsNumbers(input){
    let inputArr = input[0].split(' ');
    
    for (let i = 1; i < input.length; i++) {
        if(input[i] === 'END'){
            break;
        }
        let commandArray = input[i].split(' ');
        let command = commandArray[0];
        
        if(command === 'Change'){
            let paintingNumber1 = commandArray[1];
            let newNumber = commandArray[2];
            let index = inputArr.findIndex(num => num === paintingNumber1);
            if(index !== undefined && index !== NaN && index !== null && index >= 0){
                inputArr[index] = newNumber;
            }
        }
        else if(command === 'Hide'){
            let paintingNumber1 = commandArray[1];
            let index = inputArr.findIndex(num => num === paintingNumber1);

            if(index !== undefined && index !== NaN && index !== null && index >= 0){
                inputArr.splice(index, 1);
            }
        }
        else if(command === 'Switch'){
            let paintingNumber1 = commandArray[1];
            let paintingNumber2 = commandArray[2];
            let index = inputArr.findIndex(num => num === paintingNumber1);
            let index2 = inputArr.findIndex(num => num === paintingNumber2);

            if(index !== undefined && index !== NaN && index !== null && index >= 0 && index2 !== undefined && index2 !== NaN && index2 !== null && index2 >= 0){
                let indexCopy = inputArr[index];
                inputArr[index] = paintingNumber2;
                inputArr[index2] = indexCopy;
            }
        }
        else if (command === 'Insert') {
            let givenIndex = parseInt(commandArray[1]); 
            let paintingNumber = commandArray[2];
        
            if (givenIndex >= 0 && givenIndex < inputArr.length) {
                inputArr.splice(givenIndex + 1, 0, paintingNumber);
            }
        }
        
        else if(command === 'Reverse'){
            inputArr.reverse();
        }
    }
    console.log(inputArr.join(' '));
}

paintingsNumbers(["115 101 114 73 111 116 75",
    "Insert 5 114",
    "Switch 116 73",
    "Hide 76",
    "END"]);

paintingsNumbers(["77 120 115 101 97 78 88 112 111 108 110",
    "Switch 97 98",
    "Hide 88",
    "Change 120 117",
    "END"]);

paintingsNumbers(["65 304 97 79 12 659",
        "Reverse",
        "Change 73 70",
        "Insert 10 85",
        "END"])
        


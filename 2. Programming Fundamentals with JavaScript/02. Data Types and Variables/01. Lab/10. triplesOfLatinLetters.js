function triplesOfLatinLetters(input){

    for (let i = 0; i < parseInt(input); i++) {
        for (let j = 0; j < parseInt(input); j++) {
            for (let k = 0; k < parseInt(input); k++) {
                let letter = String.fromCharCode(97+i) + String.fromCharCode(97+j) + String.fromCharCode(97 + k);
                console.log(letter);
            }
        }
    }
}

triplesOfLatinLetters(2)
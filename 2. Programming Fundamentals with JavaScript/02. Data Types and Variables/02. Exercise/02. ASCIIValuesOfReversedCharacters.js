function ASCIIValuesOfReversedCharacters(firstChar, secondChar, thirdChar){
    let chars = thirdChar + secondChar + firstChar;
    console.log(chars);

    let result = [];
    for (let i = 0; i < chars.length; i++) {
       result.push(chars.charCodeAt(i)); //взима индекса на който е и го гледа като чар и връща кода му
    }
    let resultJoin = result.join(' ');
    console.log(resultJoin);
}

ASCIIValuesOfReversedCharacters('a','b','c')
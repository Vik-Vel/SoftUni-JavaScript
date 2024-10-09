function reversedString(input){

    let inputArr = Array.from(input);
    let reversed = inputArr.reverse();
    console.log(reversed.join(''));
}

reversedString('star')
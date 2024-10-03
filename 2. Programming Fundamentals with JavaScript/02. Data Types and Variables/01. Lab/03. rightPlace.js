function rightPlace(word, char,correct){
    let correctWord = word.replace('_', char);

    if(correct === correctWord){
        console.log('Matched');
    }
    else{
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'o', 'Strong')

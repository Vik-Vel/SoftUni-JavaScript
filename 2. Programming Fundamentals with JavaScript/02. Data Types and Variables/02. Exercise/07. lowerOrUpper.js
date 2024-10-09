function lowerOrUpper(char){

    if(char === char.toUpperCase()){ //Прави го главни и сравнява дали са еднакви
        console.log('upper-case');
    }
    else{
        console.log('lower-case');
    }
}

lowerOrUpper('L')
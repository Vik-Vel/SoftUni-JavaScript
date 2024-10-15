function condenseArrayToNumber(array){
    let sum = 0;
    for(let i = 0; i < array.length - 1; i++){

        sum += array[i] + array[i + 1];
    }
    console.log(sum);
}

//condenseArrayToNumber([2,10,3])
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])

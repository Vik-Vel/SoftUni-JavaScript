function equalArrays(firstArray, secondArray){
    let sum = 0;
    //let sumOfSecond = 0;

    for(let i = 0; i < firstArray.length; i++){
        for(let j = i; j <= i; j++){
            if(firstArray[i] !== secondArray[j]){
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                return;
            }
            
        }
        sum += Number(firstArray[i]);
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
}

equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])

function amazingNumbers(input){
    let sum = 0;
    input = input.toString();

    for(let i = 0; i < input.length; i++){
        sum += parseInt(input[i]);
    }
    sum = sum.toString();
    for(let i = 0; i < sum.length; i++){
        if(sum[i] == 9){
            console.log(`${input} Amazing? True`);
            return;
        }
    }
    console.log(`${input} Amazing? False`);
}

amazingNumbers(1233)
amazingNumbers(999)
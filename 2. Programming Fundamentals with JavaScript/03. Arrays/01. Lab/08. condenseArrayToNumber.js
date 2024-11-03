function condenseArrayToNumber(array){
    let sum = 0;
    let arrSec = [];
    
    if(array.length === 1){
        sum = Number(array[0]);
    }

    while(array.length > 1){
        for(let i = 0; i < array.length - 1; i++){
            arrSec.push(array[i] + array[i + 1]);
        }
        array = arrSec;
        arrSec = [];
        sum = Number(array[0]);
    }
    console.log(sum);
}

//condenseArrayToNumber([2,10,3])
//condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])

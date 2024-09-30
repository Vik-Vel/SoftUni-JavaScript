function printAndSum(start, end){
    let array = '';
    let sum = 0 ;

    for(let i = start; i <= end; i++ ){
        array += (i + ' ');
        sum += i;
    }

    console.log(array);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10)
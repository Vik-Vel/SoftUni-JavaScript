function calculator(first, operator, second){
    if(operator === '+'){
        console.log((first + second).toFixed(2));
    }
    else  if(operator === '-'){
        console.log((first - second).toFixed(2));
    }
    else  if(operator === '*'){
        console.log((first * second).toFixed(2));
    }
    else  if(operator === '/'){
        console.log((first / second).toFixed(2));
    }
}

calculator(5,
    '+',
    10
    )
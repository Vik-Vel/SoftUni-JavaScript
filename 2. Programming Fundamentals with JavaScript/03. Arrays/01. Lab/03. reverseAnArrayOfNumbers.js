function reverseAnArrayOfNumbers(count, numbers){
    let currentArray = numbers.slice(0,count);
    console.log(currentArray.reverse().join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);

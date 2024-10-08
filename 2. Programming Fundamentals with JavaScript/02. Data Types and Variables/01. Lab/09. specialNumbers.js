function specialNumbers(input){
    for (let i = 1; i <= input; i++) {
        let sum = 0;
        let num = i;

        // Calculate the sum of digits
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        // Check if the sum is special (5, 7, or 11)
        let isSpecial = (sum === 5 || sum === 7 || sum === 11);

        if(isSpecial){
            console.log(`${i} -> True`);
        }
        else{
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);
specialNumbers(20);
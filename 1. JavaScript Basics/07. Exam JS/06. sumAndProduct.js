function sumAndProduct(input){
    let n = parseInt(input[0]); 
    let found = false;

   
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;

                    if (sum === product && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`);  
                        found = true;
                        return;
                    }

                    if (Math.floor(product / sum) === 3 && n  % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`);  
                        found = true;
                        return;
                    }
                }
            }
        }
    }

    if (!found) {
        console.log("Nothing found");
    }
}

sumAndProduct(["214"])
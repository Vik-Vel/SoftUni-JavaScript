function bonusScore(input){
    let num = Number(input[0]);

    let bonus = 0;

    if(num <= 100){
        bonus = 5;
    }
    else if(num > 100 && num <= 1000){
        bonus = num * 0.2;
    }
    else if(num > 1000){
        bonus = num * 0.1;
    }

    if(num % 2 === 0){
        bonus++;
    }
    else if(num % 10 === 5){
        bonus += 2;
    }

    console.log(bonus);
    console.log(num + bonus);
}

// bonusScore(["20"])
// bonusScore(["175"])
bonusScore(["2703"])
bonusScore(["15875"])
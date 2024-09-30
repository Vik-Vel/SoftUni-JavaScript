function rounding(num, round){
    
    if(round > 15){
        round = 15;
    }
    let toFix = num.toFixed(round);
    let roundedNum = parseFloat(toFix);
    
    console.log(roundedNum);
}

rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)
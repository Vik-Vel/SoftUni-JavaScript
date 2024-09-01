function lunchBreak(input){
    let nameOfSerial = input[0];
    let episodeTime = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let timeForLunch = lunchBreak / 8;
    let timeForRest = lunchBreak / 4;

    let neededTime = episodeTime + timeForLunch + timeForRest;

    if(neededTime <= lunchBreak){
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(lunchBreak - neededTime)} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(neededTime-lunchBreak)} more minutes.`)
    }
}


lunchBreak(["Game of Thrones",
    "60",
    "96"])
    
    
lunchBreak(["Teen Wolf",
    "48",
    "60"])
    
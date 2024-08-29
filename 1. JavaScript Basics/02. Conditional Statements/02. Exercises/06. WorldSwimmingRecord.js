function worldSwimmingRecord(input){
     let recordInSeconds = Number(input[0]);
     let distanceInMeters = Number(input[1]);
     let timeInSecondsPerMeter = Number(input[2]);
     let difference = 0;

     let delayCount = Math.floor(distanceInMeters/15);
     let delaySeconds = delayCount * 12.5;

     let timeOfIvan = distanceInMeters * timeInSecondsPerMeter + delaySeconds; 


    if(timeOfIvan < recordInSeconds){
     difference = recordInSeconds - timeOfIvan;
        console.log(`Yes, he succeeded! The new world record is ${timeOfIvan.toFixed(2)} seconds.`)
    }
    else{
     difference = timeOfIvan - recordInSeconds;

        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["10464",
    "1500",
    "20"])
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])
    
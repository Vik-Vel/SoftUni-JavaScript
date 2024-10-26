function archeryChampion(input){
    let targetsArray = input[0].split('|');
    let achievePoint = 0;
    
    let numberArray = [];
    for (let i = 0; i < targetsArray.length; i++) {
       numberArray.push(parseInt(targetsArray[i]));
    }

    for (let i = 1; i < input.length; i++) {
        if(input[i] === 'Game over'){
            break;
        }

        let targetIndexArray = input[i].split('@');
        let sideArray = targetIndexArray[0].split(' ');
        let side = sideArray[1];
        let startIndex = Number(targetIndexArray[1]);
        let length = Number(targetIndexArray[2]);

       if(sideArray[0] === 'Reverse'){
        numberArray.reverse();
       }
        else if(side === 'Left'){
            if(startIndex < 0 || startIndex >= numberArray.length){
                continue;
            }
            else{
            let targetIndex = (startIndex - length) % numberArray.length;
    
            if (targetIndex < 0) {
                targetIndex += numberArray.length;
            }

            if(numberArray[targetIndex] < 5){
                achievePoint += numberArray[targetIndex];
                numberArray[targetIndex] = 0;
            }
            else{
                achievePoint += 5;
                numberArray[targetIndex] -= 5;
            }
        }
        }
        else if(side === 'Right'){
            if(startIndex < 0 || startIndex >= numberArray.length){
              continue;
            }
            else{

            let targetIndex = (startIndex + length) % numberArray.length;

            if (targetIndex < 0) {
                targetIndex += numberArray.length;
            }


            if(numberArray[targetIndex] < 5){
                achievePoint += numberArray[targetIndex];
                numberArray[targetIndex] = 0;
            }
            else{
                achievePoint += 5;
                numberArray[targetIndex] -= 5;
            }
        }
        }
    }
        
    console.log(numberArray.join(' - '));
    console.log(`John finished the archery tournament with ${achievePoint} points!`)


     

}

archeryChampion(["10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Shoot Right@6@5",
    "Reverse",
    "Game over"])
archeryChampion(["20|30|40|50|60",
    "Shoot Left@0@12",
    "Shoot Right@4@15",
    "Shoot Left@6@5",
    "Reverse",
    "Game over"])
    
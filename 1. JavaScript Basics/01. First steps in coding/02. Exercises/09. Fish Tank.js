function fishTank(input){
    let length = Number(input[[0]]);
    let width = Number(input[[1]]);
    let height = Number(input[[2]]);
    let percentage = Number(input[[3]])/100;

    let waterCm = length * height * width;
    let waterLitters = waterCm / 1000;
    
    let littersNeeded = waterLitters * (1-percentage);

    console.log(littersNeeded);
}

fishTank(["85 ",
    "75 ",
    "47 ",
    "17 "])
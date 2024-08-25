function depositCalculator(input){
    let  deposit = Number(input[0]);
    let term = Number(input[1]);
    let rate = Number(input[2]);

    let sum = deposit + term * ((deposit * (rate/100))/12);

    console.log(sum);
}

depositCalculator(["200 ",
    "3 ",
    "5.7 "])
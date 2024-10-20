function exam(input){
    let countOfStudents = Number(input[0]);
    let countOf5 = 0;
    let countOf4 = 0;
    let countOf3 = 0;
    let countOf2 = 0;
    let average = 0;

    for (let i = 1; i <= countOfStudents; i++) {
        let currRate = Number(input[i]);
        average += currRate;
        if(currRate >= 5){
            countOf5++;
        }
        else if(currRate >= 4){
            countOf4++;
        }
        else if(currRate >= 3){
            countOf3++;
        }
        else if(currRate < 3){
            countOf2++;
        }
    }


    
    console.log(`Top students: ${((countOf5/countOfStudents)*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((countOf4/countOfStudents)*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((countOf3/countOfStudents)*100).toFixed(2)}%`);
    console.log(`Fail: ${((countOf2/countOfStudents)*100).toFixed(2)}%`);
    console.log(`Average: ${(average/countOfStudents).toFixed(2)}`);
}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])
    
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])
    
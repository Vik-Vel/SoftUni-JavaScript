function vacationBooksList(input){
    let numPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursNeed = numPages / pagesPerHour;
    let hoursPerDay = hoursNeed / days;

    console.log(hoursPerDay);
}

vacationBooksList(["212 ",
    "20 ",
    "2 "]
    )
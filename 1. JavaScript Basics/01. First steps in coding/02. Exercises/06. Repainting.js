function repainting(input){
    const protectiveNylonPerMeterPrice = 1.50;
    const paintPrice  = 14.50;
    const paintThinnerPrice  = 5;

    let nylonNeeded = (Number(input[0]) + 2) * protectiveNylonPerMeterPrice ;
    let paintNeeded = (Number(input[1]) * paintPrice ) * 1.10;
    let thinnerNeeded = Number(input[2]) * paintThinnerPrice;
    let hoursWork = Number(input[3]);

    let totalMaterialPrice = 0.40;

    totalMaterialPrice += nylonNeeded + paintNeeded + thinnerNeeded;

    let workmanSalaryPerHour = totalMaterialPrice * 0.3;

    let workmanSalaryTotal = workmanSalaryPerHour * hoursWork;

    console.log(totalMaterialPrice+workmanSalaryTotal);


}

repainting(["10 ",
    "11 ",
    "4 ",
    "8 "]
    )
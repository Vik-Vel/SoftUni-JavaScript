function cinema(input) {
    let premiere = 12;
    let normal = 7.50;
    let dicount = 5;

    let projectionType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let allSeats = rows * cols;
    let totalPrice = 0;

    if (projectionType === 'Premiere') {
        totalPrice = allSeats * premiere;
    }
    else if (projectionType === 'Normal') {
        totalPrice = allSeats * normal;
    }
    else if (projectionType === 'Discount') {
        totalPrice = allSeats * dicount;
    }

    console.log(`${totalPrice.toFixed(2)} leva.`);
}
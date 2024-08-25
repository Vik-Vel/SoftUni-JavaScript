function yardGreening(input){

    const kvM = 7.61;

    let price = input[0] * kvM;
    let discount = price * 0.18;

    console.log(`The final price is: ${price-discount.toFixed(2)} lv."`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

yardGreening(["150"]);
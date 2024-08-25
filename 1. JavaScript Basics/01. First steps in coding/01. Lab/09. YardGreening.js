function yardGreening(input){

    const kvM = 7.61;

    let price = input[0] * kvM;
    let discount = price * 0.18;

    console.log(`The final price is: ${price-discount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["150"]);
function fancyBarcode(input){
    const pattern = /^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/; // Regular expression for a valid barcode
    let num = input.shift();
    
    for (let i = 0; i < num; i++) {
        let barcode = input[i];

        // Check if the barcode is valid
        if (pattern.test(barcode)) {
            // Extract digits from the barcode
            let productGroupMatch = barcode.match(/\d+/g); //Check if the matched string have digits
            let productGroup = productGroupMatch ? productGroupMatch.join('') : '00'; //If in productGroupMatch have some digits, join them or default 00

            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
   
}

// fancyBarcode((["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])
//     )

    fancyBarcode((["6",
        "@###Val1d1teM@###",
        "@#ValidIteM@#",
        "##InvaliDiteM##",
        "@InvalidIteM@",
        "@#Invalid_IteM@#",
        "@#ValiditeM@#"])
        )
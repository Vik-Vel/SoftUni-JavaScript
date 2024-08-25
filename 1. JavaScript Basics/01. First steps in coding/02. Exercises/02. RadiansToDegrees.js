function convert(input){

    let result = parseFloat(input[0]) * 180 / Math.PI;

    console.log(result);
}

convert(["3.1416"]);
convert(["6.2832"]);
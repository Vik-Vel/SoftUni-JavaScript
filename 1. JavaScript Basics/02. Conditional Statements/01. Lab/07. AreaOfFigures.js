function areaOfFigures(input){
    let figure = input[0];
    let result = 0; 
    if(figure === 'square'){
        let firstSide = Number(input[1]);
        result = firstSide * firstSide;
    }
    else if(figure === 'rectangle'){
        let firstSide = Number(input[1]);
        let secondSide = Number(input[2]);
        result = firstSide * secondSide;
    }
    else if(figure === 'circle'){
        let firstSide = Number(input[1]);
        result = Math.PI * ( firstSide * firstSide);
    }
    else if(figure === 'triangle'){
        let firstSide = Number(input[1]);
        let secondSide = Number(input[2]);
        result = firstSide * secondSide / 2;
    }

    console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"])
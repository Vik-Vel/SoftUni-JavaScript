function triangleOfNumbers(num){

    let insideFor = [];
    let outsideFor = '';

    for (let i = 1; i <= num; i++) {
        insideFor = []
        for (let j = 1; j <= i; j++) {
           insideFor.push(i)
        }
        console.log(insideFor.join(' '))
    }

}

triangleOfNumbers(5)
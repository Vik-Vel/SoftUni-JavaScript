function mirrorWords(input){
    const pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;

    let match = pattern.exec(input);
    let count = 0;
    let result = [];

    while(match){
        count++;
        const firstWord = match[2];
        const secondWord = match[3];
        const reversed = secondWord.split("").reverse().join("");
        if(firstWord === reversed){
            result.push(`${firstWord} <=> ${secondWord}`)
        }
        match = pattern.exec(input);
    }

    if(count === 0){
        console.log(`No word pairs found!`);
    }
    else{
        console.log(`${count} word pairs found!`)
    }

    if(result.length > 0){
        console.log(`The mirror words are:`);
        console.log(result.join(", "));
    }
    else
    {
        console.log("No mirror words!")
    }
}

mirrorWords('#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@')
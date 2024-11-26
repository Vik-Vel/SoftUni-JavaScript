function destinationMapper(input){
    const pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;

    let match = pattern.exec(input);
    let length = 0;
    let result = [];

    while(match){
        result.push(match[2]);
        match = pattern.exec(input);
    }
    
    for (const destination of result) {
        length += destination.length;
    }
    console.log(`Destinations: ${result.join(", ")}`);
    console.log(`Travel Points: ${length}`);
}

destinationMapper("ThisIs some InvalidInput")
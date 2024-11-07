function makeADictionary(input){
    let dictionary = [];

    for (let i = 0; i < input.length; i++) {
        let parsed = JSON.parse(input[i]); // parsed is an object after JSON.parse(input[i]) and doesn't need split; we directly access the key and value.
        let product = Object.keys(parsed)[0];
        let definition = parsed[product];

        let term = {
            term : product,
            definition: definition
        };

        dictionary.push(term);
    }

    dictionary.sort((a,b) => a.term.localeCompare(b.term));
    for(let dict of dictionary){
        console.log(`Term: ${dict.term} => Definition: ${dict.definition}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
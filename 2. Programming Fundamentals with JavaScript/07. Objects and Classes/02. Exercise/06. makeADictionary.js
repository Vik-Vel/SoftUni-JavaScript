function makeADictionary(input) {
    let dictionary = {};

    for (let i = 0; i < input.length; i++) {
        let parsed = JSON.parse(input[i]); // Парсваме JSON и получаваме обект с един ключ и една стойност
        let term = Object.keys(parsed)[0];
        let definition = parsed[term];

        dictionary[term] = definition; // Ако терминът съществува, ще презапише дефиницията
    }

    // Сортираме и печатаме термините по азбучен ред
    let sortedTerms = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
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
function thePianist(input) {
  let Composer = class {
    constructor(piece, composer, key) {
      this.piece = piece;
      this.composer = composer;
      this.key = key;
    }
  };

  let numOfCompositors = Number(input[0]);
  let composers = [];
  let row = "";
  for (let i = 1; i <= numOfCompositors; i++) {
    row = input[i].split("|");
    let currentPiece = row[0];
    let currentComposer = row[1];
    let currentKey = row[2];

    let composer = new Composer();
    composer.piece = currentPiece;
    composer.composer = currentComposer;
    composer.key = currentKey;

    composers.push(composer);
  }

  let count = numOfCompositors + 1;
  row = input[count].split("|");
  while (row[0] != "Stop") {
    let command = row[0];
    let piece = row[1];

    if (command === "Add") {
      let name = row[2];
      let key = row[3];
      let composer = composers.find((c) => c.piece === piece);
      if (composer === undefined) {
        let cmpsr = new Composer(piece, name, key);
        composers.push(cmpsr);
        console.log(
          `${cmpsr.piece} by ${cmpsr.composer} in ${cmpsr.key} added to the collection!`
        );
      } 
      else {
        console.log(`${piece} is already in the collection!`);
      }
    }
     else if (command === "Remove") {
        let index = composers.findIndex((c) => c.piece === piece);
        if(index !== -1){
          composers.splice(index, 1);
          console.log(`Successfully removed ${piece}!`);
        }
        else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }
    else if (command === "ChangeKey") {
      let key = row[2];
        let composer = composers.find((c) => c.piece === piece);
        if(composer !== undefined){
          
          composer.key = key;
          console.log(`Changed the key of ${piece} to ${key}!`);
        }
        else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    count++;
    row = input[count].split("|");
  }

  composers.forEach(({ piece, composer, key }) => {
    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
});

}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);

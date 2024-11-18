function secretChat(input) {
  let msg = input.shift(); //Shift (remove) the first element of the array.

  while (input[0] !== "Reveal") {
    const line = input.shift();
    const tokens = line.split(":|:");
    const cmd = tokens[0];

    switch (cmd) {
      case "InsertSpace":
        const index = Number(tokens[1]);
        const firstPart = msg.slice(0, index); //We cut word on 2 and insert the part
        const secondPart = msg.slice(index);
        msg = `${firstPart} ${secondPart}`;
        break;
      case "Reverse":
        const substring = tokens[1];
        const firstIndex = msg.indexOf(substring);
        
        if(firstIndex === -1){
            console.log('error');
            continue;
        }

        const left = msg.slice(0, firstIndex);
        const indexToContinueFrom = firstIndex + substring.length;
        const right = msg.slice(indexToContinueFrom);
        const reversedSubstring = substring.split("").reverse().join("");
        msg = `${left}${right}${reversedSubstring}`;
        break;
      case "ChangeAll":
        const [_, match,replacement] = tokens;
        msg = msg.split(match).join(replacement);
        break;
    }
    console.log(msg);
  }
  console.log(`You have a new text message: ${msg}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

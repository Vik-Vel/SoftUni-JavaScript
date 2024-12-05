function galacticCodeDescryption(input) {
  let message = input[0];

  let row = input[1].split(" ");
  let count = 1;
  while (row[0] !== "Finalize") {
    let command = row[0];

    if (command === "Encrypt") {
      let messageArray = message.split("");
      message = messageArray.reverse().join("");
      console.log(message);
    } 
    else if (command === "Decrypt") {
      let messageArray = message.split("");

      for (let i = 0; i < messageArray.length; i++) {
        if(messageArray[i] === messageArray[i].toUpperCase()){
            messageArray[i] = messageArray[i].toLowerCase();
            message = messageArray.join("")
        }
        else{
            messageArray[i] = messageArray[i].toUpperCase();
            message = messageArray.join("");
        }
      }
      
      console.log(message);
    }
    else if (command === "Substitute") {
        let oldChar = row[1];
        let newChar = row[2];

        if(!message.includes(oldChar)){
            console.log('Character not found.');
        }
        else{
            while(message.includes(oldChar)){
                message = message.replace(oldChar, newChar);
            }
            console.log(message);
        }
        
       
      }
      else if (command === "Scramble") {
        let index = Number(row[1]);
        let newChar = row[2];

        
        if(message.length < index){
            console.log("Index out of bounds.");
        }
        else{
            let messageArr = message.split("");
            messageArr[index] = newChar;
            message = messageArr.join("");
        console.log(message);

        }
        
      }
      else if (command === "Remove") {
        let substring = row[1];
       
        while(message.includes(substring)){

            message = message.replace(substring,"");
        }
        
        console.log(message);
      }
      else{
        console.log('Invalid command detected!')
      }

    count++;
    row = input[count].split(" ");
  }
}

galacticCodeDescryption([
  "helloWorld",
  "Encrypt",
  "Decrypt",
  "Substitute L z",
  "Remove O",
  "Scramble 0 H",
  "Invalid command detected!",
  "Finalize",
]);
console.log('-----------------------------------------');
galacticCodeDescryption([
  "GalacticMission",
  "Decrypt",
  "Scramble 5 Z",
  "Remove S",
  "Substitute G X",
  "Encrypt",
  "Finalize",
]);
console.log('-----------------------------------------');

galacticCodeDescryption([
  "Federation1",
  "Encrypt",
  "Decrypt",
  "Remove 1",
  "Substitute E e",
  "Scramble 2 X",
  "Encrypt",
  "Finalize",
]);

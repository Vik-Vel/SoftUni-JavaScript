function passwordReset(arr) {
  let rawPass = arr[0];
  let truePass = rawPass;

  for (let i = 1; i < arr.length; i++) {
    let command = arr[i].split(" ");
    if (command[0] === "TakeOdd") {
      let tempPass = "";
      for (let j = 1; j < truePass.length; j += 2) {
        tempPass += truePass[j];
      }

      truePass = tempPass;
      console.log(truePass);
    } else if (command[0] === "Cut") {
      let index = Number(command[1]);
      let length = Number(command[2]);

      //removing the substring - cut it from beginning to index and add it to next index to the end
      truePass = truePass.slice(0, index) + truePass.slice(index + length);
      console.log(truePass);
    } else if (command[0] === "Substitute") {
      let substring = command[1];
      let substitute = command[2];

      if (truePass.includes(substring)) {
        //Replace all by given substring with given substitute
        truePass = truePass.split(substring).join(substitute);
        console.log(truePass);
      } else {
        console.log("Nothing to replace!");
      }
    }
    else if (command[0] === "Done") {
        break;
      }
  }

  console.log(`Your password is: ${truePass}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);

passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);

function messageDecrypter(input) {
    let inputsCount = Number(input[0]);

    const regex = /^(\$|%)([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;

    for (let i = 1; i <= inputsCount; i++) {
        const message = input[i];
        const match = message.match(regex);

        if (match) {
            const tag = match[2];
            const numbers = [parseInt(match[3]), parseInt(match[4]), parseInt(match[5])];

            const decryptedMessage = numbers.map(num => String.fromCharCode(num)).join("");
            console.log(`${tag}: ${decryptedMessage}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

messageDecrypter([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);

messageDecrypter([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);

function passwordGuess(input){
    let correctPass = 's3cr3t!P@ssw0rd';

    let passwordInput = input[0];

    if(passwordInput === correctPass){
        console.log('Welcome');
    }
    else{
        console.log('Wrong password!');

    }
}

passwordGuess((["qwerty"]))
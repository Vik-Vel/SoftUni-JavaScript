function login(input){
    let username = input[0];
    let usernameArrya = [...username];
    let corectPassReversed = usernameArrya.reverse();
    let correctPass = corectPassReversed.join('');
    let countWrong = 0;
    for (let i = 1; i < input.length; i++) {
        

        if(input[i] === correctPass){
            console.log(`User ${username} logged in.`);
            return;
        }
        else{
            countWrong++;
            if(countWrong === 4){
                console.log(`User ${username} blocked!`)
                return;
            }
            else{

                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])
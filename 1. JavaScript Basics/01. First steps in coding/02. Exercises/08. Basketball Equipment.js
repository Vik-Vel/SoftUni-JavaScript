function basketballEquipment(input){
    let priceForYear = Number(input[0]);

    let sneakers = priceForYear * 0.6;
    let basketballTeam = sneakers * 0.8;
    let ball = basketballTeam / 4;
    let accessoires = ball / 5;

    let total = priceForYear + sneakers + basketballTeam  + ball + accessoires;

    console.log(total);
}

basketballEquipment(["365"]);
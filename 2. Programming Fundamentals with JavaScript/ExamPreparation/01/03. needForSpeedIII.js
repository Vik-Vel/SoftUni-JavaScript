function needForSpeedIII(input){
    //-	a hero can have a maximum of 100 HP and 200 MP
    class Hero{
        constructor(name, hp, mp){
            this.name = name;
            this.hp = Number(hp); //-HP stands for hit points 
            this.mp = Number(mp); //- MP for mana points
        }
    }

    let heroes = [];

    let numHeroes = input.shift();
    let tokens = ""
    for (let i = 0; i < numHeroes; i++) {
        tokens = input.shift().split(" ");
        let currentHero = tokens[0];
        let currentHp = Number(tokens[1]);
        let currentMp = Number(tokens[2]);

        let hero = new Hero(currentHero, Number(currentHp), Number(currentMp));

        heroes.push(hero);6
    }

    tokens = input.shift().split(" - ");
    while(tokens[0] !== 'End'){
        let command = tokens[0];
        let heroName = tokens[1];
        let hero = heroes.find(h=>h.name === heroName);

        if(command === 'CastSpell'){
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            
            if(hero.mp - mpNeeded >= 0){
                hero.mp -= mpNeeded;
                console.log(`${hero.name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
            }
            else{
                console.log(`${hero.name} does not have enough MP to cast ${spellName}!`);
            }
        }
        else if(command === 'TakeDamage'){
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            
            if(hero.hp - damage > 0){
                hero.hp -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${ hero.hp} HP left!`);
            }
            else{
                console.log(`${heroName} has been killed by ${attacker}!`);
                heroes = heroes.filter(hero => hero.name !== heroName);
            }
        }
        else if(command === 'Recharge'){
            let amount = Number(tokens[2]);
            
            if(hero.mp + amount > 200){
                let heroMp = hero.mp;
                hero.mp = 200;
                console.log(`${hero.name} recharged for ${200-heroMp} MP!`);
            }
            else{
                hero.mp += amount;
                console.log(`${hero.name} recharged for ${amount} MP!`);
            }
        }
        else if(command === 'Heal'){
            let amount = Number(tokens[2]);
            
            if(hero.hp + amount > 100){
                let heroHp = hero.hp;
                hero.hp = 100;
                console.log(`${hero.name} healed for ${100-heroHp} HP!`);
            }
            else{
                hero.hp += amount;
                console.log(`${hero.name} healed for ${amount} HP!`);
            }
        }
        tokens = input.shift().split(" - ");
    }
    heroes.forEach(hero => {
        console.log(`${hero.name}`);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    });


}

// needForSpeedIII(['2',
//     "Solmyr 85 120",
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
//     ])

    needForSpeedIII(['4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'])
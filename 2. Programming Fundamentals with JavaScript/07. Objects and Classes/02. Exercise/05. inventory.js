function inventory(input){
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(' / ');
        level = Number(level);
        let hero = {};
        hero.name = name;
        hero.level = level;
        hero.items = items;
        heroes.push(hero);

    }
    heroes.sort((a, b) => a.level - b.level);    
    for (let hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
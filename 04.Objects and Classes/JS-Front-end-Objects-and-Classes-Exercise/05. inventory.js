function solve (input){
    const heroes = [];

    for (let line of input) {
        const [name, level, items] = line.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: items,
        }

        heroes.push(hero);
    }

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach
        (hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`));

}

solve ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
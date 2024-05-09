function solve(input) {
    const nHeores =  Number(input.shift())
    
    const heroes = {}

    for (let i=0; i < nHeores; i++) {
        const [heroName, health, bullets] = input[i].split(' ');
        heroes[heroName] = {
            health,
            bullets,
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Ride Off Into Sunset') {
        const [command, heroName, firstArg, secondArg] = commandLine.split(' - ');

        const hero = heroes[heroName]
        let target, damage, attacker, amount;
        switch(command) {
            case 'FireShot':
                target = firstArg;
                if (Number(hero.bullets) > 0) {
                    hero.bullets  = Number(hero.bullets) - 1
                    console.log(`${heroName} has successfully hit ${target} and now has ${hero.bullets} bullets!`);
                } else {
                    console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;

            case 'TakeHit':
                damage = Number(firstArg);
                attacker = secondArg;
                hero.health = Number(hero.health) - damage

                if (Number(hero.health) > 0) {
                   console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${hero.health} HP!`);
                } else {
                    delete heroes[heroName]
                    console.log(`${heroName} was gunned down by ${attacker}!`);
                }
                break;
                
            case 'Reload':
                if (Number(hero.bullets) === 6) {
                    console.log(`${heroName}'s pistol is fully loaded!`);

                } else {
                    console.log(`${heroName} reloaded ${6 - Number(hero.bullets)} bullets!`);
                    hero.bullets  = 6
                }
                break;

            case 'PatchUp':
                amount = Number(firstArg)
                if (Number(hero.health) === 100) {
                    console.log(`${heroName} is in full health!`);
                } else {
                    if (Number(hero.health) + amount > 100) {
                        hero.health = 100
                    } else {
                        hero.health = Number(hero.health) + amount
                    } 
                    console.log(`${heroName} patched up and recovered ${amount} HP!`);
                }
                break;
        }
        
        commandLine = input.shift();
    }
    
    for (heroName in heroes) {
        console.log(`${heroName}\n HP: ${heroes[heroName].health}\n Bullets: ${heroes[heroName].bullets}`);
    }
}

solve(["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])

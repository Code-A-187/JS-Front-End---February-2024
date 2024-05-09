function solve (towns) {
    townsInfo = []

    for (const line of towns) {
        const [townName, latitude, longitude, ] = line.split(' | ');

        const town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        townsInfo.push(town);
    }

    townsInfo.forEach(town => console.log(town))

}

solve (
    ['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']

)
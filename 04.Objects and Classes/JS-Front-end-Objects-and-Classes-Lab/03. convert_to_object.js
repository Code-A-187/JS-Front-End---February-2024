function solve(data) {
    const personData = JSON.parse(data)

    Object
    .keys(personData)
    .forEach(personProp => console.log(`${personProp}: ${personData[personProp]}`))
}






solve (
    '{"name": "George", "age": 40, "town": "Sofia"}'
    )

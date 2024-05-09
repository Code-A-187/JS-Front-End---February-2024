function solve(input) {
    adressBook = {}

    for (let line of input) {
        const[name, adress] = line.split(':');
        addressBook[name] = adress
    }

    

}

solve (
    ['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)
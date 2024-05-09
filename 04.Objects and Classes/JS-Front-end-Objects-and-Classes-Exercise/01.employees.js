function solve (input) {
    const employees = {}

    for (let name of input) {
        const personName = name;
        employees[personName] = name.length
    }

    for (const employee in employees) {
            console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
            
        }

}

function fancySolve(input) {
    const employees = []

    for (const name of input) {
        const employee = {
            name,
            personalNumber: name.length,
        };

        employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}


fancySolve ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
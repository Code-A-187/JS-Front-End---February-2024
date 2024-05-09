function solve (meetingsList) {
    let meetings = {}

    for (let line of meetingsList) {
        const [day, name] = line.split(' ')

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = name
            console.log(`Scheduled for ${day}`)
        }    
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }

}

solve (
    ['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
)
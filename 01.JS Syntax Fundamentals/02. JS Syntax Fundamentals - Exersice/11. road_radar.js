function solve(speed, area) {
    speedLimit = 0
    if (area === 'motorway') {
        speedLimit = 130;
    } else if (area === 'interstate') {
        speedLimit = 90;
    } else if (area === 'city') {
        speedLimit = 50;
    } else if (area === 'residential') {
        speedLimit = 20;
    }

    if (speed <= speedLimit) {
        console.log (`Driving ${speed} km/h in a ${speedLimit} zone`)
    }

    else {
        speeding = speed - speedLimit;
        drivingType = '';
        if (speeding > 40) {
            drivingType = 'reckless driving'
        }  else if (speeding > 20) {
            drivingType = 'excessive speeding'
        } else {
            drivingType = 'speeding'
        }
        
        console.log (`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - ${drivingType}`) 
    }
}

solve (
    120, 'interstate'
)
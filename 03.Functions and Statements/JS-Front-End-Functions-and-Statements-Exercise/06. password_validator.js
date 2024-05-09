function solve(password){

    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[A-Za-z0-9]+$/.test(password);
    const hasTwoDigits = password => password
        .split('')
        .filter(charachter => Number.isInteger(Number(charachter)))
        .length >= 2;

    let isValid = true

    if (!isValidLength(password)) {
        isValid = false
        console.log('Password must be between 6 and 10 characters')
    }

    if (!isAlphaNumerical(password)) {
        isValid = false
        console.log('Password must consist only of letters and digits')
    }

    if (!hasTwoDigits(password)) {
        isValid = false
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }
}
solve ('logIn')
solve ('MyPass123')
solve ('Pa$s$s')
function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)')

    // dose not work i judge
    //evenRowElements.forEach(element => element.style.backgroundColor = 'teal')

    for (let element of evenRowElements) {
        element.style.backgroundColor = 'teal'
    }
}
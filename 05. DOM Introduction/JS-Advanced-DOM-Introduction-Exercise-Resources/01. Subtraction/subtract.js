function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const resultElement = document.querySelector('#result');

    const firstNumber = Number(firstNumberElement.value)
    const secondNumber = Number(secondNumberElement.value)

    resultElement.textContent = firstNumber - secondNumber
}
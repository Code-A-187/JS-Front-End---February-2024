function solve() {
  const inputElement  = document.getElementById('text')
  const currentCaseElement = document.getElementById('naming-convention')
  const resultElement = document.querySelector('#result')


  const input = inputElement.value;
  const currentCase= currentCaseElement.value;

  const pascalCaseConverter = (input) => 
    input
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  convertManager = {
    'Pascal Case': pascalCaseConverter,
    'Camel Case': (text) => pascalCaseConverter(text).charAt(0).toLowerCase() + pascalCaseConverter(text).slice(1)
  };

  if (!convertManager[currentCase]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = convertManager[currentCase](input);
    

}
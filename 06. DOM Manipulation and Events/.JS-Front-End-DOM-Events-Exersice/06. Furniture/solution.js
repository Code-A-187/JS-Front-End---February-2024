function solve() {

  const textInputElement = document.querySelector('#exercise textarea:first-of-type');
  const buyButtonElement = document.querySelector('#exercise button:last-of-type');
  const generateButtonElement = document.querySelector('#exercise button:first-of-type');
  const tBodyElement = document.querySelector('.table tbody');
  const textOutputElement = document.querySelector('#exercise textarea:last-of-type');

  generateButtonElement.addEventListener('click', (event) => {
    const furnitures = JSON.parse(textInputElement.value);

    for (const furniture of furnitures) {
      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      const imageTdElement = document.createElement('td');
      imageTdElement.appendChild(imgElement);

      const namePElement = document.createElement('p');
      namePElement.textContent = furniture.name;
      const nameTdElement = document.createElement('td');
      nameTdElement.appendChild(namePElement);

      const pricePElement = document.createElement('p');
      pricePElement.textContent = furniture.price;
      const priceTdElement = document.createElement('td');
      priceTdElement.appendChild(pricePElement);

      const decorPElement = document.createElement('p');
      decorPElement.textContent = furniture.decFactor;
      const decorTdElement =document.createElement('td');
      decorTdElement.appendChild(decorPElement);

      const checkboxElement = document.createElement('input');
      checkboxElement.setAttribute('type', 'checkbox');
      const markTdElement = document.createElement('td');
      markTdElement.appendChild(checkboxElement)

      const furnitureTrElement = document.createElement ('tr')
      furnitureTrElement.appendChild(imageTdElement);
      furnitureTrElement.appendChild(nameTdElement);
      furnitureTrElement.appendChild(priceTdElement);
      furnitureTrElement.appendChild(decorTdElement);
      furnitureTrElement.appendChild(markTdElement);

      tBodyElement.appendChild(furnitureTrElement);
    }
  });  

  buyButtonElement.addEventListener('click', (e) => {

    let totalPrice = 0;
    let totalDecorFactor = 0;
    let names = [];

    Array.from(tBodyElement.children)
        .forEach(furnitureTrElement => {
          const markInputElement = furnitureTrElement.querySelector('input[type=checkbox]')
          if (!markInputElement.checked) {
            return;
          }

          const name = furnitureTrElement.children.item(1).textContent;
          const price = Number(furnitureTrElement.children.item(2).textContent);
          const decorFactor = Number(furnitureTrElement.children.item(3).textContent);

          names.push(name);
          totalPrice += price;
          totalDecorFactor += decorFactor;
        });

    const averageDecorationFactor = totalDecorFactor / names.length;
    
    textOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
    textOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    textOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor}`;
  });
}
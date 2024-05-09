function solve() {
   const addProductButtonElements = document.querySelectorAll('button.add-product');
   const textareaElement = document.querySelector('textarea')
   let checkoutButtonElement = document.querySelector('button.checkout')
   let totalPrice = 0;

   uniqieProducts = {}


   for (const buttonElement of addProductButtonElements) {
      const productElement = buttonElement.parentElement.parentElement;
      // const productElement = buttonElement.closest('.product')

      buttonElement.addEventListener('click', () => {
         const title = productElement.querySelector('.product-title').textContent;
         const price = Number(productElement.querySelector('.product-line-price').textContent)
         
         totalPrice += price;

         uniqieProducts[title] = true;

         textareaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      });
   }
   checkoutButtonElement.addEventListener('click', (event) => {
      Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))
      event.target.setAttribute('disabled', 'disabled')
      const list = Object.keys(uniqieProducts).join(', ');

      textareaElement.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
   });
}
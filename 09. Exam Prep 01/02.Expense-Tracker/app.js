window.addEventListener("load", solve);

function solve () {
    const addBtnElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list')
    const expenseListElement = document.getElementById('expenses-list')    
    const deleteBtnElement = document.querySelector('.btn.delete');

    addBtnElement.addEventListener('click', () => {
        // Get input information
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        // Check empty element

        if (!expense || !amount || !date){
            return;
        }

        // Add to preview list
        const expenseLiElement = (createLiElement(expense, amount, date))
        previewListElement.appendChild(expenseLiElement)
        
        // Disable add button
        addBtnElement.setAttribute('disabled', 'disabled')

        // Clear inputs
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';

        // Get preview button elements
        const editButtonElement = expenseLiElement.querySelector('.btn.edit');
        const okButtonElement = expenseLiElement.querySelector('.btn.ok');
    
        // Attach event listeners
        editButtonElement.addEventListener('click', () => {
            
            //Extract data from preview (nested Event listener can get reference from above)
            //const pElementsNodeList = expenseLiElement.querySelectorAll('article p');
            // const pElements = Array.from(pElementsNodeList)
            //const expenseType = pElements[0].textContent.substring(6);
            //const amount = pElements[1].textContent.substring(8, pElements[1].textContent.length);
            //const date = pElements[2].textContent.substring(6);
            
            // Send data to inputs
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;
            
            //clear preview (should remove event listeners also)
            expenseLiElement.remove();

            //Enable Add button
            addBtnElement.removeAttribute('disabled')
        });

        // Attach ok event listener
        okButtonElement.addEventListener('click', () => {
            // remove buttons from expense item
            const expenseButtonsElement = expenseLiElement.querySelector('.buttons');
            expenseButtonsElement.remove();
            
            // move expense item to expense list

            expenseListElement.appendChild(expenseLiElement)

            // Enable add button

            addBtnElement.removeAttribute('disabled')
        });
    });

    deleteBtnElement.addEventListener('click', () => {
        expenseListElement.innerHTML = '';
    });

    function createLiElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('btn', 'edit');
        editBtnElement.textContent = 'edit'

        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok'

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editBtnElement);
        buttonsDivElement.appendChild(okBtnElement);

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);
        
        return liElement;
    }
}
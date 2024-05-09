window.addEventListener("load", solve);

function solve() {
    // get elements
    const nameInputElement = document.getElementById('name')
    const phoneInputElement = document.getElementById('phone')
    const categoryInputElement = document.getElementById('category')
    const addButtonInputElement = document.getElementById('add-btn')
    const checkUlElement = document.getElementById('check-list')
    const contactUlElement = document.getElementById('contact-list')

    // event listener for add button
    addButtonInputElement.addEventListener('click', () => {
      // get input data
      names = nameInputElement.value
      phone = phoneInputElement.value
      category = categoryInputElement.value

      // Check empty element 
      if (!names || !phone || !category) {
        return;
      }

      // create li element
        const checkLiElement = createCheckLiElement (names, phone, category)


      // add li element to check-list
        checkUlElement.appendChild(checkLiElement)

      // clear inputs
      clearInputs()

    })
      
  function createCheckLiElement (names, phone, category) {
    // create buttons  append to div
    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');
    const checkBtnDivElement = document.createElement('div');
    checkBtnDivElement.classList.add('buttons')
    checkBtnDivElement.appendChild(editButtonElement)
    checkBtnDivElement.appendChild(saveButtonElement)

    // create p elements
    const namePElement = document.createElement('p')
    namePElement.textContent = `name:${names}`
    const phonePElement = document.createElement('p')
    phonePElement.textContent = `phone:${phone}`
    const categoryPElement = document.createElement('p')
    categoryPElement.textContent = `category:${category}`

    // add to article 
    const checkArticleElement = document.createElement('article');
    checkArticleElement.appendChild(namePElement);
    checkArticleElement.appendChild(phonePElement);
    checkArticleElement.appendChild(categoryPElement);

    // add article and div to li element
    const LiElement = document.createElement('li');
    LiElement.appendChild(checkArticleElement)
    LiElement.appendChild(checkBtnDivElement)

    

      // edit event listener
      editButtonElement.addEventListener('click', () => {

        // return information to input fields
        nameInputElement.value = names
        phoneInputElement.value = phone
        categoryInputElement.value = category

        // remove li element
        LiElement.remove()

      })
      
      // save event listener
      saveButtonElement.addEventListener('click', () => {

        contactUlElement.appendChild(LiElement)
        checkBtnDivElement.remove()

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('del-btn');
        LiElement.appendChild(deleteBtnElement);


        deleteBtnElement.addEventListener('click', () => {
          LiElement.remove()
        });

      });
                 
    return LiElement;
  }

  function clearInputs() {
    nameInputElement.value = ''
    phoneInputElement.value = ''
    categoryInputElement.value = ''
  }    
}
  
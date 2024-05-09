window.addEventListener("load", solve);

function solve() {
  const firstNameInputElement = document.getElementById('first-name')
  const lastNameInputElement = document.getElementById('last-name')
  const ageInputElement = document.getElementById('age')
  const storyTitleInputElement = document.getElementById('story-title')
  const selectGenreElement = document.getElementById('genre')
  const storyInputElement = document.getElementById('story')
  const publishButtonElement = document.getElementById('form-btn')
  const previewLiElement = document.getElementById('preview-list')

  publishButtonElement.addEventListener('click', () => {

    // get input data
      const firstName = firstNameInputElement.value;
      const lastName = lastNameInputElement.value;
      const age = ageInputElement.value;
      const storyTitle = storyTitleInputElement.value;
      const genre = selectGenreElement.value;
      const story = storyInputElement.value;

    // Check empty element 
    if (!firstName || !lastName || !age || !storyTitle || !story) {
      return;
    }

    // create story info
    const storyLiElement = createStoryElement (firstName, lastName, age, storyTitle, genre, story)


    // add story info to preview-list
    previewLiElement.appendChild(storyLiElement)

    
    // disable publish button
    publishButtonElement.setAttribute('disabled', 'disabled')

    // clear input fields
    clearInputs()

  });

  function createStoryElement (firstName, lastName, age, storyTitle, genre, story) {
    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');
    saveButtonElement.textContent = 'Save story';

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    editButtonElement.textContent = 'Edit story';

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete story';

    const nameH4Element = document.createElement('h4')
    nameH4Element.textContent = `Name: ${firstName} ${lastName}`

    const agePElement = document.createElement('p')
    agePElement.textContent = `Age: ${age}`

    const storyTitlePElement = document.createElement('p')
    storyTitlePElement.textContent = `Title: ${storyTitle}`
    
    const genrePElement = document.createElement('p')
    genrePElement.textContent = `Genre: ${genre}`

    const storyPElement = document.createElement('p')
    storyPElement.textContent = `${story}`

    const storyArticleElement = document.createElement('article');
    storyArticleElement.appendChild(nameH4Element);
    storyArticleElement.appendChild(agePElement);
    storyArticleElement.appendChild(storyTitlePElement);
    storyArticleElement.appendChild(genrePElement);
    storyArticleElement.appendChild(storyPElement);

    const storyLiElement = document.createElement('li');
    storyLiElement.classList.add('story-info');
    storyLiElement.appendChild(storyArticleElement)
    storyLiElement.appendChild(saveButtonElement)
    storyLiElement.appendChild(editButtonElement)
    storyLiElement.appendChild(deleteButtonElement)

    // edit event listener

    editButtonElement.addEventListener('click', () => {
      
      firstNameInputElement.value = firstName;
      lastNameInputElement.value = lastName;
      ageInputElement.value = age;
      storyTitleInputElement.value = storyTitle;
      selectGenreElement.value = genre;
      storyInputElement. value = story;

      // activate publich button
      publishButtonElement.removeAttribute('disabled');

      // remove from tasks
      storyLiElement.remove()

      
  });

    //save event listener
    saveButtonElement.addEventListener('click', () => {

      // remove stuff in div main
      storyLiElement.remove()

      // add h1 element in div main
      const saveH1Element = document.createElement('h1');
      saveH1Element.textContent =`Your scary story is saved!`
      const divMainElement = document.getElementById('main')
      divMainElement.innerHTML=''
      divMainElement.appendChild(saveH1Element)
  });

    //delete event listener

    deleteButtonElement.addEventListener('click', () => {
      
      // remove from tasks
      storyLiElement.remove()

      // activate publich button
      publishButtonElement.removeAttribute('disabled');
  });

    return storyLiElement
  };

  function clearInputs() {
    firstNameInputElement. value = '';
    lastNameInputElement. value = '';
    ageInputElement. value = '';
    storyTitleInputElement. value = '';
    storyInputElement. value = '';
  }
  
}


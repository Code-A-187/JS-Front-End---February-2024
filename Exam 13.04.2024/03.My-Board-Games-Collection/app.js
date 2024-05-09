const baseURL = 'http://localhost:3030/jsonstore/games';

const loadGamesButtonElement = document.getElementById('load-games');
const gameListElement = document.getElementById('games-list');
const gameNameInputElement = document.getElementById('g-name')
const typeInputElement = document.getElementById('type')
const playersInputElement = document.getElementById('players')
const addGameButtonElement = document.getElementById('add-game')
const editGameButtonElement = document.getElementById('edit-game')
const formContainerElement = document.getElementById('form')

loadGamesButtonElement.addEventListener('click', loadGames);

addGameButtonElement.addEventListener('click', addGame);

editGameButtonElement.addEventListener('click', editGame);

gameListElement.addEventListener('click', deleteGift);


function addGame() {
    // Get input data
    const game = getInputData();

    // POST request
    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/jason',
        },
        body: JSON.stringify(game),
    })
        .then(res => {
            if (!res.ok){
                return;
            }

        // clear input fields
        clearInputFields ();
        // fetch presents
        return loadGames ();
        });
}


async function loadGames () {
    const response = await fetch(baseURL);
    const gamesResult = await response.json();

    gameListElement.innerHTML = '';
    
    const gameListFragment = document.createDocumentFragment();
    
    Object
        .values(gamesResult)
        .forEach(game => {
            gameListFragment.appendChild(createGameElement(game));
        })

    gameListElement.appendChild(gameListFragment);
}


function createGameElement(game) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGame(e, game));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container')
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const namePELement = document.createElement('p');
    namePELement.textContent = game.name;

    const typePELement = document.createElement('p');
    typePELement.textContent = game.type;

    const playersPELement = document.createElement('p');
    playersPELement.textContent = game.players;

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(namePELement);
    contentDivElement.appendChild(playersPELement);
    contentDivElement.appendChild(typePELement);

    const gameDivElement = document.createElement('div')
    gameDivElement.classList.add('board-game');
    gameDivElement.appendChild(contentDivElement);
    gameDivElement.appendChild(buttonsDivElement);

    gameDivElement.setAttribute('data-id', game._id);
    
    return gameDivElement;
}

function changeGame(e, game) {
    //const giftElement = e.currentTarget.closest('.gift-sock') - real;
    const gameElement = e.currentTarget.parentElement.parentElement; // for judge
    
    //remove from list
    gameElement.remove()

    // populate input fields
    gameNameInputElement.value = game.name;
    typeInputElement.value = game.type;
    playersInputElement.value = game.players;

    // add id as attribute
    formContainerElement.setAttribute('data-id', game._id);

    // activate edit button
    editGameButtonElement.removeAttribute('disabled');

    // deactivate create button
    addGameButtonElement.setAttribute('disabled', 'disabled')
}

function editGame() {
    //get data from inputs
    const game = getInputData()

    // get gift id
    const gameId = formContainerElement.getAttribute('data-id')
    
    // remove data id attribute
    formContainerElement.removeAttribute('data-id')

    // send put request
    fetch(`${baseURL}/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: gameId, ...game }),
        //body: JSON.stringify(Object.assign({}, present, {_id: giftId}))
        })
            .then(res => {
                if (!res.ok) {
                    return;
                }
            
            // fetch presents
            loadGames();

            //deacticate edit button
            editGameButtonElement.setAttribute('disabled', 'disabled');

            // activate add button
            addGameButtonElement.removeAttribute('disabled');

            // clear inputs
            clearInputFields ();
        });     
}


function deleteGift(e){
    if(e.target.tagName !== 'BUTTON' || !e.target.classList.contains('delete-btn')) {
        return;
    }

    // Get gift element
    const gameElement = e.target.parentElement.parentElement;

    // get id
    const gameId = gameElement.getAttribute('data-id');

    // delete request

    fetch(`${baseURL}/${gameId}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            // remove from gift list
            gameElement.remove()
        });
}

function clearInputFields () {
    gameNameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}

function getInputData() {
    return {
        name: gameNameInputElement.value,
        type: typeInputElement.value,
        players: playersInputElement.value,
    }
};
    
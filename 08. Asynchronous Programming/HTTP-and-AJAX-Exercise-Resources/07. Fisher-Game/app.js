const registerView = document.getElementById('register-view');
const loginView = document.getElementById('login-view');
const homeView = document.getElementById('home-view');

const userButtons = document.getElementById('user');
const guestButtons = document.getElementById('guest');

const homeLink = document.getElementById('home');
const logoutLink = document.getElementById9('logout');
const loginLink = document.getElementById9('login');
const registerLink = document.getElementById('register');

loginLink.addEventListener('click', () =>{
    loginView.style.display = 'block';
});

function hideSection() {
    registerView.style.display = 'none';
    loginView.style.display = 'none';
    homeView.style.display = 'none'
}
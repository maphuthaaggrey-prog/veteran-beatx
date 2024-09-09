const menu = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
});




//ON HOLD******
const searchBtn = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const listSearch = document.querySelector('.li-search');

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('appear');
});

searchBtn.addEventListener('click', () => {
    listSearch.classList.toggle('appear-two');
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();


    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => errorMessage.remove());

    if (email === '') {
        const emailInput = form.querySelector('input[name="email"]');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Email is required!';
        errorMessage.classList.add('error-message');
        emailInput.after(errorMessage);
    }

    if (password === '') {
        const passwordInput = form.querySelector('input[name="password"]');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Password is required!';
        errorMessage.classList.add('error-message');
        passwordInput.after(errorMessage);
    }

    if (email == '' && password == '') {
        form.submit();
    }
});
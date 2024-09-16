const menu = document.querySelector('nav ul');
const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-btn');
const closeMenu = document.querySelector('.hero, .album-container, .contact-hero');


menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
});
closeMenu.addEventListener('click', () => {

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





//VALIDATE

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const telInput = document.querySelector('input[name="tel"]');
const messageInput = document.querySelector('textarea[name="message"]');

const nameError = document.createElement('div');
nameError.classList.add('error-message');
nameInput.parentNode.appendChild(nameError);

const emailError = document.createElement('div');
emailError.classList.add('error-message');
emailInput.parentNode.appendChild(emailError);

const telError = document.createElement('div');
telError.classList.add('error-message');
telInput.parentNode.appendChild(telError);

const messageError = document.createElement('div');
messageError.classList.add('error-message');
messageInput.parentNode.appendChild(messageError);

form.addEventListener('submit', (e) => {
  e.preventDefault();


  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name';
  } else {
    nameError.textContent = '';
  }

 
  if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailError.textContent = '';
  }

 
  if (telInput.value.trim() === '') {
    telError.textContent = 'Please enter your phone number';
  } else {
    telError.textContent = '';
  }

  
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please enter your message';
  } else {
    messageError.textContent = '';
  }

 
  if (
    nameInput.value.trim() !== '' &&
    emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
    telInput.value.trim() !== '' &&
    messageInput.value.trim() !== ''
  ) {
    form.submit();
  }
});

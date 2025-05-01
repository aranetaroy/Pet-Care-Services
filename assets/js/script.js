const modal = document.querySelector('.modal');
const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('.modal-close');
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.style.overflow = '';
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

function openModal(id) {
  document.getElementById(id).classList.add("show");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("show");
}
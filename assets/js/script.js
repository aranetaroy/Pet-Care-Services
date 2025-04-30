const modal = document.querySelector('.modal');
const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('.modal-close');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});
document.body.style.overflow = 'hidden';
document.body.style.overflow = '';

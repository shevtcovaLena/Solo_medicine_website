const registerBtn = document.querySelector('#register-btn');
const loginBtn = document.querySelector('#login-btn');
const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');

registerBtn.addEventListener('click', (ev) => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

loginBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

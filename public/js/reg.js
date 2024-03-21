// const registerForm = document.querySelector('#register-form');
const msg = registerForm.nextSibling;

registerForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const data = new FormData(registerForm);
  const inputs = Object.fromEntries(data);
  try {
    const response = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    console.log('response', result);
    if (result.err) {
      msg.innerText = result.err;
      msg.style.color = 'red';
    } else {
      msg.innerText = 'Успешная регистрация';
      msg.style.color = 'green';
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  } catch (error) {
    console.log('Ошибка регистрации=>', error);
    alert('Ошибка регистрации!');
  }
});

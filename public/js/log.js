const msg1 = loginForm.nextSibling;
console.log(msg1)

loginForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  console.log('событие')
  const data = new FormData(loginForm);
  const inputs = Object.fromEntries(data);
  try {
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    console.log('response', result);
    if (result.err) {
      msg1.innerText = result.err;
      msg1.style.color = 'red';
    } else {
      msg1.innerText = 'Успешная авторизация';
      msg1.style.color = 'green';
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  } catch (error) {
    console.log('Ошибка авторизации=>', error);
    }
});

const table = document.querySelector('.my-table');

table.addEventListener('click', async (ev) => {
  if (ev.target.classList.contains('appoint-link')) {
    const appointUser = ev.target.closest('tr');
    const cellUserName = appointUser.querySelector('.appoint_user');
    console.log(table.getAttribute('user_id'));
    console.log(table.getAttribute('user_name'));
    try {
      const response = await fetch('/appoint', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointID: appointUser.id,
          userID: table.getAttribute('user_id'),
        }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        cellUserName.innerText = table.getAttribute('user_name');
      }
    } catch (error) {
      console.log('Ошибка записи на прием', error);
      alert('Ошибка записи на прием', error);
    }
  }

  if (ev.target.classList.contains('delete-link')) {
    const appointUser = ev.target.closest('tr');
    const cellUserName = appointUser.querySelector('.appoint_user');
    try {
      const response = await fetch(`/appoint/${appointUser.id}`, {
        method: 'PUT',
      });
      const result = await response.json();
      if (result.status === 'success') {
        cellUserName.innerText = table.getAttribute('');
      }
    } catch (error) {
      console.log('Ошибка отмены записи', error);
      alert('Ошибка отмены записи', error);
    }
  }
});

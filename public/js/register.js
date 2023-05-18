const form = document.getElementById('register-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // eslint-disable-next-line no-shadow
  const form = event.target;
  const { city, name, password, password2 } = form;

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      city: city.value,
      name: name.value,
      password: password.value,
      password2: password2.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //  статус ответа < 400
  if (response.ok) {
    // редирект на главную
    window.location.href = '/';
  } else {
    // произошла ошибка, выводим сообщение
    const result = await response.json();
     let res = JSON.stringify(result)
      document.querySelector('#log_err').classList='visible'
      document.querySelector('#log_err').innerHTML=result.message

    
  }
});

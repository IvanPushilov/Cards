const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // eslint-disable-next-line no-shadow
  const form = event.target;
  const { name, password } = form;

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  if (result.success) {
    window.location.href = '/';
  }else{
    document.querySelector('#error_message').classList='visible'
  }
});

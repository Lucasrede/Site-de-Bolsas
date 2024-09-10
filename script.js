const form = document.getElementById('login-form');
const message = document.getElementById('login-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === 'user' && password === '123') {
    message.innerText = 'Login realizado com sucesso!';
    message.style.color = 'green';
    window.location.href = 'pagina_protegida.html';
  } else {
    message.innerText =

const msg = 'Sign up to receive our newsletter and get 10% off';

function updateMessage () {
  const el = document.getElementById('message');
  el.textContent = msg;
}

updateMessage(); // this calls the function and allows is to run
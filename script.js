function mostrarRegistro() {
  document.getElementById('login-form').classList.add('oculto');
  document.getElementById('register-form').classList.remove('oculto');
}

function mostrarLogin() {
  document.getElementById('register-form').classList.add('oculto');
  document.getElementById('login-form').classList.remove('oculto');
}

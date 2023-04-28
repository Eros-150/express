const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('nombre');
document.getElementById('mensaje').textContent = `Hola ${nombre}!`;
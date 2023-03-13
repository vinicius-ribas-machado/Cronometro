
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;

function iniciar() {
  cronometro = setInterval(() => {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
      if (minutos == 60) {
        minutos = 0;
        horas++;
      }
    }
    atualizarCronometro();
  }, 1000);
}

function parar() {
  clearInterval(cronometro);
}

function zerar() {
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarCronometro();
  parar();
}

function atualizarCronometro() {
  const cronometroElement = document.getElementById('cronometro');
  cronometroElement.textContent = `${padZero(horas)}:${padZero(minutos)}:${padZero(segundos)}`;
}

function padZero(numero) {
  return numero.toString().padStart(2, '0');
}

if (confirm('Should I calculate the square root?')) {
  const numero = prompt('Syötä numero:');
  if (numero >= 0) {
    const kantaluku = Math.sqrt(numero);
    document.querySelector('#luku').innerHTML = 'Luvun kantaluku on ' +
        kantaluku;
  } else {
    document.querySelector(
        '#luku2').innerHTML = 'Luvun kantalukua ei voi laskea';
  }
}
else {
  document.querySelector(
        '#luku3').innerHTML = 'Luvun kantalukua ei lasketa';

}

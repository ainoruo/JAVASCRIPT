const nimi = prompt('Anna nimesi: ');
const numero = Math.floor(Math.random() * 4) + 1;
if (numero == 1) {
  document.querySelector('#Ravenclaw').innerHTML = nimi +
      ', you are Ravenclaw.';

} else if (numero == 2) {
  document.querySelector('#Gryffindor').innerHTML = nimi +
      ', you are Gryffindor.';

} else if (numero == 3) {
  document.querySelector('#Slytherin').innerHTML = nimi +
      ', you are Slytherin.';

} else {
  document.querySelector('#Hufflepuff').innerHTML = nimi +
      ', you are Hufflepuff.';

}
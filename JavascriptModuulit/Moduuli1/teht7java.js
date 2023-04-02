'use strict';
const numero = parseInt(prompt('Kuinka monta kertaa noppaa heitetään?'))
let summa =0;
for (let i=0; i < numero; i++) {
  const heitto = Math.floor(Math.random() *6) +1;
  document.querySelector('#tulos').innerHTML = 'Heittojen lukumäärä: ' +heitto ;
  summa += heitto;
}
document.querySelector('#tulos2').innerHTML = 'Noppien summa on: ' +summa ;


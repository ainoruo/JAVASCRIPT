'use strict';
let numerot = [];

for (let i = 0; i < 5; i++) {
  let num = prompt('Syötä numero: ');
  numerot.push(num);

}

for (let i = 4; i >= 0; i--) {
  console.log(numerot[i]);
}
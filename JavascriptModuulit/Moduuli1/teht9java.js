'use strict';
const numero = parseInt(prompt('Anna numero:'));
if (numero < 2) {
  document.querySelector('#numero1').innerHTML = 'Luku ei ole kantaluku.';
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.querySelector('#numero2').innerHTML = 'Luku on kantaluku.';
  } else {
    document.querySelector('#numero3').innerHTML = 'Luku ei ole kantaluku.';
  }
}


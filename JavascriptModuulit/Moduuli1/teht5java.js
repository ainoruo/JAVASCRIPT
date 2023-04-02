'use strict';
const vuosi = prompt('Anna vuosiluku: ');
if (vuosi % 4 == 0) {
  if (vuosi % 100 == 0) {
    if (vuosi % 400 == 0) {
      document.querySelector('#vuosi1').innerHTML = 'Vuosi  on karkausvuosi.';
    }
  } else {
    document.querySelector('#vuosi2').innerHTML = 'Vuosi ei ole karkausvuosi.';
  }
}

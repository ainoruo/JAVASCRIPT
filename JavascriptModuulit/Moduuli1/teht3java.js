let x = parseInt(prompt('Anna ensimmäinen luku'));
let y = parseInt(prompt('Anna toinen luku'));
let z = parseInt(prompt('Anna kolmas luku:'));

let summa = x + y + z;
let tulo = x * y * z;
let ka = summa / 3;

document.querySelector('#summa').innerHTML = 'Summa: ' + summa;
document.querySelector('#tulo').innerHTML = 'Tulo: ' + tulo;
document.querySelector('#ka').innerHTML = 'Keskiarvo: ' + ka;

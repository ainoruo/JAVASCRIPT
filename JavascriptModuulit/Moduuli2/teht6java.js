function noppa () {
  return Math.floor(Math.random() * 6)+1;
}

let tulos = null;
let heitot = [];

while (tulos !==6) {
  tulos=noppa();
  heitot.push(tulos);
}

let lista = document.createElement('ul');
for (let i = 0;i < heitot.length; i++) {
   let item = document.createElement('li');
  item.appendChild(document.createTextNode("Heitto " + (i+1) + ": " + heitot[i]));
  lista.appendChild(item);
}

document.body.appendChild(lista);
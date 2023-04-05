let osallistujat = [];
let määrä = prompt('Syötä osallistujien määrä: ')

for (let i = 1; i <= määrä; i++) {
  let nimi = prompt('Syötä henkiön nimi: ');
  osallistujat.push(nimi);
}

osallistujat.sort()

let lista = document.querySelector('#lista');

osallistujat.forEach(nimi => {
  let listItem = document.createElement('li');
  listItem.textContent = nimi;
  lista.append(listItem);
})
let koirat = [];
for (let i = 0; i < 6; i++) {
  let nimi = prompt('Syötä koiran nimi: ');
  koirat.push(nimi);
}

koirat.sort().reverse();

let nimet = document.querySelector('#nimet');

koirat.forEach(nimi => {
  let listItem = document.createElement('li');
  listItem.textContent = nimi;
  nimet.append(listItem);
})
let ehdokkaat = [];
let ehdokkaatMäärä = prompt('Syötä ehdokkaiden määrä: ');
for (let i = 1;i <= ehdokkaatMäärä; i++) {
  let ehdokasNimi = prompt(`Ehdokkaan ${i} nimi:`);
  ehdokkaat.push({nimi: ehdokasNimi, ääniä: 0});
}
let äänestäjätMäärä = prompt('Syötä äänestäjien määrä: ');
for (let i=1;i <= äänestäjätMäärä; i++) {
  let ääni = prompt('Syötä äänestämäsi ehdokkaan nimi:');

  let ehdokas = ehdokkaat.find((c) => c.nimi === ääni);

  if (ehdokas) {
    ehdokas.ääniä++;
  }
}
ehdokkaat.sort((a,b) => b.ääniä - a.ääniä);

console.log(`Voittaja on ${ehdokkaat[0].nimi} ${ehdokkaat[0].ääniä} äänellä. `);
console.log('Tulokset: ');
ehdokkaat.forEach((ehdokas) => console.log(`${ehdokas.nimi}: ${ehdokas.ääniä} ääntä`));

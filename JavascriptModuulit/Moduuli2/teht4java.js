let luvut = []

let luku = parseInt(prompt('Syötä luku: '));
while (luku !==0 && !isNaN(luku)) {
  luvut.push(luku);
  luku =parseInt(prompt('Syötä luku:'));
}

luvut.sort((a,b) => b-a);
for(let i = 0; i < luvut.length;i++) {
  console.log(luvut[i]);
}



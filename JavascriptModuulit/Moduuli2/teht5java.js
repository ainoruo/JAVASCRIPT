let luvut = []

while (true){
  let luku = parseInt(prompt('Syötä luku: '));
  if (luvut.includes(luku)) {
    console.log('Olet jo syöttänyt antamasi luvun.');
    break;
  } else {
    luvut.push(luku);
  }
}

luvut.sort((a,b) => a-b);
console.log('Syöttämäsi luvut:');
console.log(luvut);
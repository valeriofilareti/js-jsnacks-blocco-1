/*
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const n = prompt('inserire un numero');

for(i = 1; i < n; i++){
  const num = Math.pow(i, 3);
  console.log(num);
}
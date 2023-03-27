/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/

const emptyArr = [];

for (i=0; i<6; i++) {
  const userNum = prompt('inserisci un numero');
    if(userNum % 2 !== 0){
      emptyArr.push(userNum)
    }
}
console.log(emptyArr);
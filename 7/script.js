/*
Stampa le potenze di 2 fino a 1000.
questo snack cela un trabocchetto:  1000 non è una potenza di 2
perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
perché altrimenti il controllo viene fatto dopo e si sfora
*/




// let i = 0;
// let pow = 0;

// while(pow < 1000) {
//   pow = Math.pow(2, i)
//   i++
//   console.log(pow);
// }



let pow = 0;
let i = 0; 

  do {
    console.log(pow, i);
    pow = Math.pow(2, i)
    i++
  } while(pow < 1000)


  

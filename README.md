JSnack Blocco 1
===
JSnack 5
===

## Consegna
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array

 ## Svolgimento
 1) creo un ciclo for con 6 ripetizioni
 2) creo all'interno del ciclo un prompt che chieda 6 numeri all'utente
 3) determino attraverso un ciclo if e l'utilizzo del modulo se il numero è dispari
 4) aggiungo i numeri dispari all'array con .push

JSnack 6
===

## Consegna
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

## Svolgimento
1) chiedo all'utente un numero
2) creo un ciclo for che si ripete per il numero di volte indicato dal numero inserito dall'utente
3) attraverso math.pow creo il cubo di 'i'

JSnack 6
===

## Consegna
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora

## Svolgimento
1) inizializzo a 0 una variabile i che mi indica l'esponente e una variabile pow che indica il risultato della potenza
2) in un ciclo do while indico come esponente di 2 la variabile i che incrementa di 1 fino a che il risultato pow non raggiunge un numero inferiore a 1000

## JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usando il ciclo for per scorrere la stringa numerica
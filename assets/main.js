/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente 
deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//visualizzare 5 numeri casuali (math.random)
for (let index = 0; index < 5; index++) {
  const randomNumber = Math.floor(Math.random() * 10);
  [index];
  console.log(randomNumber);
}

//far fartire un timer di 30 secondi (setInterval)

//finiti i 30 secondi i numeri scompaiono dallo schermo (addClass= display:none)

//far partire un prompt dove l'utente deve inserire i 5 numeri

//fare un controllo che i 5 numeri inseriti dall'utente siano uguali a quelli casuali nella variabile (let)

//far uscire un alert con scritto se i numeri sono giusti oppure no

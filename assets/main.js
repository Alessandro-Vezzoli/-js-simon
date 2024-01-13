/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente 
deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//visualizzare 5 numeri casuali (math.random)
let randomNumber = "";
for (let index = 0; index < 5; index++) {
  randomNumber += Math.floor(Math.random() * 10);
  console.log(randomNumber);
}
document.getElementById("number").innerHTML = randomNumber;

//far fartire un timer di 30 secondi (setInterval)
let count = 5;
const timer = setInterval(function () {
  count--;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);

    document.getElementById("Finish").innerHTML = "Finito il tempo";
    console.log("Finito il tempo");

    //finiti i 30 secondi i numeri scompaiono dallo schermo (addClass= display:none)
    document.getElementById("number").style.visibility = "hidden";

    //far partire un prompt dove l'utente deve inserire i 5 numeri

    const userNumber = prompt("inserire i numeri");

    //fare un controllo che i 5 numeri inseriti dall'utente siano uguali a quelli casuali nella variabile (let)

    if (randomNumber === userNumber) {
      console.log(randomNumber + " " + userNumber + " i numeri sono giustiiii");
    } else {
      console.log(
        randomNumber + " " + userNumber + " i numeri sono sbagliati "
      );
    }
  }
}, 1000);

//far uscire un alert con scritto se i numeri sono giusti oppure no

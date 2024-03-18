// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//HUMAN CODE
// Creo variabile punteggio con valore 0
// Mi creo array vuoto dove genero 16 num casuali che saranno le bombe
// Dove clicco ogni singola cella controllo se il numero della cella è uguale ad un elemento dell'array bombe
// Se clicco una cella il cui numero è presente nell'array bombe
// Allora ho perso
// Altrimenti vado avanti ed incremento la variabile punteggio di 1

// Mi seleziono i tre elementi del DOM che mi servono e li metto in una variabile
const playBtn = document.querySelector("#play-btn");
console.log(playBtn);
const grid = document.querySelector("#grid");
console.log(grid);
let scoreResult = document.querySelector("#score");
console.log(scoreResult);
// Metto in ascolto il bottone del play
playBtn.addEventListener("click", function () {
  // Svuoto la griglia prima del ciclo così da non avere una nuova griglia ogni volta che premo play
  grid.innerHTML = "";
  // Mi creo variabile per il punteggio con valore iniziale a 0
  let score = 0;
  // Mi creo array bombe vuoto
  let bombsArray = [];
  // Mi creo array di controllo per non avere due vole lo stesso numero corrispondente alla cella con la bomba
  let blackList = [];
  let randomNumber;
  // Inserisco i 16 numeri random unici nell'array delle bombe
  for (let i = 0; i < 16; i++) {
    randomNumber = getRandomUniqueNumber(1, 100, bombsArray);
    bombsArray.push(randomNumber);
    console.log(randomNumber);
  }
  console.log(bombsArray);
  // Per 100 volte dovrò generare un elemento della griglia
  for (let i = 1; i <= 100; i++) {
    // Mi richiamo la funzione per generare un elemento della griglia
    let square = squareGenerator(i);
    // La cella cliccata dall'utente si colora di blu
    square.addEventListener("click", function () {
      // Se il numero della cella cliccata è uguale ad un numero presente nell'array di bombe
      if (bombsArray.includes(i)) {
        alert("BOOM! YOU LOST! Check at the end your total score");
        this.classList.add("dark-red");
      } else {
        this.classList.add("light-blue");
        this.classList.add("disabled");
        score++;
      }
      console.log(i);
      scoreResult.innerHTML = score;
      if (score >= 84) {
        alert("YOU WON!!!!!!!");
      }
    });
    grid.append(square);
  }
  grid.classList.add("grid-border");
});

// FUNCTIONS

// Mi genera un quadrato con dentro un numero
// num -> un numero intero che si troverà dentro il quadrato
// return: un elemento del DOM quadrato
function squareGenerator(num) {
  let newSquare = document.createElement("div");
  newSquare.classList.add("square");
  newSquare.innerHTML = `<span>${num}</span>`;
  return newSquare;
}

// Mi genera un numero random tra un min ed un max non duplicato
// min -> numero intero minimo
// max -> numero intero massimo
// blackList -> array di numeri che sono già presenti
// return: un numero intero valido compreso tra min e max
function getRandomUniqueNumber(min, max, blackList) {
  // parte dal pressuposto che il numero
  // non sia valido
  // se il numero generato random non è presente nella blacklist
  // allora è valido
  // return del numero valido
  let numbIsValid = false;
  let randomNumber;
  while (!numbIsValid) {
    randomNumber = getRndInteger(min, max);

    if (!blackList.includes(randomNumber)) {
      numbIsValid = true;
    }
  }

  return randomNumber;
}

// Mi genera un numero random tra un min ed un max --> W3School
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

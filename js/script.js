// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// Creo variabile punteggio con valore 0
// Mi creo array vuoto dove genero 16 num casuali che saranno le bombe
    // Dove clicco ogni singola cella controllo se il numero della cella è uguale ad un elemento dell'array bombe
    // Se clicco una cella il cui numero è presente nell'array bombe
        // Allora ho perso
        // Altrimenti vado avanti ed incremento la variabile punteggio di 1





// Mi seleziono i due elementi del DOM che mi servono e li metto in una variabile
const playBtn = document.querySelector('#play-btn');
console.log(playBtn);
const grid = document.querySelector('#grid');
console.log(grid);
// Metto in ascolto il bottone del play
playBtn.addEventListener('click', function() {
    // Svuoto la griglia prima del ciclo così da non avere una nuova griglia ogni volta che premo play
    grid.innerHTML = '';
    // Mi creo variabile per il punteggio con valore iniziale a 0
    let score = 0;
    // Per 100 volte dovrò generare un elemento della griglia
    for (let i = 1; i <= 100; i++) {
        // Mi richiamo la funzione per generare un elemento della griglia
        let square = squareGenerator(i);
        // La cella cliccata dall'utente si colora di blu
        square.addEventListener('click', function() {
            this.classList.add('dark-blue');
            console.log(i);
        });
        grid.append(square);
    }
    grid.classList.add('grid-border');
});



// FUNCTIONS

// Mi genera un quadrato con dentro un numero
// num -> un numero intero che si troverà dentro il quadrato
// return: un elemento del DOM quadrato
function squareGenerator(num) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${num}</span>`;
    return newSquare;
}
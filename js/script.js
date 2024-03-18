// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Mi seleziono i due elementi del DOM che mi servono e li metto in una variabile
const playBtn = document.querySelector('#play-btn');
console.log(playBtn);
const grid = document.querySelector('#grid');
console.log(grid);
// Metto in ascolto il bottone del play
playBtn.addEventListener('click', function() {
    // Svuoto la griglia prima del ciclo così da non avere una nuova griglia ogni volta che premo play
    grid.innerHTML = '';
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
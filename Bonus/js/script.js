// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà 
// prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al 
// massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri
// generati (delle bombe) - abbiamo calpestato una bomba - la cella si colora di rosso
// e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente 
// può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il 
// numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le 
// celle che non sono bombe). Al termine della partita il software deve comunicare il 
// punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Impostazioni iniziali

const button = document.getElementById('play');
const score = document.getElementById('score');




// Tramite un click, genero la griglia

button.addEventListener('click', function () {

    let rows;
    let cells;

    const level = document.getElementById('level').value;
    
    switch (level) {
        case 'easy': 
        default:
        rows = 10;
        cells = 10;
        break;
        case 'normal': 
        rows = 9;
        cells = 9;
        break;
        case 'hard': 
        rows = 7;
        cells = 7;
        break;
    }

    const totalCell= rows * cells;

    const grid = document.getElementById('griglia');

    grid.innerHTML = "";

    function createCell(cellNumber, cellsPerRow) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = cellNumber;
        const sideLength = `calc(100% / ${cellsPerRow})`
        cell.style.height = sideLength;
        cell.style.width = sideLength;
        return cell;
    }
    
    let userScore = 0;
    let arr = [];
    let num;

    for (let i = 0; i < 16; i++) {
        num = Math.floor(Math.random() * 100);
        console.log(num)
        arr.push(num);
        console.log(arr)
}


    for (let i = 1; i <= totalCell; i++) {
        const cella = createCell(i, cells);
        grid.appendChild(cella);
        cella.addEventListener('click', function () {
            if (cella.classList.contains('clicked')) {
                return;
            }
                this.classList.add('clicked');
             
                if (arr.includes(i)) {
                    cella.classList.add("red");
                    alert(`BOOOOOM! Hai perso! Hai trovato una bomba! Hai totalizzato un punteggio di ${userScore} punti!`);
                    console.log(`BOOOOOM! Hai perso! Hai trovato una bomba! Hai totalizzato un punteggio di ${userScore} punti!`)
                    score.innerHTML = 'Score: 0';
                    grid.innerHTML = ""

                }
                else if (userScore < 84) {
                    userScore += 1;
                    score.innerHTML = `Score: ${userScore}`;
                }

                else {
                    alert(`Partita terminata. Hai totalizzato un punteggio massimo di 84 punti!`);
                    console.log(`Partita terminata. Hai totalizzato un punteggio massimo di 84 punti!`)
                    score.innerHTML = 'Score: 0';
                    grid.innerHTML = ""
                }
            }
        )
    }

    button.innerHTML = 'Ricomincia'
})


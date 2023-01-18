export default class Game {
    #isGameActive;
    #handlersRegistered;
    #gameBoard;
    #turnsMade;

    constructor() {
        this.#isGameActive = false;
        this.handlersRegistered = false;
        this.gameBoard = null;
        this.turnsMade = null;
    }

    startGame() {
        this.#isGameActive = true;
        this.turnsMade = 0;
        this.xOrO = false;
        this.#initializeGameBoard();
    }

    endGame() {
        this.#isGameActive = false;
    }

    isGameActive() {
        return this.#isGameActive;
    }

    turnDone(row, col){
        if (isFieldEmpty(row, column)) {
            if (IsCrossTurn()) {
                gameBoard[row][column] = false;
                event.srcElement.innerHTML = 'X';
                setGameStatus('Kolej kółka');
            }
            else {
                gameBoard[row][column] = true;
                event.srcElement.innerHTML = 'O';
                setGameStatus('Kolej krzyżyka');
            }
            changeTurn();
            var isWinner = checkWinner();
            if (isWinner !== null) {
                isWinner ? setGameStatus('Wygrywa kółko!') : setGameStatus('Wygrywa krzyżyk!');
                isGameActive = false;
            }
            if (isEndOfGame()) {
                setGameStatus('No to mamy remis!')
                isGameActive = false;
            }
        } else {
            setGameStatus('Wybierz puste pole!');
        }
    }

    #initializeGameBoard() {
        this.gameBoard = [];
        this.gameBoard.push([undefined, undefined, undefined]);
        this.gameBoard.push([undefined, undefined, undefined]);
        this.gameBoard.push([undefined, undefined, undefined]);
    }


} 
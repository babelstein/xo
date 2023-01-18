var game = null

function newGame() {
    game.startGame();

    clearGameBoard();
    toggleGameBoard(true);
    setGameStatus('Gra rozpoczęta! Zaczyna krzyżyk');

    if (!handlersRegistered) {
        registerClickHandlers();
        handlersRegistered = true;
    }
}

function endGame() {
    game.endGame();

    toggleNewGameButton(false);
    toggleGameBoard(false);
    setGameStatus('Zakończono grę');
}

function onFieldClicked(event) {
    var column = event.srcElement.dataset.col;
    var row = event.srcElement.dataset.row;
    var moveResult = game.turnDone(row, col);

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
}

function clearGameBoard() {
    var gameFields = document.getElementsByTagName('td');

    for (var i = 0; i < gameFields.length; i++) {
        gameFields[i].innerHTML = '';
    }
}

function toggleGameBoard(state) {
    var game = document.getElementById('game');
    if (state) {
        game.style.display = 'block';
    } else {
        game.style.display = 'none';
    }

    toggleNewGameButton(false);
}

function toggleNewGameButton(state) {
    var newGameButton = document.getElementsByClassName('new-game')[0];
    newGameButton.disabled = state;
}

function setGameStatus(message) {
    var gameStateInfo = document.getElementById('game-state');
    gameStateInfo.innerHTML = message;
}

function registerClickHandlers() {
    var gameFields = document.getElementsByTagName('td');

    for (var i = 0; i < gameFields.length; i++) {
        gameFields[i].addEventListener('click', onFieldClicked);
    }
}

function isFieldEmpty(row, col) {
    return gameBoard[row][col] === undefined;
}

function IsCrossTurn() {
    return !xOrO;
}

function changeTurn() {
    xOrO = !xOrO;
    turnsMade += 1;
}

function checkWinner() {
    if (turnsMade > 4) {
        // przekątne
        if (gameBoard[0][0] !== undefined && gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2]) {
            return gameBoard[0, 0];
        }
        if (gameBoard[0][2] !== undefined && gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0]) {
            return gameBoard[0, 2];
        }
        // poziomo
        for (var i = 0; i < gameBoard.length; i++) {
            if (!gameBoard[i].some(a => a === undefined) && gameBoard[i].every(a => a === gameBoard[i][0])) {
                return gameBoard[i][0];
            }
        }
        // pionowo
        for (var i = 0; i < gameBoard.length; i++) {
            if (gameBoard[0][i] !== undefined && gameBoard[0][i] == gameBoard[1][i] && gameBoard[1][i] == gameBoard[2][i]) {
                return gameBoard[0][i];
            }
        }
        return null;
    }
    return null;
}

function isEndOfGame() {
    return turnsMade === gameBoard.flat(2).length;
}

document.addEventListener("DOMContentLoaded", function (event) {
    toggleGameBoard(false);
});
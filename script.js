console.log('hello world!');

var isGameActive = false;
var handlersRegistered = false;
var gameBoard = [];

function newGame() {
    isGameActive = true;
    gameBoard.push([undefined, undefined, undefined]);
    gameBoard.push([undefined, undefined, undefined]);
    gameBoard.push([undefined, undefined, undefined]);

    var game = document.getElementById('game');
    game.style.display = 'block';

    var newGameButton = document.getElementsByClassName('new-game')[0];
    newGameButton.disabled = true;

    var gameStateInfo = document.getElementById('game-state');
    gameStateInfo.innerHTML = 'Gra rozpoczęta!';

    var gameFields = document.getElementsByTagName('td');

    if (!handlersRegistered) {
        for (var i = 0; i < gameFields.length; i++) {
            gameFields[i].addEventListener('click', onFieldClicked);
        }
        handlersRegistered = true;
    }
}

function onFieldClicked(event) {
    var col = event.srcElement.dataset.col;
    var row = event.srcElement.dataset.row;
    console.log(gameBoard[row][col]);
}

function endGame() {
    isGameActive = false;

    var newGameButton = document.getElementsByClassName('new-game')[0];
    newGameButton.disabled = false;

    var gameObj = document.getElementById('game');
    game.style.display = 'none';
}

function fieldCheck(row, col) {
    if (row > 3 || row < 1) {
        throw "row index must be greater or equal then 0 and lower than 4";
    } else if (col > 3 || col < 1) {
        throw "column index must be greater or equal then 0 and lower than 4";
    } else {
        var result = game[row - 1][col - 1];
        return result;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var gameObj = document.getElementById('game');
    game.style.display = 'none';
});
console.log("hello world!");
var zmienna = 1;
console.log(zmienna);
zmienna = 10 + 20;
console.log(zmienna);
var obiekt = {};
console.log(obiekt);

document.onload = function(e){
    console.log("hehehehehe ");
    var game = document.getElementById('game');
    game.style.display = "none";
    var translation = require('./pl.json');
    console.log(translation);
}

var newGame = function () {
    var game = document.getElementById('game');
    game.style.display = "none";

    var menus = document.getElementsByClassName('menu');
    menus[0].style.display = "block";

    startGame();
}

var endGame = function() {
    var game = document.getElementById('game');
    game.style.display = "none";

    var menus = document.getElementsByClassName('menu');
    menus[0].style.display = "block";
}

var startGame = function(){

}
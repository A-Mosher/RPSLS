"use strict";
//To test:
//import human
//instantiate one human
//use dot notation to test method
const prompt = require('prompt-sync')();

const Player = require('./Player');
const Human = require('./human');
const AI = require('./AI');


let player1 = new Human(name1);
let name1 = prompt("Hello Player 1, what is your name?");
    
player1.chooseGesture();

function chooseOpponent(opponent){

    let opponent = prompt("Please press 1 to enter another player or press 2 to challenge the computer");

    switch(opponent){
        case "1":
            let name2 = prompt("Hello Player 2, what is your name?");
            name2 = opponent;
            break;
        case "2":
            opponent = "Computer"
            console.log("You have challenged the computer!")
            break;
        default:
            alert("Invalid Entry, Try again.");
    }  
}
let player2 = new Player(chooseOpponent);

player2.chooseGesture();
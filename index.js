"use strict";
//To test:
//import human
//instantiate one human
//use dot notation to test method
const prompt = require('prompt-sync')();

const {Player} = require('./player');
const {Human} = require('./human');
const {AI} = require('./AI');

let name1 = prompt("Hello Player 1, what is your name?");
let player1 = new Human(name1);
let player2
    


function chooseOpponent(){

    let opponent = prompt("Please press 1 to enter another player or press 2 to challenge the computer");

    switch(opponent){
        case "1":
            let name2 = prompt("Hello Player 2, what is your name?");
            player2 = new Human(name2);
            break;
        case "2":
            player2 = new AI("Computer");
            console.log("You have challenged the computer!")
            break;
        default:
            console.log("Invalid Entry, Try again.");
            chooseOpponent();
    }  
}

chooseOpponent();

player1.chooseGesture();

player2.chooseGesture();
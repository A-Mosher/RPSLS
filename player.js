"use strict";

const prompt = require('prompt-sync')();

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }

    //chooseGesture() {
        //let gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    //}

    displayScore() {
        console.log(this.name + " has a current score of " + this.score + ".");
    }
}






module.exports.Player = Player


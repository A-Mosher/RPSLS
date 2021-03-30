"use strict";

const prompt = require('prompt-sync')();

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name
    }

    //chooseGesture() {
        //let gesture = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    //}

    displayScore() {
        console.log(this.name + " has a current score of " + this.score + ".");
    }
}




class AI extends Player {

    constructor(name) {
        super(name);
    }

    chooseGesture() {
        let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

    pickARandomGesture(gestures)
        let randomPick = Math.floor(Math.random() * gestures.length);
        console.log(randomPick, gestures[randomPick]);
        return gestures[randomPick];
    }
}

module.exports = Player;


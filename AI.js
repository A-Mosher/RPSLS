"use strict";

const Player = require('./player');

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



module.exports = AI;
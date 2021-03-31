"use strict";

const {Player} = require('./player');

class AI extends Player {

    constructor(name) {
        super(name);
    }

    chooseGesture() {
        let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        let randomPick = Math.floor(Math.random() * gestures.length);
        console.log(randomPick, gestures[randomPick]);
        //return gestures[randomPick];
        console.log(this.name + " has chosen " + gestures[randomPick] + "!");
    }
    //console.log(this.name + " has chosen " + gestures[randomPick] + "!");
}


//let player2 = new AI("computer");




module.exports.AI = AI
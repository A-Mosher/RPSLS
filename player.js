"use strict";

const { Lizard } = require('./Lizard');
const { Paper } = require('./Paper');
const { Rock } = require('./rock');
const { Scissors } = require('./Scissors');
const { Spock } = require('./Spock');

const prompt = require('prompt-sync')();

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.possibleGestures = [Rock, Paper, Scissors, Lizard, Spock];
        this.chosenGesture;
    }

    chooseGesture() {
    }

    displayScore() {
        console.log(this.name + " has a current score of " + this.score + ".");
    }
}






module.exports.Player = Player


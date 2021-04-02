const {Player} = require('./Player');

const prompt = require('prompt-sync')();

class Human extends Player {

    constructor(name) {
        super(name);
    }

    chooseGesture() {
        let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        let userInput = prompt("Player 1 do you choose Rock, Paper, Scissors, Lizard, or Spock?");
        if(gestures.includes(userInput)){
            console.log(this.name + " has chosen " + userInput + "!");
            return userInput;
        }
    }
}

module.exports.Human = Human
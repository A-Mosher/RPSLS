const Player = require('./player')

const prompt = require('prompt-sync')();

class Human extends Player {

    constructor(name) {
        super(name);
    }

    chooseGesture() {
        let gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        let userInput = prompt("Do you choose Rock, Paper, Scissors, Lizard, or Spock?");
        if(gestures.includes(userInput)){
            
        }
    }
}

module.exports = Human